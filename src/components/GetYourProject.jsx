import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";

function GetYourProject() {
  return (
    <section className="bg-gradient-to-r from-customColor-dark-magenta to-customColor-dark-blue">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <h2 className="mb-4 text-xl md:text-3xl text-center my-4 font-extrabold tracking-tight text-white">
          How to Get Your Filter
        </h2>

        <div className="relative grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-4 md:gap-6 xl:gap-8 z-10">
          <div class="max-w-sm p-6 rounded-lg shadow bg-customColor-dark-blue flex flex-col items-center">
            <i
              className="fa fa-cog text-4xl bg-gradient-to-br from-customColor-brand-blue to-customColor-brand-magenta text-white rounded-full px-4 py-4 mb-4"
              aria-hidden="true"
            ></i>

            <a href="#" class="text-center">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight bg-gradient-to-br from-customColor-brand-blue to-customColor-brand-magenta bg-clip-text text-transparent">
                Choose a Filter
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-400 text-center">
              Explore the filters and choose as per your business needs
            </p>
          </div>

          <div class="max-w-sm p-6 rounded-lg shadow bg-customColor-dark-blue flex flex-col items-center">
            <i
              className="fab fa-wpforms text-4xl bg-gradient-to-br from-customColor-brand-blue to-customColor-brand-magenta text-white rounded-full px-5 py-4 mb-4"
              aria-hidden="true"
            ></i>

            <a href="#" class="text-center">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight bg-gradient-to-br from-customColor-brand-blue to-customColor-brand-magenta bg-clip-text text-transparent">
                Fill Up The Form
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-400 text-center">
              Explore the filters and choose as per your business needs
            </p>
          </div>

          <div class="max-w-sm p-6 rounded-lg shadow bg-customColor-dark-blue flex flex-col items-center">
            <i
              className="fa-solid fa-handshake text-4xl bg-gradient-to-br from-customColor-brand-blue to-customColor-brand-magenta text-white rounded-full px-4 py-5 mb-4"
              aria-hidden="true"
            ></i>

            <a href="#" class="text-center">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight bg-gradient-to-br from-customColor-brand-blue to-customColor-brand-magenta bg-clip-text text-transparent">
                Get In Touch
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-400 text-center">
              Explore the filters and choose as per your business needs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetYourProject;
