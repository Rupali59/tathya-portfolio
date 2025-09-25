"use client";

import ChatInterface from "./ChatInterface";

export default function Hero(): JSX.Element {
  return (
    <div className="min-h-screen flex items-center justify-center px-2 py-8 relative">
      {/* Background image with opacity control */}
      <div className="absolute inset-0 background-image-responsive background-image" />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <ChatInterface />
      </div>
    </div>
  );
}
