import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navigation from "@/components/layout/Navigation";
import Analytics from "@/components/analytics/Analytics";
import FloatingActionButton from "@/components/common/FloatingActionButton";
import PerformanceMonitor from "@/components/analytics/PerformanceMonitor";
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
} from "@/lib/structured-data";
import { siteConfig, analyticsConfig, getOgImageUrl, getCanonicalUrl } from "@/lib/env";
import "./globals.css";

// Premium Font Configuration
// Headlines: Instrument Serif (weight 400 only)
const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: true, // Preload critical headline font
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
  display: "swap",
  preload: false, // Defer monospace font
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
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <link
          rel="icon"
          href="/images/assets/logos/favicon.png"
          type="image/png"
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
      >
        <ThemeProvider>
          <Navigation />
          <main>{children}</main>
          <FloatingActionButton />
        </ThemeProvider>

        {/* Analytics Components - Load asynchronously */}
        <Analytics {...analyticsProps} />

        {/* Performance Monitor (Development Only) - Load after page load */}
        {process.env.NODE_ENV === 'development' && <PerformanceMonitor />}
      </body>
    </html>
  );
}
