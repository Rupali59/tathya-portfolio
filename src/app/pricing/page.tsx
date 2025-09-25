// Force this page to be dynamic (SSR) instead of static
export const dynamic = "force-dynamic";

import { Suspense, lazy } from "react";
import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";

// Dynamic imports for better performance
const Contact = lazy(() => import("../../components/forms/Contact"));

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
  title: "Pricing | Tathya - Transparent Digital Solutions Pricing",
  description:
    "Transparent pricing for web development, CRM integration, mobile apps, and technical consulting. Flexible packages designed to fit your business needs and budget.",
  keywords: [
    "web development pricing",
    "CRM integration cost",
    "mobile app development pricing",
    "technical consulting rates",
    "digital solutions pricing",
    "custom software pricing",
  ],
  openGraph: {
    title: "Pricing - Tathya Digital Solutions",
    description:
      "Transparent pricing for comprehensive digital solutions. Find the perfect package for your business needs.",
    type: "website",
    url: "https://tathya.dev/pricing",
    siteName: "Tathya",
  },
};

export default function Pricing() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-green-500">Pricing</span> Plans
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transparent, flexible pricing designed to fit your business needs
              and budget
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-green-500/50 transition-colors">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                <p className="text-gray-400 mb-4">
                  Perfect for small businesses
                </p>
                <div className="text-4xl font-bold text-green-500 mb-2">
                  $2,500
                </div>
                <p className="text-gray-400">Starting price</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <span className="text-gray-300">
                    5-page responsive website
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <span className="text-gray-300">Mobile-optimized design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <span className="text-gray-300">
                    Contact form integration
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <span className="text-gray-300">Basic SEO optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <span className="text-gray-300">1 month of support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <span className="text-gray-300">
                    SSL certificate included
                  </span>
                </li>
              </ul>

              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
            </div>

            {/* Professional Package */}
            <div className="bg-gray-900 rounded-lg p-8 border-2 border-green-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Professional
                </h3>
                <p className="text-gray-400 mb-4">
                  Ideal for growing businesses
                </p>
                <div className="text-4xl font-bold text-green-500 mb-2">
                  $7,500
                </div>
                <p className="text-gray-400">Starting price</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <span className="text-gray-300">10-page custom website</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <span className="text-gray-300">
                    Advanced design & animations
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <span className="text-gray-300">CMS integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <span className="text-gray-300">
                    E-commerce functionality
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <span className="text-gray-300">
                    Advanced SEO & analytics
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <span className="text-gray-300">3 months of support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <span className="text-gray-300">
                    Performance optimization
                  </span>
                </li>
              </ul>

              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
            </div>

            {/* Enterprise Package */}
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-green-500/50 transition-colors">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Enterprise
                </h3>
                <p className="text-gray-400 mb-4">For large organizations</p>
                <div className="text-4xl font-bold text-green-500 mb-2">
                  Custom
                </div>
                <p className="text-gray-400">Quote based on needs</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <span className="text-gray-300">
                    Unlimited pages & features
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <span className="text-gray-300">Custom CRM integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <span className="text-gray-300">Mobile app development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <span className="text-gray-300">API development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <span className="text-gray-300">
                    Dedicated project manager
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <span className="text-gray-300">6 months of support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <span className="text-gray-300">
                    Priority support & maintenance
                  </span>
                </li>
              </ul>

              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Additional Services
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Enhance your project with these optional services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-black rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-2">
                Content Writing
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                Professional copywriting for your website
              </p>
              <div className="text-green-400 font-semibold">$150/page</div>
            </div>

            <div className="bg-black rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-2">
                Logo Design
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                Custom logo design and branding
              </p>
              <div className="text-green-400 font-semibold">$500</div>
            </div>

            <div className="bg-black rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-2">
                SEO Audit
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                Comprehensive SEO analysis and recommendations
              </p>
              <div className="text-green-400 font-semibold">$300</div>
            </div>

            <div className="bg-black rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-2">
                Training
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                Team training on your new systems
              </p>
              <div className="text-green-400 font-semibold">$200/hour</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Pricing FAQ</h2>
            <p className="text-gray-300">
              Common questions about our pricing and services
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                Do you offer payment plans?
              </h3>
              <p className="text-gray-300">
                Yes! We offer flexible payment plans for projects over $5,000.
                Typically, we require 50% upfront and the remaining balance upon
                completion.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                What&apos;s included in the support period?
              </h3>
              <p className="text-gray-300">
                Support includes bug fixes, minor updates, security patches, and
                basic technical assistance. Major feature additions are quoted
                separately.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                Can I upgrade my package later?
              </h3>
              <p className="text-gray-300">
                Absolutely! We can upgrade your existing package or add
                additional services at any time. Pricing will be prorated based
                on what you&apos;ve already paid.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                Do you provide hosting?
              </h3>
              <p className="text-gray-300">
                We can help you set up hosting and recommend reliable providers.
                Hosting costs are separate from development fees and typically
                range from $10-50/month.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                What if I need changes after launch?
              </h3>
              <p className="text-gray-300">
                We offer ongoing maintenance packages starting at $200/month.
                This includes regular updates, security monitoring, and minor
                changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project requirements and find the perfect
            solution for your business needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Free Quote
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

      {/* Contact Section */}
      <Suspense fallback={<LoadingSpinner />}>
        <Contact />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </>
  );
}
