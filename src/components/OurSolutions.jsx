import React from "react";
import FilterCard from "./FilterCard";

function OurSolutions() {
  return (
    <section className="bg-gradient-to-r from-customColor-dark-magenta to-customColor-dark-blue relative z-10">
      <div className="text-center p-10">
        <h2 className="mb-4 text-xl md:text-3xl text-center my-4 font-extrabold tracking-tight text-gray-900 dark:text-white">
          Our Strategic Solution and Pricing
        </h2>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl px-4 py-8 mx-auto place-items-center">
        {Array.from({ length: 6 }).map((_, index) => (
          <FilterCard key={index} />
        ))}
      </section>
    </section>
  );
}

export default OurSolutions;
