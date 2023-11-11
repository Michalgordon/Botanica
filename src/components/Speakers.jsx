import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import SpeakerCard from "./SpeakerCard";
import { SPEAKERS } from "../constants";

const Speakers = () => {
  const [isScrolledToRight, setIsScrolledToRight] = useState(false);
  const [isScrolledToLeft, setIsScrolledToLeft] = useState(true);

  const onScroll = (event) => {
    if (event.target.scrollLeft === 0) {
      setIsScrolledToLeft(true);
      setIsScrolledToRight(false);
    } else if (
      event.target.scrollLeft + event.target.offsetWidth ===
      event.target.scrollWidth
    ) {
      setIsScrolledToRight(true);
      setIsScrolledToLeft(false);
    } else {
      setIsScrolledToRight(false);
      setIsScrolledToLeft(false);
    }
  };
  return (
    <section
      id="speakers"
      className="relative  px-0 section--x-scrollable section--col md:section z-10 bg-white"
    >
      <SectionHeader
        header="Speakers"
        subHeader="Get to know who’s coming"
      ></SectionHeader>
      <ul
        className="relative flex overflow-x-auto hide-scrollbar px-5 scroll-px-5 lg:gap-4 md:flex md:flex-wrap gap-5 md:justify-center"
        onScroll={onScroll}
      >
        {SPEAKERS.map((speaker, index) => (
          <SpeakerCard
            key={speaker.id}
            speaker={{
              ...speaker,
              color: ["#B9FCB3", "#FEE691", "#FC91FE"].at(index % 3),
            }}
          ></SpeakerCard>
        ))}
      </ul>
      <div className="md:hidden sm:absolute sm:h-[26px] sm:w-full sm:rounded-[50%] sm:top-[462px] sm:left-0 sm:bg-white">
        {/*  carousel effect for mobile */}
      </div>
      <div
        className={`bg-gradient-to-r from-transparent to-gray right-0 top-0 w-12 h-full ${
          isScrolledToRight ? "md:hidden" : "absolute"
        }`}
      >
        {/* right panel gradient for mobile */}
      </div>
      <div
        className={`bg-gradient-to-l from-transparent to-gray left-0 top-0 w-12 h-full ${
          isScrolledToLeft ? "md:hidden" : "absolute"
        }`}
      >
        {/* left panel gradient for mobile */}
      </div>
    </section>
  );
};

export default Speakers;
