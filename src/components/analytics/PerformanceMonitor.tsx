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

    // Wait for page to load
    const measurePerformance = () => {
      if (typeof window === "undefined" || !window.performance) return;

      const navigation = performance.getEntriesByType(
        "navigation"
      )[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType("paint");

      const fcp =
        paintEntries.find((entry) => entry.name === "first-contentful-paint")
          ?.startTime || 0;
      const lcp =
        performance.getEntriesByType("largest-contentful-paint")[0]
          ?.startTime || 0;
      const firstInputEntry = performance.getEntriesByType("first-input")[0] as any;
      const fid = firstInputEntry?.processingStart || 0;
      const cls = performance
        .getEntriesByType("layout-shift")
        .reduce((acc, entry) => {
          const layoutShiftEntry = entry as PerformanceEntry & { value?: number };
          return acc + (layoutShiftEntry.value || 0);
        }, 0);
      const ttfb = navigation.responseStart - navigation.requestStart;
      const loadTime = navigation.loadEventEnd - navigation.fetchStart;

      setMetrics({
        fcp: Math.round(fcp),
        lcp: Math.round(lcp),
        fid: Math.round(fid),
        cls: Math.round(cls * 1000) / 1000,
        ttfb: Math.round(ttfb),
        loadTime: Math.round(loadTime),
      });
    };

    // Measure after page load
    if (document.readyState === "complete") {
      measurePerformance();
    } else {
      window.addEventListener("load", measurePerformance);
    }

    // Cleanup
    return () => {
      window.removeEventListener("load", measurePerformance);
    };
  }, []);

  if (!isVisible || !metrics) return null;

  const getScoreColor = (
    value: number,
    thresholds: { good: number; poor: number }
  ) => {
    if (value <= thresholds.good) return "text-green-600";
    if (value <= thresholds.poor) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreText = (
    value: number,
    thresholds: { good: number; poor: number }
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
export function reportWebVitals(metric: any) {
  // In production, send to analytics service
  if (process.env.NODE_ENV === "production") {
    // Send to Google Analytics, Vercel Analytics, etc.
    console.log("Web Vital:", metric);
  } else {
    console.log("Web Vital (dev):", metric);
  }
}

