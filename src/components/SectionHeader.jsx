import PropTypes from "prop-types";
function SectionHeader({ header, subHeader = "", className, children }) {
  return (
    <header className={`flex flex-col gap-2 lg:gap-8 ${className}`}>
      <h1 className=" text-4.5xl md:text-7.5xl leading-none uppercase">
        {header}
      </h1>
      {subHeader ? (
        <h3 className="text-xl md:text-2.5xl uppercase">{subHeader}</h3>
      ) : (
        ""
      )}
      <div
        className={`text-xl md:text-2.5xl uppercase ${
          children ? "" : "hidden"
        }`}
      >
        {children}
      </div>
    </header>
  );
}

SectionHeader.propTypes = {
  header: PropTypes.string.isRequired,
  subHeader: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default SectionHeader;
