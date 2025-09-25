export default function FAQ(): JSX.Element {
  return (
    <section className="py-20 text-text-primary relative">
      {/* Background image with opacity control */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('/images/assets/backgrounds/griddots.png')",
          opacity: "var(--bg-image-opacity, 1)",
        }}
      />

      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-text-primary">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-text-secondary">
              Everything you need to know
            </p>
          </div>

          <div className="space-y-6">
            <div className="glass p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2 text-text-primary">
                What services do you offer?
              </h3>
              <p className="text-text-secondary">
                We offer web development, software development, technical
                consulting, and mobile development services. We specialize in
                modern technologies like React, Next.js, Node.js, and Python.
              </p>
            </div>

            <div className="glass p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2 text-text-primary">
                How long does a project typically take?
              </h3>
              <p className="text-text-secondary">
                Project timelines vary depending on complexity and requirements.
                Simple websites typically take 2-4 weeks, while complex
                applications can take 2-6 months. We provide detailed timelines
                during the planning phase.
              </p>
            </div>

            <div className="glass p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2 text-text-primary">
                Do you provide ongoing support?
              </h3>
              <p className="text-text-secondary">
                Yes, we provide ongoing support and maintenance for all our
                projects. We offer different support packages ranging from basic
                maintenance to comprehensive support with regular updates and
                improvements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
