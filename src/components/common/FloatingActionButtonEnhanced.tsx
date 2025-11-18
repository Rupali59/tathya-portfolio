"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { GitHubIssues, createContextualIssue } from "@/lib/githubIssues";

interface FloatingActionButtonProps {
  onClick?: () => void;
  className?: string;
  showMenu?: boolean; // Option to show a menu with different issue types
}

export default function FloatingActionButton({
  onClick,
  className = "",
  showMenu = false,
}: FloatingActionButtonProps): JSX.Element {
  const bugRef = useRef<HTMLDivElement>(null);
  const legsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // Handle menu animations
  useEffect(() => {
    if (!menuRef.current) return;

    if (isMenuOpen) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, scale: 0.8, y: 10 },
        { opacity: 1, scale: 1, y: 0, duration: 0.2, ease: "back.out(1.7)" }
      );
    } else {
      gsap.to(menuRef.current, {
        opacity: 0,
        scale: 0.8,
        y: 10,
        duration: 0.15,
        ease: "power2.in",
      });
    }
  }, [isMenuOpen]);

  const handleReportIssue = () => {
    if (showMenu) {
      setIsMenuOpen(!isMenuOpen);
    } else {
      // Use contextual issue creation based on current page
      createContextualIssue();
    }

    if (onClick) {
      onClick();
    }
  };

  const handleMenuAction = (action: () => void) => {
    action();
    setIsMenuOpen(false);
    if (onClick) {
      onClick();
    }
  };

  const menuItems = [
    {
      label: "🐛 Bug Report",
      action: () => GitHubIssues.bugReport(),
      description: "Report a bug or unexpected behavior",
    },
    {
      label: "✨ Feature Request",
      action: () => GitHubIssues.featureRequest(),
      description: "Suggest a new feature or enhancement",
    },
    {
      label: "📖 Documentation",
      action: () => GitHubIssues.documentation(),
      description: "Request documentation improvements",
    },
    {
      label: "❓ Question",
      action: () => GitHubIssues.question(),
      description: "Ask a question or get help",
    },
  ];

  return (
    <div className={`floating-button-container ${className}`}>
      {/* Bug Report Button - The bug itself is the button */}
      <button
        ref={buttonRef}
        onClick={handleReportIssue}
        className="bug-button relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-warning-500 focus:ring-offset-2 focus:ring-offset-background-primary group"
        aria-label={showMenu ? "Open issue menu" : "Report a bug"}
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

      {/* Issue Type Menu */}
      {showMenu && (
        <div
          ref={menuRef}
          className={`absolute bottom-16 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-2 min-w-64 z-50 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-2 px-2 py-1 font-medium">
            Choose Issue Type:
          </div>
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleMenuAction(item.action)}
              className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150 group"
            >
              <div className="font-medium text-sm text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {item.label}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                {item.description}
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Click outside to close menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
}
