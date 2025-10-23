import { motion } from "framer-motion";

function Nav() {
  const logoVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 5,
        delay: 0.5,
      },
    },
  };

  const linksVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        duration: 5,
        ease: "easeInOut",
        delayChildren: 1.5,
        staggerChildren: 0.3,
      },
    },
  };

  const linkItemVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <nav className="flex flex-col h-[170px] md:h-[120px] md:flex-row md:justify-between md:px-10 items-center py-6 gap-3 ">
        <div>
          <motion.img variants={logoVariants} initial="hidden" animate="visible" src="logo.png" alt="Logo" className="w-16" />
        </div>
        <motion.ul variants={linksVariants} initial="hidden" animate="visible" className=" uppercase tracking-wide flex gap-6">
          <motion.li variants={linkItemVariants} whileHover={{ scale: 1.05 }}>
            About
          </motion.li>
          <motion.li variants={linkItemVariants} whileHover={{ scale: 1.05 }}>
            Projects
          </motion.li>
          <motion.li variants={linkItemVariants} whileHover={{ scale: 1.05 }}>
            Contact
          </motion.li>
        </motion.ul>
      </nav>
    </>
  );
}

export default Nav;
