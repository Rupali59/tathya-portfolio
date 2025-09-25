export default function Services(): JSX.Element {
  return (
    <section className="py-20 bg-background-secondary text-text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-text-primary">
            Our Services
          </h2>
          <p className="text-xl text-text-secondary">What we can do for you</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="glass rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-semibold mb-2 text-text-primary">
              Web Development
            </h3>
            <p className="text-text-secondary">
              Building responsive websites and web applications using modern
              technologies.
            </p>
          </div>

          <div className="glass rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-xl font-semibold mb-2 text-text-primary">
              Software Development
            </h3>
            <p className="text-text-secondary">
              Creating custom software solutions tailored to your business
              needs.
            </p>
          </div>

          <div className="glass rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-xl font-semibold mb-2 text-text-primary">
              Technical Consulting
            </h3>
            <p className="text-text-secondary">
              Providing technical guidance and solutions for your development
              challenges.
            </p>
          </div>

          <div className="glass rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-2 text-text-primary">
              Mobile Development
            </h3>
            <p className="text-text-secondary">
              Developing mobile applications and responsive web solutions.
            </p>
          </div>

          <div className="glass rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2 text-text-primary">
              Reddit SEO
            </h3>
            <p className="text-text-secondary">
              Maximize your Reddit presence with strategic community engagement
              and content optimization.
            </p>
          </div>

          <div className="glass rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🐦</div>
            <h3 className="text-xl font-semibold mb-2 text-text-primary">
              Twitter SEO
            </h3>
            <p className="text-text-secondary">
              Boost your Twitter engagement and reach with optimized hashtags,
              timing, and content strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
