// Debug utilities for browser extension conflicts and performance issues

export const debugBrowserExtensions = () => {
  if (typeof window === 'undefined') return;

  // Check for common browser extensions that might cause conflicts
  const extensionIndicators = [
    'chrome-extension://',
    'moz-extension://',
    'safari-extension://',
    'edge-extension://'
  ];

  // Monitor for runtime errors
  const originalError = window.onerror;
  window.onerror = (message, source, lineno, colno, error) => {
    // Filter out browser extension errors
    if (typeof message === 'string' && 
        (message.includes('message port closed') || 
         message.includes('runtime.lastError') ||
         message.includes('Extension context invalidated'))) {
      console.warn('Browser extension conflict detected:', message);
      return true; // Prevent default error handling
    }
    
    // Call original error handler for other errors
    if (originalError) {
      return originalError(message, source, lineno, colno, error);
    }
    return false;
  };

  // Monitor for unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    if (event.reason?.message?.includes('message port closed') ||
        event.reason?.message?.includes('runtime.lastError')) {
      console.warn('Browser extension promise rejection:', event.reason);
      event.preventDefault(); // Prevent default handling
    }
  });
};

export const optimizeResourceLoading = () => {
  if (typeof window === 'undefined') return;

  // Add resource loading optimization
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.entryType === 'resource') {
        const resource = entry as PerformanceResourceTiming;
        // Log slow resources
        if (resource.duration > 1000) {
          console.warn(`Slow resource loaded: ${resource.name} (${resource.duration}ms)`);
        }
      }
    });
  });

  observer.observe({ entryTypes: ['resource'] });

  // Monitor for unused preloaded resources
  const preloadedResources = document.querySelectorAll('link[rel="preload"]');
  preloadedResources.forEach((link) => {
    const href = link.getAttribute('href');
    if (href) {
      // Check if resource is actually used within 3 seconds
      setTimeout(() => {
        const isUsed = document.querySelector(`link[href="${href}"]`) || 
                     document.querySelector(`script[src="${href}"]`) ||
                     document.querySelector(`img[src="${href}"]`);
        
        if (!isUsed) {
          console.warn(`Preloaded resource not used: ${href}`);
        }
      }, 3000);
    }
  });
};

export const initDebugMode = () => {
  if (process.env.NODE_ENV === 'development') {
    debugBrowserExtensions();
    optimizeResourceLoading();
  }
};
