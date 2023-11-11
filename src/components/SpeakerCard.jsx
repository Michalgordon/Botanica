import React from "react";
import { object } from "prop-types";

const SpeakerCard = ({ speaker }) => {
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
  const getRandomMask = () => {
    const random = Math.floor(Math.random() * 3);
    const mask = ["flower", "sun", "tulip"].at(random);
    return `url('images/${mask}.svg')`;
  };

  return (
    <div key={speaker.id} className="group">
      <div
        style={{
          "--imagePath": `url("${speaker.imgPath}")`,
          "--background-color": speaker.color,
        }}
        className={`speaker relative flex w-[303px] aspect-square justify-center items-center cursor-default md:group-hover:bg-[var(--background-color)]`}
      >
        <img
          src={speaker.imgPath}
          className="speaker-image md:group-hover:hidden"
        ></img>
        <div
          className="speaker-mask hidden md:group-hover:inline absolute w-[303px] aspect-square [mask-repeat:no-repeat] opacity-70"
          style={{
            backgroundImage: `url("${speaker.imgPath}")`,
            WebkitMaskImage: `${getRandomMask()}`,
            WebkitMaskSize: "271px",
            WebkitMaskPosition: "center",
          }}
        ></div>
        <div className="hidden md:group-hover:flex md:group-hover:flex-col px-6 z-10">
          <Text speaker={speaker}></Text>
        </div>
      </div>

      <div className="md:hidden py-2 px-3">
        <Text speaker={speaker}></Text>
      </div>
    </div>
  );
};
SpeakerCard.propTypes = {
  speaker: object.isRequired,
};

export default SpeakerCard;
