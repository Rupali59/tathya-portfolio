"use client";

import { motion } from "framer-motion";
import { Activity, Cpu, HardDrive, Terminal, Zap } from "lucide-react";
import { useState } from "react";
import { useTactile } from "@/providers/TactileProvider";

interface InventoryItem {
  name: string;
  id: string;
  description: string;
  specs: Record<string, string>;
  isLive?: boolean;
}

export default function Portfolio(): JSX.Element {
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);
  const [lockedItemId, setLockedItemId] = useState<string | null>(null);
  const { trigger } = useTactile();

  const inventory: InventoryItem[] = [
    {
      name: "Dhaaga Stories",
      id: "DHAAGA_CORE_v1.2",
      description:
        "Localized storytelling engine optimized for low-latency content delivery across the subcontinent.",
      specs: {
        ENGINE: "High-Speed Go",
        LATENCY: "120ms",
        RELIABILITY: "99.98%",
        EDGE: "True-Global",
      },
      isLive: true,
    },
    {
      name: "Astro-Acharya",
      id: "ACHARYA_AI_v2.0",
      description:
        "Proprietary Vedic computation engine. Processes 10,000+ astrological permutations per second.",
      specs: {
        LOGIC: "Vedic-Algorithmic",
        COMPUTE: "Dedicated GPU",
        API_UPTIME: "100%",
        AUTH: "WebAuthn",
      },
      isLive: true,
    },
    {
      name: "Reddit Clarity",
      id: "CLARITY_SCRAPER_v0.9",
      description:
        "Deep-intelligence node for Reddit sentiment analysis and real-time market intent extraction.",
      specs: {
        THROUGHPUT: "High-Volume",
        SENTIMENT: "NLP-Optimized",
        UPDATE_FREQ: "5min",
        EXPORT: "JSON/Excel",
      },
    },
  ];

  const handleItemClick = (id: string) => {
    trigger("heavy");
    setLockedItemId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="the-inventory"
      className="section-base relative py-20 lg:py-32 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-left mb-16 border-l-4 border-blue-600 pl-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-white text-3xl md:text-5xl font-mono font-bold tracking-tighter uppercase mb-4">
            [ THE_INVENTORY ]
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl opacity-70">
            Validated business components ready for system integration. Select a
            blade to LOCK specs.
          </p>
        </motion.div>

        {/* Vertical Rack Layout */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {inventory.map((item, index) => {
            const isActive =
              lockedItemId === item.id || hoveredItemId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
                onMouseEnter={() => {
                  setHoveredItemId(item.id);
                  trigger("snap");
                }}
                onMouseLeave={() => setHoveredItemId(null)}
                onClick={() => handleItemClick(item.id)}
              >
                {/* Machine Blade Card */}
                <article
                  className={`relative border transition-all duration-500 overflow-hidden bg-card rounded-xl shadow-lg cursor-pointer group ${
                    lockedItemId === item.id
                      ? "border-primary shadow-[0_0_15px_var(--glow-sapphire-color)]"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex flex-col md:flex-row items-stretch">
                    {/* Left: Component Status & Icon */}
                    <div className="w-full md:w-20 bg-muted flex md:flex-col items-center justify-center p-4 gap-4 border-b md:border-b-0 md:border-r border-border shrink-0">
                      <div className="relative">
                        <Cpu
                          className={`w-8 h-8 ${
                            item.isLive
                              ? "text-primary"
                              : "text-muted-foreground"
                          }`}
                        />
                        {item.isLive && (
                          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_var(--glow-emerald-color)] animate-pulse" />
                        )}
                      </div>
                      <div className="md:h-20 w-px md:w-full bg-gradient-to-b from-transparent via-border to-transparent hidden md:block" />
                      <div className="font-mono text-[10px] text-muted-foreground [writing-mode:vertical-lr] hidden md:block tracking-widest uppercase">
                        READY_SHIP
                      </div>
                    </div>

                    {/* Center: Details */}
                    <div className="flex-1 p-6 md:p-8 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-xs text-primary tracking-widest truncate">
                          {item.id}
                        </span>
                        {item.isLive && (
                          <span className="flex items-center gap-2 text-[10px] font-mono text-secondary shrink-0 ml-2">
                            <Activity className="w-3 h-3" /> LIVE
                          </span>
                        )}
                      </div>
                      <h3 className="text-foreground text-2xl md:text-3xl font-bold mb-4">
                        {item.name}
                      </h3>
                      <p className="text-muted-foreground text-sm md:text-base opacity-70 dark:opacity-60 leading-relaxed max-w-2xl">
                        {item.description}
                      </p>
                    </div>

                    {/* Right: Spec Readout (Collapsible) */}
                    <div
                      className={`
                        bg-card border-t md:border-t-0 md:border-l border-border relative overflow-hidden transition-all duration-500 ease-in-out
                        ${isActive ? "max-h-[500px] md:max-h-full md:w-64 opacity-100" : "max-h-0 md:max-h-full md:w-0 opacity-0 md:overflow-hidden"}
                      `}
                    >
                      <div className="p-6 md:w-64">
                        <div className="absolute top-0 right-0 p-2 opacity-10">
                          <Terminal className="w-12 h-12" />
                        </div>

                        <div className="font-mono text-[10px] space-y-4">
                          <div className="text-muted-foreground border-b border-border pb-2 flex justify-between">
                            <span>SPEC_SHEET</span>
                            <span>v5.0</span>
                          </div>

                          <div className="space-y-3">
                            {Object.entries(item.specs).map(([key, value]) => (
                              <div
                                key={key}
                                className="flex justify-between items-end gap-2"
                              >
                                <span className="text-muted-foreground uppercase truncate max-w-[80px]">
                                  {key}:
                                </span>
                                <span className="text-muted-foreground border-b border-border flex-1 h-[1px] mb-1" />
                                <span className="text-primary font-bold truncate">
                                  {value}
                                </span>
                              </div>
                            ))}
                          </div>

                          <div className="pt-4 opacity-50 space-y-1">
                            <div className="flex gap-2 items-center">
                              <div className="w-1 h-1 bg-zinc-700" />
                              <span>CHECKSUM: 0x8F2</span>
                            </div>
                            <div className="flex gap-2 items-center">
                              <div className="w-1 h-1 bg-secondary" />
                              <span className="text-secondary">VERIFIED</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlight bar for locked items */}
                  {lockedItemId === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary animate-pulse" />
                  )}

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </article>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Call to Action */}
        <div className="mt-20 text-center">
          <p className="font-mono text-xs text-zinc-500 mb-6 tracking-widest">
            {"// ALL_MODULES_AVAILABLE_FOR_HOT_SWAP_INTEGRATION"}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-white/5 text-[10px] font-mono text-zinc-400">
              <HardDrive className="w-3 h-3" /> NVMe_STORAGE
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-white/5 text-[10px] font-mono text-zinc-400">
              <Zap className="w-3 h-3" /> ULTRA_LATENCY
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-white/5 text-[10px] font-mono text-zinc-400">
              <Activity className="w-3 h-3" /> 24/7_UPTIME
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
