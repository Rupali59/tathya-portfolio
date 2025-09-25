import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Tathya",
  description:
    "Privacy policy and data collection practices for Tathya portfolio website.",
};

export default function PrivacyPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-background-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-text-primary mb-8">
            Privacy Policy
          </h1>

          <div className="text-text-secondary space-y-6">
            <p className="text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                Data Collection and Processing
              </h2>
              <p>
                We acknowledge that we have the necessary privacy disclosures
                and rights from our end users for the collection and processing
                of their data, including the association of such data with the
                visitation information Google Analytics collects from our site
                and/or app property.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                Google Analytics
              </h2>
              <p>
                This website uses Google Analytics to collect information about
                how visitors use our site. We use this information to improve
                our website and understand user behavior.
              </p>
              <p>Google Analytics collects information such as:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pages visited and time spent on each page</li>
                <li>Referring websites and search terms</li>
                <li>Browser type and device information</li>
                <li>Geographic location (country/city level)</li>
                <li>IP address (anonymized)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                Data Protection Rights
              </h2>
              <p>
                We are committed to protecting your privacy and ensuring
                compliance with applicable data protection laws, including GDPR.
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal data</li>
                <li>Rectify inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                Contact Information
              </h2>
              <p>
                If you have any questions about this privacy policy or our data
                practices, please contact us at:
              </p>
              <p className="font-medium">Email: hello@tathya.dev</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                Changes to This Policy
              </h2>
              <p>
                We may update this privacy policy from time to time. Any changes
                will be posted on this page with an updated revision date.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
