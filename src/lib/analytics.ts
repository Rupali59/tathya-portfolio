// Analytics configuration and utility functions

export interface AnalyticsConfig {
  gaMeasurementId?: string;
  hotjarSiteId?: string;
  clarityProjectId?: string;
  enabled?: boolean;
}

export const getAnalyticsConfig = (): AnalyticsConfig => {
  const isEnabled = 
    process.env.NODE_ENV === 'production' || 
    process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === 'true';

  return {
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    hotjarSiteId: process.env.NEXT_PUBLIC_HOTJAR_SITE_ID,
    clarityProjectId: process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID,
    enabled: isEnabled,
  };
};

// Utility function to check if analytics is enabled
export const isAnalyticsEnabled = (): boolean => {
  return getAnalyticsConfig().enabled || false;
};

// Common event tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window === 'undefined' || !isAnalyticsEnabled()) {
    return;
  }

  // Google Analytics event tracking
  if (window.gtag) {
    window.gtag('event', eventName, parameters);
  }

  // Hotjar event tracking
  if (window.hj) {
    window.hj('event', eventName);
  }
};

export const trackPageView = (url: string, title?: string) => {
  if (typeof window === 'undefined' || !isAnalyticsEnabled()) {
    return;
  }

  const config = getAnalyticsConfig();
  
  // Google Analytics page view
  if (window.gtag && config.gaMeasurementId) {
    window.gtag('config', config.gaMeasurementId, {
      page_title: title || document.title,
      page_location: url,
    });
  }
};

// Common business events to track
export const trackContactFormSubmit = () => {
  trackEvent('contact_form_submit', {
    event_category: 'engagement',
    event_label: 'contact_form',
  });
};

export const trackServicePageView = (serviceName: string) => {
  trackEvent('service_page_view', {
    event_category: 'engagement',
    event_label: serviceName,
  });
};

export const trackPricingPageView = () => {
  trackEvent('pricing_page_view', {
    event_category: 'engagement',
    event_label: 'pricing',
  });
};

export const trackDemoRequest = () => {
  trackEvent('demo_request', {
    event_category: 'conversion',
    event_label: 'demo_request',
  });
};
