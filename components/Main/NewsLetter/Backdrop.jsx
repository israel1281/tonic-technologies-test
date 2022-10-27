import React from 'react'

const Backdrop = () => {
  return (
    <div aria-hidden="true" class="hidden sm:block">
    <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl"></div>
    <svg
      className="absolute top-8 left-1/2 -ml-3"
      width="404"
      height="392"
      fill="none"
      viewBox="0 0 404 392"
    >
      <defs>
        <pattern
          id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <rect
            x="0"
            y="0"
            width="4"
            height="4"
            class="text-gray-200"
            fill="currentColor"
          ></rect>
        </pattern>
      </defs>
      <rect
        width="404"
        height="392"
        fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
      ></rect>
    </svg>
  </div>
  )
}

export default Backdrop