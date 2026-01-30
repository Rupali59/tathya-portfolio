/**
 * Configuration Reader
 *
 * Centralized configuration reader that reads values from environment variables
 * with proper type conversion and validation.
 */

/**
 * Get integer value from environment variable
 */
function getInt(key: string, defaultValue: number): number {
  const value = process.env[key];
  if (!value) return defaultValue;
  const parsed = parseInt(value, 10);
  return Number.isNaN(parsed) ? defaultValue : parsed;
}

/**
 * Get string value from environment variable
 */
function getString(key: string, defaultValue: string): string {
  return process.env[key] || defaultValue;
}

/**
 * Get boolean value from environment variable
 */
function getBoolean(key: string, defaultValue: boolean): boolean {
  const value = process.env[key];
  if (!value) return defaultValue;
  return value.toLowerCase() === "true" || value === "1";
}

/**
 * Server Configuration
 */
const port = getInt("PORT", 3000);
export const serverConfig = {
  port,
  hostname: getString("HOSTNAME", "0.0.0.0"),
  nodeEnv: getString("NODE_ENV", "development"),
} as const;

/**
 * Application Configuration
 */
export const appConfig = {
  url:
    process.env.NEXT_PUBLIC_APP_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    `http://localhost:${port}`,
  name:
    process.env.NEXT_PUBLIC_APP_NAME ||
    process.env.NEXT_PUBLIC_SITE_NAME ||
    "Tathya",
  description:
    process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    "Engineered Business Ecosystems",
} as const;

/**
 * Site Metadata Configuration
 */
export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://tathya.dev",
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Tathya",
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    "End-to-End Business Websites & CRM Solutions",
  twitterHandle: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@tathya_dev",
  twitterSite: process.env.NEXT_PUBLIC_TWITTER_SITE || "@tathya_dev",
} as const;

/**
 * Analytics Configuration
 */
export const analyticsConfig = {
  enabled: getBoolean(
    "NEXT_PUBLIC_ANALYTICS_ENABLED",
    process.env.NODE_ENV === "production",
  ),
  gaMeasurementId: getString("NEXT_PUBLIC_GA_MEASUREMENT_ID", ""),
  hotjarSiteId: getString("NEXT_PUBLIC_HOTJAR_SITE_ID", ""),
  clarityProjectId: getString("NEXT_PUBLIC_CLARITY_PROJECT_ID", ""),
} as const;

/**
 * API Configuration
 */
export const apiConfig = {
  url: getString("NEXT_PUBLIC_API_URL", getString("API_URL", "")),
  baseUrl: getString("NEXT_PUBLIC_API_URL", getString("API_URL", "")),
} as const;

/**
 * Contact Configuration
 */
export const contactConfig = {
  email: getString("NEXT_PUBLIC_CONTACT_EMAIL", "hello@tathya.dev"),
  supportEmail: getString("NEXT_PUBLIC_SUPPORT_EMAIL", "support@tathya.dev"),
} as const;

/**
 * Social Media Links Configuration
 */
export const socialConfig = {
  github: getString("NEXT_PUBLIC_GITHUB_URL", "https://github.com/Rupali59"),
  linkedin: getString(
    "NEXT_PUBLIC_LINKEDIN_URL",
    "https://linkedin.com/in/rupali-bhatnagar-b4864957",
  ),
  twitter: getString(
    "NEXT_PUBLIC_TWITTER_URL",
    "https://twitter.com/rupali_dev",
  ),
} as const;

/**
 * Feature Flags Configuration
 */
export const featureFlags = {
  enableDemo: getBoolean("NEXT_PUBLIC_ENABLE_DEMO", true),
  enableNewsletter: getBoolean("NEXT_PUBLIC_ENABLE_NEWSLETTER", true),
  enableContactForm: getBoolean("NEXT_PUBLIC_ENABLE_CONTACT_FORM", true),
} as const;

/**
 * Deployment Configuration
 */
export const deploymentConfig = {
  vercelRegion: getString("VERCEL_REGION", ""),
  vercelUrl: getString("VERCEL_URL", ""),
} as const;

/**
 * Helper function to get Open Graph image URL
 */
export const getOgImageUrl = (): string => {
  const baseUrl = siteConfig.url;
  return `${baseUrl}/og-image.jpg`;
};

/**
 * Helper function to get canonical URL
 */
export const getCanonicalUrl = (path: string = ""): string => {
  const baseUrl = siteConfig.url;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};

/**
 * Export all configs for convenience
 */
export const config = {
  server: serverConfig,
  app: appConfig,
  site: siteConfig,
  analytics: analyticsConfig,
  api: apiConfig,
  contact: contactConfig,
  social: socialConfig,
  features: featureFlags,
  deployment: deploymentConfig,
} as const;
