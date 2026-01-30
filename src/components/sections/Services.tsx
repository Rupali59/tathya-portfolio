"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { Cpu } from "lucide-react";
import { Database } from "lucide-react";
import { Zap } from "lucide-react";

export default function Services(): JSX.Element {
  // Why Motherboard? Focus on high-performance engine components

  const engineParts = [
    {
      icon: Zap,
      title: "The Commerce Blade",
      description:
        "Turns storytelling into a physical revenue machine. A dedicated commerce engine for high-volume transactions.",
      tag: "DHAAGA_LITE",
    },
    {
      icon: Cpu,
      title: "The Calculation Core",
      description:
        "Precision math for services that cannot afford a 0.1% error. Ideal for financial and astrological computations.",
      tag: "ASTRO_ACHARYA",
    },
    {
      icon: Database,
      title: "The Market Radar",
      description:
        "A 24/7 listening post that scans the globe for your brand's reputation. Real-time intelligence feed.",
      tag: "REDDIT_CLARITY",
    },
    {
      icon: Code2,
      title: "Bespoke Hardwiring",
      description:
        "We don't use 'Plugins.' We hardwire your specific business logic directly into the engine core.",
      tag: "CUSTOM_SOCKETS",
    },
  ];

  return (
    <section
      id="the-engine"
      className="section-base relative py-24 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-[10px] tracking-widest text-primary uppercase">
              MOTHERBOARD_CORE_v5.0
            </span>
          </div>
          <h2 className="text-foreground text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Not a Template. <br />
            <span className="text-primary">An Industrial Engine.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto opacity-70">
            We abandon generic SaaS tools in favor of high-performance
            engineering. Motherboard is the robust baseplate for your business
            manifestation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {engineParts.map((part, index) => {
            const Icon = part.icon;
            return (
              <motion.div
                key={part.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-500 shadow-md"
              >
                <div className="mb-6 inline-block p-3 bg-muted rounded-lg group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="font-mono text-[10px] text-muted-foreground mb-2 tracking-widest uppercase">
                  [{part.tag}]
                </div>
                <h3 className="text-foreground text-xl font-bold mb-4">
                  {part.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed opacity-60">
                  {part.description}
                </p>
                <div className="mt-6 h-[1px] w-full bg-border group-hover:bg-primary/20 transition-colors" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-[0.02] z-0">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#2563eb"
            strokeWidth="0.5"
            strokeDasharray="1 3"
          />
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="#2563eb"
            strokeWidth="0.5"
            strokeDasharray="1 5"
          />
        </svg>
      </div>
    </section>
  );
}
