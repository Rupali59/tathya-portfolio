import Logo from "@/components/common/Logo";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-background-primary text-text-primary py-12 border-t border-border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Logo size="md" showTagline={true} className="mb-4" />
            <p className="text-text-tertiary">hello@tathya.dev</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-text-primary">
              Services
            </h4>
            <ul className="space-y-2 text-text-secondary">
              <li>
                <a
                  href="#"
                  className="hover:text-interactive-primary transition-colors"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-interactive-primary transition-colors"
                >
                  Software Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-interactive-primary transition-colors"
                >
                  Technical Consulting
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-interactive-primary transition-colors"
                >
                  Mobile Development
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-text-primary">
              Company
            </h4>
            <ul className="space-y-2 text-text-secondary">
              <li>
                <a
                  href="/about"
                  className="hover:text-interactive-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-interactive-primary transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="hover:text-interactive-primary transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-interactive-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-text-primary">
              Connect
            </h4>
            <ul className="space-y-2 text-text-secondary">
              <li>
                <a
                  href="https://github.com/Rupali59"
                  className="hover:text-interactive-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/rupali-bhatnagar-b4864957"
                  className="hover:text-interactive-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/rupali_dev"
                  className="hover:text-interactive-primary transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://tathya.dev"
                  className="hover:text-interactive-primary transition-colors"
                >
                  Website
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border-primary mt-8 pt-8">
          <div className="text-center text-text-tertiary mb-4">
            <p>&copy; 2024 Tathya. All rights reserved.</p>
          </div>

          <div className="text-center text-text-tertiary text-sm">
            <p className="mb-2">
              <a
                href="/privacy"
                className="hover:text-interactive-primary transition-colors underline"
              >
                Privacy Policy
              </a>
              {" • "}
              <a
                href="/terms"
                className="hover:text-interactive-primary transition-colors underline"
              >
                Terms of Service
              </a>
            </p>
            <p className="text-xs opacity-75">
              We acknowledge that we have the necessary privacy disclosures and
              rights from our end users for the collection and processing of
              their data, including the association of such data with the
              visitation information Google Analytics collects from our site.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
