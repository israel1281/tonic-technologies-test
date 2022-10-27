import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
import { Logo } from "../../../assets";
import NavLogo from "./NavLogo";
import MobileNavIcon from "./MobileNavIcon";
import NavList from "./NavList";

const Nav = () => {
  const router = useRouter();

  return (
    <nav
      className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
      aria-label="Global"
    >
      <div className="flex items-center flex-1 justify-between">
        <div className="flex items-center justify-between w-full md:w-auto">
          <NavLogo />
          <MobileNavIcon />
        </div>
        <NavList />
      </div>
    </nav>
  );
};

export default Nav;
