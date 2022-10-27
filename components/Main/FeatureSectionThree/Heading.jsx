import React from 'react'
import Image from 'next/image'
import { Office } from '../../../assets'

const Heading = () => {
  return (
    <div className="mt-3 lg:pt-16 flex p-4 items-center gap-4 text-base text-white sm:mt-5 sm:text-xl lg:text-lg xl:text-lg">
    <div>
      <Image src={Office} alt="" />
    </div>
  </div>
  )
}

export default Heading