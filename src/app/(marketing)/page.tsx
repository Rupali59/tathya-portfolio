import dynamic from "next/dynamic";
import Hero from "@/components/sections/hero/Hero";
import TrustLedger from "@/components/sections/TrustLedger";

// Lazy load below-the-fold components
const Services = dynamic(() => import("@/components/sections/Services"), {
  loading: () => <div className="h-screen" />,
});

const Portfolio = dynamic(() => import("@/components/sections/Portfolio"), {
  loading: () => <div className="h-screen" />,
});

const FAQ = dynamic(() => import("@/components/sections/FAQ"), {
  loading: () => <div className="h-96" />,
});

const ArchitecturePillars = dynamic(
  () => import("@/components/sections/ArchitecturePillars"),
  {
    loading: () => <div className="h-screen" />,
  },
);

const ProfitConfigurator = dynamic(
  () => import("@/components/sections/ProfitConfigurator"),
  {
    loading: () => <div className="h-screen" />,
  },
);

// Lazy load heavy interactive components
const ConfigurationBay = dynamic(
  () => import("@/components/sections/DynamicConfigurationBay"),
  {
    loading: () => (
      <div className="py-20 bg-black relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#121212] p-8 rounded-lg border border-blue-600/20 animate-pulse">
            <div className="h-8 bg-blue-600/10 rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-blue-600/10 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    ),
  },
);

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustLedger />
      <ArchitecturePillars />
      <ProfitConfigurator />
      <Services />
      <Portfolio />
      <ConfigurationBay />
      <FAQ />
    </main>
  );
}
