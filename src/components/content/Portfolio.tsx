export default function Portfolio(): JSX.Element {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-400">Check out our latest projects</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="h-48 bg-gray-800 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">E-Commerce Platform</h3>
            <p className="text-gray-400">Full-stack e-commerce solution with React, Node.js, and MongoDB.</p>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="h-48 bg-gray-800 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">CRM Dashboard</h3>
            <p className="text-gray-400">Modern CRM dashboard built with Next.js and Tailwind CSS.</p>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="h-48 bg-gray-800 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Task Management App</h3>
            <p className="text-gray-400">Collaborative task management application with real-time updates.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
