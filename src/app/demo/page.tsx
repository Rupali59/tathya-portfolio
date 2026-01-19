"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/layout/Navigation";
import ConfigurationBay from "@/components/content/ConfigurationBay";
import { useTheme } from "@/contexts/ThemeContext";

export default function DemoPage() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              System Configuration Demo
            </h1>
            <p className="text-xl font-sans font-mono" style={{ color: 'var(--text-secondary)' }}>
              Configure your Motherboard workspace
            </p>
          </motion.div>

          {/* Configuration Bay - Integrated Demo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ConfigurationBay />
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-sm font-mono" style={{ color: 'var(--text-tertiary)' }}>
              This demo showcases the interactive provisioning interface.
              <br />
              All configurations are processed in real-time.
            </p>
          </motion.div>
        </div>
      </main>
    </>
  );
}
