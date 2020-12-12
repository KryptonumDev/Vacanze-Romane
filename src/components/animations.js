export const fadeOutAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
  },
}
export const listAnimation = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      delay: 0.2,
    },
  },
}

export const itemAnimation = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 2 },
  exit: { opacity: 0 },
}
