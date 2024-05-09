import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-gradient-to-r from-customColor-dark-magenta to-customColor-dark-blue ">
    <div className="relative z-10 max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-24 xl:py-32">
        <h2 className="mx-auto text-center text-3xl font-bold text-white sm:text-4xl">
        Stay Ahead in the Augmented Reality Universe
        </h2>

        <p className="mx-auto mt-4 text-center text-md  text-gray-300">
        Join AugmentYogi's AR revolution for breakthrough tech, trends, and community engagement. Subscribe now for curated updates, in-depth analysis, and connect with like-minded individuals. Follow us for more insights and embark on an exciting journey into the future of technology
        </p>

        <form className="mx-auto mt-10 flex max-w-md gap-x-4">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
            placeholder="Enter your email"
          />

          <button
            type="submit"
            className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
           Subscribe
          </button>
        </form>

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

export default Newsletter;
