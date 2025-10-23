import { motion } from "framer-motion";
import { PiReadCvLogoThin } from "react-icons/pi";

function Cv() {
  const cvVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 1.5,
        delay: 2.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div variants={cvVariants} initial="hidden" animate="visible" whileHover={{ rotate: 12, scale: 1.1 }}>
      <a href="cv.pdf" target="_blank" rel="noopener noreferrer" className=" text-4xl">
        <PiReadCvLogoThin />
      </a>
    </motion.div>
  );
}

export default Cv;
