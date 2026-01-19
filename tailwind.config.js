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
        // Base Palette Colors - Tactile Dark-Engine Theme
        primary: "#0F52BA", // Sapphire Blue - Primary Glow
        secondary: "#50C878", // Emerald Green - Success/Action Glow
        accent: "#0F52BA", // Sapphire Blue accent
        background: "#000000", // Pure Black - Primary Background
        surface: "#121212", // Dark Charcoal - Surface Material
        text: "#FFFFFF", // White text for contrast
        
        // Tactile Dark-Engine Theme Colors
        "sapphire-blue": "#0F52BA",
        "sapphire-blue-20": "rgba(15, 82, 186, 0.2)",
        "sapphire-blue-10": "rgba(15, 82, 186, 0.1)",
        "emerald-green": "#50C878",
        "pure-black": "#000000",
        "dark-charcoal": "#121212",

        // Extended Ocean Palette - Caribbean Current
        "primary-50": "#f0fdfa",
        "primary-100": "#ccfbf1",
        "primary-200": "#99f6e4",
        "primary-300": "#5eead4",
        "primary-400": "#2dd4bf",
        "primary-500": "#14b8a6",
        "primary-600": "#0d9488",
        "primary-700": "#0f766e",
        "primary-800": "#115e59",
        "primary-900": "#0d5c63",

        // Ocean Color Palette - Tathya Brand Colors
        "baby-powder": "#fffffa",
        "baby-powder-100": "#F8FAFC",
        "baby-powder-200": "#F1F5F9",

        "caribbean-current": "#0d5c63",
        "caribbean-current-300": "#4A9FA0",
        "caribbean-current-600": "#004D4E",
        "caribbean-current-700": "#003A3B",

        teal: "#247b7b",
        "teal-300": "#5EEAD4",

        verdigris: "#44a1a0",
        "verdigris-300": "#67E8F9",

        "tiffany-blue": "#78cdd7",
        "tiffany-blue-200": "#99F6E4",
        "tiffany-blue-300": "#5EEAD4",
        "tiffany-blue-400": "#2DD4BF",
        "tiffany-blue-500": "#78cdd7",

        "cta-color": "#2fb6b6",

        // Extended Ocean Palette - Verdigris
        "secondary-50": "#f0fdfa",
        "secondary-100": "#ccfbf1",
        "secondary-200": "#99f6e4",
        "secondary-300": "#5eead4",
        "secondary-400": "#2dd4bf",
        "secondary-500": "#14b8a6",
        "secondary-600": "#0d9488",
        "secondary-700": "#0f766e",
        "secondary-800": "#115e59",
        "secondary-900": "#44a1a0",

        // Extended Ocean Palette - Tiffany Blue
        "accent-50": "#f0fdfa",
        "accent-100": "#ccfbf1",
        "accent-200": "#99f6e4",
        "accent-300": "#5eead4",
        "accent-400": "#2dd4bf",
        "accent-500": "#14b8a6",
        "accent-600": "#0d9488",
        "accent-700": "#0f766e",
        "accent-800": "#115e59",
        "accent-900": "#78cdd7",

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
        // Semantic colors (Ocean themed)
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
        cta: {
          color: "var(--cta-color)",
        },

        // Dark Theme Ocean Colors
        "dark-bg": {
          primary: "var(--dark-bg-primary)",
          secondary: "var(--dark-bg-secondary)",
          tertiary: "var(--dark-bg-tertiary)",
          elevated: "var(--dark-bg-elevated)",
        },
        "dark-text": {
          primary: "var(--dark-text-primary)",
          secondary: "var(--dark-text-secondary)",
          tertiary: "var(--dark-text-tertiary)",
          inverse: "var(--dark-text-inverse)",
        },
        "dark-border": {
          primary: "var(--dark-border-primary)",
          secondary: "var(--dark-border-secondary)",
          focus: "var(--dark-border-focus)",
        },
        "dark-surface": {
          primary: "var(--dark-surface-primary)",
          secondary: "var(--dark-surface-secondary)",
          elevated: "var(--dark-surface-elevated)",
        },
        "dark-interactive": {
          primary: "var(--dark-interactive-primary)",
          "primary-hover": "var(--dark-interactive-primary-hover)",
          "primary-active": "var(--dark-interactive-primary-active)",
          secondary: "var(--dark-interactive-secondary)",
          "secondary-hover": "var(--dark-interactive-secondary-hover)",
          "secondary-active": "var(--dark-interactive-secondary-active)",
        },
        "dark-cta": {
          bg: "var(--dark-cta-bg)",
          hover: "var(--dark-cta-hover)",
          text: "var(--dark-cta-text)",
        },
        "dark-btn": {
          "secondary-bg": "var(--dark-btn-secondary-bg)",
          "secondary-hover": "var(--dark-btn-secondary-hover)",
          "secondary-text": "var(--dark-btn-secondary-text)",
        },
        "dark-card": {
          bg: "var(--dark-card-bg)",
          border: "var(--dark-card-border)",
        },
        "dark-divider": "var(--dark-divider)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "Times New Roman", "serif"],
        mono: ["var(--font-mono)", "monospace"],
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
