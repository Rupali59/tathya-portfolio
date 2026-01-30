"use client";

import { motion } from "framer-motion";
import OptimizedImage from "@/components/common/OptimizedImage";
import { useRef, useState } from "react";

export default function Hero(): JSX.Element {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x =
      "touches" in e
        ? e.touches[0].clientX - rect.left
        : (e as React.MouseEvent).clientX - rect.left;
    const position = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-12 overflow-hidden bg-background text-foreground"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleMouseMove}
    >
      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8 tracking-tighter leading-none">
            Your Business. Our Engine. <br className="hidden md:block" />
            <span className="text-blue-500">Custom Built for Growth.</span>
          </h1>
          <p className="text-lg md:text-2xl max-w-4xl mx-auto font-mono text-zinc-400 leading-relaxed">
            Templates are for hobbies. Motherboard is for Infrastructure.{" "}
            <br className="hidden sm:block" />
            Stop managing your tech. Start leading your legacy.
          </p>
        </motion.header>

        {/* Split Reveal Container */}
        <div className="relative w-full max-w-6xl mx-auto aspect-[16/9] md:aspect-[21/9] rounded-3xl border border-white/10 overflow-hidden shadow-2xl bg-zinc-950 transform group">
          {/* Right Side: Business Dashboard (SMB View) */}
          <div className="absolute inset-0">
            <div className="w-full h-full relative">
              <OptimizedImage
                src="/images/dashboard-hero.webp"
                alt="Business Dashboard View"
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover brightness-75 transition-all duration-700 group-hover:brightness-100"
                priority
              />
              <div className="absolute inset-0 bg-background/20 dark:bg-background/40" />
            </div>
          </div>

          {/* Left Side: Motherboard Core (Engineering View) */}
          <div
            className="absolute inset-0 z-20 pointer-events-none overflow-hidden"
            // eslint-disable-next-line no-restricted-syntax
            style={{
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            }}
          >
            <div className="w-full h-full relative">
              <OptimizedImage
                src="/images/hero-motherboard.webp"
                alt="Engineering View"
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-y-0 right-0 w-[2px] bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
            </div>
          </div>

          <div className="absolute top-8 left-0 right-0 z-40 flex justify-between px-8 pointer-events-none">
            {/* Left Labels (Inputs/Problems) */}
            <motion.div
              className="flex flex-col gap-2"
              animate={{
                opacity: sliderPosition > 10 ? 1 : 0,
                x: sliderPosition > 10 ? 0 : -20,
              }}
            >
              {[
                "[ MANUAL_BILLING ]",
                "[ WHATSAPP_LEADS ]",
                "[ INVENTORY_CHAOS ]",
              ].map((label) => (
                <div
                  key={label}
                  className="px-4 py-2 rounded bg-black/80 text-white text-[10px] font-mono font-bold tracking-widest border border-white/10 backdrop-blur-md"
                >
                  {label}
                </div>
              ))}
            </motion.div>

            {/* Right Labels (Outputs/Solutions) */}
            <motion.div
              className="flex flex-col gap-2 items-end"
              animate={{
                opacity: sliderPosition < 90 ? 1 : 0,
                x: sliderPosition < 90 ? 0 : 20,
              }}
            >
              {[
                "[ 99.9%_UPTIME ]",
                "[ AUTOMATED_REVENUE ]",
                "[ SECURE_ASSETS ]",
              ].map((label) => (
                <div
                  key={label}
                  className="px-4 py-2 rounded bg-emerald-950/80 text-emerald-400 text-[10px] font-mono font-bold tracking-widest border border-emerald-500/30 backdrop-blur-md shadow-[0_0_10px_rgba(16,185,129,0.2)]"
                >
                  {label}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <button
            onClick={() =>
              document
                .getElementById("request-build")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative px-10 py-5 bg-white text-black font-mono text-sm font-bold tracking-widest rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-3">
              INITIALIZE_INFRASTRUCTURE
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            </span>
          </button>
        </motion.div>
      </div>

      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        // eslint-disable-next-line no-restricted-syntax
        style={{
          backgroundImage: "radial-gradient(circle, #333 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </section>
  );
}
