export default function Hero(): JSX.Element {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Large floating elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full animate-float blur-xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-400/5 rounded-full animate-float-delayed blur-2xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary-600/8 rounded-full animate-pulse blur-xl" />
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main heading with enhanced animations */}
        <div className="animate-slide-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent transition-all duration-1000 hover:from-primary-300 hover:via-primary-400 hover:to-primary-500">
              Tathya
            </span>
          </h1>
        </div>

        {/* Subtitle with fade-in animation */}
        <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <p className="text-xl sm:text-2xl mb-8 text-text-secondary max-w-3xl mx-auto font-medium">
            Building Solutions Grounded in Facts
          </p>
        </div>

        {/* Description with scale-in animation */}
        <div className="animate-scale-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-lg sm:text-xl mb-12 text-text-tertiary max-w-4xl mx-auto leading-relaxed">
            We're a passionate team of developers and designers who love
            creating clean, functional solutions based on facts, data, and
            proven methodologies. Let's build something amazing together.
          </p>
        </div>

        {/* CTA buttons with enhanced styling */}
        <div
          className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animationDelay: "0.6s" }}
        >
          <button className="group relative px-8 py-4 text-lg font-semibold bg-interactive-primary hover:bg-interactive-primary-hover text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button className="group px-8 py-4 text-lg font-semibold border-2 border-border-primary hover:border-interactive-primary text-text-primary hover:text-interactive-primary rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm glass">
            <span className="relative z-10">Learn More</span>
            <div className="absolute inset-0 bg-interactive-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        {/* Floating elements around the content */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary-400/20 rounded-full animate-float" />
        <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-primary-500/25 rounded-full animate-float-delayed" />
        <div className="absolute top-1/2 -right-20 w-12 h-12 bg-primary-600/30 rounded-full animate-pulse" />
        <div className="absolute top-1/3 -left-16 w-8 h-8 bg-primary-300/35 rounded-full animate-ping" />
      </div>
    </section>
  );
}
