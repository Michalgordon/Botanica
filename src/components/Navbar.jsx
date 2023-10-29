import React, { useState, useRef } from "react";
import { Globe, HamburgerClosed } from "../assets";
import { NAV_BAR_ITEMS, LANGUAGES } from "../constants";
import { bool, func, object } from "prop-types";
import { useOnClickOutside } from "../utils";

const Burger = ({ open, setOpen }) => {
  return (
    <div>
      <HamburgerClosed
        className="fixed w-14 h-[46px] top-5 right-5"
        open={open}
        onClick={() => setOpen(!open)}
      />
    </div>
  );
};
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

const NavigationMenu = ({ open, setOpen }) => {
  function handleClick(navTo) {
    setOpen(false);
    const element = document?.getElementById(navTo);
    element?.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }
  NavigationMenu.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
  };
  const NavigationMenuItem = ({ navbarItem }) => {
    return (
      <li
        onClick={() => handleClick(navbarItem.navTo)}
        className="list-none flex items-center gap-4 cursor-pointer uppercase md:text-base lg:text-3xl rounded-full sm:px-4 sm:hover:bg-white"
      >
        <navbarItem.svg className="sm:hidden w-8 stroke-black"></navbarItem.svg>
        {navbarItem.title}
      </li>
    );
  };

  NavigationMenuItem.propTypes = {
    navbarItem: object.isRequired,
  };

  return (
    <div>
      <ul className="hidden sm:flex">
        {NAV_BAR_ITEMS.map((navbarItem, index) => (
          <NavigationMenuItem
            navbarItem={navbarItem}
            key={index}
          ></NavigationMenuItem>
        ))}
      </ul>
      <div
        open={open}
        className={`sm:hidden flex flex-col gap-24 bg-white border border-black rounded-l-4xl rounded-br-4xl  pt-20 pl-8 pr-20 pb-7 fixed top-0 right-0 transition-transform duration-300 ease-in-out  ${
          open ? "translate-x-0	" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-4">
          {NAV_BAR_ITEMS.map((navbarItem, index) => (
            <NavigationMenuItem
              navbarItem={navbarItem}
              key={index}
            ></NavigationMenuItem>
          ))}
        </ul>

        <LanguageSelector />
      </div>
    </div>
  );
};
NavigationMenu.propTypes = {
  open: bool.isRequired,
};

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("english");

  return (
    <div>
      <div className="sm:hidden flex gap-4 items-center">
        <Globe className="w-[32px] h-[32px] fill-black" />
        {LANGUAGES.map((language) => (
          <button
            className={`uppercase  ${
              selectedLanguage === language.language
                ? "underline underline-offset-4"
                : ""
            }`}
            onClick={() => setSelectedLanguage(language.language)}
            key={language.shortLanguage}
          >
            {" "}
            {language.shortLanguage}
          </button>
        ))}
      </div>
      <div className="hidden sm:flex">
        <Globe className="w-9 lg:w-12 fill-black" />
      </div>
    </div>
  );
};
const Botanica = () => {
  return (
    <div className="list-none flex items-center uppercase tracking-widest font-bold  text-2xl sm:text-3xl lg:text-5xl rounded-full bg-green text-black px-24 py-3">
      Botanica
    </div>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <nav className="relative z-20 w-full p-5 md:p-2 placeholder-opacity-95">
      <div className="flex sm:hidden w-full justify-between">
        <Botanica />

        <div ref={node}>
          <NavigationMenu open={open} setOpen={setOpen}></NavigationMenu>
          <Burger
            open={open}
            setOpen={setOpen}
            className="fixed w-[48px] top-5 right-5 "
          ></Burger>
        </div>
      </div>

      <div className="hidden sm:flex w-full">
        <ul className="flex w-full sm:gap-8 md:gap-3 items-center">
          <Botanica />
          <NavigationMenu open={false} setOpen={setOpen}></NavigationMenu>

          <ul className="list-none flex gap-4 ml-auto">
            <li className="list-none flex items-center cursor-pointer uppercase md:text-base lg:text-3xl rounded-full px-4 hover:bg-white">
              Search
            </li>
            <LanguageSelector />
          </ul>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
