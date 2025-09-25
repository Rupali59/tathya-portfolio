"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import Logo from "@/components/common/Logo";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Navigation(): JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const servicesItems = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "CRM Integration", href: "/services/crm-integration" },
    { name: "SEO Optimization", href: "/services/seo" },
    { name: "Performance Optimization", href: "/services/performance" },
  ];

  return (
    <nav className="fixed top-0 w-full glass dark:glass-dark backdrop-blur-sm border-b border-border-primary z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Logo size="lg" showTagline={false} useLogo={true} />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-text-secondary hover:text-secondary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-text-secondary hover:text-secondary transition-colors"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-text-secondary hover:text-secondary transition-colors">
                Services
                <ChevronDownIcon
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-background-elevated/95 backdrop-blur-sm border border-border-primary/50 rounded-lg shadow-lg z-50 overflow-hidden hover:shadow-xl transition-all duration-200 ${
                  isServicesOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="py-2">
                  {servicesItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-text-secondary hover:text-secondary hover:bg-secondary/15 hover:border-l-2 hover:border-secondary/70 hover:font-medium transition-all duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/pricing"
              className="text-text-secondary hover:text-secondary transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-text-secondary hover:text-secondary transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/demo"
              className="text-text-secondary hover:text-secondary transition-colors"
            >
              Demo
            </Link>
          </div>

          {/* Theme Toggle and Mobile menu button */}
          <div className="flex items-center gap-4">
            <ThemeToggle />

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-text-secondary hover:text-secondary transition-colors"
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          } overflow-hidden`}
        >
          <div className="py-4 border-t border-border-primary">
            <div className="space-y-2">
              <Link
                href="/"
                className="block px-4 py-2 text-text-secondary hover:text-secondary hover:bg-secondary/15 hover:border-l-2 hover:border-secondary/70 hover:font-medium rounded-lg transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-4 py-2 text-text-secondary hover:text-secondary hover:bg-secondary/15 hover:border-l-2 hover:border-secondary/70 hover:font-medium rounded-lg transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>

              {/* Mobile Services Dropdown */}
              <div className="px-4">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full py-2 text-text-secondary hover:text-secondary transition-colors"
                >
                  Services
                  <ChevronDownIcon
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`ml-4 mt-2 space-y-1 transition-all duration-200 ${
                    isServicesOpen
                      ? "max-h-48 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  {servicesItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-text-secondary hover:text-secondary hover:bg-secondary/15 hover:border-l-2 hover:border-secondary/70 hover:font-medium rounded-lg transition-all duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/pricing"
                className="block px-4 py-2 text-text-secondary hover:text-secondary hover:bg-secondary/15 hover:border-l-2 hover:border-secondary/70 hover:font-medium rounded-lg transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-2 text-text-secondary hover:text-secondary hover:bg-secondary/15 hover:border-l-2 hover:border-secondary/70 hover:font-medium rounded-lg transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/demo"
                className="block px-4 py-2 text-text-secondary hover:text-secondary hover:bg-secondary/15 hover:border-l-2 hover:border-secondary/70 hover:font-medium rounded-lg transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
