import Link from "next/link";
import { ThemeToggle } from "../ui/ThemeToggle";

export default function Navigation(): JSX.Element {
  return (
    <nav className="fixed top-0 w-full glass dark:glass-dark backdrop-blur-sm border-b border-border-primary z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-text-primary hover:text-interactive-primary transition-colors"
          >
            Tathya
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-text-secondary hover:text-interactive-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-text-secondary hover:text-interactive-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-text-secondary hover:text-interactive-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="/pricing"
              className="text-text-secondary hover:text-interactive-primary transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="text-text-secondary hover:text-interactive-primary transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/demo"
              className="text-text-secondary hover:text-interactive-primary transition-colors"
            >
              Demo
            </Link>
          </div>

          {/* Theme Toggle and Mobile menu button */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="md:hidden">
              <button className="text-text-secondary hover:text-interactive-primary transition-colors">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
