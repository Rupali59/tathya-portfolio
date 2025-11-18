"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { GitHubIssues } from "@/lib/githubIssues";

interface FloatingActionButtonProps {
  onClick?: () => void;
  className?: string;
}

export default function FloatingActionButton({
  onClick,
  className = "",
}: FloatingActionButtonProps): JSX.Element {
  const bugRef = useRef<HTMLDivElement>(null);
  const legsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!bugRef.current || !legsRef.current) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return; // Skip animations if user prefers reduced motion
    }

    // Create GSAP timeline for bug walking animation
    const tl = gsap.timeline({ repeat: -1, ease: "power2.inOut" });

    // Bug body movement (up and down)
    tl.to(bugRef.current, {
      y: -16,
      rotation: 2,
      duration: 1.5,
      ease: "power2.inOut",
    }).to(bugRef.current, {
      y: 0,
      rotation: 0,
      duration: 1.5,
      ease: "power2.inOut",
    });

    // Legs animation (walking motion)
    gsap.to(legsRef.current, {
      scaleY: 0.8,
      duration: 0.3,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });

    // Add hover effects
    const handleMouseEnter = () => {
      gsap.to(tl, { timeScale: 2 }); // Speed up animation on hover
    };

    const handleMouseLeave = () => {
      gsap.to(tl, { timeScale: 1 }); // Return to normal speed
    };

    if (buttonRef.current) {
      buttonRef.current.addEventListener("mouseenter", handleMouseEnter);
      buttonRef.current.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      tl.kill();
      gsap.killTweensOf([bugRef.current, legsRef.current]);
      if (buttonRef.current) {
        buttonRef.current.removeEventListener("mouseenter", handleMouseEnter);
        buttonRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const handleReportIssue = () => {
    // Use the GitHub Issues utility to create a bug report
    GitHubIssues.bugReport();
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={`floating-button-container ${className}`}>
      {/* Bug Report Button - The bug itself is the button */}
      <button
        ref={buttonRef}
        onClick={handleReportIssue}
        className="bug-button relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-warning-500 focus:ring-offset-2 focus:ring-offset-background-primary group"
        aria-label="Report a bug"
      >
        {/* Custom Bug Icon - Spider Style */}
        <div ref={bugRef} className="relative">
          {/* Spider Body */}
          <div className="w-6 h-4 bg-gray-800 rounded-full relative shadow-lg">
            {/* Spider Head */}
            <div className="w-2 h-2 bg-gray-800 rounded-full absolute -top-0.5 left-2"></div>

            {/* Spider Eyes */}
            <div className="w-0.5 h-0.5 bg-white rounded-full absolute -top-0.5 left-1.8"></div>
            <div className="w-0.5 h-0.5 bg-white rounded-full absolute -top-0.5 left-2.2"></div>
            <div className="w-0.5 h-0.5 bg-white rounded-full absolute -top-0.5 left-2.6"></div>
            <div className="w-0.5 h-0.5 bg-white rounded-full absolute -top-0.5 left-3"></div>

            {/* Spider Legs - 8 legs total */}
            <div ref={legsRef} className="relative">
              {/* Front legs */}
              <div className="w-0.5 h-4 bg-gray-800 absolute -left-1 top-0.5 transform rotate-45"></div>
              <div className="w-0.5 h-4 bg-gray-800 absolute -right-1 top-0.5 transform -rotate-45"></div>

              {/* Second pair */}
              <div className="w-0.5 h-4 bg-gray-800 absolute -left-1 top-1 transform rotate-20"></div>
              <div className="w-0.5 h-4 bg-gray-800 absolute -right-1 top-1 transform -rotate-20"></div>

              {/* Third pair */}
              <div className="w-0.5 h-4 bg-gray-800 absolute -left-1 top-1.5 transform -rotate-20"></div>
              <div className="w-0.5 h-4 bg-gray-800 absolute -right-1 top-1.5 transform rotate-20"></div>

              {/* Back legs */}
              <div className="w-0.5 h-4 bg-gray-800 absolute -left-1 top-2 transform -rotate-45"></div>
              <div className="w-0.5 h-4 bg-gray-800 absolute -right-1 top-2 transform rotate-45"></div>
            </div>

            {/* Spider Pattern */}
            <div className="w-1 h-0.5 bg-gray-600 rounded-full absolute top-1 left-1"></div>
            <div className="w-1 h-0.5 bg-gray-600 rounded-full absolute top-1 right-1"></div>
          </div>
        </div>
      </button>
    </div>
  );
}
