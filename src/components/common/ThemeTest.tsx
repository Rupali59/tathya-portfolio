import React from "react";

const ThemeTest: React.FC = () => {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold text-text-primary mb-6">
        Tathya Theme Test Component
      </h1>

      {/* Background Tests */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-text-primary">
          Background Colors
        </h2>
        <div className="bg-bg-primary p-4 rounded-lg border border-card-border">
          <p className="text-text-primary">
            Primary Background with Primary Text
          </p>
        </div>
        <div className="bg-bg-secondary p-4 rounded-lg border border-card-border">
          <p className="text-text-primary">
            Secondary Background with Primary Text
          </p>
        </div>
      </div>

      {/* Text Tests */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-text-primary">Text Colors</h2>
        <p className="text-text-primary text-lg">Primary Text Color</p>
        <p className="text-text-secondary text-lg">Secondary Text Color</p>
        <p className="text-accent text-lg">Accent Text Color</p>
      </div>

      {/* Button Tests */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-text-primary">
          Button Styles
        </h2>
        <div className="flex gap-4">
          <button className="btn-cta px-6 py-3 rounded-lg font-medium">
            CTA Button
          </button>
          <button className="btn-secondary px-6 py-3 rounded-lg font-medium">
            Secondary Button
          </button>
        </div>
      </div>

      {/* Card Tests */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-text-primary">Card Styles</h2>
        <div className="card p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-text-primary mb-2">
            Card Title
          </h3>
          <p className="text-text-secondary">
            This is a card with semantic colors applied.
          </p>
        </div>
      </div>

      {/* Divider Test */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-text-primary">Divider</h2>
        <hr className="border-divider" />
      </div>

      {/* Tailwind Classes Test */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-text-primary">
          Tailwind Classes
        </h2>
        <div className="bg-bg-primary p-4 rounded-lg border border-card-border">
          <p className="text-text-primary">
            Using bg-bg-primary and text-text-primary
          </p>
        </div>
        <div className="bg-btn-cta-bg text-btn-cta-text p-4 rounded-lg">
          <p>Using bg-btn-cta-bg and text-btn-cta-text</p>
        </div>
        <div className="bg-card-bg border border-card-border p-4 rounded-lg">
          <p className="text-text-primary">Using card semantic colors</p>
        </div>
      </div>

      {/* Brand Colors Test */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-text-primary">
          Brand Colors
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-primary text-white p-4 rounded-lg text-center">
            <p className="font-semibold">Primary</p>
            <p className="text-sm">#1E293B</p>
          </div>
          <div className="bg-secondary text-white p-4 rounded-lg text-center">
            <p className="font-semibold">Secondary</p>
            <p className="text-sm">#0EA5E9</p>
          </div>
          <div className="bg-accent text-primary-800 p-4 rounded-lg text-center">
            <p className="font-semibold">Accent</p>
            <p className="text-sm">#FACC15</p>
          </div>
          <div className="bg-background border border-primary-200 text-text p-4 rounded-lg text-center">
            <p className="font-semibold">Background</p>
            <p className="text-sm">#FFFFFF</p>
          </div>
        </div>
      </div>

      {/* Theme Comparison */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-text-primary">
          Theme Comparison
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Light Theme
            </h3>
            <p className="text-text-secondary mb-4">
              Clean white backgrounds with dark text for optimal readability.
            </p>
            <div className="space-y-2">
              <div className="bg-bg-primary text-text-primary p-3 rounded">
                Primary Background
              </div>
              <div className="bg-bg-secondary text-text-primary p-3 rounded">
                Secondary Background
              </div>
              <div className="bg-btn-cta-bg text-btn-cta-text p-3 rounded">
                CTA Button
              </div>
              <div className="bg-btn-secondary-bg text-btn-secondary-text p-3 rounded">
                Secondary Button
              </div>
            </div>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Dark Theme
            </h3>
            <p className="text-text-secondary mb-4">
              Dark slate backgrounds with white text for comfortable viewing.
            </p>
            <div className="space-y-2">
              <div className="bg-bg-primary text-text-primary p-3 rounded">
                Primary Background
              </div>
              <div className="bg-bg-secondary text-text-primary p-3 rounded">
                Secondary Background
              </div>
              <div className="bg-btn-cta-bg text-btn-cta-text p-3 rounded">
                CTA Button
              </div>
              <div className="bg-btn-secondary-bg text-btn-secondary-text p-3 rounded">
                Secondary Button
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeTest;
