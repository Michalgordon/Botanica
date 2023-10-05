import React from "react";
import { Globe, HamburgerClosed } from "../assets";
import { navbarItems } from "../constants";

const Navbar = () => {
  function handleClick(navTo) {
    const element = document?.getElementById(navTo);
    element?.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }

  function botanica() {
    return (
      <div className="list-none flex items-center uppercase tracking-widest font-bold sm:text-2xl md:text-3xl rounded-full bg-green text-black px-24 py-2">
        Botanica
      </div>
    );
  }

  return (
    <nav className="relative z-20 w-full p-5 md:p-2 placeholder-opacity-95">
      <div className="flex sm:hidden w-full justify-between">
        {botanica()}
        <HamburgerClosed className="fixed w-[48px] top-5 right-5 "></HamburgerClosed>
      </div>

      <div className="hidden sm:flex w-full gap-4">
        <ul className="flex w-full gap-4">
          {botanica()}

          {navbarItems.map((navbarItem) => (
            <li
              key={navbarItem.title}
              onClick={() => handleClick(navbarItem.navTo)}
              className="list-none flex items-center cursor-pointer uppercase sm:text-base md:text-3xl rounded-full px-4 hover:bg-white"
            >
              {navbarItem.title}
            </li>
          ))}
          <ul className="list-none flex  gap-4 ml-auto">
            <li className="list-none flex items-center cursor-pointer uppercase sm:text-base md:text-3xl rounded-full px-4 hover:bg-white">
              Search
            </li>
            <Globe className="w-[42px] h-[42px] fill-black" />
          </ul>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
