import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

const NavList = () => {
    const router = useRouter();

  return (
    <motion.div
          className="hidden md:flex md:items-center md:space-x-6"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            onClick={() => router.push("#")}
            className="text-base cursor-pointer text-lg font-medium text-white"
          >
            Product
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            onClick={() => router.push("#")}
            className="text-base cursor-pointer text-lg font-medium text-white"
          >
            Services
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            onClick={() => router.push("#")}
            className="text-base cursor-pointer text-lg font-medium text-white"
          >
            About
          </motion.div>
          <div
            onClick={() => router.push("#")}
            className="inline-flex cursor-pointer text-lg items-center px-14 py-2 border border-transparent text-base font-medium rounded-full text-gray-900 bg-white"
          >
            Login
          </div>
        </motion.div>
  )
}

export default NavList