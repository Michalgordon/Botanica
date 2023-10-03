import React from "react";

const Speakers = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const listItems = numbers.map((number) => (
    <div key={number} className="speaker-container">
      <div className="speaker-img"></div>
    </div>
  ));

  return (
    <section className="section bg-white">
      <svg className="svg">
        <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
          <path d="M0.363,0.325 L0.556,0.009 L0.743,0.325 L0.744,0.327 L0.746,0.325 L0.999,0.011 C0.999,0.034,1,0.059,1,0.085 C1,0.246,1,0.453,0.971,0.63 C0.946,0.735,0.904,0.829,0.834,0.897 C0.765,0.965,0.667,1,0.532,1 C0.396,1,0.296,0.97,0.222,0.902 C0.148,0.835,0.101,0.741,0.07,0.636 C0.016,0.458,0.011,0.249,0.007,0.086 C0.007,0.059,0.006,0.034,0.005,0.01 L0.36,0.325 L0.362,0.327 L0.363,0.325"></path>
        </clipPath>
      </svg>

      <h1 className="text-4xl"> Speakers</h1>
      <h3 className="text-base">Get to know who’s coming</h3>
      <div className="flex flex-wrap gap-4">{listItems} </div>
    </section>
  );
};

export default Speakers;
