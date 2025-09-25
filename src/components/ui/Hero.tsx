export default function Hero(): JSX.Element {
  return (
    <section className="hero-section bg-black text-white">
      <div className="hero-content">
        <h1 className="text-6xl font-bold mb-6">
          <span className="text-gradient">Tathya</span>
        </h1>
        <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Building Solutions Grounded in Facts
        </p>
        <p className="text-lg mb-12 text-gray-400 max-w-3xl mx-auto">
          We're a passionate team of developers and designers who love creating
          clean, functional solutions based on facts, data, and proven
          methodologies. Let's build something amazing together.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="btn-primary px-8 py-3 text-lg">Get Started</button>
          <button className="border border-gray-600 text-white px-8 py-3 text-lg rounded-lg hover:bg-gray-800 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
