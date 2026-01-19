import dynamicImport from "next/dynamic";
import Hero from "@/components/hero/Hero";
import ArchitecturePillars from "@/components/content/ArchitecturePillars";
import Services from "@/components/content/Services";
import Portfolio from "@/components/content/Portfolio";
import FAQ from "@/components/content/FAQ";
import Team from "@/components/content/Team";
import Footer from "@/components/layout/Footer";

// Lazy load heavy interactive components
const ConfigurationBay = dynamicImport(
  () => import("@/components/content/ConfigurationBay"),
  {
    loading: () => (
      <div className="py-20 bg-pure-black relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark-charcoal p-8 rounded-lg border border-sapphire-blue-20 animate-pulse">
            <div className="h-8 bg-sapphire-blue-10 rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-sapphire-blue-10 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    ),
    ssr: false, // Load on client only since it's interactive
  }
);

// Static generation for better performance
export const dynamic = "force-static";
export const revalidate = 3600; // Revalidate every hour

export default function HomePage() {
  return (
    <>
      <Hero />
      <ArchitecturePillars />
      <Services />
      <Portfolio />
      <ConfigurationBay />
      <FAQ />
      <Team />
      <Footer />
    </>
  );
}
