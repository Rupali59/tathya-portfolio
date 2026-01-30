"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Clock, IndianRupee, TrendingUp } from "lucide-react";
import * as React from "react";
import { useEffect, useMemo, useState } from "react";
import { useTactile } from "@/providers/TactileProvider";

export default function ProfitConfigurator(): JSX.Element {
  const { trigger } = useTactile();
  const [effort, setEffort] = useState(50);

  const isFirstRender = React.useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    // Soft tick on every significant move (every 5%)
    if (effort % 5 === 0) {
      trigger("soft");
    }
  }, [effort, trigger]);

  const stats = useMemo(() => {
    const timeSaved = Math.floor((effort / 100) * 40); // Max 40 hours/week
    const moneySaved = timeSaved * 1200; // Average ₹1200/hr impact
    return { timeSaved, moneySaved };
  }, [effort]);

  return (
    <section className="section-base py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Interactive Controls */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-foreground text-4xl md:text-5xl font-bold mb-6">
                Calculate your <br />
                <span className="text-secondary">Automated ROI.</span>
              </h2>
              <p className="text-muted-foreground text-lg opacity-60">
                Most SMBs waste 40% of their time on manual tasks. Slide to see
                how much Motherboard can reclaim for you.
              </p>
            </motion.div>

            <div className="bg-card border border-border rounded-2xl shadow-xl p-8 sm:p-10 space-y-10">
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                    Manual_Process_Load
                  </span>
                  <span className="font-mono text-xl text-primary font-bold">
                    {effort}%
                  </span>
                </div>
                <div className="relative h-12 flex items-center">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={effort}
                    onChange={(e) => setEffort(parseInt(e.target.value, 10))}
                    className="w-full h-1 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex justify-between px-1 pointer-events-none">
                    {[0, 25, 50, 75, 100].map((v) => (
                      <div key={v} className="w-0.5 h-2 bg-border" />
                    ))}
                  </div>
                </div>
                <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
                  <span>MINIMAL_FRICTION</span>
                  <span>HIGH_LATENCY_MANUAL</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-muted/50 border border-border rounded-lg">
                  <Clock className="w-5 h-5 text-primary mb-3" />
                  <div className="text-2xl font-bold text-foreground">
                    ~{stats.timeSaved}hr
                  </div>
                  <div className="text-[10px] font-mono text-muted-foreground uppercase mt-1">
                    RECLAIMED_WEEKLY
                  </div>
                </div>
                <div className="p-6 bg-muted/50 border border-border rounded-lg">
                  <IndianRupee className="w-5 h-5 text-secondary mb-3" />
                  <div className="text-2xl font-bold text-foreground">
                    ₹{stats.moneySaved.toLocaleString()}
                  </div>
                  <div className="text-[10px] font-mono text-muted-foreground uppercase mt-1">
                    EFFICIENCY_GAINS
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual Feedback */}
          <div className="relative aspect-square flex items-center justify-center">
            {/* Circular Meter */}
            <div className="relative w-full max-w-md aspect-square rounded-full border border-border flex items-center justify-center">
              <svg
                className="w-full h-full -rotate-90 transform"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="rgba(15,82,186,0.05)"
                  strokeWidth="2"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="2"
                  strokeDasharray="283"
                  initial={{ strokeDashoffset: 141.5 }}
                  style={
                    {
                      strokeDashoffset: "var(--initial-offset, 141.5)",
                    } as React.CSSProperties
                  }
                  animate={{ strokeDashoffset: 283 - (283 * effort) / 100 }}
                  transition={{ type: "spring", bounce: 0, duration: 1 }}
                  strokeLinecap="round"
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <TrendingUp className="w-12 h-12 text-secondary mb-4 animate-bounce" />
                <div className="text-5xl md:text-6xl font-bold text-foreground tabular-nums">
                  +{Math.floor((stats.moneySaved / 5000) * 10)}%
                </div>
                <div className="font-mono text-xs text-muted-foreground tracking-widest uppercase mt-2">
                  PROFIT_TRAJECTORY
                </div>
              </div>

              {/* Glowing Particles */}
              <AnimatePresence>
                {effort > 70 && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary/10 blur-3xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Background Glow */}
            <div className="absolute -z-10 w-full h-full bg-primary/5 blur-3xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
