"use client";

import ChatInterface from "./ChatInterface";

export default function Hero(): JSX.Element {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative"
      style={{
        backgroundImage: "url('/images/assets/backgrounds/griddots.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay for better text readability */}
      <div
        className="absolute inset-0 bg-black/20 dark:bg-black/40"
        style={{
          backdropFilter: "blur(0.5px)",
        }}
      ></div>

      <div className="relative z-10">
        <ChatInterface />
      </div>
    </div>
  );
}
