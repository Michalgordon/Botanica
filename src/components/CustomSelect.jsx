import React, { useState, useRef } from "react";
import { array, func, string } from "prop-types";
import { ChevronDown, ChevronUp } from "../assets";
import { useOnClickOutside } from "../utils";

const CustomSelect = ({ options, selected = "", onChange }) => {
  const [isActive, setIsActive] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setIsActive(false));

  const handleSelectChange = (index) => {
    if (onChange) {
      onChange(index);
    }
  };

  return (
    <div
      ref={node}
      className={`relative z-10 bg-white border-2 border-lightGray box-content ${
        isActive ? "rounded-t-2xl shadow-md border-b-white" : "rounded-2xl"
      }`}
    >
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className="flex justify-center p-4 gap-4 cursor-pointer"
      >
        {selected}
        {isActive ? (
          <ChevronDown className="border-black w-5" />
        ) : (
          <ChevronUp className="border-black w-5" />
        )}
      </div>

      <div
        className={`absolute box-content -left-[2px] w-full bg-white rounded-b-2xl border-2 border-lightGray ${
          isActive ? "block shadow-md	 border-t-0 " : "hidden"
        }`}
      >
        {options.map((option, index) => (
          <div
            className="flex p-4 hover:bg-primary last:hover:rounded-b-2xl cursor-pointer"
            key={index}
            value={index}
            onClick={() => {
              handleSelectChange(index);
              setIsActive(!isActive);
            }}
          >
            {option.value}
          </div>
        ))}
      </div>
    </div>
  );
};

CustomSelect.propTypes = {
  selected: string,
  options: array.isRequired,
  onChange: func,
};

export default CustomSelect;
