/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base Palette Colors - Tathya Brand Colors
        primary: "#1E293B", // Slate-800 - Dark blue-gray
        secondary: "#0EA5E9", // Sky-500 - Bright blue
        accent: "#FACC15", // Yellow-400 - Bright yellow
        background: "#FFFFFF", // White
        text: "#111827", // Gray-900 - Dark gray

        // Extended Palette
        "primary-50": "#F8FAFC",
        "primary-100": "#F1F5F9",
        "primary-200": "#E2E8F0",
        "primary-300": "#CBD5E1",
        "primary-400": "#94A3B8",
        "primary-500": "#64748B",
        "primary-600": "#475569",
        "primary-700": "#334155",
        "primary-800": "#1E293B",
        "primary-900": "#0F172A",

        // Ocean Color Palette - Tathya Brand Colors
        "baby-powder": "#FEFEFE",
        "baby-powder-100": "#F8FAFC",
        "baby-powder-200": "#F1F5F9",

        "caribbean-current": "#006466",
        "caribbean-current-300": "#4A9FA0",
        "caribbean-current-600": "#004D4E",
        "caribbean-current-700": "#003A3B",

        teal: "#0D9488",
        "teal-300": "#5EEAD4",

        verdigris: "#0891B2",
        "verdigris-300": "#67E8F9",

        "tiffany-blue": "#14B8A6",
        "tiffany-blue-200": "#99F6E4",
        "tiffany-blue-300": "#5EEAD4",
        "tiffany-blue-400": "#2DD4BF",
        "tiffany-blue-500": "#14B8A6",

        "secondary-50": "#F0F9FF",
        "secondary-100": "#E0F2FE",
        "secondary-200": "#BAE6FD",
        "secondary-300": "#7DD3FC",
        "secondary-400": "#38BDF8",
        "secondary-500": "#0EA5E9",
        "secondary-600": "#0284C7",
        "secondary-700": "#0369A1",
        "secondary-800": "#075985",
        "secondary-900": "#0C4A6E",

        "accent-50": "#FEFCE8",
        "accent-100": "#FEF3C7",
        "accent-200": "#FDE68A",
        "accent-300": "#FCD34D",
        "accent-400": "#FACC15",
        "accent-500": "#EAB308",
        "accent-600": "#CA8A04",
        "accent-700": "#A16207",
        "accent-800": "#854D0E",
        "accent-900": "#713F12",

        // Semantic Color System
        // Background colors
        "bg-primary": "var(--bg-primary)",
        "bg-secondary": "var(--bg-secondary)",

        // Text colors
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",

        // Button colors
        "btn-cta-bg": "var(--btn-cta-bg)",
        "btn-cta-hover": "var(--btn-cta-hover)",
        "btn-cta-text": "var(--btn-cta-text)",
        "btn-secondary-bg": "var(--btn-secondary-bg)",
        "btn-secondary-hover": "var(--btn-secondary-hover)",
        "btn-secondary-text": "var(--btn-secondary-text)",

        // Card colors
        "card-bg": "var(--card-bg)",
        "card-border": "var(--card-border)",

        // Utility colors
        divider: "var(--divider)",
        accent: "var(--accent)",

        // Legacy theme-aware colors (keeping for backward compatibility)
        background: {
          primary: "var(--color-background-primary)",
          secondary: "var(--color-background-secondary)",
          tertiary: "var(--color-background-tertiary)",
          elevated: "var(--color-background-elevated)",
        },
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          tertiary: "var(--color-text-tertiary)",
          inverse: "var(--color-text-inverse)",
        },
        border: {
          primary: "var(--color-border-primary)",
          secondary: "var(--color-border-secondary)",
          focus: "var(--color-border-focus)",
        },
        surface: {
          primary: "var(--color-surface-primary)",
          secondary: "var(--color-surface-secondary)",
          elevated: "var(--color-surface-elevated)",
        },
        interactive: {
          primary: "var(--color-interactive-primary)",
          "primary-hover": "var(--color-interactive-primary-hover)",
          "primary-active": "var(--color-interactive-primary-active)",
          secondary: "var(--color-interactive-secondary)",
          "secondary-hover": "var(--color-interactive-secondary-hover)",
          "secondary-active": "var(--color-interactive-secondary-active)",
        },
        // Semantic colors
        success: {
          50: "var(--color-success-50)",
          500: "var(--color-success-500)",
          600: "var(--color-success-600)",
          700: "var(--color-success-700)",
        },
        warning: {
          50: "var(--color-warning-50)",
          500: "var(--color-warning-500)",
          600: "var(--color-warning-600)",
          700: "var(--color-warning-700)",
        },
        error: {
          50: "var(--color-error-50)",
          500: "var(--color-error-500)",
          600: "var(--color-error-600)",
          700: "var(--color-error-700)",
        },
        info: {
          50: "var(--color-info-50)",
          500: "var(--color-info-500)",
          600: "var(--color-info-600)",
          700: "var(--color-info-700)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      fontSize: {
        xs: "var(--font-size-xs)",
        sm: "var(--font-size-sm)",
        base: "var(--font-size-base)",
        lg: "var(--font-size-lg)",
        xl: "var(--font-size-xl)",
        "2xl": "var(--font-size-2xl)",
        "3xl": "var(--font-size-3xl)",
        "4xl": "var(--font-size-4xl)",
        "5xl": "var(--font-size-5xl)",
        "6xl": "var(--font-size-6xl)",
        "7xl": "var(--font-size-7xl)",
      },
      fontWeight: {
        light: "var(--font-weight-light)",
        normal: "var(--font-weight-normal)",
        medium: "var(--font-weight-medium)",
        semibold: "var(--font-weight-semibold)",
        bold: "var(--font-weight-bold)",
        extrabold: "var(--font-weight-extrabold)",
      },
      lineHeight: {
        tight: "var(--line-height-tight)",
        snug: "var(--line-height-snug)",
        normal: "var(--line-height-normal)",
        relaxed: "var(--line-height-relaxed)",
        loose: "var(--line-height-loose)",
      },
      spacing: {
        0: "var(--space-0)",
        1: "var(--space-1)",
        2: "var(--space-2)",
        3: "var(--space-3)",
        4: "var(--space-4)",
        5: "var(--space-5)",
        6: "var(--space-6)",
        8: "var(--space-8)",
        10: "var(--space-10)",
        12: "var(--space-12)",
        16: "var(--space-16)",
        20: "var(--space-20)",
        24: "var(--space-24)",
        32: "var(--space-32)",
      },
      borderRadius: {
        none: "var(--radius-none)",
        sm: "var(--radius-sm)",
        base: "var(--radius-base)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        "3xl": "var(--radius-3xl)",
        full: "var(--radius-full)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        base: "var(--shadow-base)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        "2xl": "var(--shadow-2xl)",
      },
      transitionDuration: {
        fast: "var(--transition-fast)",
        base: "var(--transition-base)",
        slow: "var(--transition-slow)",
      },
      zIndex: {
        dropdown: "var(--z-dropdown)",
        sticky: "var(--z-sticky)",
        fixed: "var(--z-fixed)",
        "modal-backdrop": "var(--z-modal-backdrop)",
        modal: "var(--z-modal)",
        popover: "var(--z-popover)",
        tooltip: "var(--z-tooltip)",
        toast: "var(--z-toast)",
      },
    },
  },
  plugins: [],
};
