import React from "react";
import SectionHeader from "./SectionHeader";
import SpeakerCard from "./SpeakerCard";
import { SPEAKERS } from "../constants";

const Speakers = () => {
  return (
    <section
      id="speakers"
      className="relative section--x-scrollable section--col md:section z-10 bg-white"
    >
      <SectionHeader
        header="Speakers"
        subHeader="Get to know who’s coming"
      ></SectionHeader>
      <ul className="relative flex overflow-x-auto hide-scrollbar lg:gap-4 md:flex md:flex-wrap gap-5 md:justify-center">
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
      <div className="sm:hidden ss:absolute ss:h-[26px] ss:w-full ss:rounded-[50%] ss:top-[462px] ss:left-0 ss:bg-white">
        {/*  carousel effect for mobile */}
      </div>
      <div className="md:hidden absolute bg-gradient-to-r from-transparent to-gray right-0 top-0 w-12 h-full ">
        {/* right panel gradient for mobile */}
      </div>
    </section>
  );
};

export default Speakers;
