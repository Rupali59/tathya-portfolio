"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={true}
      disableTransitionOnChange={false}
      storageKey="tathya-theme"
      enableColorScheme={true}
      // Force the theme to apply immediately
      forcedTheme={undefined}
    >
      {children}
    </NextThemesProvider>
  );
}
