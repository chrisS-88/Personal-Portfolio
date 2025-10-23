import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

function Socials() {
  const socialVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        duration: 2,
        ease: "easeInOut",
        delayChildren: 2.8,
        staggerChildren: 0.4,
      },
    },
  };

  const socialItemVariants = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div variants={socialVariants} initial="hidden" animate="visible" className="socials flex md:flex-col gap-5">
      <motion.a
        variants={socialItemVariants}
        whileHover={{ scale: 1.1 }}
        href="https://github.com/chrisS-88"
        target="_blank"
        rel="noopener noreferrer">
        <AiFillGithub />
      </motion.a>
      <motion.a
        variants={socialItemVariants}
        whileHover={{ scale: 1.1 }}
        href="https://www.linkedin.com/in/chris-smart88/"
        target="_blank"
        rel="noopener noreferrer">
        <AiFillLinkedin />
      </motion.a>
      <motion.a variants={socialItemVariants} whileHover={{ scale: 1.1 }} href="mailto:chrissmart920@gmail.com">
        <AiOutlineMail />
      </motion.a>
    </motion.div>
  );
}

export default Socials;
