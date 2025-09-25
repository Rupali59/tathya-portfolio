import Hero from "@/components/hero/Hero";
import Services from "@/components/content/Services";
import Portfolio from "@/components/content/Portfolio";
import Team from "@/components/content/Team";
import FAQ from "@/components/content/FAQ";
import Footer from "@/components/layout/Footer";

// Force SSR for this page
export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Team />
      <FAQ />
      <Footer />
    </>
  );
}
