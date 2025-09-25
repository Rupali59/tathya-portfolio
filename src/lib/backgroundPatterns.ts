/**
 * Consistent alternating background patterns for the application
 * This ensures all pages follow the same visual rhythm
 */

export const BACKGROUND_PATTERNS = {
  // Primary background (light)
  PRIMARY: "bg-background-primary",
  
  // Secondary background (slightly different shade)
  SECONDARY: "bg-background-secondary",
  
  // Tertiary background (for forms, special sections)
  TERTIARY: "bg-background-tertiary",
  
  // Hero background (custom image)
  HERO: "bg-hero-pattern",
} as const;

/**
 * Page section background pattern
 * Defines the alternating pattern for main page sections
 */
export const PAGE_SECTION_PATTERN = [
  BACKGROUND_PATTERNS.HERO,      // Hero section (background image)
  BACKGROUND_PATTERNS.SECONDARY, // Services
  BACKGROUND_PATTERNS.HERO,      // Portfolio (background image)
  BACKGROUND_PATTERNS.SECONDARY, // Team
  BACKGROUND_PATTERNS.HERO,      // FAQ (background image)
] as const;

/**
 * Get background class for a section index
 * @param index - The section index (0-based)
 * @returns The appropriate background class
 */
export function getSectionBackground(index: number): string {
  const patternIndex = index % PAGE_SECTION_PATTERN.length;
  return PAGE_SECTION_PATTERN[patternIndex];
}

/**
 * Get background class for a page
 * @param pageName - The page name
 * @returns The appropriate background class
 */
export function getPageBackground(pageName: string): string {
  const pageBackgrounds: Record<string, string> = {
    // Main pages
    home: BACKGROUND_PATTERNS.PRIMARY,
    about: BACKGROUND_PATTERNS.SECONDARY,
    services: BACKGROUND_PATTERNS.PRIMARY,
    contact: BACKGROUND_PATTERNS.SECONDARY,
    pricing: BACKGROUND_PATTERNS.PRIMARY,
    demo: BACKGROUND_PATTERNS.SECONDARY,
    
    // Service pages
    'web-development': BACKGROUND_PATTERNS.PRIMARY,
    'seo': BACKGROUND_PATTERNS.SECONDARY,
    'performance': BACKGROUND_PATTERNS.PRIMARY,
    'crm-integration': BACKGROUND_PATTERNS.SECONDARY,
    
    // Legal pages
    privacy: BACKGROUND_PATTERNS.PRIMARY,
    terms: BACKGROUND_PATTERNS.SECONDARY,
  };
  
  return pageBackgrounds[pageName] || BACKGROUND_PATTERNS.PRIMARY;
}

/**
 * Consistent section wrapper with alternating backgrounds
 */
export const SECTION_WRAPPER_CLASSES = {
  PRIMARY: "py-20 bg-background-primary text-text-primary",
  SECONDARY: "py-20 bg-background-secondary text-text-primary",
  TERTIARY: "py-20 bg-background-tertiary text-text-primary",
} as const;
