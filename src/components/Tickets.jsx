import { ticketTypes } from "../constants";
import { SectionHeader, TicketCard } from "./index";

function Tickets() {
  const ticketListItems = ticketTypes.map((ticket) => (
    <li
      key={ticket.type}
      className="w-80 min-w-full md:max-w-sm md:min-w-0 snap-center flex flex-1 flex-col justify-between rounded-3xl border-2 border-lightGray"
    >
      <TicketCard {...ticket}> </TicketCard>
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
