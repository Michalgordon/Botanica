import { ticketTypes } from "../constants";
import { SectionHeader, TicketCard } from "./index";
import { Flower } from "../assets";
function Tickets() {
  const ticketListItems = ticketTypes.map((ticket) => (
    <li key={ticket.type} className="flex flex-col snap-center md:basis-1/3">
      <TicketCard {...ticket}> </TicketCard>
    </li>
  ));

  return (
    <section
      id="tickets"
      className="section--x-scrollable relative md:z-10 flex flex-col w-full py-16 "
    >
      <Flower className="absolute invisible md:visible fill-green -top-64 right-20 rotate-45 w-56" />
      <div className="absolute bg-gradient-to-r from-transparent to-gray right-0 top-0 w-12 h-full"></div>
      <SectionHeader
        header="Tickets"
        subHeader="Available for purchase"
      ></SectionHeader>
      <ul className="ticket inline-flex overflow-x-auto snap-x hide-scrollbar md:overflow-hidden md:justify-center gap-8	">
        {ticketListItems}
      </ul>
    </section>
  );
}

export default Tickets;
