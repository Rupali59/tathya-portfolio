"use client";

import { motion } from "framer-motion";
import { useId, useEffect, useState } from "react";

interface LogoProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  layoutId?: string;
}

export default function Logo({
  size = "md",
  className = "",
  layoutId,
}: LogoProps): JSX.Element {
  const filterId = useId();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sizeClasses = {
    xs: "w-6 h-6",
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "h-16 w-auto",
    xl: "w-24 h-24",
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <motion.div
        layoutId={layoutId}
        className={`${sizeClasses[size]} relative`}
        // Pneumatic movement for layout transitions
        transition={{ layout: { duration: 0.8, ease: "circOut" } }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Neon Glow Filter */}
            <filter
              id={`${filterId}-glow`}
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Grain Texture Pattern */}
            <pattern
              id={`${filterId}-grain`}
              width="4"
              height="4"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="2"
                height="2"
                fill="#ffffff"
                fillOpacity="0.1"
              />
            </pattern>

            {/* Gradient for Traces */}
            <linearGradient
              id={`${filterId}-trace`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Layer 1: The Bed (Hexagonal Base with Texture) */}
          <path
            d="M60 10 L105 35 V85 L60 110 L15 85 V35 Z"
            fill="#0f172a"
            stroke="#1e293b"
            strokeWidth="1"
            opacity="0.9"
          />
          <path
            d="M60 10 L105 35 V85 L60 110 L15 85 V35 Z"
            fill={`url(#${filterId}-grain)`}
            opacity="0.3"
          />

          {/* Layer 2: The Traces (Pulsing Sapphire) */}
          <g>
            {/* Inner Trace Circuit */}
            <motion.path
              d="M35 45 H55 V75 H85"
              fill="none"
              stroke={`url(#${filterId}-trace)`}
              strokeWidth="1"
              initial={mounted ? { pathLength: 0, opacity: 0 } : false}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.path
              d="M85 75 V45 H65"
              fill="none"
              stroke={`url(#${filterId}-trace)`}
              strokeWidth="1"
              initial={mounted ? { pathLength: 0, opacity: 0 } : false}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 3,
                delay: 0.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </g>

          {/* Layer 3: The Core (Thick Neon "T") */}
          <motion.path
            d="M40 35 H80 V45 H65 V85 H55 V45 H40 Z"
            fill="#3b82f6"
            filter={mounted ? `url(#${filterId}-glow)` : undefined}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Layer 4: The LED (Emerald Heartbeat) */}
          <motion.rect
            x="75"
            y="80"
            width="3"
            height="3"
            fill="#10b981"
            filter={`drop-shadow(0 0 4px #10b981)`}
            animate={{ opacity: [0, 1, 0, 0] }}
            transition={{
              duration: 3,
              times: [0, 0.1, 0.2, 1], // Quick blink, long pause
              repeat: Infinity,
            }}
          />
        </svg>
      </motion.div>
    </div>
  );
}
