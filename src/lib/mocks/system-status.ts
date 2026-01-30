// Realistic fluctuation logic for the "Engine"
export const getSystemVitals = () => {
  return {
    uptime: (99.98 + Math.random() * 0.01).toFixed(3) + "%", // 99.980 - 99.990%
    latency: Math.floor(12 + Math.random() * 8) + "ms", // 12-20ms (Go-runtime speed)
    activeNodes: 142 + Math.floor(Math.random() * 3), // Stable node count
    securityLevel: "AES_256_GCM",
    lastProvision: new Date().toISOString().split("T")[1].split(".")[0], // Current time
    status: "OPERATIONAL" as const,
  };
};
