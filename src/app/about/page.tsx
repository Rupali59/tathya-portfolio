import { Suspense, lazy } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

// Force SSR for this page
export const dynamic = "force-dynamic";

// Dynamic imports for better performance
const Team = lazy(() => import("@/components/content/Team"));

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
  title: "About Us | Tathya - Digital Growth Partner",
  description:
    "Learn about Tathya's mission to deliver facts-driven business solutions. Meet our passionate team building clean, functional websites and CRM systems that drive growth.",
  keywords: [
    "about tathya",
    "company mission",
    "team",
    "web development company",
    "CRM solutions",
    "digital transformation",
  ],
  openGraph: {
    title: "About Tathya - Digital Growth Partner",
    description:
      "Learn about our mission to deliver facts-driven business solutions and meet our passionate team.",
    type: "website",
    url: "https://tathya.dev/about",
    siteName: "Tathya",
  },
};

export default function About() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-green-500">Tathya</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building Solutions Grounded in Facts
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-gray-300 mb-6">
                Tathya (तथ्य - Facts in Hindi) represents our commitment to
                building solutions grounded in truth, data, and proven
                methodologies. We believe that successful digital transformation
                starts with understanding the facts about your business, your
                customers, and your goals.
              </p>
              <p className="text-gray-300 mb-6">
                Our team combines technical expertise with business acumen to
                deliver websites, CRM systems, and digital solutions that
                don&apos;t just look good—they drive real, measurable growth for
                your business.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <h3 className="text-green-400 font-semibold mb-2">
                    Data-Driven
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Every decision backed by facts and analytics
                  </p>
                </div>
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <h3 className="text-green-400 font-semibold mb-2">
                    Results-Focused
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Solutions that deliver measurable business value
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Why Choose Tathya?
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Full-stack expertise across modern technologies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>
                    Proven track record of successful project delivery
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Transparent communication and regular updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Scalable solutions that grow with your business</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Ongoing support and maintenance services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              These core principles guide everything we do and every solution we
              build.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-400 text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Facts First
              </h3>
              <p className="text-gray-300">
                We base every decision on data, research, and proven
                methodologies. No assumptions, no guesswork—just facts.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-400 text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Growth Focused
              </h3>
              <p className="text-gray-300">
                Every solution we build is designed to drive real business
                growth and deliver measurable results for our clients.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-400 text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Partnership
              </h3>
              <p className="text-gray-300">
                We&apos;re not just vendors—we&apos;re your digital growth
                partners, invested in your long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Suspense fallback={<LoadingSpinner />}>
        <Team />
      </Suspense>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how Tathya can help transform your digital
            presence with solutions grounded in facts and focused on growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="border border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </>
  );
}
