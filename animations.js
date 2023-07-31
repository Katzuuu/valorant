export const inView = {
  hidden: { y: "-100%", opacity: 0 },
  show: { y: "0%", opacity: 1, transition: { duration: 0.7, delay: 1 } },
  exit: { opacity: 0 },
};

export const inView2 = {
  hidden: { y: "-100%", opacity: 0 },
  show: { y: "0%", opacity: 1, transition: { duration: 0.45 } },
  exit: { opacity: 0, y: "-100%", transition: { duration: 0.45 } },
};

export const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

export const Movefade = {
  hidden: { y: 30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7 },
  },
};

export const agentsReveal = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
};

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: { opacity: 0, transition: { duration: 5.5 } },
};

export const sliderContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      ease: "easeOut",
    },
  },
};

export const slider = {
  hidden: { x: "-130%" },
  show: {
    x: "100%",
    transition: { ease: "easeOut", duration: 0.75 },
  },
};

export const scaleFade = {
  hidden: { scale: 1.4, opacity: 0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { ease: "easeOut", duration: 0.3 },
  },
};

export const agentInfoReveal = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.7 },
  },
};
