export default function Portfolio(): JSX.Element {
  return (
    <section className="py-20 bg-background-primary text-text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-text-primary">
            Our Portfolio
          </h2>
          <p className="text-xl text-text-secondary">
            Check out our latest projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="glass p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
            <div className="h-48 bg-background-secondary rounded-lg mb-4 flex items-center justify-center">
              <span className="text-4xl">🛒</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-text-primary">
              E-Commerce Platform
            </h3>
            <p className="text-text-secondary">
              Full-stack e-commerce solution with React, Node.js, and MongoDB.
            </p>
          </div>

          <div className="glass p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
            <div className="h-48 bg-background-secondary rounded-lg mb-4 flex items-center justify-center">
              <span className="text-4xl">📊</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-text-primary">
              CRM Dashboard
            </h3>
            <p className="text-text-secondary">
              Modern CRM dashboard built with Next.js and Tailwind CSS.
            </p>
          </div>

          <div className="glass p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
            <div className="h-48 bg-background-secondary rounded-lg mb-4 flex items-center justify-center">
              <span className="text-4xl">✅</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-text-primary">
              Task Management App
            </h3>
            <p className="text-text-secondary">
              Collaborative task management application with real-time updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
