import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import CustomSelect from "./CustomSelect";
import { AGENDA_DATES, AGENDA_LOCATIONS, AGENDA_EVENTS } from "../constants";
import { object, bool, string, instanceOf } from "prop-types";

function Agenda() {
  const [currentDate, setCurrentDate] = useState(AGENDA_DATES[0]);

  const AgendaEvent = ({ agendaEvent }) => {
    const getTimeString = ({ dateTime }) => {
      return (
        dateTime.getHours().toString().padStart(2, "0") +
        ":" +
        dateTime.getMinutes().toString().padStart(2, "0")
      );
    };
    const calcEndTime = ({ initialDateTime, durationToAdd }) => {
      const finalDateTime = new Date(initialDateTime);
      return new Date(
        finalDateTime.setTime(
          initialDateTime.getTime() + durationToAdd * 60 * 60 * 1000
        )
      );
    };
    const getRandomMask = () => {
      const random = Math.floor(Math.random() * 3) + 1;
      return `url('/src/assets/curve${random}.svg')`;
    };

    const isFullyBooked = agendaEvent.booked == agendaEvent.available;
    const startDateTime = new Date(agendaEvent.dateTime);
    const endDateTime = calcEndTime({
      initialDateTime: startDateTime,
      durationToAdd: agendaEvent.duration,
    });
    const startTimeString = getTimeString({ dateTime: startDateTime });
    const endTimeString = getTimeString({ dateTime: endDateTime });
    const isMorningEvent = startDateTime.getHours() < "12";
    return (
      <div className="relative overflow-hidden bg-white rounded-2xl aspect-square">
        <img
          src={agendaEvent.imgPath}
          className={`object-fill object-[0px_-35px] w-full  [mask-repeat:no-repeat] rounded-t-2xl`}
          style={{
            WebkitMaskImage: `${getRandomMask()}`,
            maskImage: `${getRandomMask()}`,
          }}
        ></img>
        <div className="absolute flex flex-col px-5 lg:px-8 pt-0 gap-4 lg:gap-7 bottom-6 lg:bottom-8 tracking-tight">
          <h2 className="text-xl lg:text-2xl">
            {startTimeString}-{endTimeString}
            {isMorningEvent ? " AM" : " PM"}
          </h2>
          <h1 className="bold text-2xl lg:text-3.25xl">{agendaEvent.title}</h1>
          <h2 className="text-xl lg:text-2xl ">{agendaEvent.description}</h2>
          <div className="flex gap-4 justify-self-end">
            <button
              className={`button-sm lg:button-xl  grow ${
                isFullyBooked ? "border-yellow text-yellow" : "border-black"
              }`}
            >
              {isFullyBooked ? "waiting list" : "reserve a seat"}
            </button>
            <button className="button-sm lg:button-xl grow border-black">
              read more
            </button>
          </div>
        </div>
      </div>
    );
  };
  AgendaEvent.propTypes = {
    agendaEvent: object.isRequired,
  };

  const AgendaEventRow = ({
    date,
    beforeNoon = true,
    showLocations = true,
  }) => {
    const isSameDay = (date1, date2) => {
      return (
        new Date(date1)?.setHours(0, 0, 0, 0) ===
        new Date(date2)?.setHours(0, 0, 0, 0)
      );
    };
    return (
      <div className="flex gap-5 snap-center scroll-pl-5 scroll-ps-5 scroll-ml-6 snap-x md:justify-center">
        {Object.keys(AGENDA_LOCATIONS).map((locationKey) => (
          <div
            className="flex flex-col snap-center gap-5 lg:basis-[466px] basis-[348px] min-w-[348px] last:pr-5 first:pl-5 box-content	"
            key={locationKey}
          >
            <div
              className={`flex bg-lightGray text-2xl uppercase tracking-widest py-4 w-full items-center justify-center ${
                !showLocations ? "hidden" : ""
              }`}
            >
              {AGENDA_LOCATIONS[`${locationKey}`]}
            </div>
            {AGENDA_EVENTS.filter(
              (agendaEvent) =>
                isSameDay(agendaEvent.dateTime, date) &&
                agendaEvent.location == locationKey &&
                (beforeNoon
                  ? new Date(agendaEvent.dateTime).getHours() < "12"
                  : new Date(agendaEvent.dateTime).getHours() > "12")
            ).map((agendaEvent) => (
              <AgendaEvent
                key={agendaEvent.id}
                agendaEvent={agendaEvent}
              ></AgendaEvent>
            ))}
          </div>
        ))}
      </div>
    );
  };

  AgendaEventRow.propTypes = {
    beforeNoon: bool.isRequired,
    showLocations: bool.isRequired,
    date: instanceOf(Date),
  };

  const AgendaDivider = ({ text }) => {
    return (
      <div className="sticky left-5 md:relative mx-5 md:w-full overflow-clip">
        <div className="absolute w-full top-1/2 border-b-[1px] border-black"></div>
        <h1 className="relative z-10 m-[0_auto] flex bg-white rounded-full text-base lg:text-2xl uppercase px-7 lg:px-8 py-4 w-fit justify-center	border-[1px] border-lightGray">
          {text}
        </h1>
      </div>
    );
  };
  AgendaDivider.propTypes = {
    text: string.isRequired,
  };
  const AgendaSubHeader = ({ currentDateString }) => {
    const date = new Date(currentDateString);
    const dateInfo = (
      <span>
        {date.toLocaleString("default", {
          month: "long",
        })}{" "}
        {date.toLocaleString("default", { day: "numeric" }).padStart(2, "0")}{" "}
        <span className="hidden lg:inline">
          /{date.toLocaleString("default", { weekday: "long" })}
        </span>
      </span>
    );
    return (
      <h1 className="flex items-center gap-4">
        day
        <CustomSelect
          options={AGENDA_DATES.map((date) => {
            return { ...date, value: date.key };
          })}
          onChange={handleSelectChange}
          selected={currentDate.key.toString()}
        ></CustomSelect>
        {dateInfo}
      </h1>
    );
  };
  AgendaSubHeader.propTypes = { currentDateString: string.isRequired };

  const handleSelectChange = (index) => {
    setCurrentDate(AGENDA_DATES[index]);
  };

  return (
    <section
      id="agenda"
      className="pl-0 section--x-scrollable section--col  bg-yellow"
    >
      <SectionHeader className="px-5 lg:px-40" header="agenda">
        <AgendaSubHeader
          currentDateString={currentDate.value}
        ></AgendaSubHeader>
      </SectionHeader>
      <div className="flex-col gap-5 snap-x inline-flex overflow-x-auto  hide-scrollbar md:overflow-hidden">
        <AgendaEventRow
          date={new Date(currentDate.value)}
          showLocations
          beforeNoon
        />
        <AgendaDivider text="lunch break" />

        <AgendaEventRow
          date={new Date(currentDate.value)}
          beforeNoon={false}
          showLocations={false}
        />
        <AgendaDivider text="happy hour" />
      </div>
    </section>
  );
}

export default Agenda;
