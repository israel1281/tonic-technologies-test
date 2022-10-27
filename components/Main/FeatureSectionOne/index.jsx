import React, { useEffect } from "react";
import Heading from "./Heading";
import CardList from "./CardList";
// import { useInView } from "react-intersection-observer";
// import { motion, useAnimation } from "framer-motion";


const FeatureSectionOne = () => {
  // const animationControl = useAnimation();

  // const { inView, ref } = useInView();

  // const variant = {
  //   visible: {
  //     opacity: 1,
  //     scale: 1,
  //     transition: {
  //       duration: 1.5,
  //     },
  //   },
  //   hidden: {
  //     opacity: 0,
  //     scale: 0,
  //   },
  // };

  // useEffect(() => {
  //   if (inView) {
  //     animationControl.start("visible");
  //   } else {
  //     animationControl.start("hidden");
  //   }
  // }, [animationControl, inView]);

  return (
    <div
      className=" feature-one relative bg-white pt-16 sm:pt-24 lg:pt-32"
      // ref={ref}
    >
      <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
        <Heading />
        <CardList />
      </div>
    </div>
  );
};

export default FeatureSectionOne;
