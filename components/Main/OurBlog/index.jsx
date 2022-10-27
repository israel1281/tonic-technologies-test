import React from "react";
import Image from "next/image";
import Heading from "./Heading";
import Grid from "./Grid";



const OurBlog = () => {
  return (
    <div className="relative bg-white pt-16 sm:pt-24 lg:pt-32">
      <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
        <Heading />
        <Grid />
        <div className="mt-10 sm:mt-14 sm:flex sm:justify-center">
          <div className="sm:max-w-xl sm:mx-auto lg:mx-0">
            <div className="sm:flex sm:justify-center">
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <button className="block text-lg w-full py-3 px-12 rounded-full shadow border-2 border-[#0A2640] text-[#0A2640] font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900">
                  Load more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
