export default function Contact(): JSX.Element {
  return (
    <section
      id="contact"
      className="py-20 bg-background-tertiary text-text-primary"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-text-primary">
            Get In Touch
          </h2>
          <p className="text-xl text-text-secondary">
            Ready to start your project?
          </p>
        </div>

        <div className="glass p-8 rounded-lg">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-text-primary"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-background-secondary border border-border-primary rounded-lg focus:ring-2 focus:ring-interactive-primary focus:border-transparent text-text-primary placeholder-text-tertiary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-text-primary"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-background-secondary border border-border-primary rounded-lg focus:ring-2 focus:ring-interactive-primary focus:border-transparent text-text-primary placeholder-text-tertiary"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2 text-text-primary"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 bg-background-secondary border border-border-primary rounded-lg focus:ring-2 focus:ring-interactive-primary focus:border-transparent text-text-primary placeholder-text-tertiary"
                placeholder="Project inquiry"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 text-text-primary"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 bg-background-secondary border border-border-primary rounded-lg focus:ring-2 focus:ring-interactive-primary focus:border-transparent text-text-primary placeholder-text-tertiary"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-interactive-primary hover:bg-interactive-primary-hover text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
