import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Logo } from '../../../assets'

const NavLogo = () => {
  return (
    <motion.div
    id="navbar"
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
    <span className="sr-only">Workflow</span>
    <Image
      size="80"
      className="h-8 w-auto sm:h-10"
      src={Logo}
      alt=""
    />
  </motion.div>
  )
}

export default NavLogo