"use client";

import { motion } from "framer-motion";
import { Lock, Puzzle, Terminal } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function ArchitecturePillars(): JSX.Element {
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  const pillars = [
    {
      icon: Lock,
      title: "Bank-Level Security",
      description: "Your data stays private and secure. Unlike shared hosting, you get dedicated infrastructure with complete data autonomy.",
    },
    {
      icon: Puzzle,
      title: "Infinite Scalability",
      description: "Your site won't crash when you grow. Add features instantly with our modular system that scales with your business.",
    },
    {
      icon: Terminal,
      title: "Business Command Center",
      description: "Your private dashboard to monitor performance, manage content, and scale your system as your business grows.",
    },
  ];

  return (
    <section className="relative architect-section" style={{ backgroundColor: isLight ? '#F8F9FA' : '#000000' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4" style={{ color: isLight ? '#0F172A' : '#FFFFFF' }}>
            Why Choose Tathya?
          </h2>
          <p className="text-xl font-sans" style={{ color: isLight ? '#475569' : 'rgba(255,255,255,0.7)' }}>
            Technology that works as hard as you do
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Module Card - 2px Lift on Hover with Deeper Shadow */}
                <motion.div
                  className={`relative p-8 overflow-hidden card-lift ${
                    isLight 
                      ? 'frost-panel' 
                      : 'bg-[#121212] border border-[#0F52BA] shadow-[0_4px_16px_rgba(0,0,0,0.5)] rounded-lg transition-all duration-300 ease-in-out'
                  }`}
                  whileHover={{ 
                    y: -2,
                    boxShadow: isLight 
                      ? "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)"
                      : "0 8px 24px rgba(0,0,0,0.5), 0 0 20px rgba(15,82,186,0.4)"
                  }}
                  whileTap={{ y: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Icon */}
                  <div className="mb-6 relative">
                    <IconComponent 
                      className={`w-14 h-14 ${
                        isLight ? 'text-[#0747A6]' : 'text-[#0F52BA]'
                      }`}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-serif font-bold mb-4" style={{ color: isLight ? '#0F172A' : '#FFFFFF' }}>
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="leading-relaxed font-sans" style={{ color: isLight ? '#475569' : 'rgba(255,255,255,0.7)' }}>
                    {pillar.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
