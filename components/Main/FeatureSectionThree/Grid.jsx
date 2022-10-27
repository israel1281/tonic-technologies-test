import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const Grid = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
      <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
        <div className="lg:py-5">
          <p className="text-base text-gray-900 sm:text-xl lg:text-lg xl:text-4xl">
            We connect our customers with the best, and help them
          </p>
          <p className="text-base text-gray-900 sm:text-xl lg:text-lg xl:text-4xl">
            keep up-and stay open.
          </p>
        </div>
      </div>

      <div className="w-full px-4 pt-5">
        <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between border-b-2 rounded-lg bg-white px-4 py-2 text-left text-lg font-medium text-gray-900">
                  <span>We connect our customers with the best?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 rounded-full bg-gray-900 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  {
                    "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked."
                  }
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between border-b-2 rounded-lg bg-white px-4 py-2 text-left text-lg font-medium text-gray-900">
                  <span>Android research & development rockstar? </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 rounded-full bg-gray-900 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  {
                    "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked."
                  }
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
};

export default Grid;
