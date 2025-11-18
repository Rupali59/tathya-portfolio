"use client";

import { useState, useTransition } from "react";
import { submitContactForm } from "@/lib/actions";

interface ContactFormProps {
  variant?: "default" | "compact" | "modal";
  service?: string;
  className?: string;
}

export default function ContactForm({
  variant = "default",
  service = "",
  className = "",
}: ContactFormProps) {
  const [isPending, startTransition] = useTransition();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: service,
    message: "",
    budget: "",
    timeline: "",
  });
  const [result, setResult] = useState<{
    success: boolean;
    message?: string;
    error?: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    startTransition(async () => {
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        form.append(key, value);
      });

      const response = await submitContactForm(form);
      setResult(response);

      if (response.success) {
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: service,
          message: "",
          budget: "",
          timeline: "",
        });
      }
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-text-primary"
            >
              Name *
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-text-primary"
            >
              Email *
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-text-primary"
          >
            Message *
          </label>
          <textarea
            name="message"
            id="message"
            rows={3}
            required
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent sm:text-sm"
          />
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="w-full btn-cta px-4 py-2 rounded-md font-medium disabled:opacity-50"
        >
          {isPending ? "Sending..." : "Send Message"}
        </button>
        {result && (
          <div
            className={`text-sm ${
              result.success ? "text-green-600" : "text-red-600"
            }`}
          >
            {result.success ? result.message : result.error}
          </div>
        )}
      </form>
    );
  }

  if (variant === "modal") {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-screen items-center justify-center p-4">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75" />
          <div className="relative bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Get in Touch
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message *
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={3}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent sm:text-sm"
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isPending}
                  className="px-4 py-2 text-sm font-medium text-white bg-accent rounded-md hover:bg-accent/90 disabled:opacity-50"
                >
                  {isPending ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
            {result && (
              <div
                className={`mt-4 text-sm ${
                  result.success ? "text-green-600" : "text-red-600"
                }`}
              >
                {result.success ? result.message : result.error}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        Get Started Today
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent sm:text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700"
            >
              Company
            </label>
            <input
              type="text"
              name="company"
              id="company"
              value={formData.company}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-gray-700"
          >
            Service Interested In *
          </label>
          <select
            name="service"
            id="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent sm:text-sm"
          >
            <option value="">Select a service</option>
            <option value="web-development">Web Development</option>
            <option value="crm-integration">CRM Integration</option>
            <option value="mobile-development">Mobile Development</option>
            <option value="technical-consulting">Technical Consulting</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="maintenance-support">Maintenance & Support</option>
          </select>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="budget"
              className="block text-sm font-medium text-gray-700"
            >
              Budget Range
            </label>
            <select
              name="budget"
              id="budget"
              value={formData.budget}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent sm:text-sm"
            >
              <option value="">Select budget range</option>
              <option value="low">Under $5,000</option>
              <option value="medium">$5,000 - $15,000</option>
              <option value="high">$15,000 - $50,000</option>
              <option value="enterprise">$50,000+</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="timeline"
              className="block text-sm font-medium text-gray-700"
            >
              Project Timeline
            </label>
            <select
              name="timeline"
              id="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent sm:text-sm"
            >
              <option value="">Select timeline</option>
              <option value="urgent">ASAP (Within 1 month)</option>
              <option value="soon">Soon (1-3 months)</option>
              <option value="flexible">Flexible (3-6 months)</option>
              <option value="planning">Just planning ahead</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Project Details *
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project requirements, goals, and any specific features you need..."
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent sm:text-sm"
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full btn-cta px-6 py-3 rounded-md font-medium disabled:opacity-50"
        >
          {isPending ? "Sending..." : "Send Message"}
        </button>

        {result && (
          <div
            className={`text-sm ${
              result.success ? "text-green-600" : "text-red-600"
            }`}
          >
            {result.success ? result.message : result.error}
          </div>
        )}
      </form>
    </div>
  );
}

