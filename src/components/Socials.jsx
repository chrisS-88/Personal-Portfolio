import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

function Socials({
  socials = [
    { icon: <AiFillGithub />, href: "https://github.com/chrisS-88" },
    { icon: <AiFillLinkedin />, href: "https://linkedin.com/in/yourprofile" },
    { icon: <AiOutlineMail />, href: "mailto:youremail@example.com" },
  ],
  hoverScale = 1.5,
  delayChildren = 2.8,
  staggerChildren = 0.4,
}) {
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
        delayChildren: delayChildren,
        staggerChildren: staggerChildren,
      },
    },
  };

  const socialItemVariants = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <motion.div variants={socialVariants} initial="hidden" animate="visible" className="socials flex md:flex-col gap-5">
        {socials.map(({ icon, href }, index) => (
          <motion.a
            key={index}
            variants={socialItemVariants}
            whileHover={{ scale: hoverScale }}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl">
            {icon}
          </motion.a>
        ))}
      </motion.div>
    </>
  );
}

export default Socials;
