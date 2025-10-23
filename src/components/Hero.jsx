import { delay, motion } from "framer-motion";
import Cv from "./Cv";
import Socials from "./Socials";

function Hero() {
  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -1000,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 9,
        mass: 2,
        delay: 0.25,
      },
    },
  };

  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 0.8,
      pathLength: 1,
      transition: {
        delay: 4,
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <section className="h-[calc(100vh-170px)] md:h-[calc(100vh-120px)] relative ">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="intro-wrapper relative uppercase w-min  h-2/3 flex flex-col justify-center mx-auto">
          <div className="flex items-center gap-5">
            <h1 className="text-dark-text/75 text-lg">Hi I'm</h1>
            <svg
              className="flex-1 text-dark-secondary"
              viewBox="0 0 100 10"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-hidden="true">
              <motion.line
                variants={pathVariants}
                x1="0"
                y1="5"
                x2="100"
                y2="5"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
              />
            </svg>
          </div>

          <div>
            <h2 className="text-7xl md:text-9xl font-semibold">Chris.</h2>
          </div>
          <div>
            <h2 className="text-dark-secondary   text-lg text-right">
              Web <br /> Developer
            </h2>
          </div>
        </motion.div>
        <div className="absolute left-0 bottom-0 p-6">
          <Cv />
        </div>
        <div className="absolute right-0 bottom-0 p-6">
          <Socials />
        </div>
      </section>
    </>
  );
}

export default Hero;
