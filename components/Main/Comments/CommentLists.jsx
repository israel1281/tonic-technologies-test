import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ProfileImageOne, ProfileImageTwo, ProfileImageThree } from '../../../assets';

const commentsData = [
    {
      comment:
        " “Buyer buzz partner network disruptive non-disclosure agreement business” ",
      image: ProfileImageOne,
      name: "Albus Dumbledore",
      about: "Manager @ Howarts",
    },
    {
      comment:
        " “Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.” ",
      image: ProfileImageTwo,
      name: "Severus Snape",
      about: "Manager @ Slytherin",
    },
    {
      comment:
        " “Release facebook responsive web design business model canvas seed money monetization.” ",
      image: ProfileImageThree,
      name: "Harry Potter",
      about: "Team Leader @ Gryffindor",
    },
];

const CommentLists = () => {
  return (
    <div class="-mt-4 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
          {commentsData.map((data, index) => {
            return (
              <motion.div
              key={index}
                whileHover={{ scale: 1.2 }}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex-shrink-0"></div>
                <div className="flex-1 bg-white p-6 px-10 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="block mt-2">
                      <p className="mt-3 text-2xl text-base text-gray-700">
                        {data.comment}
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 flex items-center">
                    <div
                      className="flex-shrink-0"
                    >
                      <div>
                        <Image
                          className="h-10 w-10 rounded-full"
                          src={data.image}
                          alt="Roel Aufderehar"
                        />
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {data.name}
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <span>{data.about}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
  )
}

export default CommentLists