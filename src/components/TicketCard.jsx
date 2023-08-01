import PropTypes from "prop-types";
import { Fragment } from "react";

const TicketCard = ({ type, perks, price, signUpNeeded = false, color }) => {
  return (
    <Fragment>
      <div className="flex flex-col gap-8 px-10 pt-10 pb-4">
        <h2 className="text-3xl uppercase">
          {type}
          {signUpNeeded ? "*" : ""}
          <p className="text-base">
            {" "}
            {signUpNeeded ? "*sign up in advance" : ""}
          </p>
        </h2>
        <ul>
          {perks.map((perk, index) => (
            <li
              className="list-disc mb-2 text-xl"
              key={type + "_perk_" + index}
            >
              {perk}
            </li>
          ))}
        </ul>
      </div>

      <footer
        className={`flex flex-col gap-2 basis-16 items-center rounded-b-3xl p-6 text-darkGray ${
          color === `pink`
            ? `bg-pink`
            : color === `yellow`
            ? `bg-yellow`
            : `bg-green`
        }`}
      >
        <h1 className="text-6xl font-bold">{price}$</h1>
        <button
          /* TODO fix size to mach sibling */ className="rounded-full px-4 py-2 border-2 border-lightGray font-semibold text-base hover:bg-white hover:"
        >
          BUY{" "}
        </button>
      </footer>
    </Fragment>
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
