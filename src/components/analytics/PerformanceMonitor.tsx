"use client";

import { useEffect, useState } from "react";

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  loadTime: number; // Page load time
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or when explicitly enabled
    const shouldShow =
      process.env.NODE_ENV === "development" ||
      localStorage.getItem("show-performance") === "true";

    if (!shouldShow) return;

    setIsVisible(true);

    let lcpValue = 0;
    let clsValue = 0;
    let fidValue = 0;
    let fcpValue = 0;
    let ttfbValue = 0;
    let loadTimeValue = 0;

    // Modern PerformanceObserver for LCP
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      lcpValue = lastEntry.startTime;
    });

    // Modern PerformanceObserver for CLS
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const layoutShiftEntry = entry as PerformanceEntry & {
          value?: number;
          hadRecentInput?: boolean;
        };
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value || 0;
        }
      }
    });

    // Modern PerformanceObserver for FID
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      if (entries.length > 0) {
        const firstInput = entries[0] as PerformanceEntry & {
          processingStart: number;
        };
        fidValue = firstInput.processingStart - firstInput.startTime;
      }
    });

    // Modern PerformanceObserver for Paint (FCP)
    const paintObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === "first-contentful-paint") {
          fcpValue = entry.startTime;
        }
      }
    });

    // Modern PerformanceObserver for Navigation Timing
    const navigationObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      if (entries.length > 0) {
        const navigation = entries[0] as PerformanceNavigationTiming;
        ttfbValue = navigation.responseStart - navigation.requestStart;
        loadTimeValue = navigation.loadEventEnd - navigation.fetchStart;
      }
    });

    // Start observing
    try {
      lcpObserver.observe({ type: "largest-contentful-paint", buffered: true });
      clsObserver.observe({ type: "layout-shift", buffered: true });
      fidObserver.observe({ type: "first-input", buffered: true });
      paintObserver.observe({ type: "paint", buffered: true });
      navigationObserver.observe({ type: "navigation", buffered: true });
    } catch (e) {
      // Fallback for browsers that don't support these observers
      console.warn("PerformanceObserver not fully supported", e);
    }

    // Wait for page to load and update metrics
    const measurePerformance = () => {
      if (typeof window === "undefined" || !window.performance) return;

      setMetrics({
        fcp: Math.round(fcpValue),
        lcp: Math.round(lcpValue),
        fid: Math.round(fidValue),
        cls: Math.round(clsValue * 1000) / 1000,
        ttfb: Math.round(ttfbValue),
        loadTime: Math.round(loadTimeValue),
      });
    };

    // Measure after page load
    if (document.readyState === "complete") {
      // Give observers time to collect data
      setTimeout(measurePerformance, 100);
    } else {
      window.addEventListener("load", () => {
        setTimeout(measurePerformance, 100);
      });
    }

    // Cleanup
    return () => {
      lcpObserver.disconnect();
      clsObserver.disconnect();
      fidObserver.disconnect();
      paintObserver.disconnect();
      navigationObserver.disconnect();
    };
  }, []);

  if (!isVisible || !metrics) return null;

  const getScoreColor = (
    value: number,
    thresholds: { good: number; poor: number },
  ) => {
    if (value <= thresholds.good) return "text-green-600";
    if (value <= thresholds.poor) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreText = (
    value: number,
    thresholds: { good: number; poor: number },
  ) => {
    if (value <= thresholds.good) return "Good";
    if (value <= thresholds.poor) return "Needs Improvement";
    return "Poor";
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900">Performance</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          ×
        </button>
      </div>

      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-gray-600">FCP:</span>
          <span
            className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}
          >
            {metrics.fcp}ms (
            {getScoreText(metrics.fcp, { good: 1800, poor: 3000 })})
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">LCP:</span>
          <span
            className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}
          >
            {metrics.lcp}ms (
            {getScoreText(metrics.lcp, { good: 2500, poor: 4000 })})
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">FID:</span>
          <span
            className={getScoreColor(metrics.fid, { good: 100, poor: 300 })}
          >
            {metrics.fid}ms (
            {getScoreText(metrics.fid, { good: 100, poor: 300 })})
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">CLS:</span>
          <span
            className={getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}
          >
            {metrics.cls} (
            {getScoreText(metrics.cls, { good: 0.1, poor: 0.25 })})
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">TTFB:</span>
          <span
            className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}
          >
            {metrics.ttfb}ms (
            {getScoreText(metrics.ttfb, { good: 800, poor: 1800 })})
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Load Time:</span>
          <span
            className={getScoreColor(metrics.loadTime, {
              good: 2000,
              poor: 4000,
            })}
          >
            {metrics.loadTime}ms (
            {getScoreText(metrics.loadTime, { good: 2000, poor: 4000 })})
          </span>
        </div>
      </div>

      <div className="mt-3 pt-2 border-t border-gray-200">
        <button
          onClick={() => {
            localStorage.setItem("show-performance", "false");
            setIsVisible(false);
          }}
          className="text-xs text-gray-500 hover:text-gray-700"
        >
          Hide permanently
        </button>
      </div>
    </div>
  );
}

// Web Vitals reporting
export function reportWebVitals(metric: {
  name: string;
  value: number;
  id: string;
}) {
  // In production, send to analytics service
  if (process.env.NODE_ENV === "production") {
    // Send to Google Analytics, Vercel Analytics, etc.
    console.log("Web Vital:", metric);
  } else {
    console.log("Web Vital (dev):", metric);
  }
}
