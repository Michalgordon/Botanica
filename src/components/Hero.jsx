import React from "react";
import { ArrowDown, Tulip, Flower, Star, HeroTitle } from "../assets/icons";

const Hero = () => {
  return (
    <section id="home" className="section relative h-200">
      <Tulip className="absolute top-[-33px] left-[-40px] md:left-[50%] md:top-[-82px] rotate-45 fill-pink opacity-60 min-w-[255px] w-1/5"></Tulip>
      <Flower className="absolute left-[-80px] bottom-[-120px] md:top-[539px] md:left-[633.95px] rotate-53 fill-green opacity-60 min-w-[261px] w-1/5"></Flower>
      <Star className="absolute bottom-5 left-[200px] md:bottom-[10%] md:left-[1400px] fill-yellow opacity-60 min-w-[392px] w-[30%]"></Star>

      <div className="flex flex-col md:pl-36 md:pt-14 lg:pl-0 gap-12 sm:gap-14 md:gap-16 opacity-95">
        <h3 className="text-base sm:text-xl md:text-2xl">
          INTERNATIONAL BOTANY SOCIETY, PLANTING SEEDS FOR A BETTER FUTURE
        </h3>
        <HeroTitle className="w-72 sm:w-94 md:w-112"></HeroTitle>
        <button className="w-fit button-base md:button-2xl border-black">
          Get Your Ticket Here!
        </button>
      </div>
      <div className="absolute bottom-10 md:bottom-28 right-20 md:right-36 lg:right-80 ">
        <p className="uppercase tracking-wide text-base sm:text-xl sm:tracking-wide  md:tracking-widest md:text-2xl ">
          scroll down
        </p>
        <ArrowDown className="fill-black w-30 sm:w-40 md:w-52 mt-6 md:mt-10 animate-bounce"></ArrowDown>
      </div>
    </section>
  );
};

export default Hero;
