// Force this page to be dynamic (SSR) instead of static
export const dynamic = "force-dynamic";

import Hero from "../components/ui/Hero";
import Services from "../components/content/Services";
import Portfolio from "../components/content/Portfolio";
import Team from "../components/content/Team";
import FAQ from "../components/content/FAQ";
import Contact from "../components/forms/Contact";
import Footer from "../components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
