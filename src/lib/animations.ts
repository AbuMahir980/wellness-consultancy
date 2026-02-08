import { Variants } from 'framer-motion';

// CUSTOM EASING CURVES - Smooth, professional feel

export const easings = {
  smooth: [0.25, 0.1, 0.25, 1.0] as const,
  snappy: [0.68, -0.6, 0.32, 1.6] as const,
  bouncy: [0.34, 1.56, 0.64, 1.0] as const,
  elastic: [0.175, 0.885, 0.32, 1.275] as const,
  decel: [0.0, 0.0, 0.2, 1.0] as const,
};


// PAGE TRANSITIONS - Cinematic page enter/exit

export const pageVariants: Variants = {
  initial: { opacity: 0, y: 40, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: easings.smooth }
  },
  exit: {
    opacity: 0,
    y: -30,
    scale: 0.98,
    transition: { duration: 0.4, ease: easings.smooth }
  }
};

export const pageTransition = {
  type: 'tween' as const,
  duration: 0.6,
  ease: easings.smooth
};


// HERO SECTION - Dramatic entrance animations

export const heroTextVariants: Variants = {
  hidden: { opacity: 0, y: 60, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: easings.decel }
  }
};

export const heroImageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85, rotateY: -15 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: { duration: 1.0, ease: easings.smooth, delay: 0.3 }
  }
};

export const heroBadgeVariants: Variants = {
  hidden: { opacity: 0, x: -20, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.5, ease: easings.elastic, delay: 0.6 + i * 0.15 }
  })
};

export const heroCtaVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easings.decel, delay: 0.5 }
  }
};

export const heroContainerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

// STAGGER GRID - Cards stack in with 3D depth
export const scrollStaggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15
    }
  }
};

export const scrollStaggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: easings.decel,
    }
  }
};

// ═══════════════════════════════════════════════════════
// CARD INTERACTIONS - Lift, glow, and depth on hover
// ═══════════════════════════════════════════════════════
export const cardHoverVariants = {
  initial: {
    scale: 1,
    y: 0,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  },
  hover: {
    scale: 1.03,
    y: -8,
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 12px 24px -8px rgba(0, 0, 0, 0.1)',
    transition: {
      duration: 0.35,
      ease: easings.smooth,
    }
  },
  tap: {
    scale: 0.97,
    y: -2,
    transition: { duration: 0.15, ease: easings.snappy }
  }
};

// Specialty badge stagger inside cards
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: easings.elastic }
  }
};

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 }
  }
};

// ═══════════════════════════════════════════════════════
// SECTION HEADERS - Text reveal animations
// ═══════════════════════════════════════════════════════
export const sectionHeaderVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: easings.decel }
  }
};

export const sectionSubtitleVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easings.decel, delay: 0.15 }
  }
};

// ═══════════════════════════════════════════════════════
// FEATURE CARD - Icon bounce + content slide
// ═══════════════════════════════════════════════════════
export const featureIconVariants: Variants = {
  hidden: { opacity: 0, scale: 0, rotate: -180 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.6, ease: easings.elastic }
  }
};

export const featureContentVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easings.decel, delay: 0.2 }
  }
};

// ═══════════════════════════════════════════════════════
// FAQ ACCORDION - Smooth expand with content reveal
// ═══════════════════════════════════════════════════════
export const faqContentVariants: Variants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.35, ease: easings.smooth },
      opacity: { duration: 0.2 }
    }
  },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: { duration: 0.4, ease: easings.smooth },
      opacity: { duration: 0.35, delay: 0.1 }
    }
  }
};

export const faqIconVariants: Variants = {
  closed: { rotate: 0 },
  open: {
    rotate: 180,
    transition: { duration: 0.35, ease: easings.elastic }
  }
};

export const faqItemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: easings.decel }
  }
};

// ═══════════════════════════════════════════════════════
// CTA SECTION - Attention-grabbing entrance
// ═══════════════════════════════════════════════════════
export const ctaSectionVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: easings.decel }
  }
};

export const ctaButtonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easings.decel, delay: 0.4 }
  }
};

// Floating pulse for CTA buttons
export const pulseVariants: Variants = {
  initial: { scale: 1 },
  pulse: {
    scale: [1, 1.04, 1],
    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
  }
};

// ═══════════════════════════════════════════════════════
// SLIDE IN VARIANTS - Directional entrances
// ═══════════════════════════════════════════════════════
export const slideInLeftVariants: Variants = {
  hidden: { x: -80, opacity: 0, filter: 'blur(4px)' },
  visible: {
    x: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: easings.decel }
  }
};

export const slideInRightVariants: Variants = {
  hidden: { x: 80, opacity: 0, filter: 'blur(4px)' },
  visible: {
    x: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: easings.decel }
  }
};

export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 50, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: easings.decel }
  }
};

export const slideInVariants: Variants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: easings.decel }
  }
};

// ═══════════════════════════════════════════════════════
// IMAGE REVEAL - Scale + clip-path reveal
// ═══════════════════════════════════════════════════════
export const imageRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.15,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 1.0, ease: easings.smooth }
  }
};

// ═══════════════════════════════════════════════════════
// MOBILE MENU
// ═══════════════════════════════════════════════════════
export const mobileMenuVariants: Variants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      height: { duration: 0.3, ease: easings.smooth },
      opacity: { duration: 0.2 }
    }
  },
  open: {
    opacity: 1,
    height: 'auto',
    transition: {
      height: { duration: 0.4, ease: easings.smooth },
      opacity: { duration: 0.3, delay: 0.1 }
    }
  }
};

export const mobileMenuItemVariants: Variants = {
  closed: { opacity: 0, x: -20 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: easings.decel, delay: 0.05 * i }
  })
};

// ═══════════════════════════════════════════════════════
// VIEWPORT SETTINGS
// ═══════════════════════════════════════════════════════
export const viewportSettings = {
  once: true,
  margin: '-80px',
  amount: 0.15
};

export const viewportSettingsEager = {
  once: true,
  margin: '-30px',
  amount: 0.1
};