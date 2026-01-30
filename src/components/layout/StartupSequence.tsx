"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../common/Logo";

export default function StartupSequence({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState(false);
  const [isReady, setIsReady] = useState(false);

  // Custom prestige loading messages for Indian SMB audience
  const loadingMessages = [
    "POST_SEQUENCE_INIT...",
    "MAPPING_INFRASTRUCTURE...",
    "INITIALIZING_GO_RUNTIME...",
    "OPTIMIZING_LATENCY_ENGINES...",
    "SYSTEM_READY: TATHYA_ONLINE",
  ];

  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    // Check if this is the first visit in this session
    // We use sessionStorage so it persists across reloads in same tab,
    // but resets when tab is closed (new session)
    const hasVisited = sessionStorage.getItem("tathya_booted");

    if (!hasVisited) {
      setShowSplash(true);

      // Cycle through messages
      const messageInterval = setInterval(() => {
        setMessageIndex((prev) =>
          prev < loadingMessages.length - 1 ? prev + 1 : prev,
        );
      }, 750); // Change message every 750ms

      // Initialize the boot sequence
      const timer = setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem("tathya_booted", "true");
        clearInterval(messageInterval);
      }, 3000); // 3-second prestige animation

      return () => {
        clearTimeout(timer);
        clearInterval(messageInterval);
      };
    }

    setIsReady(true);
  }, []);

  // Shared layout ID for the logo morphing effect
  const LOGO_LAYOUT_ID = "tathya-main-logo";

  return (
    <AnimatePresence mode="wait">
      {showSplash ? (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black pointer-events-auto"
          exit={{
            opacity: 0,
            scale: 0.95,
            filter: "blur(10px)",
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
            pointerEvents: "none",
          }}
        >
          {/* THE EMBLEM CORE */}
          <Logo size="xl" layoutId={LOGO_LAYOUT_ID} className="z-10" />

          {/* THE PROGRESS TRACE */}
          <div className="mt-12 w-48 h-[1px] bg-white/10 relative overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-emerald-500 shadow-[0_0_8px_#10b981]"
            />
          </div>

          <motion.p
            key={messageIndex}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
            className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-blue-500"
          >
            {loadingMessages[messageIndex]}
          </motion.p>
        </motion.div>
      ) : (
        <motion.div
          key="main-site"
          initial={
            isReady
              ? {
                  opacity: 0,
                  scale: 1.05,
                  filter: "blur(20px) brightness(0.5)",
                }
              : { opacity: 0 }
          }
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px) brightness(1)",
            transition: {
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1], // Custom "Power-On" Cubic Bezier
            },
          }}
          className="contents" // Use contents so this div doesn't affect layout
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
