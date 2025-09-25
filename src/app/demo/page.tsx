"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import Navigation from "@/components/layout/Navigation";
import AIHeroChat from "@/components/hero/AIHeroChat";

// Force SSR for this page
export const dynamic = "force-dynamic";

export default function DemoPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background-secondary text-text-primary pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h1
              className="text-4xl sm:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent">
                Animation & Theme Demo
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-text-secondary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Experience our beautiful animations and theme system
            </motion.p>
          </div>

          {/* AI Hero Chat Showcase */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                AI Hero Chat Demo
              </h2>
              <p className="text-text-secondary mb-6">
                Experience our interactive AI chat interface
              </p>
            </div>
            <AIHeroChat />
          </motion.div>

          {/* Theme Toggle Showcase */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="glass rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                Theme Toggle
              </h2>
              <p className="text-text-secondary mb-6">
                Try switching between light and dark themes
              </p>
              <div className="flex justify-center">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>

          {/* Animation Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Floating Animation */}
            <motion.div
              className="glass rounded-2xl p-6 text-center"
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-16 h-16 bg-primary-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-primary-500 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Floating</h3>
              <p className="text-text-secondary text-sm">
                Smooth up and down movement
              </p>
            </motion.div>

            {/* Glow Animation */}
            <motion.div
              className="glass rounded-2xl p-6 text-center"
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 0px rgba(59, 130, 246, 0)",
                  "0 0 20px rgba(59, 130, 246, 0.3)",
                  "0 0 0px rgba(59, 130, 246, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-16 h-16 bg-primary-500/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-primary-400 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Glow</h3>
              <p className="text-text-secondary text-sm">Pulsing glow effect</p>
            </motion.div>

            {/* Pulse Animation */}
            <motion.div
              className="glass rounded-2xl p-6 text-center"
              animate={{
                scale: [1, 1.02, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-16 h-16 bg-primary-600/25 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-primary-600 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Pulse</h3>
              <p className="text-text-secondary text-sm">
                Gentle pulsing effect
              </p>
            </motion.div>

            {/* Ping Animation */}
            <motion.div className="glass rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-primary-400/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <motion.div
                  className="w-8 h-8 bg-primary-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">Ping</h3>
              <p className="text-text-secondary text-sm">
                Expanding ring effect
              </p>
            </motion.div>

            {/* Bounce Animation */}
            <motion.div className="glass rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-primary-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <motion.div
                  className="w-8 h-8 bg-primary-500 rounded-full"
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">Bounce</h3>
              <p className="text-text-secondary text-sm">Bouncing motion</p>
            </motion.div>

            {/* Spin Animation */}
            <motion.div className="glass rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-primary-600/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <motion.div
                  className="w-8 h-8 border-2 border-primary-600 border-t-transparent rounded-full"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">Spin</h3>
              <p className="text-text-secondary text-sm">Continuous rotation</p>
            </motion.div>
          </div>

          {/* Glass Morphism Examples */}
          <div className="mb-16">
            <motion.h2
              className="text-3xl font-bold text-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Glass Morphism Effects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4 text-text-primary">
                  Light Glass
                </h3>
                <p className="text-text-secondary mb-4">
                  This card uses the glass morphism effect with backdrop blur
                  and translucent background.
                </p>
                <div className="flex gap-4">
                  <button className="px-4 py-2 bg-interactive-primary text-white rounded-lg hover:bg-interactive-primary-hover transition-colors">
                    Primary Button
                  </button>
                  <button className="px-4 py-2 border border-border-primary text-text-primary rounded-lg hover:bg-background-secondary transition-colors">
                    Secondary Button
                  </button>
                </div>
              </div>

              <div className="glass-dark rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4 text-text-primary">
                  Dark Glass
                </h3>
                <p className="text-text-secondary mb-4">
                  This card uses the dark glass morphism effect with enhanced
                  transparency for dark themes.
                </p>
                <div className="flex gap-4">
                  <button className="px-4 py-2 bg-interactive-primary text-white rounded-lg hover:bg-interactive-primary-hover transition-colors">
                    Primary Button
                  </button>
                  <button className="px-4 py-2 border border-border-primary text-text-primary rounded-lg hover:bg-background-secondary transition-colors">
                    Secondary Button
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Elements */}
          <div className="mb-16">
            <motion.h2
              className="text-3xl font-bold text-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Interactive Elements
            </motion.h2>
            <div className="glass rounded-2xl p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.button
                  className="group relative px-6 py-4 bg-interactive-primary hover:bg-interactive-primary-hover text-white rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 font-semibold">Hover Me</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-lg"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>

                <motion.button
                  className="group px-6 py-4 border-2 border-interactive-primary hover:border-primary-400 text-interactive-primary hover:text-primary-400 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 font-semibold">
                    Border Hover
                  </span>
                </motion.button>

                <motion.button
                  className="group px-6 py-4 bg-background-secondary hover:bg-interactive-primary hover:text-white text-text-primary rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 font-semibold">
                    Background
                  </span>
                </motion.button>

                <motion.button
                  className="group px-6 py-4 bg-gradient-to-r from-primary-400 to-primary-600 hover:from-primary-500 hover:to-primary-700 text-white rounded-lg shadow-lg hover:shadow-primary-500/25"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 font-semibold">Gradient</span>
                </motion.button>
              </div>
            </div>
          </div>

          {/* Color Palette Showcase */}
          <div className="mb-16">
            <motion.h2
              className="text-3xl font-bold text-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Color Palette
            </motion.h2>
            <div className="glass rounded-2xl p-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-400 rounded-lg mx-auto mb-2"></div>
                  <p className="text-xs text-text-secondary">Primary 400</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-500 rounded-lg mx-auto mb-2"></div>
                  <p className="text-xs text-text-secondary">Primary 500</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 rounded-lg mx-auto mb-2"></div>
                  <p className="text-xs text-text-secondary">Primary 600</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-700 rounded-lg mx-auto mb-2"></div>
                  <p className="text-xs text-text-secondary">Primary 700</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-success-500 rounded-lg mx-auto mb-2"></div>
                  <p className="text-xs text-text-secondary">Success</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-warning-500 rounded-lg mx-auto mb-2"></div>
                  <p className="text-xs text-text-secondary">Warning</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-error-500 rounded-lg mx-auto mb-2"></div>
                  <p className="text-xs text-text-secondary">Error</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-info-500 rounded-lg mx-auto mb-2"></div>
                  <p className="text-xs text-text-secondary">Info</p>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Link href="/">
                <motion.div
                  className="inline-flex items-center gap-2 px-6 py-3 bg-interactive-primary hover:bg-interactive-primary-hover text-white rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Back to Home
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}
