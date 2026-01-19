"use client";

import { motion } from "framer-motion";
import { Lock, Puzzle, Terminal } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function ArchitecturePillars(): JSX.Element {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const pillars = [
    {
      icon: Lock,
      title: "Isolated Sovereignty",
      description: "Dedicated repositories and isolated server environments ensuring complete data autonomy and security.",
    },
    {
      icon: Puzzle,
      title: "Modular Intelligence",
      description: "Plug-and-play logic powered by Go-based microservices for seamless scalability and integration.",
    },
    {
      icon: Terminal,
      title: "The Shell Interface",
      description: "Private management consoles providing real-time monitoring and control over your infrastructure.",
    },
  ];

  return (
    <section className="relative" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Core Modules
          </h2>
          <p className="text-xl font-sans" style={{ color: 'var(--text-secondary)' }}>
            The foundation of engineered excellence
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
                {/* Module Card - Tactile Button Press Effect */}
                <motion.div
                  className={`relative p-8 rounded-lg transition-all duration-300 ease-in-out overflow-hidden tactile-card ${
                    isDark 
                      ? 'bg-[#121212] border border-[#0F52BA]' 
                      : 'bg-white border border-gray-200 shadow-[0_8px_24px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9)]'
                  }`}
                  whileHover={{ 
                    y: -4,
                    boxShadow: isDark 
                      ? "0 8px 24px rgba(0,0,0,0.5), 0 0 20px rgba(15,82,186,0.4)"
                      : "0 12px 32px rgba(0,0,0,0.12), 0 0 20px rgba(10,61,122,0.2)"
                  }}
                  whileTap={{ y: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Icon with inner glow */}
                  <div className="mb-6 relative">
                    <div 
                      className={`absolute inset-0 blur-xl ${
                        isDark ? 'bg-[#0F52BA]/20' : 'bg-[#0A3D7A]/10'
                      }`}
                    />
                    <IconComponent 
                      className={`relative w-14 h-14 ${
                        isDark ? 'text-[#0F52BA]' : 'text-[#0A3D7A]'
                      }`}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-serif font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="leading-relaxed font-sans" style={{ color: 'var(--text-secondary)' }}>
                    {pillar.description}
                  </p>

                  {/* Hover glow effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-lg pointer-events-none ${
                      isDark ? 'bg-[#0F52BA]/0' : 'bg-[#0A3D7A]/0'
                    }`}
                    whileHover={{ 
                      backgroundColor: isDark ? "rgba(15, 82, 186, 0.05)" : "rgba(10, 61, 122, 0.03)"
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
