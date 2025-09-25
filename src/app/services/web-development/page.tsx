import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Services | Tathya",
  description:
    "Professional web development services including custom websites, web applications, and e-commerce solutions. Built with modern technologies for optimal performance.",
  keywords: [
    "web development",
    "custom websites",
    "web applications",
    "e-commerce",
    "responsive design",
  ],
};

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-bg-primary pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
            Web Development
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            We build fast, responsive, and scalable websites that drive business
            growth. From simple landing pages to complex web applications, we
            deliver solutions that work.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="card p-6">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              Custom Websites
            </h3>
            <p className="text-text-secondary mb-4">
              Tailored websites designed specifically for your business needs
              and brand identity.
            </p>
            <ul className="text-sm text-text-secondary space-y-2">
              <li>• Responsive design</li>
              <li>• SEO optimization</li>
              <li>• Fast loading times</li>
              <li>• Mobile-first approach</li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              Web Applications
            </h3>
            <p className="text-text-secondary mb-4">
              Dynamic web applications with interactive features and user
              management systems.
            </p>
            <ul className="text-sm text-text-secondary space-y-2">
              <li>• User authentication</li>
              <li>• Database integration</li>
              <li>• Real-time updates</li>
              <li>• API development</li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              E-commerce Solutions
            </h3>
            <p className="text-text-secondary mb-4">
              Complete online stores with payment processing and inventory
              management.
            </p>
            <ul className="text-sm text-text-secondary space-y-2">
              <li>• Payment integration</li>
              <li>• Inventory tracking</li>
              <li>• Order management</li>
              <li>• Analytics dashboard</li>
            </ul>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-8">
            Our Technology Stack
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-secondary text-white p-4 rounded-lg mb-3">
                <h3 className="font-semibold">Frontend</h3>
              </div>
              <p className="text-sm text-text-secondary">
                React, Next.js, TypeScript, Tailwind CSS
              </p>
            </div>
            <div className="text-center">
              <div className="bg-secondary text-white p-4 rounded-lg mb-3">
                <h3 className="font-semibold">Backend</h3>
              </div>
              <p className="text-sm text-text-secondary">
                Node.js, Python, PostgreSQL, MongoDB
              </p>
            </div>
            <div className="text-center">
              <div className="bg-secondary text-white p-4 rounded-lg mb-3">
                <h3 className="font-semibold">Cloud</h3>
              </div>
              <p className="text-sm text-text-secondary">
                AWS, Vercel, Docker, CI/CD
              </p>
            </div>
            <div className="text-center">
              <div className="bg-secondary text-white p-4 rounded-lg mb-3">
                <h3 className="font-semibold">Tools</h3>
              </div>
              <p className="text-sm text-text-secondary">
                Git, Figma, Analytics, Testing
              </p>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-8">
            Our Development Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-accent text-primary-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center font-bold text-xl">
                1
              </div>
              <h3 className="font-semibold text-text-primary mb-2">
                Discovery
              </h3>
              <p className="text-sm text-text-secondary">
                Understanding your business goals and requirements
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent text-primary-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center font-bold text-xl">
                2
              </div>
              <h3 className="font-semibold text-text-primary mb-2">Design</h3>
              <p className="text-sm text-text-secondary">
                Creating wireframes and visual designs
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
                Building and testing your website
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent text-primary-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center font-bold text-xl">
                4
              </div>
              <h3 className="font-semibold text-text-primary mb-2">Launch</h3>
              <p className="text-sm text-text-secondary">
                Deployment and ongoing support
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            Ready to Build Your Website?
          </h2>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a website that drives results
            for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-cta px-8 py-3 rounded-lg font-medium">
              Get Started
            </button>
            <button className="btn-secondary px-8 py-3 rounded-lg font-medium">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
