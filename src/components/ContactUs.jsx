import React from "react";
import SectionHeader from "./SectionHeader";
import { Tulip } from "../assets/icons";
const ContactUs = () => {
  return (
    <div className="relative section section--col flex flex-col gap-16 md:flex-row md:px-36 md:py-40 bg-pink">
      <Tulip className="absolute invisible md:visible fill-primary -bottom-[10%] left-[10%] lg:left-[5%] rotate-[30deg] w-72 lg:w-80" />

      <div className="flex flex-col md:basis-1/2 text-white	">
        <SectionHeader
          className=""
          header="have any more questions?"
          subHeader="please let us know"
        />
      </div>

      <form className="flex flex-col gap-11 md:basis-1/2 pb-6 md:pb-0">
        <input
          type="text"
          placeholder="Subject of address"
          id="address"
          className="underline"
          maxLength="160"
        ></input>
        <input
          type="text"
          placeholder="Your name"
          id="name"
          className="underline"
          maxLength="30"
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
          maxLength="30"
        ></input>
        <input
          type="text"
          placeholder="Message"
          id="message"
          className="underline"
          maxLength="360"
        ></input>
      </form>
    </div>
  );
};
export default ContactUs;
