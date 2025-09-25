import Navigation from "../components/layout/Navigation";
import Hero from "../components/ui/Hero";
import Services from "../components/content/Services";
import Portfolio from "../components/content/Portfolio";
import Team from "../components/content/Team";
import FAQ from "../components/content/FAQ";
import Contact from "../components/forms/Contact";
import Footer from "../components/layout/Footer";

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
    "business growth",
    "tathya",
    "tathya dev",
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
      <Services />
      <Portfolio />
      <Team />
      <Contact />
      <FAQ />
      <Footer />
    </>
  );
}
