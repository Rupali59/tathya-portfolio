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
      {/* Emblem Icon */}
      <motion.div
        layoutId={layoutId}
        className={`${sizeClasses[size]} relative`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <svg
          className="tathya-logo w-full h-full"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Hexagon Socket - Architectural Frame */}
          <path
            d="M60 10 L105 35 V85 L60 110 L15 85 V35 Z"
            stroke="#121212"
            strokeWidth="0.5"
            opacity="0.3"
          />

          {/* Combined Trace and Nodes Group */}
          <motion.g
            filter={mounted ? `url(#${filterId})` : undefined}
            stroke="#2563eb"
            strokeWidth="2"
            animate={mounted ? { opacity: [0.7, 1, 0.7] } : {}}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Horizontal Trace */}
            <motion.path
              d="M35 40 H85"
              initial={mounted ? { pathLength: 0 } : false}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            {/* Vertical Trace */}
            <motion.path
              d="M60 40 V80"
              initial={mounted ? { pathLength: 0 } : false}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            />

            {/* Micro-Nodes at Joints */}
            <circle cx="35" cy="40" r="1.5" fill="#2563eb" />
            <circle cx="85" cy="40" r="1.5" fill="#2563eb" />
            <circle cx="60" cy="80" r="1.5" fill="#2563eb" />
            <circle cx="60" cy="40" r="1.5" fill="#2563eb" />
          </motion.g>

          {/* LED Heart */}
          <motion.circle
            cx="105"
            cy="35"
            r="3"
            fill="#10b981"
            animate={
              mounted
                ? {
                    opacity: [0.4, 1, 0.4],
                    scale: [0.9, 1.1, 0.9],
                    filter: [
                      "drop-shadow(0 0 2px #10b981)",
                      "drop-shadow(0 0 6px #10b981)",
                      "drop-shadow(0 0 2px #10b981)",
                    ],
                  }
                : {}
            }
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </motion.div>
    </div>
  );
}
