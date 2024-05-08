import React from "react";

function ARFeature() {
  return (
    <section className="bg-gradient-to-r from-customColor-dark-magenta to-customColor-dark-blue ">
      <div className="relative z-10 max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <h2 className="mb-4 text-xl md:text-3xl text-center my-4 font-extrabold tracking-tight text-gray-900 dark:text-white">
          How Augmented Reakity is Helping Brands
        </h2>

        <div
          className="h-96 rounded-md overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: "url('/public/features/feature02.jpg')" }}
        >
          ``
          <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
            <div className="px-10 max-w-xl">
              <h2 className="text-2xl text-white font-semibold">
                AR Filters for Agile Marketing
              </h2>
              <p className="mt-5 text-gray-200">
                Unlocking the potential for agile marketing, AR Filters offer
                swift delivery times, ranging from 1 to 30 days, tailored to
                your desired level of detail. Unlike traditional media, they
                provide a budget-friendly option, eliminating the need to
                purchase specific ad space
              </p>
              <button className="flex items-center mt-4 px-3 py-2 bg-gradient-to-br rounded text-white from-customColor-brand-blue to-customColor-brand-magenta ">
                <span>Explore Filters</span>
                <svg
                  className="h-5 w-5 mx-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="md:flex mt-8 md:-mx-4">
          <div className="w-full h-96 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2">
            <div className="bg-customColor-dark-blue  bg-opacity-80 flex items-center h-full">
              <div className="px-10 max-w-xl ">
                <h2 className="text-2xl text-white font-semibold">
                  Interactive Product Previews
                </h2>
                <p className="mt-5 text-gray-200">
                  Imagine being able to try out products virtually before you
                  commit to buying. It's all about making informed decisions and
                  feeling confident in your choices. Let's empower your shopping
                  experience
                </p>
                <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                  <span>Explore Filters</span>
                  <svg
                    className="h-5 w-5 mx-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div
            className="w-full h-96 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2"
            style={{
              backgroundImage: "url('/public/features/feature03.jpeg')",
            }}
          >
            <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
              <div className="px-10 max-w-xl">
                <h2 className="text-2xl text-white font-semibold">
                  4X your engagement
                </h2>
                <p className="mt-2 text-gray-200">
                  AR Filters offer a creative arsenal surpassing typical mobile
                  videos, resulting in 4x greater engagement. With a plethora of
                  tools, they facilitate effortless brand interaction
                </p>
                <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                  <span>Explore Filters</span>
                  <svg
                    className="h-5 w-5 mx-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ARFeature;
