"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { Cpu, Database, Shield, Zap, Network, Code } from "lucide-react";

export default function Services(): JSX.Element {
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  // Services as Active Nodes/Modules within the Motherboard system
  const activeNodes = [
    {
      icon: Code,
      title: "Web Infrastructure",
      description: "Provisioned web application nodes running on dedicated infrastructure.",
      status: "ACTIVE",
    },
    {
      icon: Database,
      title: "Data Warehousing",
      description: "Isolated data storage modules with enterprise-grade security.",
      status: "ACTIVE",
    },
    {
      icon: Shield,
      title: "Security Suite",
      description: "Advanced security modules protecting all provisioned tenants.",
      status: "ACTIVE",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Real-time performance monitoring and optimization modules.",
      status: "ACTIVE",
    },
    {
      icon: Network,
      title: "Social Integration",
      description: "Reddit and Twitter integration nodes for community engagement.",
      status: "ACTIVE",
    },
    {
      icon: Cpu,
      title: "AI/ML Processing",
      description: "Machine learning modules for intelligent automation.",
      status: "ACTIVE",
    },
  ];

  return (
    <section className="relative architect-section" style={{ backgroundColor: isLight ? '#F8F9FA' : '#000000' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4" style={{ color: isLight ? '#0F172A' : '#FFFFFF' }}>
            Ready-to-Launch Solutions
          </h2>
          <p className="text-xl font-sans" style={{ color: isLight ? '#475569' : 'rgba(255,255,255,0.7)' }}>
            Pre-built business engines for specific industries, ready to scale with you
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeNodes.map((node, index) => {
            const IconComponent = node.icon;
            return (
              <motion.div
                key={node.title}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Module Card with 1px Silver Border and Neo-skeuomorphic Depth */}
                <motion.div
                  className={`relative p-6 rounded-lg transition-all duration-300 ease-in-out overflow-hidden card-lift ${
                    isLight 
                      ? 'bg-white border border-[#E2E8F0] shadow-[0_4px_6px_rgba(0,0,0,0.07),0_2px_4px_rgba(0,0,0,0.06)]' 
                      : 'bg-[#121212] border border-[#0F52BA] shadow-[inset_0_2px_4px_rgba(0,0,0,0.5),0_4px_16px_rgba(0,0,0,0.3)]'
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
                  <div className="mb-4 relative">
                    <IconComponent 
                      className={`w-10 h-10 ${
                        isLight ? 'text-[#0747A6]' : 'text-[#0F52BA]'
                      }`}
                    />
                  </div>

                  {/* Title with Status */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-serif font-bold" style={{ color: isLight ? '#0F172A' : '#FFFFFF' }}>
                      {node.title}
                    </h3>
                    <span className={`font-mono text-xs px-2 py-1 rounded ${
                      isLight 
                        ? 'bg-[#2D8A4E]/10 text-[#2D8A4E] border border-[#2D8A4E]/30' 
                        : 'bg-[#50C878]/20 text-[#50C878] border border-[#50C878]/30'
                    }`}>
                      [{node.status}]
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm font-sans leading-relaxed" style={{ color: isLight ? '#475569' : 'rgba(255,255,255,0.7)' }}>
                    {node.description}
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
