import React from 'react'

const Card = () => {
  return (
    <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
    <div className="relative rounded-2xl px-6 py-10 bg-[#0A2640] overflow-hidden shadow-xl sm:px-12 sm:py-20">
      {/* <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1463 360">
        <path className="text-rose-400 text-opacity-40" fill="currentColor" d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"></path>
        <path className="text-rose-600 text-opacity-40" fill="currentColor" d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"></path>
      </svg>
    </div> */}
      <div className="relative">
        <div className="sm:text-center">
          <h2 className="text-4xl font-bold text-white tracking-tight sm:text-5xl text-center">
            An enterprise template to ramp
          </h2>
          <h2 className="text-3xl font-bold text-white tracking-tight sm:text-5xl text-center">
            up your company website
          </h2>
        </div>
        <form
          action="https://tailwindui.com/components/marketing/page-examples/landing-pages#"
          className="mt-12 sm:mx-auto sm:max-w-lg sm:flex"
        >
          <div className="min-w-0 flex-1">
            <label for="cta_email" className="sr-only">
              Email address
            </label>
            <input
              id="cta_email"
              type="email"
              className="block w-full border border-transparent rounded-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-none"
              placeholder="Your email address"
            />
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-3">
            <button
              type="submit"
              className="block w-full rounded-full border border-transparent px-5 py-3 bg-[#65E4A3] text-base font-medium text-[#0A2640] shadow focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500 sm:px-10"
            >
              Start now
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Card