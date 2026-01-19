"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Server, CheckCircle2 } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface Project {
  name: string;
  description: string;
  status: "Active" | "Deployed" | "Maintenance";
  tech: string[];
  modules: string[];
}

export default function Portfolio(): JSX.Element {
  const [hoveredBlade, setHoveredBlade] = useState<string | null>(null);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const projects: Project[] = [
    {
      name: "Dhaaga Stories",
      description: "A storytelling platform connecting narratives across cultures.",
      status: "Active",
      tech: ["Next.js", "TypeScript", "PostgreSQL"],
      modules: ["CMS", "API Gateway", "Analytics", "CDN"],
    },
    {
      name: "Astro-Acharya",
      description: "Astrological consultation platform with AI-powered insights.",
      status: "Deployed",
      tech: ["React", "Node.js", "MongoDB"],
      modules: ["AI Engine", "Payment Gateway", "CRM Integration", "Security Suite"],
    },
    {
      name: "Astro Clarity",
      description: "Advanced astrological analytics and prediction engine.",
      status: "Active",
      tech: ["Go", "PostgreSQL", "Redis"],
      modules: ["Microservices", "Real-time Processing", "Data Pipeline", "Monitoring"],
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
            The Blades
          </h2>
          <p className="text-xl font-sans" style={{ color: 'var(--text-secondary)' }}>
            Server blades running in production
          </p>
        </motion.div>

        {/* Horizontal Server Blades */}
        <div className="space-y-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setHoveredBlade(project.name)}
              onMouseLeave={() => setHoveredBlade(null)}
            >
              {/* Server Blade Card - Horizontal Layout */}
              <div
                className={`relative rounded-lg transition-all duration-300 ease-in-out overflow-hidden ${
                  isDark 
                    ? 'bg-[#121212] border border-[#0F52BA]' 
                    : 'bg-white border border-gray-200 shadow-[0_8px_24px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9)]'
                }`}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6">
                  {/* Server Icon & Name */}
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <Server 
                      className={`w-10 h-10 ${
                        isDark ? 'text-[#0F52BA]' : 'text-[#0A3D7A]'
                      }`}
                    />
                    <div>
                      <h3 className="text-xl font-serif font-bold" style={{ color: 'var(--text-primary)' }}>
                        {project.name}
                      </h3>
                      <p className="text-sm font-sans mt-1" style={{ color: 'var(--text-secondary)' }}>
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Monospace Status Readout */}
                  <div className="flex-1 font-mono text-xs space-y-1">
                    <div className="flex items-center gap-3">
                      <span className={isDark ? 'text-[#0F52BA]' : 'text-[#0A3D7A]'}>Status:</span>
                      <span className={project.status === "Active" ? (isDark ? 'text-[#50C878]' : 'text-[#2D8659]') : 'text-gray-500'}>
                        {project.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={isDark ? 'text-[#0F52BA]' : 'text-[#0A3D7A]'}>Uptime:</span>
                      <span style={{ color: 'var(--text-secondary)' }}>99.9%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={isDark ? 'text-[#0F52BA]' : 'text-[#0A3D7A]'}>Response:</span>
                      <span style={{ color: 'var(--text-secondary)' }}>&lt;200ms</span>
                    </div>
                  </div>

                  {/* Status Indicator */}
                  <div className="flex-shrink-0">
                    <CheckCircle2
                      className={`w-8 h-8 transition-colors duration-300 ${
                        project.status === "Active"
                          ? (isDark ? "text-[#50C878]" : "text-[#2D8659]")
                          : project.status === "Deployed"
                          ? (isDark ? "text-[#0F52BA]" : "text-[#0A3D7A]")
                          : "text-gray-500"
                      }`}
                    />
                  </div>
                </div>

                {/* Technical Breakdown - Revealed on Hover */}
                <AnimatePresence>
                  {hoveredBlade === project.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`border-t ${
                        isDark ? 'border-[#0F52BA]/20' : 'border-gray-200'
                      } p-6`}
                    >
                      <div className="font-mono text-xs">
                        <div className={`mb-3 ${isDark ? 'text-[#0F52BA]' : 'text-[#0A3D7A]'}`}>
                          Integrated Modules:
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {project.modules.map((module, idx) => (
                            <motion.div
                              key={module}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              className={`flex items-center gap-2 ${
                                isDark ? 'text-white/70' : 'text-gray-700'
                              }`}
                            >
                              <span className={isDark ? 'text-[#50C878]' : 'text-[#2D8659]'}>▶</span>
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
