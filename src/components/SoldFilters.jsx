import React, { useState } from "react";
import "./SoldFilters.css";

const SoldFilters = () => {
  const cards = [
    {
      id: 1,
      image:'soldfilter/solffilterpreview/EaglesEye.gif',
      title: "Eagles Eye",
      description: "A Filter for Fashion Diadem",
      logo:'soldfilter/logo/EaglesEyeLogo.png',
      link: "https://www.instagram.com/ar/1147775182881685",
    },
    {
      id: 2,
      image: 'soldfilter/solffilterpreview/GDGKolkata.gif',
      title: "GDG KOLKATA",
      description: "A Filter for the Tech Angel Contest",
      logo:'soldfilter/logo/GDGKolkataLogo.png',
      link: "https://www.instagram.com/ar/858374968632558",
    },
    {
      id: 3,
      image: 'soldfilter/solffilterpreview/IEEEIEMCrown.gif',
      title: "IEEE",
      description: " IEEE IEM Crown Filter",
      logo:'soldfilter/logo/IEEELogo.png',
      link: "https://www.instagram.com/ar/1360959181355645",
    },
    {
      id: 4,
      image: 'soldfilter/solffilterpreview/IIESTIShibpurImpetusCrown.gif',
      title: "IIEST SHIBPUR",
      description: "IIEST Shibpur Impetus Crown",
      logo:'soldfilter/logo/IIESTSHIBPURLogo.png',
      link: "https://www.instagram.com/ar/3059370707702073",
    },
    {
      id: 5,
      image: 'soldfilter/solffilterpreview/IEEEJadavpurAiCSSC.gif',
      title: "IIEST Jadavpur",
      description: "IEEE Jadavpur AiCSSC ",
      logo:'soldfilter/logo/IEEEJadavpur.png',
      link: "#",
    },
    {
      id: 6,
      image: 'soldfilter/solffilterpreview/GDGDurgapur.gif',
      title: "GDG Durgapur",
      description: "Tech Champ Contest",
      logo:'soldfilter/logo/GDGDurgapur.png',
      link: "https://www.instagram.com/ar/2828325740644417",
    },
    {
      id: 7,
      image: 'soldfilter/solffilterpreview/KolkataThunderBolt.gif',
      title: "Kolkata Thunderbolts",
      description: "Toofan Roar",
      logo:'soldfilter/logo/GDGDurgapur.png',
      link: "https://www.instagram.com/ar/3059370707702073",
    },
    {
      id: 8,
      image: 'soldfilter/solffilterpreview/IIEST_SHIBPURS_Standee.gif',
      title: "IIEST SHIBPUR",
      description: "Impetus Selfie Stand",
      logo:'soldfilter/logo/IIESTSHIBPURLogo.png',
      link: "https://www.instagram.com/ar/3059370707702073",
    },
   
   
  ];

  return (
    <section className="bg-gradient-to-b from-customColor-dark-magenta via-customColor-dark-blue to-customColor-dark-magenta">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <div className="text-center px-6">
          <h2 className="mb-4 text-xl md:text-3xl text-center my-4 font-extrabold tracking-tight text-white">
            Our Happy Clients
          </h2>
          <p className="text-sm text-gray-400 mt-3">
          Fill out your details and get your customised filter ready to rock and roll
          </p>
         
        </div>

        <div className="relative px-0.5" id="oursoldfilter">
          <div
            className="flex snap-x snap-mandatory gap-4"
            style={{ width: "max-content" }}
          >
            {cards.map((card) => (
              <div className="flex-none w-64 snap-center" key={card.id}>
                <div className="bg-white bg-opacity-50 rounded-lg overflow-hidden ">
                  <img
                    src={card.image}
                    alt=""
                    className="w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg leading-6 font-bold text-white">
                      {card.title}
                    </h3>
                    <p className="text-gray-200 mt-2 text-sm">
                      {card.description}
                    </p>
                    <div className="flex justify-between items-center mt-5 mb-5 ">
                      <span className="text-2xl font-extrabold text-gray-900">
                        {card.logo ? <img className="h-15 w-25" src={card.logo} /> : ''}
                      </span>
                      <a
                        href={card.link}
                        className="text-white border border-customColor-dark-magenta hover:bg-customColor-dark-magenta focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      >
                        Try Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoldFilters;
