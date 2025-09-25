export default function FAQ(): JSX.Element {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-400">Everything you need to know</p>
        </div>
        
        <div className="space-y-6">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">What services do you offer?</h3>
            <p className="text-gray-400">
              We offer web development, software development, technical consulting, and mobile development services. 
              We specialize in modern technologies like React, Next.js, Node.js, and Python.
            </p>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">How long does a project typically take?</h3>
            <p className="text-gray-400">
              Project timelines vary depending on complexity and requirements. Simple websites typically take 2-4 weeks, 
              while complex applications can take 2-6 months. We provide detailed timelines during the planning phase.
            </p>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Do you provide ongoing support?</h3>
            <p className="text-gray-400">
              Yes, we provide ongoing support and maintenance for all our projects. We offer different support packages 
              ranging from basic maintenance to comprehensive support with regular updates and improvements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
