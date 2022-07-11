export const Qvariants = {
  initial: { opacity: 0, y: '100vh' },
  animate: { opacity: 1, y: 0, transition: { type: 'ease' } },
  exit: { opacity: 0, y: '-100vh', transition: { type: 'ease' } },
};

// if current tab number is greater than next value then -100vh
// if current tab number is lower than the next value then 100vh