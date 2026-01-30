"use client";

import { motion } from "framer-motion";
import { Globe, Server, ShieldCheck } from "lucide-react";
import { useSystemStatus } from "@/hooks/useSystemStatus";

export default function TrustLedger(): JSX.Element {
  const metrics = useSystemStatus();

  const TickerContent = () => (
    <>
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex items-center gap-12 mx-6">
          <span className="flex items-center gap-2">
            <div
              className={`w-1.5 h-1.5 rounded-full shadow-[0_0_5px_var(--glow-emerald-color)] ${metrics.status === "OPERATIONAL" ? "bg-secondary animate-pulse" : "bg-red-500"}`}
            />
            MOTHERBOARD_STATUS:{" "}
            <span className="text-secondary uppercase">{metrics.status}</span>
          </span>
          <span className="flex items-center gap-2">
            <Server className="w-3 h-3 text-primary" />
            UPTIME:{" "}
            <motion.span
              key={metrics.uptime}
              initial={{
                textShadow: "0 0 10px rgba(59,130,246,0.8)",
                opacity: 0.5,
              }}
              animate={{ textShadow: "none", opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-foreground"
            >
              {metrics.uptime}
            </motion.span>
          </span>
          <span className="flex items-center gap-2">
            <Globe className="w-3 h-3 text-primary" />
            ACTIVE_NODES:{" "}
            <motion.span
              key={metrics.activeNodes}
              initial={{
                textShadow: "0 0 10px rgba(59,130,246,0.8)",
                opacity: 0.5,
              }}
              animate={{ textShadow: "none", opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-foreground"
            >
              {metrics.activeNodes}
            </motion.span>
          </span>
          <span className="flex items-center gap-2 text-muted-foreground">
            LATENCY:{" "}
            <motion.span
              key={metrics.latency}
              initial={{
                textShadow: "0 0 10px rgba(59,130,246,0.8)",
                opacity: 0.5,
              }}
              animate={{ textShadow: "none", opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-foreground"
            >
              {metrics.latency}
            </motion.span>
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-3 h-3 text-secondary" />
            SECURITY_CLEARANCE:{" "}
            <span className="text-secondary">{metrics.securityLevel}</span>
          </span>
        </div>
      ))}
    </>
  );

  return (
    <div className="w-full bg-muted border-y border-border overflow-hidden select-none group">
      <div className="flex whitespace-nowrap py-3">
        {/* Primary Marquee Track using CSS for hover pause support */}
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] min-w-full shrink-0 items-center font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
          <TickerContent />
        </div>
        {/* Seamless Duplicate */}
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] min-w-full shrink-0 items-center font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
          <TickerContent />
        </div>
      </div>
    </div>
  );
}
