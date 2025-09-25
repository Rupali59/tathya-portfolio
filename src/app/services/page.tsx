import { Suspense, lazy } from "react";
import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";

// Dynamic imports for better performance
const Services = lazy(() => import("../../components/content/Services"));
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
  title: "Services | Tathya - Digital Growth Solutions",
  description:
    "Comprehensive digital solutions including web development, CRM integration, mobile apps, and technical consulting. Facts-driven approach to business growth.",
  keywords: [
    "web development services",
    "CRM integration",
    "mobile app development",
    "technical consulting",
    "digital transformation",
    "business solutions",
    "software development",
  ],
  openGraph: {
    title: "Services - Tathya Digital Solutions",
    description:
      "Comprehensive digital solutions for modern businesses. Web development, CRM integration, mobile apps, and more.",
    type: "website",
    url: "https://tathya.dev/services",
    siteName: "Tathya",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-green-500">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital solutions designed to drive your business
              growth
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              What We Offer
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              From concept to deployment, we provide end-to-end digital
              solutions that transform your business operations and drive
              measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Web Development */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-green-500/50 transition-colors">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-400 text-xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Web Development
              </h3>
              <p className="text-gray-300 mb-4">
                Modern, responsive websites built with cutting-edge technologies
                for optimal performance and user experience.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• React & Next.js Applications</li>
                <li>• E-commerce Solutions</li>
                <li>• Custom Web Applications</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>

            {/* CRM Integration */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-green-500/50 transition-colors">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-400 text-xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                CRM Integration
              </h3>
              <p className="text-gray-300 mb-4">
                Seamless customer relationship management systems that
                streamline your sales and support processes.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Custom CRM Development</li>
                <li>• Third-party Integrations</li>
                <li>• Data Migration & Sync</li>
                <li>• Analytics & Reporting</li>
              </ul>
            </div>

            {/* Mobile Development */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-green-500/50 transition-colors">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-400 text-xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Mobile Development
              </h3>
              <p className="text-gray-300 mb-4">
                Cross-platform mobile applications that deliver native
                performance across iOS and Android devices.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• React Native Apps</li>
                <li>• Progressive Web Apps</li>
                <li>• App Store Optimization</li>
                <li>• Push Notifications</li>
              </ul>
            </div>

            {/* Technical Consulting */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-green-500/50 transition-colors">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-400 text-xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Technical Consulting
              </h3>
              <p className="text-gray-300 mb-4">
                Strategic guidance to help you make informed technology
                decisions and optimize your digital infrastructure.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Technology Strategy</li>
                <li>• Architecture Planning</li>
                <li>• Performance Audits</li>
                <li>• Security Assessments</li>
              </ul>
            </div>

            {/* Digital Marketing */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-green-500/50 transition-colors">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-400 text-xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Digital Marketing
              </h3>
              <p className="text-gray-300 mb-4">
                Data-driven marketing strategies and campaign management to
                maximize your online presence and ROI.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• SEO Optimization</li>
                <li>• Social Media Management</li>
                <li>• Content Strategy</li>
                <li>• Analytics & Tracking</li>
              </ul>
            </div>

            {/* Maintenance & Support */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-green-500/50 transition-colors">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-400 text-xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Maintenance & Support
              </h3>
              <p className="text-gray-300 mb-4">
                Ongoing support and maintenance to keep your systems running
                smoothly and securely.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• 24/7 Monitoring</li>
                <li>• Regular Updates</li>
                <li>• Security Patches</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A systematic approach that ensures every project delivers
              exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Discovery
              </h3>
              <p className="text-gray-300 text-sm">
                We start by understanding your business goals, challenges, and
                requirements through detailed consultation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Planning
              </h3>
              <p className="text-gray-300 text-sm">
                We create a comprehensive project plan with timelines,
                milestones, and technical specifications.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Development
              </h3>
              <p className="text-gray-300 text-sm">
                Our team builds your solution using best practices, with regular
                updates and collaborative feedback.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Launch</h3>
              <p className="text-gray-300 text-sm">
                We deploy your solution, provide training, and offer ongoing
                support to ensure success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <Suspense fallback={<LoadingSpinner />}>
        <Services />
      </Suspense>

      {/* Technology Stack */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We leverage modern, proven technologies to build scalable and
              maintainable solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Vue.js",
                  "Svelte",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Node.js",
                  "Python",
                  "PostgreSQL",
                  "MongoDB",
                  "Redis",
                  "GraphQL",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                DevOps & Cloud
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "AWS",
                  "Docker",
                  "Kubernetes",
                  "Vercel",
                  "GitHub Actions",
                  "Terraform",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
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
