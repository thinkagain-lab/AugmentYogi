import React from "react";

function WhyAR() {
  return (
    <section className="bg-gradient-to-r from-customColor-dark-magenta to-customColor-dark-blue h-screen relative z-10">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        {/* Row */}
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <div className="sm:text-l text-gray-400">
            <h2 className="mb-4 text-xl md:text-3xl font-extrabold tracking-tight text-white lg:text-left text-center">
              AR elevates Brand Recall by 70%
            </h2>
            <p className="mb-8 font-light text-sm text-center md:text-left md:text-xl">
              Experience the Marketing Revolution: AR Elevates Engagement with
              Stunning Visuals, Enhancing Memory Recall by 70%. Say Goodbye to
              Traditional Mobile Video – Embrace AR's Creative Filters and
              Virtual Product Trials, Crafting Global Brand Identities.
            </p>
            {/* List */}
            <ul
              role="list"
              className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
            >
              <li className="flex space-x-3">
                {/* Icon */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-customColor-brand-magenta"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-medium leading-tight text-white">
                  Elevates Engagement with Stunning Visuals
                </span>
              </li>
              <li className="flex space-x-3">
                {/* Icon */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-customColor-brand-magenta"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-medium leading-tight text-white">
                  Creative Filters and Virtual Product Trials
                </span>
              </li>
              <li className="flex space-x-3">
                {/* Icon */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-customColor-brand-magenta"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-medium leading-tight text-white">
                  Enhancing Memory Recall by 70%
                </span>
              </li>
            </ul>
          </div>
          <img
            className="w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src="whyAR.jpeg"
            alt="why AR Image"
          />
        </div>
      </div>
    </section>
  );
}

export default WhyAR;
