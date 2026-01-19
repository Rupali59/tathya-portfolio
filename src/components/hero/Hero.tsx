"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Power } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function Hero(): JSX.Element {
  const [isToggled, setIsToggled] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-6xl mx-auto relative z-10 text-center">
        {/* Isometric 3D Motherboard Graphic */}
        <motion.div
          className="relative mb-12 flex justify-center"
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Theme-aware Glow - Sapphire (dark) or Chrome (light) */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              scale: [1, 1.3, 1],
              opacity: isDark ? [0.4, 0.7, 0.4] : [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div 
              className={`w-80 h-80 rounded-full blur-3xl ${
                isDark 
                  ? "bg-[#0F52BA]" 
                  : "bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400"
              }`}
            />
          </motion.div>

          {/* Motherboard Icon */}
          <motion.div
            className="relative z-10"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              {/* Isometric container */}
              <div
                className="relative"
                style={{
                  transform: "perspective(1000px) rotateX(20deg) rotateY(-20deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Base plate */}
                <div 
                  className={`absolute inset-0 rounded-lg border ${
                    isDark 
                      ? "border-[#0F52BA] bg-[#121212]" 
                      : "border-gray-300 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9)]"
                  }`}
                />
                
                {/* Motherboard chip */}
                <div 
                  className={`relative p-10 rounded-lg ${
                    isDark 
                      ? "bg-[#121212] border border-[#0F52BA]" 
                      : "bg-white border border-gray-200 shadow-[0_8px_24px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9)]"
                  }`}
                >
                  <Cpu 
                    className={`w-28 h-28 mx-auto ${
                      isDark ? "text-[#0F52BA]" : "text-[#0A3D7A]"
                    }`}
                  />
                  
                  {/* Circuit pattern overlay */}
                  <div className="absolute top-0 left-0 w-full h-full opacity-20">
                    <svg className="w-full h-full">
                      <line x1="0" y1="30%" x2="100%" y2="30%" stroke={isDark ? "#0F52BA" : "#0A3D7A"} strokeWidth="0.5" />
                      <line x1="0" y1="50%" x2="100%" y2="50%" stroke={isDark ? "#0F52BA" : "#0A3D7A"} strokeWidth="0.5" />
                      <line x1="0" y1="70%" x2="100%" y2="70%" stroke={isDark ? "#0F52BA" : "#0A3D7A"} strokeWidth="0.5" />
                      <line x1="25%" y1="0" x2="25%" y2="100%" stroke={isDark ? "#0F52BA" : "#0A3D7A"} strokeWidth="0.5" />
                      <line x1="50%" y1="0" x2="50%" y2="100%" stroke={isDark ? "#0F52BA" : "#0A3D7A"} strokeWidth="0.5" />
                      <line x1="75%" y1="0" x2="75%" y2="100%" stroke={isDark ? "#0F52BA" : "#0A3D7A"} strokeWidth="0.5" />
                      <circle cx="25%" cy="30%" r="1.5" fill={isDark ? "#0F52BA" : "#0A3D7A"} />
                      <circle cx="75%" cy="50%" r="1.5" fill={isDark ? "#0F52BA" : "#0A3D7A"} />
                      <circle cx="50%" cy="70%" r="1.5" fill={isDark ? "#0F52BA" : "#0A3D7A"} />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Tathya: Engineered Business Ecosystems.
          </h1>
          <p className="text-xl md:text-2xl font-sans max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            We provision dedicated digital infrastructure for brands that outgrow standard solutions.
          </p>
        </motion.div>

        {/* CTA Toggle Button - Tactile, Recessed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            onClick={() => setIsToggled(!isToggled)}
            className={`relative px-10 py-5 text-white font-medium rounded-lg
                       flex items-center gap-3 mx-auto font-mono text-sm
                       transition-all duration-300 ease-in-out tactile-button
                       ${isDark ? 'bg-[#121212] border' : 'bg-white border shadow-[0_8px_24px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9)]'}
                       ${isToggled 
                         ? (isDark ? 'border-[#50C878]' : 'border-[#2D8659]') 
                         : (isDark ? 'border-[#0F52BA]' : 'border-[#0A3D7A]')
                       }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            animate={{
              boxShadow: isToggled
                ? isDark
                  ? "inset 0 2px 4px rgba(0,0,0,0.5), 0 0 20px 10px rgba(80,200,120,0.4)"
                  : "inset 0 2px 4px rgba(0,0,0,0.1), 0 0 20px 10px rgba(45,134,89,0.2)"
                : isDark
                  ? "inset 0 2px 4px rgba(0,0,0,0.5), 0 2px 8px rgba(15,82,186,0.2)"
                  : "inset 0 2px 4px rgba(0,0,0,0.05), 0 2px 8px rgba(10,61,122,0.1)",
            }}
            transition={{ duration: 0.3 }}
            style={{ color: isDark ? '#FFFFFF' : '#111827' }}
          >
            <Power
              className={`w-5 h-5 transition-colors duration-300 ${
                isToggled 
                  ? (isDark ? "text-[#50C878]" : "text-[#2D8659]")
                  : (isDark ? "text-[#0F52BA]" : "text-[#0A3D7A]")
              }`}
            />
            <span className="tracking-wider">[ REQUEST WORKSPACE ]</span>
            {isToggled && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`font-mono text-xs ${
                  isDark ? "text-[#50C878]" : "text-[#2D8659]"
                }`}
              >
                ACTIVE
              </motion.span>
            )}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
