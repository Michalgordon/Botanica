import React, { useState, useRef, Fragment } from "react";
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

  const NavigationMenuItem = ({ navbarItem }) => {
    return (
      <li
        onClick={() => handleClick(navbarItem.navTo)}
        className="list-none border-none md:font-normal justify-start md:justify-center button button-xl md:button-lg lg:button-3xl md:w-28 lg:w-44 hover:bg-white "
      >
        <navbarItem.svg className="md:hidden w-8 stroke-black"></navbarItem.svg>
        {navbarItem.title}
      </li>
    );
  };

  NavigationMenuItem.propTypes = {
    navbarItem: object.isRequired,
  };

  return (
    <Fragment>
      <ul className="hidden md:flex w-full h-full md:gap-9 lg:gap-3">
        {NAV_BAR_ITEMS.map((navbarItem, index) => (
          <NavigationMenuItem
            navbarItem={navbarItem}
            key={index}
          ></NavigationMenuItem>
        ))}
      </ul>
      <div
        open={open}
        className={`md:hidden flex flex-col gap-24 bg-white border border-black rounded-l-4xl rounded-br-4xl  pt-20 pl-8 pr-20 pb-7 fixed top-0 right-0 transition-transform duration-300 ease-in-out  ${
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
    </Fragment>
  );
};
NavigationMenu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("english");

  return (
    <Fragment>
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
    </Fragment>
  );
};
const Botanica = () => {
  return (
    <div className="list-none flex items-center uppercase tracking-widest font-bold text-2xl sm:text-3xl lg:text-5xl rounded-full h-full bg-green text-black px-24 lg:px-40">
      Botanica
    </div>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <nav className="relative z-20 w-full p-5 md:p-2 placeholder-opacity-95 scroll-mt-16">
      <div className="mobile-nav flex md:hidden w-full h-12 justify-between">
        <Botanica />

        <div ref={node}>
          <NavigationMenu open={open} setOpen={setOpen}></NavigationMenu>
          <Burger
            open={open}
            setOpen={setOpen}
            className="fixed w-12 top-5 right-5 "
          ></Burger>
        </div>
      </div>

      <ul className="desktop-nav hidden md:flex w-full items-center md:h-14 lg:h-[68px] md:gap-9">
        <Botanica />
        <NavigationMenu open={false} setOpen={setOpen}></NavigationMenu>

        <ul className="list-none flex h-full gap-4 ml-auto ">
          <li className="list-none md:font-normal border-none button button-xl md:button-lg lg:button-3xl md:w-28 lg:w-44 hover:bg-white">
            Search
          </li>
          <LanguageSelector />
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;
