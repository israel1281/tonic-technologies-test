import React, { useEffect } from "react";
import { GroupOne, Feather, Eye, Sun } from "../../../assets";
import Image from "next/image";
import { motion } from "framer-motion";

const GridRowTwo = ({ variant, animationControl, hidden }) => {
  return (
    <>
      <motion.div
        variants={variant}
        initial={hidden}
        animate={animationControl}
        className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center"
      >
        <div className="mt-10">
          <h1 className="text-3xl text-center sm:text-left tracking-tight font-medium text-gray-900 sm:text-4xl xl:text-5xl">
            <span className="block">
              We connect our customers with the best, and help them keep up-and
              stay open.
            </span>
          </h1>
          <div className="mt-5 py-4">
            <div className="mt-3 flex bg-[#0A2640] p-4 shadow items-center gap-4 text-base text-white sm:mt-5 sm:text-xl lg:text-lg xl:text-lg">
              <div>
                <Image width="20px" height="20px" src={Feather} alt="" />
              </div>
              <p className="text-base text-white font-bold sm:text-xl lg:text-lg xl:text-lg">
                We connect our customers with the best.
              </p>
            </div>
            <div className="mt-3 flex p-4 bg-white shadow items-center gap-4 text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-lg">
              <div>
                <Image width="20px" height="20px" src={Eye} alt="" />
              </div>
              <p className="text-base text-gray-900 font-bold sm:text-xl lg:text-lg xl:text-lg">
                Advisor success customer launch party.
              </p>
            </div>
            <div className="mt-3 flex p-4 bg-white shadow items-center gap-4 text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-lg">
              <div>
                <Image width="20px" height="20px" src={Sun} alt="" />
              </div>
              <p className="text-base text-gray-900 font-bold sm:text-xl lg:text-lg xl:text-lg">
                Business-to-consumer long tail.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={variant}
        initial="hidden"
        animate={animationControl}
        className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative"
      >
        <div className="mt-12 mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
          <Image
            size="150"
            className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
            src={GroupOne}
            alt=""
          />
        </div>
      </motion.div>
    </>
  );
};

export default GridRowTwo;
