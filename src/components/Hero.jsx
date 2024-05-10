import React, { useCallback } from "react";
import "./Hero.css";
import "./ParticlesComponent";
import ParticlesComponent from "./ParticlesComponent";

const Hero = () => {
 
  return (
    <section className="bg-white dark:bg-gray-900 h-screen hero-section">
      <div className="grid max-w-screen-xl px-4 pt-10 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-32">
        <div className="mr-auto place-self-center lg:col-span-7 my-16">
          <p className="text-gray-100 my-5 text-center text-sm md:text-left md:text-base">Elevate Your Brand Presence</p>
          <h1 className="max-w-2xl mb-4 text-4xl font-bold leading-none tracking-tight md:text-4xl xl:text-5xl text-white text-center md:text-left">
            Skyrocket your Brand with our{" "}
            <span className="bg-gradient-to-br from-customColor-brand-blue to-customColor-brand-magenta bg-clip-text text-transparent">
              Augmented Reality
            </span>{" "}
            Filters
          </h1>

          <p className="hidden md:block text-gray-200 my-5 text-center md:text-left text-xs md:text-base">
            Experience the Power of Our Augmented Reality Filters for Unmatched
            Brand Impact
          </p>

          <div className="text-center md:text-left">
          <a
            href="#oursolutions"
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mt-4 me-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br from-customColor-brand-blue to-customColor-brand-magenta group-hover:from-customColor-brand-blue group-hover:to-pink-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:bg-customColor-brand-magenta"
          >

            <span className="relative text-base px-20 py-4 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Get Your Customized Filter
            </span>
          </a>
          </div>
         
          <ParticlesComponent id="myparticlecomponent" />
        </div>
        <div className="relative lg:mt-0 lg:col-span-5 lg:flex z-10">
          <img src="heroImage.png" alt="hero image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
