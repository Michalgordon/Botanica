import React from "react";
import { Tulip, Flower, Star, HeroTitle } from "../assets/images";
import { ArrowDown } from "../assets/icons";

const Hero = () => {
  return (
    <section id="home" className="section relative h-200">
      <Tulip className="absolute top-[-33px] left-[-40px] lg:left-[50%] lg:top-[-82px] rotate-45 fill-pink opacity-60 min-w-[255px] w-1/5"></Tulip>
      <Flower className="absolute left-[-80px] bottom-[-120px] lg:top-[539px] lg:left-[633.95px] rotate-53 fill-green opacity-60 min-w-[261px] w-1/5"></Flower>
      <Star className="absolute bottom-5 left-[200px] lg:bottom-[10%] lg:left-[1400px] fill-yellow opacity-60 min-w-[392px] w-[30%]"></Star>

      <div className="flex flex-col md:pt-14 gap-12 sm:gap-14 md:gap-16 opacity-95">
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
