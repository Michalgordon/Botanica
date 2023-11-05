import React from "react";
import { Tulip, Flower, Star, HeroTitle } from "../assets/images";
import { ArrowDown } from "../assets/icons";

const Hero = () => {
  return (
    <section id="home" className="section relative h-200">
      <Tulip className="absolute  -top-0 lg:left-1/2 rotate-45 fill-pink opacity-60 w-1/2 sm:w-1/3 lg:w-1/4"></Tulip>
      <Flower className="absolute  -bottom-56 -left-40 md:-bottom-40 md:left-96 rotate-53 fill-green opacity-60 w-1/2 sm:w-1/3 lg:w-1/4"></Flower>
      <Star className="absolute bottom-5 left-1/2   fill-yellow opacity-60 w-1/2 sm:w-1/3 lg:w-1/4"></Star>

      <div className="flex flex-col md:pl-36 md:pt-14 gap-12 sm:gap-14 md:gap-16 opacity-95">
        <h3 className="text-base sm:text-xl md:text-2xl">
          INTERNATIONAL BOTANY SOCIETY, PLANTING SEEDS FOR A BETTER FUTURE
        </h3>
        <HeroTitle className="w-72 sm:w-94 md:w-112"></HeroTitle>
        <button className="w-fit button-base md:button-2xl border-black">
          Get Your Ticket Here!
        </button>
      </div>
      <div className="absolute bottom-10 md:bottom-14 right-20 sm:right-36 md:right-80 ">
        <p className="uppercase tracking-wide text-base sm:text-xl sm:tracking-wide sm:pb-3 md:tracking-widest md:text-2xl md:pb-5">
          scroll down
        </p>
        <ArrowDown className="fill-black w-30 sm:w-40 md:w-52"></ArrowDown>
      </div>
    </section>
  );
};

export default Hero;
