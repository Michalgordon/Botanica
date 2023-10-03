import React from "react";
import { Globe } from "../assets";

const Navbar = () => {
  return (
    <nav className=" invisible relative z-20 sm:visible w-full p-2">
      <ul className="w-full flex flex-start gap-4">
        <li className="list-none text-3xl font-thin rounded-full bg-green text-black px-24">
          Botanica
        </li>
        <li className="list-none cursor-pointer text-3xl rounded-full px-4 hover:bg-white">
          Speakers
        </li>
        <li className="list-none cursor-pointer text-3xl rounded-full px-4 hover:bg-white">
          Agenda
        </li>
        <li className="list-none cursor-pointer text-3xl rounded-full px-4 hover:bg-white">
          Q&A
        </li>
        <li className="list-none cursor-pointer text-3xl rounded-full px-4 hover:bg-white">
          Tickets
        </li>
        <ul className="list-none flex flex-start gap-4 ml-auto">
          <li className="list-none cursor-pointer text-3xl rounded-full px-4 hover:bg-white">
            Search
          </li>
          <Globe fill="black" stroke="none" className="w-[42px] h-[42px]" />
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;
