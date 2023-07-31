import React from "react";
import PropTypes from "prop-types"; // ES6

function SectionHeader({ header, subHeader = "" }) {
  return (
    <header className="flex flex-col gap-2">
      <h1 className="text-4xl uppercase"> {header}</h1>
      {subHeader ? <h3 className="text-base uppercase">{subHeader}</h3> : ""}
    </header>
  );
}

SectionHeader.propTypes = {
  header: PropTypes.string.isRequired,
  subHeader: PropTypes.string,
};

export default SectionHeader;
