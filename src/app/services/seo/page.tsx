import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Optimization Services | Tathya",
  description:
    "Professional SEO optimization services to improve your website's search engine rankings and drive organic traffic. Technical SEO, content optimization, and performance enhancement.",
  keywords: [
    "SEO optimization",
    "search engine optimization",
    "organic traffic",
    "technical SEO",
    "content marketing",
  ],
};

export default function SEOPage() {
  return (
    <div className="min-h-screen bg-bg-primary pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
            SEO Optimization
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Boost your website's visibility in search engines and drive more
            organic traffic with our comprehensive SEO optimization services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="card p-6">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              Technical SEO
            </h3>
            <p className="text-text-secondary mb-4">
              Optimize your website's technical foundation for better search
              engine crawling and indexing.
            </p>
            <ul className="text-sm text-text-secondary space-y-2">
              <li>• Site speed optimization</li>
              <li>• Mobile responsiveness</li>
              <li>• Schema markup</li>
              <li>• XML sitemaps</li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              Content Optimization
            </h3>
            <p className="text-text-secondary mb-4">
              Create and optimize content that ranks well and provides value to
              your audience.
            </p>
            <ul className="text-sm text-text-secondary space-y-2">
              <li>• Keyword research</li>
              <li>• Content strategy</li>
              <li>• On-page optimization</li>
              <li>• Content creation</li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              Local SEO
            </h3>
            <p className="text-text-secondary mb-4">
              Improve your local search visibility and attract customers in your
              area.
            </p>
            <ul className="text-sm text-text-secondary space-y-2">
              <li>• Google My Business</li>
              <li>• Local citations</li>
              <li>• Reviews management</li>
              <li>• Local keywords</li>
            </ul>
          </div>
        </div>

        {/* SEO Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-8">
            Our SEO Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-accent text-primary-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center font-bold text-xl">
                1
              </div>
              <h3 className="font-semibold text-text-primary mb-2">Audit</h3>
              <p className="text-sm text-text-secondary">
                Comprehensive analysis of your current SEO performance
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent text-primary-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center font-bold text-xl">
                2
              </div>
              <h3 className="font-semibold text-text-primary mb-2">Strategy</h3>
              <p className="text-sm text-text-secondary">
                Develop a customized SEO strategy for your business
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
                Execute the optimization plan and monitor progress
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent text-primary-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center font-bold text-xl">
                4
              </div>
              <h3 className="font-semibold text-text-primary mb-2">
                Reporting
              </h3>
              <p className="text-sm text-text-secondary">
                Regular reports and continuous optimization
              </p>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-8">
            Key Performance Metrics
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-secondary text-white p-6 rounded-lg mb-3">
                <h3 className="text-2xl font-bold">50%+</h3>
                <p className="text-sm">Average Traffic Increase</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-secondary text-white p-6 rounded-lg mb-3">
                <h3 className="text-2xl font-bold">3-6</h3>
                <p className="text-sm">Months to See Results</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-secondary text-white p-6 rounded-lg mb-3">
                <h3 className="text-2xl font-bold">95%</h3>
                <p className="text-sm">Client Satisfaction</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-secondary text-white p-6 rounded-lg mb-3">
                <h3 className="text-2xl font-bold">24/7</h3>
                <p className="text-sm">Monitoring & Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-8">
            SEO Tools & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-secondary text-white p-4 rounded-lg mb-3">
                <h3 className="font-semibold">Analytics</h3>
              </div>
              <p className="text-sm text-text-secondary">
                Google Analytics, Search Console, SEMrush
              </p>
            </div>
            <div className="text-center">
              <div className="bg-secondary text-white p-4 rounded-lg mb-3">
                <h3 className="font-semibold">Keyword Research</h3>
              </div>
              <p className="text-sm text-text-secondary">
                Ahrefs, Keyword Planner, Answer The Public
              </p>
            </div>
            <div className="text-center">
              <div className="bg-secondary text-white p-4 rounded-lg mb-3">
                <h3 className="font-semibold">Technical SEO</h3>
              </div>
              <p className="text-sm text-text-secondary">
                PageSpeed Insights, GTmetrix, Screaming Frog
              </p>
            </div>
            <div className="text-center">
              <div className="bg-secondary text-white p-4 rounded-lg mb-3">
                <h3 className="font-semibold">Content</h3>
              </div>
              <p className="text-sm text-text-secondary">
                Yoast SEO, RankMath, Content Optimization
              </p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-8">
            Why Choose Our SEO Services?
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
                    White-Hat SEO
                  </h3>
                  <p className="text-text-secondary">
                    Ethical and sustainable SEO practices that build long-term
                    success
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
                    Custom Strategies
                  </h3>
                  <p className="text-text-secondary">
                    Tailored SEO strategies based on your industry and business
                    goals
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
                    Transparent Reporting
                  </h3>
                  <p className="text-text-secondary">
                    Regular detailed reports on your SEO performance and
                    progress
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
                    ROI Focused
                  </h3>
                  <p className="text-text-secondary">
                    Focus on strategies that deliver measurable business results
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
                    Expert Team
                  </h3>
                  <p className="text-text-secondary">
                    Certified SEO professionals with proven track records
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
                    Ongoing Support
                  </h3>
                  <p className="text-text-secondary">
                    Continuous monitoring and optimization for sustained growth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            Ready to Boost Your Search Rankings?
          </h2>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Let's analyze your current SEO performance and create a strategy to
            drive more organic traffic to your website.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-cta px-8 py-3 rounded-lg font-medium">
              Get SEO Audit
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
