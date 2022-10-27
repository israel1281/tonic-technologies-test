import React from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import { motion } from "framer-motion";
import IntroText from "./IntroText";
import IntroImage from "./IntroImage";
import SponsorsLogos from "./SponsorsLogos";

const contentVariants = {
  initial: {
    translateX: "-100vw",
    opacity: 0,
  },

  animate: {
    translateX: "0vw",
    opacity: 1,
    transition: {
      duration: 2,
      when: "beforeChildren",
    },
  },
};

const Intro = () => {

  return (
    <div className="pt-10 bg-[#0A2640] sm:pt-16 pb-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
      <motion.div
        className="mx-auto max-w-7xl lg:px-8"
        variants={contentVariants}
        initial="initial"
        animate="animate"
      >
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <IntroText />
          <IntroImage />
        </div>
        <div className="bg-[#0A2640] hidden sm:block">
          <SponsorsLogos />
        </div>
      </motion.div>
    </div>
  );
};

export default Intro;
