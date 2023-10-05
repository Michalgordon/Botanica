import React from "react";
import { Tulip, Flower, Star, HeroTitle, ArrowDown } from "../assets";

const Hero = () => {
  return (
    <section id="home" className="section relative h-200">
      <Flower className="absolute  -bottom-56 -left-40 md:-bottom-40 md:left-96 rotate-53 fill-green opacity-60 w-11/12"></Flower>
      <Tulip className="absolute  -top-10 right-1/4 rotate-45 fill-pink opacity-60 w-8/12"></Tulip>
      <Star className="absolute bottom-5 left-1/2   fill-yellow opacity-60 w-11/12"></Star>

      <div className="flex flex-col gap-12 sm:gap-14 md:gap-16 opacity-95">
        <h3 className="text-base sm:text-xl md:text-2xl">
          INTERNATIONAL BOTANY SOCIETY, PLANTING SEEDS FOR A BETTER FUTURE
        </h3>
        <HeroTitle className="w-72 sm:w-94 md:w-112"></HeroTitle>
        <button className="w-fit rounded-full px-4 py-1.5 text-base  md:px-6 md:py-2 md:text-2xl border-2 border-black">
          {" "}
          Get Your Ticket Here!
        </button>
      </div>
      <div className="absolute bottom-10 md:bottom-14 right-20 sm:right-36 md:right-80 ">
        <p className="uppercase tracking-wide text-base sm:text-xl sm:tracking-wide sm:pb-3 md:tracking-widest md:text-2xl md:pb-5">
          {" "}
          scroll down
        </p>
        <ArrowDown className="fill-black w-30 sm:w-40 md:w-52"></ArrowDown>
      </div>
    </section>
  );
};

export default Hero;
