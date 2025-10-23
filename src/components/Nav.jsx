import { motion } from "framer-motion";

function Nav({
  logoSrc = "logo.png",
  logoAlt = "Logo",
  links = ["About", "Projects", "Contact"],
  logoAnimation = { duration: 5, delay: 0.5 },
  linkStagger = 0.3,
  delayChildren = 1.2,
}) {
  const logoVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: logoAnimation.duration,
        delay: logoAnimation.delay,
      },
    },
  };

  const linksVariants = {
    hidden: {},
    visible: {
      transition: {
        type: "spring",
        ease: "easeInOut",
        delayChildren,
        staggerChildren: linkStagger,
      },
    },
  };

  const linkItemVariants = {
    hidden: { opacity: 0, y: -200 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <nav className="flex flex-col h-[170px] md:h-[120px] md:flex-row md:justify-between md:px-10 items-center py-6 gap-3 ">
        <div>
          <motion.img variants={logoVariants} initial="hidden" animate="visible" src={logoSrc} alt={logoAlt} className="w-16" />
        </div>
        <motion.ul variants={linksVariants} initial="hidden" animate="visible" className=" uppercase tracking-wide flex gap-6">
          {links.map((link, index) => (
            <motion.li key={index} variants={linkItemVariants} whileHover={{ scale: 1.05 }} className="cursor-pointer">
              {link}
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </>
  );
}

export default Nav;
