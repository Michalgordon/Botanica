import React from "react";
import SectionHeader from "./SectionHeader";
import { Tulip } from "../assets";
const ContactUs = () => {
  return (
    <div className="relative section section--col flex flex-col gap-16 sm:flex-row sm:px-36 sm:py-40 bg-pink">
      <Tulip className="absolute invisible md:visible fill-primary -bottom-[10%] left-[10%] xl:left-[5%] rotate-[30deg] w-72 xl:w-80" />

      <div className="flex flex-col sm:basis-1/2 text-white	">
        <SectionHeader
          className=""
          header="have any more questions?"
          subHeader="please let us know"
        />
      </div>

      <form className="flex flex-col gap-11 sm:basis-1/2 pb-6 sm:pb-0">
        <input
          type="text"
          placeholder="Subject of address"
          id="address"
          className="underline"
        ></input>
        <input
          type="text"
          placeholder="Your name"
          id="name"
          className="underline"
        ></input>
        <input
          type="number"
          placeholder="Phone"
          id="number"
          className="underline"
        ></input>
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="underline"
        ></input>
        <input
          type="text"
          placeholder="Message"
          id="message"
          className="underline"
        ></input>
      </form>
    </div>
  );
};
export default ContactUs;
