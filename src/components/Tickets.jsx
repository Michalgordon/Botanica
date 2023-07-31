import React from "react";
import SectionHeader from "./SectionHeader";

function Tickets() {
  const ticketList = [
    {
      type: "bud",
      perks: ["8 Entrances for live or online lectures", "1 workshop"],
      price: 144,
      signUpNeeded: true,
      color: "green",
    },
    {
      type: "bloom",
      perks: [
        "10 live/online lectures",
        "5 workshops",
        "Mingling zone entrance",
      ],
      price: 256,
      signUpNeeded: false,
      color: "yellow",
    },
    {
      type: "bouquet",
      perks: [
        "Unlimited live/online lectures",
        "Unlimited workshops",
        "Mingling zone entrance",
      ],
      price: 356,
      signUpNeeded: false,
      color: "pink",
    },
  ];

  const ticketListItems = ticketList.map((ticket) => (
    <li
      key={ticket.type}
      className="w-80 min-w-full md:max-w-sm md:min-w-0 snap-center flex flex-1 flex-col justify-between rounded-3xl border-2 border-lightGray"
    >
      <div className="flex flex-col gap-8 px-10 pt-10 pb-4">
        <h2 className="text-3xl uppercase">
          {ticket.type}
          {ticket.signUpNeeded ? "*" : ""}
          <p className="text-base">
            {" "}
            {ticket.signUpNeeded ? "*sign up in advance" : ""}
          </p>
        </h2>
        <ul>
          {ticket.perks.map((perk, index) => (
            <li
              className="list-disc mb-2 text-xl"
              key={ticket.type + "_perk_" + index}
            >
              {perk}
            </li>
          ))}
        </ul>
      </div>

      <footer
        className={`flex flex-col gap-2 basis-16 items-center rounded-b-3xl p-6 text-darkGray ${
          ticket.color === `pink`
            ? `bg-pink`
            : ticket.color === `yellow`
            ? `bg-yellow`
            : `bg-green`
        }`}
      >
        <h1 className="text-6xl font-bold">{ticket.price}$</h1>
        <button className="rounded-full px-4 py-2 border-2 border-lightGray font-semibold text-base w-full hover:bg-white hover:">
          {" "}
          BUY{" "}
        </button>
      </footer>
    </li>
  ));

  return (
    <div className="flex flex-col w-full gap-5">
      <SectionHeader
        header="Tickets"
        subHeader="Available for purchase"
      ></SectionHeader>
      <ul className="ticket inline-flex overflow-x-auto snap-x hide-scrollbar md:overflow-hidden md:justify-center gap-8">
        {ticketListItems}
      </ul>
    </div>
  );
}

export default Tickets;
