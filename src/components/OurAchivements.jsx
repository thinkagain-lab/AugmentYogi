import React from "react";

const OurAchievements = () => {
  return (
    <section className="bg-gradient-to-r py-10 from-customColor-dark-magenta to-customColor-dark-blue">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6 bg-white/10 backdrop-blur-lg border-white/30 rounded-2xl shadow-lg">
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <div className="sm:text-l text-gray-400 mx-0 md:mx-5">
            <h2 className="mb-4 text-xl md:text-3xl text-center md:text-left font-extrabold tracking-tight text-white">
              Recognition of Augment Yogi
            </h2>
            <p className="mb-8 font-light text-sm md:text-xl text-center md:text-left">
              Our Augment Yogi team earned recognition at Meghnad Saha Institute
              of Technology's Inter College Business Model Championship,
              showcasing innovation and excellence. Proud of this prestigious
              achievement! Waiting for you to say Hello to the stunning and
              customised AR filters.
            </p>
            <ul className="mx-auto mt-10 flex justify-center md:justify-start mb-6">
              <li>
                <a
                  target="_blank"
                  href="https://calendly.com/augmentyogi/consultation"
                  className="block py-2 px-3 text-white rounded"
                >
                  <span className="relative text-sm md:text-base items-center px-7 py-4 bg-gradient-to-br rounded text-white from-customColor-brand-blue to-customColor-brand-magenta">
                    Book Free AR Consultancy
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <img
            className="w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src="achivement/innovate.png"
            alt="Recognition Image"
          />
        </div>
      </div>
    </section>
  );
};

export default OurAchievements;
