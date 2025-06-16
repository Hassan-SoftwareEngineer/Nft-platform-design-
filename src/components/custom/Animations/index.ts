const easeOut: [number, number, number, number] = [0, 0, 0.2, 1];

const slideInLeft = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.4,
      ease: easeOut,
    },
  },
};

const hiddenVisible = {
  initial: "hidden",
  whileInView: "visible",
  viewport: {
    once: true,
    amount: 0.3,
  },
};

const slideInLeftInView = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay: 0.3,
      ease: easeOut,
    },
  },
};

const slideInY = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.3,
      ease: easeOut,
    },
  },
};

export {
  slideInLeft,
  slideInLeftInView,
  slideInY,
  hiddenVisible,
};
