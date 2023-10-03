import PropTypes from "prop-types";
import { Fragment } from "react";

const TicketCard = ({ type, perks, price, signUpNeeded = false, color }) => {
  return (
    <div className="md:h-150 h-143 min-w-[360px] md:min-w-fit flex flex-col justify-between bg-white rounded-3xl border-2 border-lightGray ">
      <div className="flex flex-col basis-1/3 justify-center items-start px-9">
        <h2 className="text-3xl uppercase">
          {type}
          {signUpNeeded ? "*" : ""}
          <p className="text-base">
            {" "}
            {signUpNeeded ? "*sign up in advance" : ""}
          </p>
        </h2>
      </div>
      <ul className="flex flex-col gap-1 basis-1/3 px-9">
        {perks.map((perk, index) => (
          <li className="list-disc ml-4 text-xl" key={type + "_perk_" + index}>
            {perk}
          </li>
        ))}
      </ul>
      <footer
        className={`flex flex-col basis-1/3 gap-2 md:gap-4 items-center justify-center rounded-b-3xl px-1/4 text-darkGray ${
          color === `pink`
            ? `bg-pink`
            : color === `yellow`
            ? `bg-yellow`
            : `bg-green`
        }`}
      >
        <h1 className="text-6xl font-bold">{price + "$"}</h1>
        <button className="flex w-1/2 justify-center rounded-full px-4 py-2 border-2 border-lightGray font-semibold text-base hover:bg-white hover:border-white">
          BUY{" "}
        </button>
      </footer>
    </div>
  );
};

TicketCard.propTypes = {
  type: PropTypes.string.isRequired,
  perks: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
  signUpNeeded: PropTypes.bool,
  color: PropTypes.string.isRequired,
};

export default TicketCard;
