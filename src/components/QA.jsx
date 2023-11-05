import React, { useState } from "react";
import { QA_QUESTIONS } from "../constants";
import { Plus, Minus, Gallery } from "../assets/icons";
import { SectionHeader } from "./index";
import { object } from "prop-types";

function QA() {
  const QAItem = ({ QAItem }) => {
    const [open, setOpen] = useState(false);
    const text = open ? QAItem.answer : QAItem.question;
    const Icon = open ? Minus : Plus;
    return (
      <div
        className="flex align-text-top gap-4 sm:gap-3 md:gap-4"
        onClick={() => setOpen(!open)}
      >
        <Icon className="min-w-min w-6 h-6 mt-[2px] sm:w-5 sm:h-5 sm:mt-[6px] md:w-6 md:h-6 md:mt-1 fill-darkGray"></Icon>
        <p className=" text-xl sm:text-2xl">{text}</p>
      </div>
    );
  };
  QAItem.propTypes = {
    QAItem: object.isRequired,
  };

  return (
    <section id="qa" className="section p-0 z-10 flex w-full bg-white ">
      <div className="hidden bg-lightGray sm:flex sm:basis-1/2 justify-center items-center	">
        <Gallery className="sm:w-40 sm:h-40 md:w-54 md:h-54"></Gallery>
      </div>
      <div className="flex flex-col sm:basis-1/2 px-14 py-20 gap-20">
        <SectionHeader
          header="Q&A"
          subHeader="THINGS YOU MIGHT WANT TO KNOW"
        ></SectionHeader>

        <ul className="flex flex-col gap-10 ">
          {QA_QUESTIONS.map((qaItem, index) => (
            <QAItem QAItem={qaItem} key={index}></QAItem>
          ))}
        </ul>
        <button className="w-fit button-base md:button-xl lg:button-2xl border-black">
          More Q&A
        </button>
      </div>
    </section>
  );
}

export default QA;
