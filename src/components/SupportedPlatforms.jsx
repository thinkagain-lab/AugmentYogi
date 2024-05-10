import React from "react";

const SupportedPlatforms = () => {
  return (
    <section className="bg-gradient-to-r from-customColor-dark-magenta to-customColor-dark-blue ">
    <div className="relative z-10 max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
      <div className="relative isolate overflow-hidden bg-gray-900 bg-opacity-65 px-6 py-24 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-24 xl:py-32">
        <h2 className="mx-auto text-center text-3xl font-bold text-white sm:text-4xl">
        Supported Platforms
        </h2>

        <p className="mx-auto mt-4 text-center text-md  text-gray-300">
       We support a wide range of platforms
        </p>

        <div className="flex gap-10 text-center justify-center items-center mt-10">
            <div>
            <i className="fa-brands fa-facebook-f px-6 py-4 text-2xl  rounded-full bg-blue-500 text-white"></i>
            </div>

            <div>
            <i className="fa-brands fa-instagram px-5 py-4 text-2xl  rounded-full bg-pink-500 text-white"></i>
            </div>
            
            <div>
            <i className="fa-brands fa-snapchat px-5 py-4 text-2xl  rounded-full bg-yellow-300 text-white "></i>
            </div>
        </div>

        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
          aria-hidden="true"
        >
          <circle
            cx="512"
            cy="512"
            r="512"
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
          ></circle>
          <defs>
            <radialGradient
              id="759c1415-0410-454c-8f7c-9a820de03641"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(512 512) rotate(90) scale(512)"
            >
              <stop stopColor="#440C3B"></stop>
              <stop offset="1" stopColor="#EF30D2" stopOpacity="0"></stop>
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
    </section>
  );
};

export default SupportedPlatforms;
