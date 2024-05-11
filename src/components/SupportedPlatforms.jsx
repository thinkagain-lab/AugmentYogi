import React from "react";

const SupportedPlatforms = () => {
  return (
    <section className="bg-customColor-dark-blue bg-opacity-100 flex flex-col justify-center items-center">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6 text-center">
        <div>
        <h2 className="text-md md:text-3xl text-center my-4 font-extrabold tracking-tight text-white">
          Crafting Augmented Reality Experience for{" "}
          <span className="text-blue-500">Facebook</span>{" "}
          <span className="text-pink-500">Instagram</span> and{" "}
          <span className="text-yellow-500">Snapchat</span>
        </h2>

        <p className="text-sm text-gray-400 mt-3">
          Let's understand the popularity of Augmented Reality Filters in
          Facebook, Instagram and Snapchat along with some statistics
        </p>
        </div>
        <div className="flex flex-col items-center">
          {" "}
          {/* Centering container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center relative z-10">
            <div className="flex flex-col justify-between p-6 tems-center h-60 w-80 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg">
              <div>
                <h3 className="text-3xl text-center md:text-4xl font-bold bg-gradient-to-br from-customColor-brand-blue to-customColor-brand-magenta bg-clip-text text-transparent">
                  600 Million
                </h3>
              </div>
              <div className="p-10 text-white">
                <p className="text-center md:text-left">
                  AR Filters on Facebook and Instagram are utilised by 600
                  million individuals
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between p-6  items-center h-60 w-80 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg">
              <div>
                <h3 className="text-3xl text-ceneter md:text-4xl font-bold bg-gradient-to-br from-customColor-brand-blue to-customColor-brand-magenta bg-clip-text text-transparent">
                  1.1 Billion
                </h3>
              </div>
              <div className="p-10 text-white">
                <p className="text-center md:text-left">
                  The global count of mobile AR users exceeds 1.1 billion
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between p-6 items-center h-60 w-80 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg">
              <div>
                <h3 className="text-3xl text-center md:text-4xl font-bold bg-gradient-to-br from-customColor-brand-blue to-customColor-brand-magenta bg-clip-text text-transparent">
                  $50 Billion
                </h3>
              </div>
              <div className="p-10 text-white">
                <p className="text-center md:text-left">
                  The estimated AR Market value is expected to reach $50 Billion
                  by 2024
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="#oursolutions"
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mt-4 me-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br from-customColor-brand-blue to-customColor-brand-magenta group-hover:from-customColor-brand-blue group-hover:to-pink-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:bg-customColor-brand-magenta"
          >
            <span className="relative text-sm md:text-base px-20 py-4 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Experience AR Magic
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SupportedPlatforms;
