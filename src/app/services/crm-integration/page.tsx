import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CRM Integration Services | Tathya",
  description:
    "Seamless CRM integration services to connect your website with customer relationship management systems. Boost sales and improve customer experience.",
  keywords: [
    "CRM integration",
    "customer management",
    "sales automation",
    "lead tracking",
    "customer data",
  ],
};

export default function CRMIntegrationPage() {
  return (
    <div className="min-h-screen bg-bg-primary pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
            CRM Integration
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Connect your website with powerful CRM systems to streamline sales,
            track leads, and provide exceptional customer experiences.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="card p-6">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              Lead Management
            </h3>
            <p className="text-text-secondary mb-4">
              Automatically capture and organize leads from your website into
              your CRM system.
            </p>
            <ul className="text-sm text-text-secondary space-y-2">
              <li>• Form integration</li>
              <li>• Lead scoring</li>
              <li>• Automated follow-ups</li>
              <li>• Lead tracking</li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              Customer Data Sync
            </h3>
            <p className="text-text-secondary mb-4">
              Keep customer information synchronized between your website and
              CRM.
            </p>
            <ul className="text-sm text-text-secondary space-y-2">
              <li>• Real-time updates</li>
              <li>• Data validation</li>
              <li>• Duplicate prevention</li>
              <li>• Data security</li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              Sales Automation
            </h3>
            <p className="text-text-secondary mb-4">
              Automate sales processes and workflows to increase efficiency.
            </p>
            <ul className="text-sm text-text-secondary space-y-2">
              <li>• Workflow automation</li>
              <li>• Email campaigns</li>
              <li>• Task management</li>
              <li>• Performance tracking</li>
            </ul>
          </div>
        </div>

        {/* Supported CRMs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-8">
            Supported CRM Platforms
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-secondary text-white p-4 rounded-lg mb-3">
                <h3 className="font-semibold">Salesforce</h3>
              </div>
              <p className="text-sm text-text-secondary">
                Enterprise-grade CRM with advanced features
              </p>
            </div>
            <div className="text-center">
              <div className="bg-secondary text-white p-4 rounded-lg mb-3">
                <h3 className="font-semibold">HubSpot</h3>
              </div>
              <p className="text-sm text-text-secondary">
                All-in-one marketing and sales platform
              </p>
            </div>
            <div className="text-center">
              <div className="bg-secondary text-white p-4 rounded-lg mb-3">
                <h3 className="font-semibold">Pipedrive</h3>
              </div>
              <p className="text-sm text-text-secondary">
                Sales-focused CRM for small businesses
              </p>
            </div>
            <div className="text-center">
              <div className="bg-secondary text-white p-4 rounded-lg mb-3">
                <h3 className="font-semibold">Custom Solutions</h3>
              </div>
              <p className="text-sm text-text-secondary">
                Tailored CRM integration for unique needs
              </p>
            </div>
          </div>
        </div>

        {/* Integration Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-8">
            Integration Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-accent text-primary-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center font-bold text-xl">
                1
              </div>
              <h3 className="font-semibold text-text-primary mb-2">Analysis</h3>
              <p className="text-sm text-text-secondary">
                Review your current CRM and website setup
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent text-primary-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center font-bold text-xl">
                2
              </div>
              <h3 className="font-semibold text-text-primary mb-2">Planning</h3>
              <p className="text-sm text-text-secondary">
                Design integration architecture and data flow
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent text-primary-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center font-bold text-xl">
                3
              </div>
              <h3 className="font-semibold text-text-primary mb-2">
                Development
              </h3>
              <p className="text-sm text-text-secondary">
                Build and test the integration
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent text-primary-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center font-bold text-xl">
                4
              </div>
              <h3 className="font-semibold text-text-primary mb-2">
                Deployment
              </h3>
              <p className="text-sm text-text-secondary">
                Launch and provide ongoing support
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-8">
            Key Features
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
                    Real-time Data Sync
                  </h3>
                  <p className="text-text-secondary">
                    Keep your CRM and website data synchronized in real-time
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
                    Secure API Integration
                  </h3>
                  <p className="text-text-secondary">
                    Enterprise-grade security for all data transfers
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
                    Custom Workflows
                  </h3>
                  <p className="text-text-secondary">
                    Tailored automation workflows for your business processes
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
                    Analytics & Reporting
                  </h3>
                  <p className="text-text-secondary">
                    Comprehensive reporting and analytics dashboard
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
                    24/7 Support
                  </h3>
                  <p className="text-text-secondary">
                    Round-the-clock technical support and maintenance
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
                    Scalable Solutions
                  </h3>
                  <p className="text-text-secondary">
                    Grow with your business with scalable integration solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            Ready to Integrate Your CRM?
          </h2>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Let's connect your website with your CRM system to streamline your
            sales process and improve customer experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-cta px-8 py-3 rounded-lg font-medium">
              Get Started
            </button>
            <button className="btn-secondary px-8 py-3 rounded-lg font-medium">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
