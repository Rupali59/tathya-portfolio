"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Server, CheckCircle2 } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface ProvisionedTenant {
  name: string;
  description: string;
  status: "Online" | "Active" | "Deployed";
  tech: string[];
  modules: string[];
}

export default function Portfolio(): JSX.Element {
  const [hoveredBlade, setHoveredBlade] = useState<string | null>(null);
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  // Success Stories - Business Solutions
  const provisionedTenants: ProvisionedTenant[] = [
    {
      name: "Dhaaga Stories",
      description: "A storytelling platform connecting narratives across cultures. Built to scale from day one with infinite scalability and bank-level security.",
      status: "Online",
      tech: ["Next.js", "TypeScript", "PostgreSQL"],
      modules: ["Content Management", "API Integration", "Analytics Dashboard", "Global CDN"],
    },
    {
      name: "Astro-Acharya",
      description: "Astrological consultation platform with AI-powered insights. High-performance speed ensures fast loading and excellent search rankings.",
      status: "Online",
      tech: ["React", "Node.js", "MongoDB"],
      modules: ["AI Engine", "Payment Processing", "Customer Management", "Security Suite"],
    },
    {
      name: "Astro Clarity",
      description: "Advanced astrological analytics platform. Engineered for growth with instant feature add-ons as business needs evolve.",
      status: "Online",
      tech: ["Go", "PostgreSQL", "Redis"],
      modules: ["Real-time Processing", "Data Analytics", "Automated Scaling", "24/7 Monitoring"],
    },
  ];

  return (
    <section id="blades" className="relative architect-section" style={{ backgroundColor: isLight ? '#F8F9FA' : '#000000' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4" style={{ color: isLight ? '#0F172A' : '#FFFFFF' }}>
            Success Stories
          </h2>
          <p className="text-xl font-sans" style={{ color: isLight ? '#475569' : 'rgba(255,255,255,0.7)' }}>
            Real businesses powered by our custom-built solutions
          </p>
        </motion.div>

        {/* Vertical Rack Layout */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {provisionedTenants.map((tenant, index) => (
            <motion.div
              key={tenant.name}
              initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setHoveredBlade(tenant.name)}
              onMouseLeave={() => setHoveredBlade(null)}
            >
              {/* Server Blade Card - Vertical Rack with Thin Sapphire Border */}
              <div
                className={`relative transition-all duration-300 ease-in-out overflow-hidden ${
                  isLight 
                    ? 'frost-panel' 
                    : 'bg-[#121212] border border-[#0F52BA] shadow-[inset_0_2px_4px_rgba(0,0,0,0.5),0_4px_16px_rgba(0,0,0,0.3)] rounded-lg'
                }`}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6">
                  {/* Server Icon & Name */}
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <Server 
                      className={`w-10 h-10 ${
                        isLight ? 'text-[#0747A6]' : 'text-[#0F52BA]'
                      }`}
                    />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-serif font-bold" style={{ color: isLight ? '#0F172A' : '#FFFFFF' }}>
                          {tenant.name}
                        </h3>
                      </div>
                      <p className="text-sm font-sans mt-1" style={{ color: isLight ? '#475569' : 'rgba(255,255,255,0.7)' }}>
                        {tenant.description}
                      </p>
                    </div>
                  </div>

                  {/* Monospace Status Readout */}
                    <div className="flex-1 font-sans text-sm space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="font-semibold" style={{ color: isLight ? '#0747A6' : '#0F52BA' }}>Status:</span>
                        <span style={{ color: isLight ? '#2D8A4E' : '#50C878' }}>
                          {tenant.status} • Live
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-semibold" style={{ color: isLight ? '#0747A6' : '#0F52BA' }}>Reliability:</span>
                        <span style={{ color: isLight ? '#475569' : 'rgba(255,255,255,0.7)' }}>99.9% Uptime</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-semibold" style={{ color: isLight ? '#0747A6' : '#0F52BA' }}>Performance:</span>
                        <span style={{ color: isLight ? '#475569' : 'rgba(255,255,255,0.7)' }}>Lightning Fast</span>
                      </div>
                    </div>

                  {/* Status Indicator */}
                  <div className="flex-shrink-0">
                    <CheckCircle2
                      className={`w-8 h-8 transition-colors duration-300 ${
                        isLight ? "text-[#2D8A4E]" : "text-[#50C878]"
                      }`}
                    />
                  </div>
                </div>

                {/* Technical Breakdown - Revealed on Hover */}
                <AnimatePresence>
                  {hoveredBlade === tenant.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`border-t p-6 ${
                        isLight ? 'border-[#E2E8F0]' : 'border-[#0F52BA]/20'
                      }`}
                    >
                      <div className="font-sans text-sm">
                        <div className="font-semibold mb-3" style={{ color: isLight ? '#0747A6' : '#0F52BA' }}>
                          Included Features:
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {tenant.modules.map((module, idx) => (
                            <motion.div
                              key={module}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              style={{ color: isLight ? '#475569' : 'rgba(255,255,255,0.7)' }}
                              className="flex items-center gap-2"
                            >
                              <span style={{ color: isLight ? '#2D8A4E' : '#50C878' }}>✓</span>
                              <span>{module}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
