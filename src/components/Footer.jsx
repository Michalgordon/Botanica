import React from "react";
import { FOOTER_ITEMS } from "../constants";
import { Instagram, Twitter, Facebook } from "../assets";
const Footer = () => {
  return (
    <div className="flex justify-center md:justify-between items-center py-6 md:pl-10 md:pr-20 md:py-8 lg:pl-14 lg:pr-24 lg:py-12 bg-white">
      <ul className="hidden md:flex md:gap-4 lg:gap-10">
        {FOOTER_ITEMS.map((footerItem, index) => (
          <li key={index} className="uppercase text-base lg:text-3xl">
            {footerItem.title}
          </li>
        ))}
      </ul>
      <ul className="flex gap-10">
        <Twitter className="fill-darkGray h-11 w-11 md:w-7 md:h-7 lg:w-11 lg:h-11" />
        <Facebook className="fill-darkGray h-11 w-11 md:w-7 md:h-7 lg:w-11 lg:h-11" />
        <Instagram className="fill-darkGray h-11 w-11 md:w-7 md:h-7 lg:w-11 lg:h-11" />
      </ul>
    </div>
  );
};
export default Footer;
