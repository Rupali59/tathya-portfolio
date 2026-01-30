import { Suspense } from "react";
import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";
import { generateOrganizationSchema } from "@/lib/structured-data";

// Marketing layout with shared components
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <Navigation />
      <main>{children}</main>

      <Suspense fallback={<div>Loading footer...</div>}>
        <Footer />
      </Suspense>
    </>
  );
}
