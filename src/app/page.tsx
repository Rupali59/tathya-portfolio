import { Suspense, lazy } from "react";
import Navigation from "../components/layout/Navigation";
import Hero from "../components/ui/Hero";

// Dynamic imports for better performance and code splitting
const Services = lazy(() => import("../components/content/Services"));
const Portfolio = lazy(() => import("../components/content/Portfolio"));
const Team = lazy(() => import("../components/content/Team"));
const FAQ = lazy(() => import("../components/content/FAQ"));
const Contact = lazy(() => import("../components/forms/Contact"));
const Footer = lazy(() => import("../components/layout/Footer"));

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="min-h-screen bg-black/80 backdrop-blur-sm text-white flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-300">Loading...</p>
    </div>
  </div>
);

export const metadata = {
  title: "Tathya | Business Websites & CRM Solutions",
  description:
    "Tathya (तथ्य - Facts in Hindi) delivers full-stack business websites, CRM integration, and campaign management. We're a passionate team building clean, functional solutions grounded in facts and data that drive business growth.",
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
  openGraph: {
    title: "Tathya - Digital Growth Partner",
    description:
      "End-to-End Business Websites & CRM Solutions - Facts-Driven Development",
    type: "website",
    url: "https://tathya.dev",
    siteName: "Tathya",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tathya - Digital Growth Partner",
    description:
      "End-to-End Business Websites & CRM Solutions - Facts-Driven Development",
  },
};

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />

      {/* Services Section with Suspense */}
      <Suspense fallback={<LoadingSpinner />}>
        <Services />
      </Suspense>

      {/* Portfolio Section with Suspense */}
      <Suspense fallback={<LoadingSpinner />}>
        <Portfolio />
      </Suspense>

      {/* Team Section with Suspense */}
      <Suspense fallback={<LoadingSpinner />}>
        <Team />
      </Suspense>

      {/* Contact Section with Suspense */}
      <Suspense fallback={<LoadingSpinner />}>
        <Contact />
      </Suspense>

      {/* FAQ Section with Suspense */}
      <Suspense fallback={<LoadingSpinner />}>
        <FAQ />
      </Suspense>

      {/* Footer with Suspense */}
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </>
  );
}
