import React, { useEffect } from "react";
import GridRowOne from "./GridRowOne";
import GridRowTwo from "./GridRowTwo";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const FeatureSectionTwo = () => {
  const { inView, ref } = useInView();

  const animationControl = useAnimation();

  const variant = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
      },
    },
    hidden: {
      opacity: 0,
      scale: 0,
    },
  };

  useEffect(() => {
    if (inView) {
      animationControl.start("visible");
    } else {
      animationControl.start("hidden");
    }
  }, [animationControl, inView]);

  return (
    <div
      ref={ref}
      className="pt-10 bg-white sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden"
    >
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
         <GridRowOne 
          variant={variant}
          hidden="hidden"
          animationControl={animationControl}
         />
        <GridRowTwo 
          variant={variant}
          hidden="hidden"
          animationControl={animationControl}
        />
        </div>
      </div>
    </div>
  );
};

export default FeatureSectionTwo;
