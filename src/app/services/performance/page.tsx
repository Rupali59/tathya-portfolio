import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance Optimization Services | Tathya",
  description:
    "Professional website performance optimization services to improve loading speeds, user experience, and search engine rankings. Core Web Vitals optimization and technical performance enhancement.",
  keywords: [
    "performance optimization",
    "website speed",
    "Core Web Vitals",
    "page speed",
    "technical optimization",
  ],
};

export default function PerformancePage() {
  return (
    <div className="min-h-screen bg-background-primary pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
            Performance Optimization
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Speed up your website and improve user experience with our
            comprehensive performance optimization services. Faster sites rank
            better and convert more.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="card p-6">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              Core Web Vitals
            </h3>
            <p className="text-text-secondary mb-4">
              Optimize Google's Core Web Vitals metrics for better search
              rankings and user experience.
            </p>
            <ul className="text-sm text-text-secondary space-y-2">
              <li>• Largest Contentful Paint (LCP)</li>
              <li>• First Input Delay (FID)</li>
              <li>• Cumulative Layout Shift (CLS)</li>
              <li>• Interaction to Next Paint (INP)</li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              Image Optimization
            </h3>
            <p className="text-text-secondary mb-4">
              Compress and optimize images for faster loading without
              compromising quality.
            </p>
            <ul className="text-sm text-text-secondary space-y-2">
              <li>• Image compression</li>
              <li>• WebP conversion</li>
              <li>• Lazy loading</li>
              <li>• Responsive images</li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              Code Optimization
            </h3>
            <p className="text-text-secondary mb-4">
              Optimize your website's code for better performance and faster
              loading times.
            </p>
            <ul className="text-sm text-text-secondary space-y-2">
              <li>• Minification</li>
              <li>• Code splitting</li>
              <li>• Bundle optimization</li>
              <li>• Dead code elimination</li>
            </ul>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-8">
            Performance Improvements
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="p-6 rounded-lg mb-3 service-card">
                <h3 className="text-2xl font-bold">50%+</h3>
                <p className="text-sm">Faster Load Times</p>
              </div>
            </div>
            <div className="text-center">
              <div className="p-6 rounded-lg mb-3 service-card">
                <h3 className="text-2xl font-bold">90+</h3>
                <p className="text-sm">PageSpeed Score</p>
              </div>
            </div>
            <div className="text-center">
              <div className="p-6 rounded-lg mb-3 service-card">
                <h3 className="text-2xl font-bold">30%+</h3>
                <p className="text-sm">Better Conversion</p>
              </div>
            </div>
            <div className="text-center">
              <div className="p-6 rounded-lg mb-3 service-card">
                <h3 className="text-2xl font-bold">24/7</h3>
                <p className="text-sm">Monitoring</p>
              </div>
            </div>
          </div>
        </div>

        {/* Optimization Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-8">
            Optimization Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-accent text-primary-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center font-bold text-xl">
                1
              </div>
              <h3 className="font-semibold text-text-primary mb-2">Analysis</h3>
              <p className="text-sm text-text-secondary">
                Comprehensive performance audit and bottleneck identification
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent text-primary-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center font-bold text-xl">
                2
              </div>
              <h3 className="font-semibold text-text-primary mb-2">Strategy</h3>
              <p className="text-sm text-text-secondary">
                Develop optimization roadmap with prioritized improvements
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent text-primary-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center font-bold text-xl">
                3
              </div>
              <h3 className="font-semibold text-text-primary mb-2">
                Implementation
              </h3>
              <p className="text-sm text-text-secondary">
                Execute optimizations and test performance improvements
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent text-primary-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center font-bold text-xl">
                4
              </div>
              <h3 className="font-semibold text-text-primary mb-2">
                Monitoring
              </h3>
              <p className="text-sm text-text-secondary">
                Continuous monitoring and ongoing optimization
              </p>
            </div>
          </div>
        </div>

        {/* Technical Optimizations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-8">
            Technical Optimizations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="p-4 rounded-lg mb-3 service-card">
                <h3 className="font-semibold">Server Optimization</h3>
              </div>
              <p className="text-sm text-text-secondary">
                CDN setup, caching strategies, server configuration
              </p>
            </div>
            <div className="text-center">
              <div className="p-4 rounded-lg mb-3 service-card">
                <h3 className="font-semibold">Database Optimization</h3>
              </div>
              <p className="text-sm text-text-secondary">
                Query optimization, indexing, data structure improvements
              </p>
            </div>
            <div className="text-center">
              <div className="p-4 rounded-lg mb-3 service-card">
                <h3 className="font-semibold">Frontend Optimization</h3>
              </div>
              <p className="text-sm text-text-secondary">
                JavaScript optimization, CSS minification, resource loading
              </p>
            </div>
            <div className="text-center">
              <div className="p-4 rounded-lg mb-3 service-card">
                <h3 className="font-semibold">Mobile Optimization</h3>
              </div>
              <p className="text-sm text-text-secondary">
                Mobile-first design, touch optimization, responsive performance
              </p>
            </div>
            <div className="text-center">
              <div className="p-4 rounded-lg mb-3 service-card">
                <h3 className="font-semibold">Security & Performance</h3>
              </div>
              <p className="text-sm text-text-secondary">
                HTTPS optimization, security headers, performance impact
              </p>
            </div>
            <div className="text-center">
              <div className="p-4 rounded-lg mb-3 service-card">
                <h3 className="font-semibold">Third-party Optimization</h3>
              </div>
              <p className="text-sm text-text-secondary">
                Analytics optimization, ad loading, external resource management
              </p>
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-8">
            Performance Tools
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="p-4 rounded-lg mb-3 service-card">
                <h3 className="font-semibold">Google Tools</h3>
              </div>
              <p className="text-sm text-text-secondary">
                PageSpeed Insights, Search Console
              </p>
            </div>
            <div className="text-center">
              <div className="p-4 rounded-lg mb-3 service-card">
                <h3 className="font-semibold">WebPageTest</h3>
              </div>
              <p className="text-sm text-text-secondary">
                Detailed performance analysis and waterfall charts
              </p>
            </div>
            <div className="text-center">
              <div className="p-4 rounded-lg mb-3 service-card">
                <h3 className="font-semibold">GTmetrix</h3>
              </div>
              <p className="text-sm text-text-secondary">
                Performance monitoring and optimization recommendations
              </p>
            </div>
            <div className="text-center">
              <div className="p-4 rounded-lg mb-3 service-card">
                <h3 className="font-semibold">Custom Solutions</h3>
              </div>
              <p className="text-sm text-text-secondary">
                Tailored optimization tools and monitoring systems
              </p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-8">
            Performance Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-accent text-primary-900 p-2 rounded-lg">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">
                    Better SEO Rankings
                  </h3>
                  <p className="text-text-secondary">
                    Faster sites rank higher in Google search results
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-accent text-primary-900 p-2 rounded-lg">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">
                    Improved User Experience
                  </h3>
                  <p className="text-text-secondary">
                    Faster loading times lead to better user satisfaction
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-accent text-primary-900 p-2 rounded-lg">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">
                    Higher Conversion Rates
                  </h3>
                  <p className="text-text-secondary">
                    Fast sites convert more visitors into customers
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-accent text-primary-900 p-2 rounded-lg">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">
                    Reduced Bounce Rate
                  </h3>
                  <p className="text-text-secondary">
                    Users stay longer on fast-loading websites
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-accent text-primary-900 p-2 rounded-lg">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">
                    Lower Server Costs
                  </h3>
                  <p className="text-text-secondary">
                    Optimized sites use fewer server resources
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-accent text-primary-900 p-2 rounded-lg">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">
                    Mobile Performance
                  </h3>
                  <p className="text-text-secondary">
                    Optimized for mobile devices and slower connections
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            Ready to Speed Up Your Website?
          </h2>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Let's analyze your website's performance and implement optimizations
            that will improve speed, user experience, and search rankings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-cta px-8 py-3 rounded-lg font-medium">
              Get Performance Audit
            </button>
            <button className="btn-secondary px-8 py-3 rounded-lg font-medium">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
