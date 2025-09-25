"use client";

import ChatInterface from "./ChatInterface";

export default function Hero(): JSX.Element {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      {/* Background image with opacity control */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('/images/assets/backgrounds/griddots.png')",
          opacity: "var(--bg-image-opacity, 1)",
        }}
      />

      {/* Dark theme overlay for reduced opacity */}
      <div className="absolute inset-0 bg-background-primary/50 dark:bg-background-primary/80" />

      <div className="relative z-10">
        <ChatInterface />
      </div>
    </div>
  );
}
