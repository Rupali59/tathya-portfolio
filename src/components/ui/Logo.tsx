"use client";

import { motion } from "framer-motion";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  className?: string;
  useLogo?: boolean; // true for logo.png, false for favicon.png
}

export default function Logo({
  size = "md",
  showTagline = true,
  className = "",
  useLogo = false,
}: LogoProps): JSX.Element {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "h-16 w-auto", // Full header height (64px) with auto width
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Logo Icon */}
      <motion.div
        className={`${sizeClasses[size]} relative`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <img
          src={
            useLogo
              ? "/images/assets/logos/logo.png"
              : "/images/assets/logos/favicon.png"
          }
          alt="Tathya Logo"
          className="w-full h-full object-contain"
        />
      </motion.div>
    </div>
  );
}
