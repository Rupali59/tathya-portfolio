"use client";

import { motion } from "framer-motion";
import { Layers, ShieldCheck, Terminal } from "lucide-react";

export default function ArchitecturePillars(): JSX.Element {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Atomic Sovereignty",
      description:
        "Unlike generic builders that store data in shared pools, we provision a private Atomic Vault. Isolated, encrypted, and accessible only by you.",
      code: "STATUS: ISOLATED_&_SECURE",
      indicator: "sapphire",
    },
    {
      icon: Layers,
      title: "High-Velocity Engine",
      description:
        "We replace sluggish code with a Go-Centric Runtime. Built on banking architecture, handling thousands of customers with zero downtime.",
      code: "LATENCY: 12ms",
      indicator: "emerald",
    },
    {
      icon: Terminal,
      title: "The Biometric Handshake",
      description:
        "Passwords are a liability. Your thumbprint is a physical key. We implement WebAuthn to ensure your business intelligence is locked tight.",
      code: "AUTH: BIOMETRIC_PassKey",
      indicator: "sapphire",
    },
  ];

  return (
    <section className="section-base relative py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-end"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-4 uppercase font-mono">
              [ OPERATIONAL_PILLARS ]
            </h2>
            <p className="text-zinc-400 text-lg opacity-60 max-w-xl">
              The foundation of every system we provision. Engineered for
              reliability, built for prestige.
            </p>
          </div>
          <div className="flex justify-start md:justify-end gap-12 border-t border-zinc-900 pt-8">
            <div className="flex flex-col">
              <span className="text-emerald-500 font-bold text-2xl">99.9%</span>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                SLA_UPTIME
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-blue-500 font-bold text-2xl">
                &lt;150ms
              </span>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                GLOBAL_LATENCY
              </span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-zinc-900 border border-zinc-900 rounded-2xl overflow-hidden">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-card p-10 transition-colors border border-border rounded-xl hover:shadow-[0_0_30px_var(--glow-sapphire-color)] hover:border-primary/50"
              >
                <div className="mb-8 relative inline-block">
                  <Icon className="w-12 h-12 text-muted-foreground group-hover:text-primary transition-colors" />
                  <div className="absolute -top-4 -right-4 font-mono text-[8px] text-zinc-800 tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                    {pillar.code}
                  </div>
                </div>

                <h3 className="text-white text-2xl font-bold mb-4 tracking-tight flex items-center gap-3">
                  {pillar.title}
                  {pillar.indicator === "sapphire" && (
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                  )}
                  {pillar.indicator === "emerald" && (
                    <div className="flex items-end gap-0.5 h-3">
                      <span className="w-0.5 h-full bg-emerald-500 animate-[pulse_1s_infinite]" />
                      <span className="w-0.5 h-2/3 bg-emerald-500 animate-[pulse_1.2s_infinite]" />
                      <span className="w-0.5 h-full bg-emerald-500 animate-[pulse_0.8s_infinite]" />
                    </div>
                  )}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed opacity-60">
                  {pillar.description}
                </p>

                <div className="mt-8 flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-500 opacity-20 group-hover:opacity-100 transition-opacity" />
                  <div className="h-[1px] flex-1 bg-zinc-900 group-hover:bg-blue-500/20 transition-colors" />
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden">
                  <div className="absolute top-0 right-0 w-[1px] h-full bg-zinc-900" />
                  <div className="absolute top-0 right-0 w-full h-[1px] bg-zinc-900" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
