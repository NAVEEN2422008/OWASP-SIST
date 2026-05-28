// Animation configuration and preset utilities for consistency

export const animationConfig = {
  // Timing
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  verySlow: 1.2,

  // Easing
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  easeOut: "cubic-bezier(0, 0, 0.2, 1)",
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  easeOutElastic: "cubic-bezier(0.34, 1.56, 0.64, 1)",
};

// Framer Motion variants for common animations
export const motionVariants = {
  // Fade animations
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },
  fadeInDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },

  // Scale animations
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  },
  scaleUp: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },

  // Rotation animations
  rotateIn: {
    initial: { opacity: 0, rotate: -10 },
    animate: { opacity: 1, rotate: 0 },
    exit: { opacity: 0, rotate: -10 },
  },

  // Slide animations
  slideInLeft: {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
  },
  slideInRight: {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 40 },
  },

  // Blur reveal
  blurIn: {
    initial: { opacity: 0, filter: "blur(8px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 0, filter: "blur(8px)" },
  },
};

// Stagger animation configuration (container and item)
export const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

// Spring physics for natural motion
export const spring = {
  bouncy: { type: "spring" as const, stiffness: 300, damping: 10 },
  smooth: { type: "spring" as const, stiffness: 100, damping: 15 },
  stiff: { type: "spring" as const, stiffness: 300, damping: 30 },
};

// ScrollTrigger presets for GSAP animations
export const scrollTriggerConfig = {
  start: "top 80%",
  end: "top 50%",
  scrub: false,
  markers: false, // Set to true for debugging
};

// Tap animation for interactive elements
export const tapAnimation = {
  whileTap: { scale: 0.95 },
  transition: { type: "spring", stiffness: 300, damping: 20 },
};

// Hover animation for interactive elements
export const hoverAnimation = {
  whileHover: { scale: 1.05 },
  transition: { type: "spring", stiffness: 300, damping: 20 },
};

// Pulse/breathing animation for attention
export const pulseAnimation = {
  animate: {
    opacity: [1, 0.7, 1],
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// Shimmer effect for loading states
export const shimmerAnimation = {
  animate: {
    x: ["100%", "-100%"],
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "linear",
  },
};

// Page transition stagger
export const pageTransitionStagger = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  },
};
