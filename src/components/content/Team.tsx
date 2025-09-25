export default function Team(): JSX.Element {
  return (
    <section className="py-20 bg-background-secondary text-text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-text-primary">
            Meet Our Team
          </h2>
          <p className="text-xl text-text-secondary">
            The people behind Tathya
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass p-8 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4">👩‍💻</div>
            <h3 className="text-2xl font-semibold mb-2 text-text-primary">
              Rupali B
            </h3>
            <p className="text-interactive-primary mb-4">
              Developer & Problem Solver
            </p>
            <p className="text-text-secondary mb-4">
              Passionate developer with experience in web development and
              software engineering. I love learning new technologies and
              building solutions that make a difference.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/Rupali59"
                className="text-text-secondary hover:text-interactive-primary transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/rupali-bhatnagar-b4864957"
                className="text-text-secondary hover:text-interactive-primary transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="glass p-8 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4">👩‍🎨</div>
            <h3 className="text-2xl font-semibold mb-2 text-text-primary">
              Keerti Kaushik
            </h3>
            <p className="text-interactive-primary mb-4">UI/UX Designer</p>
            <p className="text-text-secondary mb-4">
              Creative designer with a passion for creating beautiful and
              functional user interfaces. Focused on delivering great user
              experiences through thoughtful design.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://linkedin.com/in/kumkirt"
                className="text-text-secondary hover:text-interactive-primary transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://dribbble.com/keertikaushik"
                className="text-text-secondary hover:text-interactive-primary transition-colors"
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
