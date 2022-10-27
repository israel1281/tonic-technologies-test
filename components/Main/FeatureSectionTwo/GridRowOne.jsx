import React, { useEffect } from 'react'
import Image from 'next/image'
import { GroupTwo, GroupThree } from '../../../assets'
import { motion } from "framer-motion";

const GridRowOne = ({ variant, animationControl, hidden }) => {

  return (
    <>
         <motion.div
            variants={variant}
            initial={hidden}
            animate={animationControl}
            className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative"
          >
            <div className="mt-12 mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              <Image
                size="150"
                className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={GroupTwo}
                alt=""
              />
            </div>
          </motion.div>

          <motion.div
            variants={variant}
            initial="hidden"
            animate={animationControl}
            className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center"
          >
            <div className="mt-10">
              <h1 className="text-3xl text-center sm:text-left tracking-tight font-medium text-gray-900 sm:text-4xl xl:text-5xl">
                <span className="block">
                  We connect our customers with the best, and help them keep
                  up-and stay open.
                </span>
              </h1>
              <div className="mt-5 py-4">
                <div className="mt-3 flex items-center gap-4 text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-lg">
                  <div>
                    <Image width="20px" height="20px" src={GroupThree} alt="" />
                  </div>
                  <p className="text-base text-gray-900 font-bold sm:text-xl lg:text-lg xl:text-lg">
                    We connect our customers with the best.
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-4 text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-lg">
                  <div>
                    <Image width="20px" height="20px" src={GroupThree} alt="" />
                  </div>
                  <p className="text-base text-gray-900 font-bold sm:text-xl lg:text-lg xl:text-lg">
                    Advisor success customer launch party.
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-4 text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-lg">
                  <div>
                    <Image width="20px" height="20px" src={GroupThree} alt="" />
                  </div>
                  <p className="text-base text-gray-900 font-bold sm:text-xl lg:text-lg xl:text-lg">
                    Business-to-consumer long tail.
                  </p>
                </div>
              </div>
              <div className="mt-10 sm:mt-12">
                <div className="sm:max-w-xl sm:mx-auto lg:mx-0">
                  <div className="sm:flex">
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <button className="block text-lg w-full py-3 px-12 rounded-full shadow border border-white bg-[#0A2640] text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900">
                        Start now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
    </>
  )
}

export default GridRowOne