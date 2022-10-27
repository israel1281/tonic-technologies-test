import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { LogoFive, LogoFour } from '../../../assets'

const SponsorsLogos = () => {
  return (
    <div className="mx-auto">
            <div className="flex items-center gap-2 justify-center w-full h-full py-24 sm:py-8 px-4">
              <motion.div
                initial={{ opacity: 0.5 }}
                whileHover={{ scale: 1.2 }}
                className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
              >
                <Image className="h-12" src={LogoFive} alt="Tuple" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0.5 }}
                whileHover={{ scale: 1.2 }}
                className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
              >
                <Image className="h-12" src={LogoFour} alt="Mirage" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
              >
                <Image className="h-12" src={LogoFive} alt="StaticKit" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1"
              >
                <Image className="h-12" src={LogoFour} alt="Transistor" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1"
              >
                <Image className="h-12" src={LogoFive} alt="Workcation" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1"
              >
                <Image className="h-12" src={LogoFour} alt="Transistor" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                initial={{ opacity: 0.5 }}
                className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1"
              >
                <Image className="h-12" src={LogoFive} alt="Workcation" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                initial={{ opacity: 0.5 }}
                className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1 shadow-inner"
              >
                <Image className="h-12" src={LogoFour} alt="Transistor" />
              </motion.div>
            </div>
          </div>
  )
}

export default SponsorsLogos