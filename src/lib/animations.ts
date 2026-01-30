// Framer Motion Animation Variants
// Reusable animation configurations for consistent performance

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1 },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6 },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

// Floating animations
export const float = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const floatDelayed = {
  animate: {
    y: [10, -10, 10],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 2,
    },
  },
};

// Pulse animations
export const pulse = {
  animate: {
    scale: [1, 1.02, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Glow animations
export const glow = {
  animate: {
    scale: [1, 1.05, 1],
    boxShadow: [
      "0 0 0px rgba(59, 130, 246, 0)",
      "0 0 20px rgba(59, 130, 246, 0.3)",
      "0 0 0px rgba(59, 130, 246, 0)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Ping animations
export const ping = {
  animate: {
    scale: [1, 1.5, 1],
    opacity: [1, 0, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeOut",
    },
  },
};

// Bounce animations
export const bounce = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: "easeOut",
    },
  },
};

// Spin animations
export const spin = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// Hover animations
export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

// Button animations
export const buttonHover = {
  whileHover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
  whileTap: {
    scale: 0.95,
    transition: { duration: 0.1 },
  },
};

// Carousel animations
export const carouselSlide = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

export const carouselContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const carouselItem = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
  transition: { duration: 0.4, ease: "easeOut" },
};

// Team card animations
export const teamCardHover = {
  whileHover: {
    y: -10,
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  whileTap: {
    scale: 0.98,
    transition: { duration: 0.1 },
  },
};

// Enhanced team card hover with better scaling and effects
export const teamCardHoverEnhanced = {
  whileHover: {
    y: -15,
    scale: 1.08,
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  whileTap: {
    scale: 0.95,
    transition: { duration: 0.1 },
  },
};

// Carousel container hover state
export const carouselHover = {
  initial: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  },
};

export const teamCardEnter = {
  initial: { opacity: 0, y: 50, rotateY: -15 },
  animate: { opacity: 1, y: 0, rotateY: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
};

// Reduced motion variants for accessibility
export const reducedMotion = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.3 },
};
