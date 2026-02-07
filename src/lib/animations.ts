import { Variants } from 'framer-motion';

// Page transitions
export const pageVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export const pageTransition = {
  type: 'tween',
  duration: 0.3,
  ease: 'easeInOut'
};

// Stagger children
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Card hover and scroll animations
export const cardHoverVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: { duration: 0.2 }
  }
};

// Scroll-triggered animations
export const scrollFadeInVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

// Container for staggered scroll animations
export const scrollStaggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

// Item that animates on scroll
export const scrollStaggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

// Viewport settings for scroll animations
export const viewportSettings = {
  once: true, // Animation happens only once
  margin: '-50px', // Trigger 50px before element enters viewport
  amount: 0.2 // Trigger when 20% of element is visible
};

// Fade in from bottom
export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

// Slide in from side
export const slideInVariants: Variants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4 }
  }
};

// Mobile menu
export const mobileMenuVariants: Variants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2 }
  },
  open: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.3 }
  }
};
