"use client";

import { motion } from "framer-motion";
import NextLink from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-black overflow-hidden font-mono">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none [background-image:linear-gradient(#333_1px,transparent_1px),linear-gradient(90deg,#333_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="z-10 text-center space-y-6 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <h1 className="text-[120px] md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-zinc-700 to-black leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-blue-500 text-xl md:text-3xl tracking-[0.5em] font-bold uppercase border border-blue-500/30 bg-zinc-100 dark:bg-black/80 backdrop-blur-sm px-8 py-4 rounded-sm">
              System Error
            </span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-zinc-500 max-w-md mx-auto text-sm md:text-base leading-relaxed"
        >
          The requested module could not be located in the current sector.
          Please realign your coordinates or return to the main dashboard.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <NextLink
            href="/"
            className="inline-block px-8 py-3 bg-blue-600/10 border border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white transition-all duration-300 uppercase tracking-widest text-xs font-bold rounded"
          >
            Reboot / Return Home
          </NextLink>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-10 text-zinc-800 text-[10px] tracking-[0.2em] uppercase hidden md:block">
        Error_Code: ID_10T
      </div>
      <div className="absolute bottom-10 right-10 text-zinc-800 text-[10px] tracking-[0.2em] uppercase hidden md:block">
        System_Status: Critical
      </div>
    </div>
  );
}
