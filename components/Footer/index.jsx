import React from "react";
import { LogoTwo } from "../../assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-md mx-auto pt-12 pb-12 px-4 sm:max-w-7xl sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-24">
          <div className="space-y-8 xl:col-span-1">
            <Image className="h-10" src={LogoTwo} alt="Company name" />
            <p className="text-gray-500 text-base">
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </p>
            <p className="text-gray-500 text-base">All rights reserved.</p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 tracking-wider uppercase">
                  Landings
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      href="https://tailwindui.com/components/marketing/page-examples/landing-pages#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindui.com/components/marketing/page-examples/landing-pages#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindui.com/components/marketing/page-examples/landing-pages#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Services
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-lg font-bold text-gray-900 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      href="https://tailwindui.com/components/marketing/page-examples/landing-pages#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindui.com/components/marketing/page-examples/landing-pages#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindui.com/components/marketing/page-examples/landing-pages#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Services
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 tracking-wider uppercase">
                  Resources
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      href="https://tailwindui.com/components/marketing/page-examples/landing-pages#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindui.com/components/marketing/page-examples/landing-pages#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindui.com/components/marketing/page-examples/landing-pages#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Services
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
