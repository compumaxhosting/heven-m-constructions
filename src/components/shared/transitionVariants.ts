// Snappy cubic bezier curve optimized for 0.6s
const EASE_IN_OUT = [0.22, 1, 0.36, 1];
const DURATION = 0.6;       // 0.6s main reveal
const EXIT_DURATION = 0.4;  // 0.4s curtain close

export const mainContentVariants = {
  initial: { opacity: 0, y: 14 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION, delay: 0.1, ease: EASE_IN_OUT },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: EXIT_DURATION, ease: EASE_IN_OUT },
  },
};

export const topPanelVariants = {
  initial: { y: "0%" },
  animate: {
    y: "-100%",
    transition: { duration: DURATION, ease: EASE_IN_OUT },
  },
  exit: {
    y: "0%",
    transition: { duration: EXIT_DURATION, ease: EASE_IN_OUT },
  },
};

export const bottomPanelVariants = {
  initial: { y: "0%" },
  animate: {
    y: "100%",
    transition: { duration: DURATION, ease: EASE_IN_OUT },
  },
  exit: {
    y: "0%",
    transition: { duration: EXIT_DURATION, ease: EASE_IN_OUT },
  },
};

export const logoVariants = {
  initial: { opacity: 1, scale: 1 },
  animate: {
    opacity: 0,
    scale: 1.03,
    transition: { duration: DURATION * 0.7, ease: EASE_IN_OUT },
  },
  exit: {
    opacity: 1,
    scale: 1,
    transition: { duration: EXIT_DURATION, ease: EASE_IN_OUT },
  },
};
