import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Tathya",
  description:
    "Terms of service and usage agreement for Tathya portfolio website.",
};

export default function TermsPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-background-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-text-primary mb-8">
            Terms of Service
          </h1>

          <div className="text-text-secondary space-y-6">
            <p className="text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                Acceptance of Terms
              </h2>
              <p>
                By accessing and using this website, you accept and agree to be
                bound by the terms and provision of this agreement. If you do
                not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                Use License
              </h2>
              <p>
                Permission is granted to temporarily download one copy of the
                materials on Tathya's website for personal, non-commercial
                transitory viewing only. This is the grant of a license, not a
                transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>
                  Use the materials for any commercial purpose or for any public
                  display
                </li>
                <li>
                  Attempt to reverse engineer any software contained on the
                  website
                </li>
                <li>
                  Remove any copyright or other proprietary notations from the
                  materials
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                Disclaimer
              </h2>
              <p>
                The materials on Tathya's website are provided on an 'as is'
                basis. Tathya makes no warranties, expressed or implied, and
                hereby disclaims and negates all other warranties including
                without limitation, implied warranties or conditions of
                merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of
                rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                Limitations
              </h2>
              <p>
                In no event shall Tathya or its suppliers be liable for any
                damages (including, without limitation, damages for loss of data
                or profit, or due to business interruption) arising out of the
                use or inability to use the materials on Tathya's website, even
                if Tathya or a Tathya authorized representative has been
                notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                Privacy and Data Collection
              </h2>
              <p>
                We acknowledge that we have the necessary privacy disclosures
                and rights from our end users for the collection and processing
                of their data, including the association of such data with the
                visitation information Google Analytics collects from our site
                and/or app property.
              </p>
              <p>
                For more detailed information about our data practices, please
                review our
                <a
                  href="/privacy"
                  className="text-interactive-primary hover:underline"
                >
                  {" "}
                  Privacy Policy
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                Contact Information
              </h2>
              <p>
                If you have any questions about these Terms of Service, please
                contact us at:
              </p>
              <p className="font-medium">Email: hello@tathya.dev</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                Changes to Terms
              </h2>
              <p>
                Tathya reserves the right to revise these terms of service at
                any time without notice. By using this website, you are agreeing
                to be bound by the then current version of these terms of
                service.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
