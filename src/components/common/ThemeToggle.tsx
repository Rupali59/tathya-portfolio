"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/audio/soft-click.mp3");
    audioRef.current.volume = 0.4;
  }, []);

  if (!mounted) {
    return (
      <div
        className="w-16 h-8 rounded-full bg-muted border border-border"
        aria-hidden="true"
      />
    );
  }

  const toggleTheme = () => {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {}); // Ignore play errors (e.g. user hasn't interacted)
    }
  };

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative w-16 h-8 rounded-full border border-border transition-colors duration-500
        ${isDark ? "bg-card shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]" : "bg-zinc-200 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"}
      `}
      aria-label="Toggle Theme"
    >
      {/* Mechanical Track */}
      <div className="absolute inset-x-2 top-1/2 h-[1px] bg-border/50 -translate-y-1/2" />

      {/* Sliding Thumb */}
      <motion.div
        className="absolute top-1 left-1"
        initial={false}
        animate={{
          x: isDark ? 32 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
      >
        <div
          className={`
            w-6 h-6 rounded-full shadow-md flex items-center justify-center border
            ${
              isDark
                ? "bg-zinc-900 border-zinc-700 shadow-[0_0_10px_var(--glow-sapphire-color)] text-primary"
                : "bg-white border-white text-yellow-500"
            }
          `}
        >
          {isDark ? (
            <Moon className="w-3 h-3 text-primary animate-pulse-slow" />
          ) : (
            <Sun className="w-3 h-3 text-yellow-500" />
          )}
        </div>
      </motion.div>
    </button>
  );
}
