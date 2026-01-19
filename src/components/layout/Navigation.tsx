"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { usePathname } from "next/navigation";

export default function Navigation(): JSX.Element {
  const [isScrolledToProvision, setIsScrolledToProvision] = useState(false);
  const [utcTime, setUtcTime] = useState("");
  const { resolvedTheme } = useTheme();
  const pathname = usePathname();
  const isLight = resolvedTheme === "light";

  // UTC Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const utc = now.toISOString().substring(11, 19) + " UTC";
      setUtcTime(utc);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll detection for Provision section
  useEffect(() => {
    const handleScroll = () => {
      const configBay = document.getElementById("configuration-bay");
      if (configBay) {
        const rect = configBay.getBoundingClientRect();
        setIsScrolledToProvision(rect.top < window.innerHeight / 2);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAccessShell = () => {
    const configBay = document.getElementById("configuration-bay");
    if (configBay) {
      configBay.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Desktop: Command Strip */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50">
        <div className="frosted-glass border-b" style={{ borderColor: isLight ? '#E2E8F0' : 'rgba(15,82,186,0.2)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              {/* Left: TATHYA.DEV + Sapphire Pearl */}
              <div className="flex items-center gap-3">
                <Link href="/" className="font-mono text-sm font-semibold tracking-wider" style={{ color: isLight ? '#0F172A' : '#FFFFFF' }}>
                  TATHYA.DEV
                </Link>
                {isLight ? (
                  <motion.div
                    className={isScrolledToProvision ? "led-pearl-emerald" : "led-pearl-sapphire"}
                    animate={{
                      scale: isScrolledToProvision ? [1, 1.2, 1] : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                ) : (
                  <motion.div
                    className={`sapphire-pearl ${isScrolledToProvision ? 'active' : ''}`}
                    animate={{
                      scale: isScrolledToProvision ? [1, 1.2, 1] : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>

              {/* Center: Navigation Links */}
              <div className="flex items-center gap-8">
                <Link
                  href="/#core"
                  className="font-sans text-sm font-medium tracking-wide transition-colors duration-200"
                  style={{ color: isLight ? '#475569' : 'rgba(255,255,255,0.7)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = isLight ? '#0747A6' : '#0F52BA';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = isLight ? '#475569' : 'rgba(255,255,255,0.7)';
                  }}
                >
                  THE TECH
                </Link>
                <Link
                  href="/#blades"
                  className="font-sans text-sm font-medium tracking-wide transition-colors duration-200"
                  style={{ color: isLight ? '#475569' : 'rgba(255,255,255,0.7)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = isLight ? '#0747A6' : '#0F52BA';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = isLight ? '#475569' : 'rgba(255,255,255,0.7)';
                  }}
                >
                  SOLUTIONS
                </Link>
                <Link
                  href="/#configuration-bay"
                  className="font-sans text-sm font-medium tracking-wide transition-colors duration-200"
                  style={{ color: isLight ? '#475569' : 'rgba(255,255,255,0.7)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = isLight ? '#0747A6' : '#0F52BA';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = isLight ? '#475569' : 'rgba(255,255,255,0.7)';
                  }}
                >
                  BUILD MINE
                </Link>
              </div>

              {/* Right: ACCESS SHELL Button + UTC Clock */}
              <div className="flex items-center gap-4">
                <motion.button
                  onClick={handleAccessShell}
                  className={`px-4 py-1.5 rounded font-sans text-sm font-semibold transition-all duration-200 ${
                    isLight
                      ? 'bg-white border border-[#E2E8F0] text-[#0747A6] shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.06),0_2px_4px_rgba(0,0,0,0.1)]'
                      : 'bg-[#121212] border border-[#0F52BA]/20 text-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] hover:border-[#0F52BA]'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  CLIENT LOGIN
                </motion.button>
                <div className="font-mono text-xs" style={{ color: isLight ? '#94A3B8' : 'rgba(255,255,255,0.5)' }}>
                  {utcTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile: Bottom Command Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="frosted-glass border-t" style={{ borderColor: isLight ? '#E2E8F0' : 'rgba(15,82,186,0.2)' }}>
          <div className="px-4 py-3">
            <div className="flex items-center justify-between">
              {/* Navigation Links */}
              <div className="flex items-center gap-3 flex-1 overflow-x-auto">
                <Link
                  href="/#core"
                  className="font-sans text-xs font-medium whitespace-nowrap px-2 py-1 rounded transition-colors"
                  style={{ color: isLight ? '#475569' : 'rgba(255,255,255,0.7)' }}
                >
                  THE TECH
                </Link>
                <Link
                  href="/#blades"
                  className="font-sans text-xs font-medium whitespace-nowrap px-2 py-1 rounded transition-colors"
                  style={{ color: isLight ? '#475569' : 'rgba(255,255,255,0.7)' }}
                >
                  SOLUTIONS
                </Link>
                <Link
                  href="/#configuration-bay"
                  className="font-sans text-xs font-medium whitespace-nowrap px-2 py-1 rounded transition-colors"
                  style={{ color: isLight ? '#475569' : 'rgba(255,255,255,0.7)' }}
                >
                  BUILD MINE
                </Link>
              </div>

              {/* CLIENT LOGIN Button */}
              <motion.button
                onClick={handleAccessShell}
                className={`ml-3 px-3 py-1.5 rounded font-sans text-xs font-semibold transition-all duration-200 whitespace-nowrap ${
                  isLight
                    ? 'bg-white border border-[#E2E8F0] text-[#0747A6] shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)]'
                    : 'bg-[#121212] border border-[#0F52BA]/20 text-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                LOGIN
              </motion.button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
