import React from "react";
import SectionHeader from "./SectionHeader";
import { SPEAKERS } from "../constants";
import { object } from "prop-types";

const Speakers = () => {
  const SpeakerItem = ({ speaker }) => {
    const Text = () => {
      return (
        <div className="flex flex-col gap-4 items-center text-center">
          <p className="uppercase font-semibold text-2xl md:text-xl">
            {speaker.name}
          </p>
          <p className="text-base md:text-lg md:font-medium">{speaker.info}</p>
        </div>
      );
    };

    return (
      <div>
        <div
          key={speaker.id}
          style={{
            backgroundImage: `url("src/assets/headshot.svg")`,
          }}
          className="flex shrink-0 w-[303px] h-[303px] justify-center items-center "
        >
          <div className="hidden md:flex md:flex-col px-6">
            <Text speaker={speaker}></Text>
          </div>
        </div>
        <div className="md:hidden py-6 py-3">
          <Text speaker={speaker}></Text>
        </div>
      </div>
    );
  };
  SpeakerItem.propTypes = {
    speaker: object.isRequired,
  };

  return (
    <section
      id="speakers"
      className="relative section--x-scrollable section--col md:section z-10 bg-white"
    >
      {/* <svg className="svg">
        <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
          <path d="M0.363,0.325 L0.556,0.009 L0.743,0.325 L0.744,0.327 L0.746,0.325 L0.999,0.011 C0.999,0.034,1,0.059,1,0.085 C1,0.246,1,0.453,0.971,0.63 C0.946,0.735,0.904,0.829,0.834,0.897 C0.765,0.965,0.667,1,0.532,1 C0.396,1,0.296,0.97,0.222,0.902 C0.148,0.835,0.101,0.741,0.07,0.636 C0.016,0.458,0.011,0.249,0.007,0.086 C0.007,0.059,0.006,0.034,0.005,0.01 L0.36,0.325 L0.362,0.327 L0.363,0.325"></path>
        </clipPath>
      </svg> */}
      <SectionHeader
        header="Speakers"
        subHeader="Get to know who’s coming"
      ></SectionHeader>
      <ul className="relative flex overflow-x-auto hide-scrollbar gap-10 md:flex md:flex-wrap md:gap-5 justify-center">
        {SPEAKERS.map((speaker) => (
          <SpeakerItem key={speaker.id} speaker={speaker}></SpeakerItem>
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
