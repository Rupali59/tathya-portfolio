import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import Analytics from "@/components/analytics/Analytics";
import PerformanceMonitor from "@/components/analytics/PerformanceMonitor";
import {
  analyticsConfig,
  getCanonicalUrl,
  getOgImageUrl,
  siteConfig,
} from "@/lib/env";
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
} from "@/lib/structured-data";
import { TactileProvider } from "@/providers/TactileProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import "./globals.css";

// Premium Font Configuration
// Headlines: Instrument Serif (weight 400 only)
const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  display: "optional",
  preload: false,
  fallback: ["Georgia", "Times New Roman", "serif"],
  adjustFontFallback: true,
});

// Body: Geist Sans (using Inter as fallback - Geist requires special setup)
const geistSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true, // Preload critical body font
  fallback: ["system-ui", "-apple-system", "sans-serif"],
  adjustFontFallback: true,
});

// System/Mono: JetBrains Mono
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "optional",
  preload: false,
  fallback: ["monospace"],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | Business Websites & CRM Solutions`,
  description: siteConfig.description,
  keywords: [
    "business websites",
    "CRM solutions",
    "web development",
    "digital marketing",
    "campaign management",
    "software development",
    "javascript",
    "react",
    "node.js",
    "python",
    "custom software",
    "technical consulting",
  ],
  authors: [{ name: `${siteConfig.name} Team` }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: getCanonicalUrl(),
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} - Digital Growth Partner`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: getOgImageUrl(),
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Digital Growth Partner`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - Digital Growth Partner`,
    description: siteConfig.description,
    images: [getOgImageUrl()],
    creator: siteConfig.twitterHandle,
    site: siteConfig.twitterSite,
  },
};

import StartupSequence from "@/components/layout/StartupSequence";

// ... existing imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get analytics configuration from centralized config
  const analyticsProps = {
    gaMeasurementId: analyticsConfig.gaMeasurementId,
    hotjarSiteId: analyticsConfig.hotjarSiteId,
    clarityProjectId: analyticsConfig.clarityProjectId,
  };

  // Generate structured data
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    // Next.js automatically adds <!DOCTYPE html> before this <html> tag
    // This ensures the page renders in Standards Mode, not Quirks Mode
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent flash of unstyled content - sync with next-themes storageKey */}
        {/* This script runs before React hydrates to prevent theme flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{const s=localStorage.getItem('tathya-theme');const d=window.matchMedia('(prefers-color-scheme: dark)').matches;let t=s||'dark';if(t==='system')t=d?'dark':'light';document.documentElement.classList.toggle('dark',t==='dark');document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.classList.add('dark');document.documentElement.setAttribute('data-theme','dark');}})();`,
          }}
        />

        {/* Preconnect to Google Fonts for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Structured Data - Load asynchronously */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
          defer
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
          defer
        />
      </head>
      <body
        className={`${instrumentSerif.variable} ${geistSans.variable} ${jetbrainsMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <StartupSequence>
            <main>
              <TactileProvider>{children}</TactileProvider>
            </main>
          </StartupSequence>
        </ThemeProvider>

        {/* Analytics Components - Load asynchronously */}
        <Analytics {...analyticsProps} />

        {/* Performance Monitor (Development Only) - Load after page load */}
        {process.env.NODE_ENV === "development" && <PerformanceMonitor />}
      </body>
    </html>
  );
}
