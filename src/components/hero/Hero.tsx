"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Power } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function Hero(): JSX.Element {
  const [isToggled, setIsToggled] = useState(false);
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  return (
    <section id="core" className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden" style={{ backgroundColor: isLight ? '#F8F9FA' : '#000000' }}>
      <div className="max-w-6xl mx-auto relative z-10 text-center">
        {/* Chrome-Textured Isometric Motherboard */}
        <motion.div
          className="relative mb-12 flex justify-center"
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Subtle Glow */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              scale: [1, 1.2, 1],
              opacity: isLight ? [0.1, 0.2, 0.1] : [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div 
              className={`w-80 h-80 rounded-full blur-3xl ${
                isLight 
                  ? "bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400" 
                  : "bg-[#0F52BA]"
              }`}
            />
          </motion.div>

          {/* Motherboard Icon with Chrome Texture */}
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
                {/* Chrome-textured base */}
                <div 
                  className={`absolute inset-0 rounded-lg border chrome-texture ${
                    isLight 
                      ? "border-[#E2E8F0] shadow-[0_10px_15px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.9)]" 
                      : "border-[#0F52BA] bg-[#121212]"
                  }`}
                />
                
                {/* Motherboard chip */}
                <div 
                  className={`relative p-10 rounded-lg border ${
                    isLight 
                      ? "bg-white border-[#E2E8F0] shadow-[0_10px_15px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.9)]" 
                      : "bg-[#121212] border-[#0F52BA]"
                  }`}
                >
                  <Cpu 
                    className={`w-28 h-28 mx-auto ${
                      isLight ? "text-[#0747A6]" : "text-[#0F52BA]"
                    }`}
                  />
                  
                  {/* Circuit pattern overlay */}
                  <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <svg className="w-full h-full">
                      <line x1="0" y1="30%" x2="100%" y2="30%" stroke={isLight ? "#0747A6" : "#0F52BA"} strokeWidth="0.5" />
                      <line x1="0" y1="50%" x2="100%" y2="50%" stroke={isLight ? "#0747A6" : "#0F52BA"} strokeWidth="0.5" />
                      <line x1="0" y1="70%" x2="100%" y2="70%" stroke={isLight ? "#0747A6" : "#0F52BA"} strokeWidth="0.5" />
                      <line x1="25%" y1="0" x2="25%" y2="100%" stroke={isLight ? "#0747A6" : "#0F52BA"} strokeWidth="0.5" />
                      <line x1="50%" y1="0" x2="50%" y2="100%" stroke={isLight ? "#0747A6" : "#0F52BA"} strokeWidth="0.5" />
                      <line x1="75%" y1="0" x2="75%" y2="100%" stroke={isLight ? "#0747A6" : "#0F52BA"} strokeWidth="0.5" />
                      <circle cx="25%" cy="30%" r="1.5" fill={isLight ? "#0747A6" : "#0F52BA"} />
                      <circle cx="75%" cy="50%" r="1.5" fill={isLight ? "#0747A6" : "#0F52BA"} />
                      <circle cx="50%" cy="70%" r="1.5" fill={isLight ? "#0747A6" : "#0F52BA"} />
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
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4" style={{ color: isLight ? '#0F172A' : '#FFFFFF' }}>
            Tathya: The Engine Behind Your Success.
          </h1>
          <p className="text-xl md:text-2xl font-sans max-w-3xl mx-auto" style={{ color: isLight ? '#475569' : 'rgba(255,255,255,0.7)' }}>
            Technology that works as hard as you do. Custom business ecosystems engineered for growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
