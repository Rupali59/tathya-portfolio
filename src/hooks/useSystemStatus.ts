import { useEffect, useState } from "react";
import { getSystemVitals } from "@/lib/mocks/system-status";

export type SystemStatus = ReturnType<typeof getSystemVitals>;

export function useSystemStatus() {
  // Initialize with stable default values to prevent hydration mismatch (SSR vs Client)
  const [metrics, setMetrics] = useState<SystemStatus>({
    uptime: "99.980%",
    latency: "12ms",
    activeNodes: 142,
    securityLevel: "AES_256_GCM",
    lastProvision: "00:00:00",
    status: "OPERATIONAL",
  });

  useEffect(() => {
    // Set initial random values on mount
    setMetrics(getSystemVitals());

    // Update vitals every 3 seconds to simulate live feed as requested
    const interval = setInterval(() => {
      setMetrics(getSystemVitals());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return metrics;
}
