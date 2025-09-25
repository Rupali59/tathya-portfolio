import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navigation from "@/components/layout/Navigation";
import Analytics from "@/components/analytics/Analytics";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["monospace"],
});

export const metadata: Metadata = {
  title: "Tathya | Business Websites & CRM Solutions",
  description:
    "Tathya delivers full-stack business websites, CRM integration, and campaign management. We're a passionate team building clean, functional solutions that drive business growth.",
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
  authors: [{ name: "Tathya Team" }],
  creator: "Tathya",
  publisher: "Tathya",
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
    canonical: "https://tathya.dev",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tathya.dev",
    title: "Tathya - Digital Growth Partner",
    description: "End-to-End Business Websites & CRM Solutions",
    siteName: "Tathya",
    images: [
      {
        url: "https://tathya.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tathya - Digital Growth Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tathya - Digital Growth Partner",
    description: "End-to-End Business Websites & CRM Solutions",
    images: ["https://tathya.dev/og-image.jpg"],
    creator: "@tathya_dev",
    site: "@tathya_dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get analytics configuration from environment variables
  const analyticsConfig = {
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    hotjarSiteId: process.env.NEXT_PUBLIC_HOTJAR_SITE_ID,
    clarityProjectId: process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID,
  };

  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/images/assets/logos/favicon.png"
          type="image/png"
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background-primary text-text-primary`}
      >
        <ThemeProvider>
          <Navigation />
          <main>{children}</main>
        </ThemeProvider>

        {/* Analytics Components */}
        <Analytics {...analyticsConfig} />
      </body>
    </html>
  );
}
