import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const Heading = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
      <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center ">
        <div className="lg:py-24">
          <h1 className="mt-4 text-3xl tracking-tight font-medium text-white text-center sm:text-left sm:mt-5 sm:text-4xl lg:mt-6 xl:text-5xl">
            <span className="block">Save time by building</span>
            <span className="text-white block mt-4">
              fast with Boldo Template
            </span>
          </h1>
        </div>
      </div>
      <div className="flex items-center gap-4 justify-center pt-5">
        <ChevronLeftIcon className="h-12 w-12 rounded-full bg-white text-gray-900 cursor-pointer" />
        <ChevronRightIcon className="h-12 w-12 rounded-full bg-white text-gray-900 cursor-pointer" />
      </div>
    </div>
  );
};

export default Heading;
