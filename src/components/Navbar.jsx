import React from "react";
import { Globe } from "../assets";
import { navbarItems } from "../constants";
import { useRef } from "react";

const Navbar = () => {
  function handleClick(navTo) {
    const element = document?.getElementById(navTo);
    element?.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }

  return (
    <nav className=" invisible relative z-20 sm:visible w-full p-2">
      <ul className="w-full flex flex-start gap-4">
        <li className="list-none uppercase tracking-widest font-bold text-3xl rounded-full bg-green text-black px-24">
          Botanica
        </li>

        {navbarItems.map((navbarItem) => (
          <li
            key={navbarItem.title}
            onClick={() => handleClick(navbarItem.navTo)}
            className="list-none cursor-pointer uppercase text-3xl rounded-full px-4 hover:bg-white"
          >
            {navbarItem.title}
          </li>
        ))}
        <ul className="list-none flex flex-start gap-4 ml-auto">
          <li className="list-none cursor-pointer uppercase text-3xl rounded-full px-4 hover:bg-white">
            Search
          </li>
          <Globe className="w-[42px] h-[42px] fill-black" />
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;
