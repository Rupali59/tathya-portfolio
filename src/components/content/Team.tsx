export default function Team(): JSX.Element {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-400">The people behind Tathya</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-8 rounded-lg text-center">
            <div className="text-6xl mb-4">👩‍💻</div>
            <h3 className="text-2xl font-semibold mb-2">Rupali B</h3>
            <p className="text-green-400 mb-4">Developer & Problem Solver</p>
            <p className="text-gray-400 mb-4">
              Passionate developer with experience in web development and
              software engineering. I love learning new technologies and
              building solutions that make a difference.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/Rupali59"
                className="text-gray-400 hover:text-white"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/rupali-bhatnagar-b4864957"
                className="text-gray-400 hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg text-center">
            <div className="text-6xl mb-4">👩‍🎨</div>
            <h3 className="text-2xl font-semibold mb-2">Keerti Kaushik</h3>
            <p className="text-green-400 mb-4">UI/UX Designer</p>
            <p className="text-gray-400 mb-4">
              Creative designer with a passion for creating beautiful and
              functional user interfaces. Focused on delivering great user
              experiences through thoughtful design.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://linkedin.com/in/kumkirt"
                className="text-gray-400 hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href="https://dribbble.com/keertikaushik"
                className="text-gray-400 hover:text-white"
              >
                Dribbble
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
