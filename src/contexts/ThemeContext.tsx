"use client";

import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark";
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light"); // Default to light theme for Architect's Studio
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  // Handle hydration and initial theme setup
  useEffect(() => {
    setMounted(true);

    // Get initial theme from localStorage or system preference
    try {
      const savedTheme = localStorage.getItem("theme") as Theme;
      if (savedTheme && ["light", "dark", "system"].includes(savedTheme)) {
        setTheme(savedTheme);
      } else {
        // Set default theme immediately to prevent flash
        setTheme("system");
      }
    } catch (_error) {
      // Handle localStorage access errors during SSR
      setTheme("system");
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    try {
      const root = window.document.documentElement;

      // Remove existing theme classes
      root.classList.remove("light", "dark");
      root.removeAttribute("data-theme");

      if (theme === "system") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? "dark"
          : "light";
        root.classList.add(systemTheme);
        root.setAttribute("data-theme", systemTheme);
        setResolvedTheme(systemTheme);
      } else {
        root.classList.add(theme);
        root.setAttribute("data-theme", theme);
        setResolvedTheme(theme);
      }

      // Save to localStorage
      localStorage.setItem("theme", theme);
    } catch (error) {
      // Handle browser API access errors during SSR
      console.warn("Theme context error:", error);
    }
  }, [theme, mounted]);

  useEffect(() => {
    if (!mounted) return;

    try {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      const handleChange = () => {
        if (theme === "system") {
          const systemTheme = mediaQuery.matches ? "dark" : "light";
          document.documentElement.classList.remove("light", "dark");
          document.documentElement.removeAttribute("data-theme");
          document.documentElement.classList.add(systemTheme);
          document.documentElement.setAttribute("data-theme", systemTheme);
          setResolvedTheme(systemTheme);
        }
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    } catch (error) {
      // Handle browser API access errors during SSR
      console.warn("Media query error:", error);
    }
  }, [theme, mounted]);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // Return default values instead of throwing error during SSR
    return {
      theme: "system" as Theme,
      setTheme: () => {},
      resolvedTheme: "light" as "light" | "dark",
    };
  }
  return context;
}
