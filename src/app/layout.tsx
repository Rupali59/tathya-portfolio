import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { ThemeProvider } from "../contexts/ThemeContext";
import Navigation from "../components/layout/Navigation";
// Temporarily disabled AnimatedBackground components to fix webpack issues
// import {
//   AnimatedBackground,
//   FloatingShapes,
//   GradientOrbs,
// } from "../components/ui/AnimatedBackground";
import "./globals.css";
import "../styles/theme.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // Optimize font loading
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap", // Optimize font loading
  preload: true,
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
  return (
    <html lang="en">
      <head>
        {/* Theme initialization script - prevents flash of unstyled content */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'system';
                  const root = document.documentElement;
                  
                  if (theme === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    root.classList.add(prefersDark ? 'dark' : 'light');
                    root.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
                  } else {
                    root.classList.add(theme);
                    root.setAttribute('data-theme', theme);
                  }
                } catch (e) {
                  // Fallback to dark theme if localStorage fails
                  document.documentElement.classList.add('dark');
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />

        {/* Critical CSS - Inline for fastest rendering */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            :root {
              --background: #000000;
              --foreground: #ffffff;
              --green-primary: #10b981;
              --green-secondary: #059669;
              --green-accent: #34d399;
            }
            body {
              background: var(--background);
              color: var(--foreground);
              font-family: var(--font-inter), Arial, Helvetica, sans-serif;
              margin: 0;
              padding: 0;
              line-height: 1.6;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            .hero-section {
              contain: layout style paint;
              will-change: auto;
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .hero-content {
              contain: layout style;
              text-align: center;
              max-width: 1200px;
              margin: 0 auto;
              padding: 2rem;
            }
            .text-gradient {
              background: linear-gradient(135deg, var(--green-primary), var(--green-accent));
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            .btn-primary {
              background: var(--green-primary);
              color: var(--foreground);
              border: none;
              border-radius: 0.5rem;
              padding: 0.75rem 1.5rem;
              font-weight: 600;
              transition: background-color 0.2s ease;
              cursor: pointer;
            }
            .btn-primary:hover {
              background: var(--green-secondary);
            }
          `,
          }}
        />

        {/* Fonts are handled by Next.js font optimization */}

        {/* Instagram SEO Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Tathya",
              description:
                "Tathya delivers full-stack business websites, CRM integration, and campaign management. We're a passionate team building clean, functional solutions that drive business growth.",
              url: "https://tathya.dev",
              logo: "https://tathya.dev/logo.png",
              sameAs: [
                "https://instagram.com/tathya_dev",
                "https://twitter.com/tathya_dev",
                "https://linkedin.com/company/tathya",
                "https://github.com/Rupali59/tathya",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-0123",
                contactType: "customer service",
                email: "hello@tathya.dev",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "Global",
                addressLocality: "Remote",
              },
              socialMedia: {
                "@type": "SocialMediaPosting",
                author: {
                  "@type": "Organization",
                  name: "Tathya",
                },
                publisher: {
                  "@type": "Organization",
                  name: "Tathya",
                  sameAs: "https://instagram.com/tathya_dev",
                },
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background-primary text-text-primary`}
      >
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
        <VercelAnalytics />
      </body>
    </html>
  );
}
