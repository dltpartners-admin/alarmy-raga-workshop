export const slideTransition = {
  duration: 0.45,
  ease: [0.76, 0, 0.24, 1] as const,
};

export const slideVariants = {
  enter: (direction: number) => ({
    y: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    y: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

// faces.app style: slower stagger, cinematic feel
export const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

// Blur reveal — faces.app signature animation
export const blurReveal = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

// Subtle fade for supporting elements
export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

// For large hero text — scale + blur
export const heroReveal = {
  hidden: { opacity: 0, scale: 0.95, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

// Table rows — minimal, clean
export const tableRowVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.06, duration: 0.4 },
  }),
};

// Legacy compat
export const itemVariants = blurReveal;

export const cardHover = {
  scale: 1.01,
  transition: { duration: 0.3 },
};
