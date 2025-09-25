export default function Services(): JSX.Element {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-400">What we can do for you</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-400">Building responsive websites and web applications using modern technologies.</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-xl font-semibold mb-2">Software Development</h3>
            <p className="text-gray-400">Creating custom software solutions tailored to your business needs.</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-xl font-semibold mb-2">Technical Consulting</h3>
            <p className="text-gray-400">Providing technical guidance and solutions for your development challenges.</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-2">Mobile Development</h3>
            <p className="text-gray-400">Developing mobile applications and responsive web solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
