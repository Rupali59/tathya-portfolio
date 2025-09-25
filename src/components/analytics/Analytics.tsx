"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    hj?: (...args: any[]) => void;
    clarity?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

interface AnalyticsProps {
  gaMeasurementId?: string;
  hotjarSiteId?: string;
  clarityProjectId?: string;
}

export default function Analytics({
  gaMeasurementId,
  hotjarSiteId,
  clarityProjectId,
}: AnalyticsProps) {
  useEffect(() => {
    // Only initialize analytics in production or when explicitly enabled
    const isAnalyticsEnabled =
      process.env.NODE_ENV === "production" ||
      process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === "true";

    if (!isAnalyticsEnabled) {
      return;
    }

    // Check if we have valid environment variables before proceeding
    const hasValidConfig = gaMeasurementId || hotjarSiteId || clarityProjectId;
    if (!hasValidConfig) {
      console.log(
        "Analytics: No valid configuration found, skipping initialization"
      );
      return;
    }

    // Add error handling for browser extension conflicts
    const handleError = (error: ErrorEvent) => {
      if (
        error.message?.includes("message port closed") ||
        error.message?.includes("runtime.lastError")
      ) {
        // Silently ignore browser extension errors
        return;
      }
      console.error("Analytics error:", error);
    };

    window.addEventListener("error", handleError);

    // Initialize Google Analytics
    if (gaMeasurementId && gaMeasurementId.trim() !== "") {
      try {
        // Load Google Analytics script
        const script = document.createElement("script");
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`;
        document.head.appendChild(script);

        // Initialize gtag
        window.dataLayer = window.dataLayer || [];
        const gtag = (...args: any[]) => {
          window.dataLayer!.push(args);
        };
        window.gtag = gtag;

        gtag("js", new Date());
        gtag("config", gaMeasurementId, {
          page_title: document.title,
          page_location: window.location.href,
        });

        // Track page views on route changes
        const handleRouteChange = () => {
          gtag("config", gaMeasurementId, {
            page_title: document.title,
            page_location: window.location.href,
          });
        };

        // Listen for route changes (Next.js)
        window.addEventListener("popstate", handleRouteChange);

        return () => {
          window.removeEventListener("popstate", handleRouteChange);
          window.removeEventListener("error", handleError);
        };
      } catch (error) {
        console.warn("Failed to initialize Google Analytics:", error);
      }
    }

    // Initialize Hotjar
    if (hotjarSiteId && hotjarSiteId.trim() !== "") {
      try {
        (function (h: any, o: any, t: any, j: any, a?: any, r?: any) {
          h.hj =
            h.hj ||
            function (...args: any[]) {
              (h.hj.q = h.hj.q || []).push(args);
            };
          h._hjSettings = { hjid: hotjarSiteId, hjsv: 6 };
          a = o.getElementsByTagName("head")[0];
          r = o.createElement("script");
          r.async = 1;
          r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
          a.appendChild(r);
        })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
      } catch (error) {
        console.warn("Failed to initialize Hotjar:", error);
      }
    }

    // Initialize Microsoft Clarity
    if (clarityProjectId && clarityProjectId.trim() !== "") {
      try {
        (function (c: any, l: any, a: any, r: any, i: any, t?: any, y?: any) {
          c[a] =
            c[a] ||
            function () {
              (c[a].q = c[a].q || []).push(arguments);
            };
          t = l.createElement(r);
          t.async = 1;
          t.src = "https://www.clarity.ms/tag/" + i;
          y = l.getElementsByTagName(r)[0];
          y.parentNode.insertBefore(t, y);
        })(window, document, "clarity", "script", clarityProjectId);
      } catch (error) {
        console.warn("Failed to initialize Microsoft Clarity:", error);
      }
    }

    // Cleanup function
    return () => {
      window.removeEventListener("error", handleError);
    };
  }, [gaMeasurementId, hotjarSiteId, clarityProjectId]);

  return null;
}

// Hook for tracking custom events
export const useAnalytics = () => {
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    const isAnalyticsEnabled =
      process.env.NODE_ENV === "production" ||
      process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === "true";

    if (!isAnalyticsEnabled) {
      return;
    }

    // Google Analytics event tracking
    if (window.gtag) {
      window.gtag("event", eventName, parameters);
    }

    // Hotjar event tracking
    if (window.hj) {
      window.hj("event", eventName);
    }
  };

  const trackPageView = (url: string, title?: string) => {
    const isAnalyticsEnabled =
      process.env.NODE_ENV === "production" ||
      process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === "true";

    if (!isAnalyticsEnabled) {
      return;
    }

    // Google Analytics page view
    if (window.gtag && process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
      window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
        page_title: title || document.title,
        page_location: url,
      });
    }
  };

  return { trackEvent, trackPageView };
};
