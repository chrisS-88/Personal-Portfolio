import { motion } from "framer-motion";

function HeroBg() {
  const SvgVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 0.2,
      transition: {
        duration: 0.2,
      },
    },
  };

  const pathVariants = {
    hidden: {
      opacity: 0,
      rotate: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      rotate: 160,
      pathLength: 1,
      transition: {
        duration: 4.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      id="visual"
      viewBox="0 0 900 600"
      preserveAspectRatio="xMidYMid slice"
      className="fixed top-0 left-0 w-screen h-screen -z-50"
      version="1.1">
      <defs>
        <radialGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#111827" />
          <stop offset="100%" stopColor="#040507" />
        </radialGradient>
      </defs>
      <rect width="900" height="600" fill="url(#bgGradient)" />
      <motion.g variants={SvgVariants} initial="hidden" animate="visible">
        <g transform="translate(606 385)">
          <motion.path
            variants={pathVariants}
            d="M0 -109.1L94.5 -54.6L94.5 54.6L0 109.1L-94.5 54.6L-94.5 -54.6Z"
            fill="none"
            stroke="#c084fc"
            stroke-width="3"
          />
        </g>
        <g transform="translate(467 115)">
          <motion.path
            variants={pathVariants}
            d="M0 -27L23.4 -13.5L23.4 13.5L0 27L-23.4 13.5L-23.4 -13.5Z"
            stroke="#c084fc"
            fill="none"
            stroke-width="1"
          />
        </g>
        <g transform="translate(327 415)">
          <motion.path
            variants={pathVariants}
            d="M0 -27L23.4 -13.5L23.4 13.5L0 27L-23.4 13.5L-23.4 -13.5Z"
            stroke="#c084fc"
            fill="none"
            stroke-width="1"
          />
        </g>
        <g transform="translate(165 361)">
          <motion.path
            variants={pathVariants}
            d="M0 -47L40.7 -23.5L40.7 23.5L0 47L-40.7 23.5L-40.7 -23.5Z"
            stroke="#c084fc"
            fill="none"
            stroke-width="1"
          />
        </g>
      </motion.g>
    </motion.svg>
  );
}

export default HeroBg;
