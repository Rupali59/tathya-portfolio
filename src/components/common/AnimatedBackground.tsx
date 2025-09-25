"use client";

import React, { useEffect, useRef } from "react";

interface AnimatedBackgroundProps {
  className?: string;
}

export function AnimatedBackground({
  className = "",
}: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Animation particles
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      life: number;
      maxLife: number;
    }

    const particles: Particle[] = [];
    const maxParticles = 50;

    // Color palettes for different themes
    const colorPalettes = {
      light: [
        "#10b981", // emerald-500
        "#059669", // emerald-600
        "#047857", // emerald-700
        "#6b7280", // gray-500
        "#4b5563", // gray-600
      ],
      dark: [
        "#34d399", // emerald-400
        "#10b981", // emerald-500
        "#059669", // emerald-600
        "#9ca3af", // gray-400
        "#6b7280", // gray-500
      ],
    };

    // Get current theme colors
    const getCurrentColors = () => {
      const isDark =
        document.documentElement.classList.contains("dark") ||
        document.documentElement.getAttribute("data-theme") === "dark";
      return isDark ? colorPalettes.dark : colorPalettes.light;
    };

    // Create particle
    const createParticle = (): Particle => {
      const colors = getCurrentColors();
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.6 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
        maxLife: Math.random() * 200 + 100,
      };
    };

    // Initialize particles
    for (let i = 0; i < maxParticles; i++) {
      particles.push(createParticle());
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create translucent background
      const isDark =
        document.documentElement.classList.contains("dark") ||
        document.documentElement.getAttribute("data-theme") === "dark";

      ctx.fillStyle = isDark ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update particle
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Fade out near end of life
        const lifeRatio = particle.life / particle.maxLife;
        const currentOpacity = particle.opacity * (1 - lifeRatio * lifeRatio);

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle =
          particle.color +
          Math.floor(currentOpacity * 255)
            .toString(16)
            .padStart(2, "0");
        ctx.fill();

        // Add glow effect
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fillStyle =
          particle.color +
          Math.floor(currentOpacity * 50)
            .toString(16)
            .padStart(2, "0");
        ctx.fill();

        // Reset particle when life ends
        if (particle.life >= particle.maxLife) {
          particles[index] = createParticle();
        }
      });

      // Draw connections between nearby particles
      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach((particle2) => {
          const dx = particle1.x - particle2.x;
          const dy = particle1.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const opacity = (1 - distance / 100) * 0.2;
            const isDark =
              document.documentElement.classList.contains("dark") ||
              document.documentElement.getAttribute("data-theme") === "dark";

            ctx.beginPath();
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.strokeStyle = isDark
              ? `rgba(52, 211, 153, ${opacity})`
              : `rgba(16, 185, 129, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{ zIndex: -1 }}
    />
  );
}

// Floating geometric shapes component
export function FloatingShapes() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: -1 }}
    >
      {/* Large floating circles */}
      <div
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary-400/10 animate-pulse"
        style={{ animationDelay: "0s", animationDuration: "4s" }}
      />
      <div
        className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-primary-500/15 animate-pulse"
        style={{ animationDelay: "2s", animationDuration: "6s" }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-40 h-40 rounded-full bg-primary-600/5 animate-pulse"
        style={{ animationDelay: "1s", animationDuration: "8s" }}
      />

      {/* Medium floating shapes */}
      <div
        className="absolute top-1/2 right-1/3 w-16 h-16 bg-primary-300/20 rounded-lg rotate-45 animate-bounce"
        style={{ animationDelay: "0.5s", animationDuration: "3s" }}
      />
      <div
        className="absolute bottom-1/3 right-1/2 w-20 h-20 bg-primary-400/15 rounded-full animate-pulse"
        style={{ animationDelay: "3s", animationDuration: "5s" }}
      />

      {/* Small floating dots */}
      <div
        className="absolute top-1/6 right-1/6 w-3 h-3 bg-primary-500/30 rounded-full animate-ping"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute bottom-1/6 left-1/6 w-2 h-2 bg-primary-400/40 rounded-full animate-ping"
        style={{ animationDelay: "2.5s" }}
      />
      <div
        className="absolute top-2/3 left-1/6 w-4 h-4 bg-primary-600/25 rounded-full animate-ping"
        style={{ animationDelay: "4s" }}
      />
    </div>
  );
}

// Gradient orbs component
export function GradientOrbs() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: -1 }}
    >
      {/* Large gradient orbs */}
      <div
        className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-primary-500/20 via-primary-600/10 to-transparent rounded-full animate-pulse"
        style={{ animationDuration: "8s" }}
      />
      <div
        className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-radial from-primary-400/15 via-primary-500/5 to-transparent rounded-full animate-pulse"
        style={{ animationDelay: "4s", animationDuration: "12s" }}
      />

      {/* Medium gradient orbs */}
      <div
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-radial from-primary-300/25 via-primary-400/10 to-transparent rounded-full animate-pulse"
        style={{ animationDelay: "2s", animationDuration: "6s" }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-radial from-primary-600/20 via-primary-700/8 to-transparent rounded-full animate-pulse"
        style={{ animationDelay: "6s", animationDuration: "10s" }}
      />
    </div>
  );
}
