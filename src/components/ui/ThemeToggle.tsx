"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "../../contexts/ThemeContext";

// Clean SVG icons for themes
const SunIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

const MoonIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
);

const MonitorIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

// Internal component that uses the theme context
function ThemeToggleInternal() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    {
      value: "light",
      label: "Light",
      icon: SunIcon,
    },
    {
      value: "dark",
      label: "Dark",
      icon: MoonIcon,
    },
    {
      value: "system",
      label: "System",
      icon: MonitorIcon,
    },
  ] as const;

  const currentTheme = themes.find((t) => t.value === theme) || themes[1];
  const CurrentIcon = currentTheme.icon;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-background-secondary/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-interactive-primary/20"
        aria-label="Toggle theme"
      >
        <CurrentIcon className="w-5 h-5" />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-2 w-32 bg-background-elevated/95 backdrop-blur-sm border border-border-primary/50 rounded-lg shadow-lg z-50 overflow-hidden">
            {themes.map((themeOption) => {
              const IconComponent = themeOption.icon;
              return (
                <button
                  key={themeOption.value}
                  onClick={() => {
                    setTheme(themeOption.value);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors duration-150 ${
                    theme === themeOption.value
                      ? "bg-interactive-primary/10 text-interactive-primary"
                      : "text-text-secondary hover:text-text-primary hover:bg-background-secondary/50"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="font-medium">{themeOption.label}</span>
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

// Export the dynamically imported component to prevent SSR issues
export const ThemeToggle = dynamic(() => Promise.resolve(ThemeToggleInternal), {
  ssr: false,
  loading: () => (
    <div className="p-2 rounded-lg text-text-secondary">
      <div className="w-5 h-5" />
    </div>
  ),
});
