import React from 'react'
import Image from 'next/image'
import { HeroGraphics } from '../../../assets'

const IntroImage = () => {
  return (
    <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
            <div className="mt-12 mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              <Image
                size="150"
                className="w-full lg:absolute animate-pulse lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={HeroGraphics}
                alt=""
              />
            </div>
          </div>
  )
}

export default IntroImage