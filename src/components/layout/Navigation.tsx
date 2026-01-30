"use client";

import { AnimatePresence, motion } from "framer-motion";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import WebAuthnHandshake from "@/components/common/WebAuthnHandshake";
import { useScroll, useSpring } from "framer-motion";
import { useRouter } from "next/navigation";
import Logo from "@/components/common/Logo";
import { useTactileEvents } from "@/providers/TactileProvider";

export default function Navigation(): JSX.Element {
  const mobileTactile = useTactileEvents("soft");
  const soft = useTactileEvents("soft");
  const heavy = useTactileEvents("heavy");
  const [isScrolledToBuild, setIsScrolledToBuild] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showHandshake, setShowHandshake] = useState(false);
  const router = useRouter();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    setMounted(true);

    // IntersectionObserver is significantly more performant than scroll listeners
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolledToBuild(entry.isIntersecting);
      },
      { threshold: 0.1 }, // Trigger when 10% of the section is visible
    );

    const buildSection = document.getElementById("configuration-bay");
    if (buildSection) {
      observer.observe(buildSection);
    }

    return () => {
      if (buildSection) observer.unobserve(buildSection);
    };
  }, []);

  const handleClientLogin = () => {
    setShowHandshake(true);
  };

  const handleHandshakeComplete = () => {
    setShowHandshake(false);
    // After handshake, scroll to build or show a dashboard simulation
    setShowHandshake(false);
    router.push("/dashboard");
  };

  // Avoid hydration mismatch by rendering a stable structure initially
  const statusLedClass = mounted && isScrolledToBuild ? "emerald" : "sapphire";

  return (
    <>
      <AnimatePresence>
        {showHandshake && (
          <WebAuthnHandshake onComplete={handleHandshakeComplete} />
        )}
      </AnimatePresence>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] z-[60] origin-left"
        // eslint-disable-next-line no-restricted-syntax
        style={{ scaleX }}
      />

      {/* Desktop: System Bar */}
      <nav
        className="hidden md:block fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl shadow-sm"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 h-full">
          <div className="flex items-center justify-between h-20">
            {/* Left Section: Logo - flex-1 to push center to middle */}
            <div className="flex-1 flex items-center">
              <NextLink
                href="/"
                className="flex items-center gap-2 group transition-all"
                aria-label="Tathya.dev homepage"
                onPointerDown={soft.onPointerDown}
              >
                <Logo size="xs" layoutId="tathya-main-logo" />
                <span className="font-mono text-base font-bold tracking-widest text-foreground group-hover:text-primary transition-colors">
                  TATHYA.DEV
                </span>
              </NextLink>
              <div
                className={`ml-4 w-2 h-2 rounded-full shadow-[0_0_8px] ${
                  statusLedClass === "emerald"
                    ? "bg-secondary shadow-[0_0_8px_var(--glow-emerald-color)]"
                    : "bg-primary shadow-[0_0_8px_var(--glow-sapphire-color)]"
                }`}
                role="status"
              />
            </div>

            {/* Center Section: Navigation Links - flex-1 and justify-center */}
            <div className="flex-[2] flex justify-center">
              <ul className="flex items-center gap-12 list-none m-0 p-0">
                <li>
                  <NextLink
                    href="/#the-engine"
                    className="font-mono text-[11px] font-bold tracking-[0.2em] transition-all text-muted-foreground hover:text-primary"
                    onPointerDown={soft.onPointerDown}
                  >
                    THE_ENGINE
                  </NextLink>
                </li>
                <li>
                  <NextLink
                    href="/#the-inventory"
                    className="font-mono text-[11px] font-bold tracking-[0.2em] transition-all text-muted-foreground hover:text-primary"
                    onPointerDown={soft.onPointerDown}
                  >
                    THE_INVENTORY
                  </NextLink>
                </li>
                <li>
                  <NextLink
                    href="/#configuration-bay"
                    className="font-mono text-[11px] font-bold tracking-[0.2em] transition-all text-muted-foreground hover:text-primary"
                    onPointerDown={soft.onPointerDown}
                  >
                    REQUEST_BUILD
                  </NextLink>
                </li>
              </ul>
            </div>

            {/* Right Section: Toggle + Shell - flex-1 to push center to middle */}
            <div className="flex-1 flex items-center justify-end gap-6">
              <ThemeToggle />
              <motion.button
                onPointerDown={(e) => {
                  heavy.onPointerDown(e);
                  handleClientLogin();
                }}
                className="px-5 py-2 rounded-lg font-mono text-xs font-bold transition-all border border-border hover:border-primary/50 bg-muted text-foreground hover:text-primary whitespace-nowrap shadow-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Access system shell"
              >
                [ ENTER_VAULT ]
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile: Bottom Command Bar */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/80 backdrop-blur-2xl px-6 py-4"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between gap-6">
          <NextLink href="/" className="flex-shrink-0">
            <Logo size="xs" />
          </NextLink>

          <ul className="flex items-center justify-center gap-8 flex-1 overflow-x-auto no-scrollbar scrollbar-hide list-none m-0 p-0">
            <li>
              <NextLink
                href="/#the-engine"
                className="font-mono text-[10px] font-bold tracking-widest text-muted-foreground hover:text-primary transition-colors py-2 whitespace-nowrap"
                onPointerDown={mobileTactile.onPointerDown}
              >
                ENGINE
              </NextLink>
            </li>
            <li>
              <NextLink
                href="/#the-inventory"
                className="font-mono text-[10px] font-bold tracking-widest text-muted-foreground hover:text-primary transition-colors py-2 whitespace-nowrap"
                onPointerDown={mobileTactile.onPointerDown}
              >
                INVENTORY
              </NextLink>
            </li>
            <li>
              <NextLink
                href="/#configuration-bay"
                className="font-mono text-[10px] font-bold tracking-widest text-muted-foreground hover:text-primary transition-colors py-2 whitespace-nowrap"
                onPointerDown={mobileTactile.onPointerDown}
              >
                BUILD
              </NextLink>
            </li>
          </ul>

          <motion.button
            onPointerDown={(e) => {
              mobileTactile.onPointerDown(e);
              handleClientLogin();
            }}
            className="px-4 py-2 rounded-md font-mono text-[10px] font-bold border border-border bg-muted text-foreground shadow-sm whitespace-nowrap"
            whileTap={{ scale: 0.95 }}
            aria-label="Access system shell"
          >
            VAULT
          </motion.button>
        </div>
      </nav>
    </>
  );
}
