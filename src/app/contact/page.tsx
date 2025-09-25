import Contact from "@/components/forms/Contact";
import Footer from "@/components/layout/Footer";

// Force SSR for this page
export const dynamic = "force-dynamic";

export default function ContactPage() {
  return (
    <>
      <Contact />
      <Footer />
    </>
  );
}
