import Link from "next/link";
import Navigation from "../../components/layout/Navigation";
import { ThemeToggle } from "../../components/ui/ThemeToggle";

// Force SSR for this page
export const dynamic = "force-dynamic";

export default function DemoPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-background-primary text-text-primary pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-slide-up">
              <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent">
                Animation & Theme Demo
              </span>
            </h1>
            <p
              className="text-xl text-text-secondary animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Experience our beautiful animations and theme system
            </p>
          </div>

          {/* Theme Toggle Showcase */}
          <div
            className="mb-16 animate-scale-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="glass rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                Theme Toggle
              </h2>
              <p className="text-text-secondary mb-6">
                Try switching between light and dark themes
              </p>
              <div className="flex justify-center">
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* Animation Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Floating Animation */}
            <div className="glass rounded-2xl p-6 text-center animate-float">
              <div className="w-16 h-16 bg-primary-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-primary-500 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Floating</h3>
              <p className="text-text-secondary text-sm">
                Smooth up and down movement
              </p>
            </div>

            {/* Glow Animation */}
            <div className="glass rounded-2xl p-6 text-center animate-glow">
              <div className="w-16 h-16 bg-primary-500/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-primary-400 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Glow</h3>
              <p className="text-text-secondary text-sm">Pulsing glow effect</p>
            </div>

            {/* Pulse Animation */}
            <div className="glass rounded-2xl p-6 text-center animate-pulse">
              <div className="w-16 h-16 bg-primary-600/25 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-primary-600 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Pulse</h3>
              <p className="text-text-secondary text-sm">
                Gentle pulsing effect
              </p>
            </div>

            {/* Ping Animation */}
            <div className="glass rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-primary-400/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-primary-400 rounded-full animate-ping"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Ping</h3>
              <p className="text-text-secondary text-sm">
                Expanding ring effect
              </p>
            </div>

            {/* Bounce Animation */}
            <div className="glass rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-primary-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-primary-500 rounded-full animate-bounce"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Bounce</h3>
              <p className="text-text-secondary text-sm">Bouncing motion</p>
            </div>

            {/* Spin Animation */}
            <div className="glass rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-primary-600/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Spin</h3>
              <p className="text-text-secondary text-sm">Continuous rotation</p>
            </div>
          </div>

          {/* Glass Morphism Examples */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 animate-slide-up">
              Glass Morphism Effects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4 text-text-primary">
                  Light Glass
                </h3>
                <p className="text-text-secondary mb-4">
                  This card uses the glass morphism effect with backdrop blur
                  and translucent background.
                </p>
                <div className="flex gap-4">
                  <button className="px-4 py-2 bg-interactive-primary text-white rounded-lg hover:bg-interactive-primary-hover transition-colors">
                    Primary Button
                  </button>
                  <button className="px-4 py-2 border border-border-primary text-text-primary rounded-lg hover:bg-background-secondary transition-colors">
                    Secondary Button
                  </button>
                </div>
              </div>

              <div className="glass-dark rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4 text-text-primary">
                  Dark Glass
                </h3>
                <p className="text-text-secondary mb-4">
                  This card uses the dark glass morphism effect with enhanced
                  transparency for dark themes.
                </p>
                <div className="flex gap-4">
                  <button className="px-4 py-2 bg-interactive-primary text-white rounded-lg hover:bg-interactive-primary-hover transition-colors">
                    Primary Button
                  </button>
                  <button className="px-4 py-2 border border-border-primary text-text-primary rounded-lg hover:bg-background-secondary transition-colors">
                    Secondary Button
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Elements */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 animate-slide-up">
              Interactive Elements
            </h2>
            <div className="glass rounded-2xl p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <button className="group relative px-6 py-4 bg-interactive-primary hover:bg-interactive-primary-hover text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25">
                  <span className="relative z-10 font-semibold">Hover Me</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>

                <button className="group px-6 py-4 border-2 border-interactive-primary hover:border-primary-400 text-interactive-primary hover:text-primary-400 rounded-lg transition-all duration-300 transform hover:scale-105">
                  <span className="relative z-10 font-semibold">
                    Border Hover
                  </span>
                </button>

                <button className="group px-6 py-4 bg-background-secondary hover:bg-interactive-primary hover:text-white text-text-primary rounded-lg transition-all duration-300 transform hover:scale-105">
                  <span className="relative z-10 font-semibold">
                    Background
                  </span>
                </button>

                <button className="group px-6 py-4 bg-gradient-to-r from-primary-400 to-primary-600 hover:from-primary-500 hover:to-primary-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/25">
                  <span className="relative z-10 font-semibold">Gradient</span>
                </button>
              </div>
            </div>
          </div>

          {/* Color Palette Showcase */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 animate-slide-up">
              Color Palette
            </h2>
            <div className="glass rounded-2xl p-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-400 rounded-lg mx-auto mb-2"></div>
                  <p className="text-xs text-text-secondary">Primary 400</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-500 rounded-lg mx-auto mb-2"></div>
                  <p className="text-xs text-text-secondary">Primary 500</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 rounded-lg mx-auto mb-2"></div>
                  <p className="text-xs text-text-secondary">Primary 600</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-700 rounded-lg mx-auto mb-2"></div>
                  <p className="text-xs text-text-secondary">Primary 700</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-success-500 rounded-lg mx-auto mb-2"></div>
                  <p className="text-xs text-text-secondary">Success</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-warning-500 rounded-lg mx-auto mb-2"></div>
                  <p className="text-xs text-text-secondary">Warning</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-error-500 rounded-lg mx-auto mb-2"></div>
                  <p className="text-xs text-text-secondary">Error</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-info-500 rounded-lg mx-auto mb-2"></div>
                  <p className="text-xs text-text-secondary">Info</p>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-interactive-primary hover:bg-interactive-primary-hover text-white rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
