import React from "react";
import Image from "next/image";
import { RectOne, RectTwo, RectThree } from "../../../assets";

const data = [
  {
    image: RectThree,
    title: "Cool feature title",
    description: "Learning curve network effects return on investment.",
  },
  {
    image: RectOne,
    title: "Cool feature title",
    description: "Learning curve network effects return on investment.",
  },
  {
    image: RectTwo,
    title: "Cool feature title",
    description: "Learning curve network effects return on investment.",
  },
];

const CardList = () => {
  return (
    <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
      {data.map((item, index) => {
        return (
          <div
            // variants={variant}
            // initial="hidden"
            // animate={animationControl}
            key={item}
            className="flex flex-col hover:rounded-lg hover:shadow-lg overflow-hidden"
          >
            <div className="flex-shrink-0">
              <Image
                className="h-48 w-full object-cover"
                src={item.image}
                alt=""
              />
            </div>
            <div className="flex bg-white p-6 flex flex-col justify-between">
              <div className="">
                <div className="block mt-2 text-left">
                  <p className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-center">
                <div className="text-[#0A2640] font-bold text-lg hover:animate-bounce cursor-pointer">
                  Explore page {"->"}
                  <div className="bg-gray-400 h-[2px] mt-1"></div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
