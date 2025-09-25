import { Suspense, lazy } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

// Force SSR for this page
export const dynamic = "force-dynamic";

// Dynamic imports for better performance
const Contact = lazy(() => import("@/components/forms/Contact"));

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
  title: "Pricing | Tathya - Transparent Digital Solutions Pricing in India",
  description:
    "Affordable pricing for website analysis, custom development, CRM integration, business strategy analysis, and lead tracking. Competitive rates for Indian businesses and international clients.",
  keywords: [
    "web development pricing India",
    "CRM integration cost",
    "website analysis pricing",
    "business strategy consulting rates",
    "lead tracking system pricing",
    "custom integrations cost",
    "UX enhancement pricing",
    "Indian freelancer rates",
  ],
  openGraph: {
    title: "Pricing - Tathya Digital Solutions",
    description:
      "Transparent pricing for comprehensive digital solutions. Competitive rates for website development, CRM integration, and business analysis services.",
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
              <span className="text-green-500">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Competitive rates for website analysis, custom development, CRM
              integration, business strategy analysis, and lead tracking. All
              prices in INR with flexible payment options.
            </p>
          </div>
        </div>
      </section>

      {/* Service-Specific Pricing */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Service-Specific Pricing
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Transparent pricing for each service we offer. All prices are in
              INR and based on standard Indian freelancing rates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Website Analysis */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-green-500/50 transition-colors">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-400 text-xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Website Analysis
              </h3>
              <p className="text-gray-300 mb-4">
                Comprehensive analysis of your website's performance, SEO, and
                user experience.
              </p>
              <div className="text-2xl font-bold text-green-500 mb-2">
                ₹15,000 - ₹50,000
              </div>
              <ul className="text-sm text-gray-400 space-y-1 mb-4">
                <li>• Performance audit</li>
                <li>• SEO analysis</li>
                <li>• UX/UI review</li>
                <li>• Security assessment</li>
                <li>• Detailed report with recommendations</li>
              </ul>
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-lg font-semibold transition-colors text-sm">
                Get Quote
              </button>
            </div>

            {/* Custom Website Development */}
            <div className="bg-gray-900 rounded-lg p-6 border-2 border-green-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-400 text-xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Custom Website Development
              </h3>
              <p className="text-gray-300 mb-4">
                Modern, responsive websites with deployment and hosting setup.
              </p>
              <div className="text-2xl font-bold text-green-500 mb-2">
                ₹25,000 - ₹2,00,000
              </div>
              <ul className="text-sm text-gray-400 space-y-1 mb-4">
                <li>• 5-20 pages responsive design</li>
                <li>• Mobile optimization</li>
                <li>• CMS integration</li>
                <li>• SEO optimization</li>
                <li>• Deployment & hosting setup</li>
                <li>• 3 months support included</li>
              </ul>
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition-colors text-sm">
                Get Quote
              </button>
            </div>

            {/* Business Strategy Analysis */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-green-500/50 transition-colors">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-400 text-xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Business Strategy Analysis
              </h3>
              <p className="text-gray-300 mb-4">
                Data-driven analysis of your business processes and growth
                strategies.
              </p>
              <div className="text-2xl font-bold text-green-500 mb-2">
                ₹30,000 - ₹1,00,000
              </div>
              <ul className="text-sm text-gray-400 space-y-1 mb-4">
                <li>• Market analysis</li>
                <li>• Process optimization</li>
                <li>• Growth strategy planning</li>
                <li>• Competitor analysis</li>
                <li>• Implementation roadmap</li>
              </ul>
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-lg font-semibold transition-colors text-sm">
                Get Quote
              </button>
            </div>

            {/* CRM Development & Integration */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-green-500/50 transition-colors">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-400 text-xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                CRM Development & Integration
              </h3>
              <p className="text-gray-300 mb-4">
                Custom CRM solutions with lead management and client information
                centralization.
              </p>
              <div className="text-2xl font-bold text-green-500 mb-2">
                ₹50,000 - ₹3,00,000
              </div>
              <ul className="text-sm text-gray-400 space-y-1 mb-4">
                <li>• Custom CRM development</li>
                <li>• Lead management system</li>
                <li>• Client data centralization</li>
                <li>• Third-party integrations</li>
                <li>• Analytics & reporting</li>
                <li>• Training & support</li>
              </ul>
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-lg font-semibold transition-colors text-sm">
                Get Quote
              </button>
            </div>

            {/* UX Enhancement */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-green-500/50 transition-colors">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-400 text-xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                UX Enhancement
              </h3>
              <p className="text-gray-300 mb-4">
                Improve user experience and interface design for better
                engagement.
              </p>
              <div className="text-2xl font-bold text-green-500 mb-2">
                ₹20,000 - ₹1,50,000
              </div>
              <ul className="text-sm text-gray-400 space-y-1 mb-4">
                <li>• UX/UI audit</li>
                <li>• Interface redesign</li>
                <li>• User journey optimization</li>
                <li>• A/B testing setup</li>
                <li>• Performance improvements</li>
              </ul>
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-lg font-semibold transition-colors text-sm">
                Get Quote
              </button>
            </div>

            {/* Lead Tracking & Integrations */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-green-500/50 transition-colors">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-400 text-xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Lead Tracking & Integrations
              </h3>
              <p className="text-gray-300 mb-4">
                Advanced lead tracking with multiple platform integrations.
              </p>
              <div className="text-2xl font-bold text-green-500 mb-2">
                ₹35,000 - ₹2,50,000
              </div>
              <ul className="text-sm text-gray-400 space-y-1 mb-4">
                <li>• Multi-platform lead tracking</li>
                <li>• Custom integrations</li>
                <li>• Analytics dashboard</li>
                <li>• Automated workflows</li>
                <li>• Real-time reporting</li>
              </ul>
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-lg font-semibold transition-colors text-sm">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Integrations & Future Services */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Advanced Services
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Specialized services for complex business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Custom Integrations */}
            <div className="bg-black rounded-lg p-8 border border-gray-800">
              <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                <span className="text-green-400 text-2xl">🔗</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Custom Integrations
              </h3>
              <p className="text-gray-300 mb-6">
                Build custom integrations between your existing systems and
                third-party platforms for seamless data flow.
              </p>
              <div className="text-3xl font-bold text-green-500 mb-4">
                ₹75,000 - ₹5,00,000
              </div>
              <ul className="text-gray-400 space-y-2 mb-6">
                <li>• API development & integration</li>
                <li>• Data synchronization</li>
                <li>• Custom webhook development</li>
                <li>• Legacy system modernization</li>
                <li>• Real-time data processing</li>
                <li>• Security & compliance</li>
              </ul>
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Discuss Project
              </button>
            </div>

            {/* Future AI Workflows */}
            <div className="bg-black rounded-lg p-8 border border-gray-800">
              <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                <span className="text-green-400 text-2xl">🤖</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                AI Workflows (Coming Soon)
              </h3>
              <p className="text-gray-300 mb-6">
                Advanced AI-powered automation and workflow optimization for
                your business processes.
              </p>
              <div className="text-3xl font-bold text-gray-500 mb-4">TBA</div>
              <ul className="text-gray-400 space-y-2 mb-6">
                <li>• Automated lead qualification</li>
                <li>• Intelligent data analysis</li>
                <li>• Predictive analytics</li>
                <li>• Chatbot development</li>
                <li>• Process automation</li>
                <li>• Custom AI solutions</li>
              </ul>
              <button className="w-full bg-gray-700 text-gray-400 py-3 rounded-lg font-semibold cursor-not-allowed">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-black">
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
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-2">
                Content Writing
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                Professional copywriting for your website
              </p>
              <div className="text-green-400 font-semibold">₹2,000/page</div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-2">
                Logo Design
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                Custom logo design and branding
              </p>
              <div className="text-green-400 font-semibold">
                ₹8,000 - ₹25,000
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-2">
                SEO Audit
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                Comprehensive SEO analysis and recommendations
              </p>
              <div className="text-green-400 font-semibold">
                ₹5,000 - ₹15,000
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-2">
                Training
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                Team training on your new systems
              </p>
              <div className="text-green-400 font-semibold">₹3,000/hour</div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-2">
                Maintenance
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                Ongoing support and maintenance
              </p>
              <div className="text-green-400 font-semibold">₹5,000/month</div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-2">
                Hosting Setup
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                Server setup and deployment
              </p>
              <div className="text-green-400 font-semibold">
                ₹10,000 - ₹30,000
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-2">
                Performance Optimization
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                Speed and performance improvements
              </p>
              <div className="text-green-400 font-semibold">
                ₹15,000 - ₹50,000
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-2">
                Security Audit
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                Comprehensive security assessment
              </p>
              <div className="text-green-400 font-semibold">
                ₹20,000 - ₹75,000
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Pricing FAQ</h2>
            <p className="text-gray-300">
              Common questions about our pricing and services
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-black rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                Do you offer payment plans?
              </h3>
              <p className="text-gray-300">
                Yes! We offer flexible payment plans for projects over ₹50,000.
                Typically, we require 40% upfront, 30% at milestone completion,
                and 30% upon final delivery.
              </p>
            </div>

            <div className="bg-black rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                What&apos;s included in the support period?
              </h3>
              <p className="text-gray-300">
                Support includes bug fixes, minor updates, security patches, and
                basic technical assistance. Major feature additions are quoted
                separately. Support periods vary by service (1-6 months).
              </p>
            </div>

            <div className="bg-black rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                How do you determine pricing for custom projects?
              </h3>
              <p className="text-gray-300">
                Pricing is based on project complexity, timeline, required
                integrations, and specific features. We provide detailed quotes
                after understanding your requirements through a free
                consultation.
              </p>
            </div>

            <div className="bg-black rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                Do you provide hosting and deployment?
              </h3>
              <p className="text-gray-300">
                Yes! We can set up hosting, configure servers, and handle
                deployment. Hosting costs are separate and typically range from
                ₹500-2,000/month depending on your needs.
              </p>
            </div>

            <div className="bg-black rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                What if I need changes after launch?
              </h3>
              <p className="text-gray-300">
                We offer ongoing maintenance packages starting at ₹5,000/month.
                This includes regular updates, security monitoring, and minor
                changes. Major changes are quoted separately.
              </p>
            </div>

            <div className="bg-black rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                Do you work with international clients?
              </h3>
              <p className="text-gray-300">
                Absolutely! We work with clients globally. For international
                projects, we can quote in USD or your preferred currency.
                Payment methods include bank transfers, PayPal, and other
                international payment options.
              </p>
            </div>

            <div className="bg-black rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                What about the AI workflows you mentioned?
              </h3>
              <p className="text-gray-300">
                AI workflow services are in development and will be available in
                the future. We&apos;re currently building our AI capabilities
                and will announce pricing and availability once ready. Contact
                us to be notified when these services launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a personalized quote for your project. We offer free
            consultations to understand your needs and provide accurate pricing.
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
              View All Services
            </a>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              All prices in INR • Flexible payment plans available •
              International clients welcome
            </p>
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
