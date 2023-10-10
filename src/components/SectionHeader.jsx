import PropTypes from "prop-types";
function SectionHeader({ header, subHeader = "" }) {
  return (
    <header className="flex flex-col gap-2">
      <h1 className=" text-4.5xl md:text-7.5xl leading-none uppercase">
        {header}
      </h1>
      {subHeader ? (
        <h3 className="text-xl md:text-2.5xl uppercase">{subHeader}</h3>
      ) : (
        ""
      )}
    </header>
  );
}

SectionHeader.propTypes = {
  header: PropTypes.string.isRequired,
  subHeader: PropTypes.string,
};

export default SectionHeader;
