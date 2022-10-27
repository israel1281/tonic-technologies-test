import React from "react";
import Image from "next/image";
import {
  OurBlogOne,
  OurBlogTwo,
  OurBlogThree,
  ProfileImageOne,
  ProfileImageTwo,
  ProfileImageThree,
} from "../../../assets";

const data = [
  {
    image: OurBlogOne,
    title: "Category",
    description: "Pitch termsheet backing validation focus release.",
    date: "November 22 2021",
    profileImage: ProfileImageThree,
    name: "Chandler Bing",
  },
  {
    image: OurBlogTwo,
    title: "Category",
    description:
      "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    date: "November 22 2021",
    profileImage: ProfileImageTwo,
    name: "Rachel Green",
  },
  {
    image: OurBlogThree,
    title: "Category",
    description:
      "Beta prototype sales iPad gen-z marketing network effects value proposition",
    date: "November 22 2021",
    profileImage: ProfileImageOne,
    name: "Monica Geller",
  },
];

const Grid = () => {
  return (
    <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
      {data.map((item, index) => {
        return (
          <div
            key={index}
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
                  <div className="flex gap-2">
                    <p className="font-semibold ">{item.title}</p>
                    <p className="text-base text-gray-500">{item.date}</p>
                  </div>
                  <p className="mt-3 text-base text-gray-900">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-center">
                <div className="text-[#0A2640] text-sm hover:animate-bounce cursor-pointer flex gap-2 items-center">
                  <div className="flex-shrink-0">
                    <Image
                      className="h-48 w-full object-cover"
                      src={item.profileImage}
                      alt=""
                    />
                  </div>
                  <p>{item.name}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
