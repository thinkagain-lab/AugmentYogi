import React, { useState } from "react";
import "./SoldFilters.css";

const SoldFilters = () => {
  const cards = [
    {
      id: 1,
      image:'/public/ourfilter/facetatoofilter.jpeg',
      title: "Eagles Eye",
      description: "A Filter for Fashion Diadem",
      logo:'/public/soldfilter/logo/EELogo.png',
      link: "https://www.instagram.com/ar/1147775182881685",
    },
    {
      id: 2,
      image: `https://source.unsplash.com/random/300x200?${encodeURIComponent(
        "Smoothie"
      )}`,
      title: "Smoothie",
      description: "Refreshing blend of fruits and yogurt.",
      price: 5.49,
      link: "https://lqrs.com",
    },
    {
      id: 3,
      image: `https://source.unsplash.com/random/300x200?${encodeURIComponent(
        "Iced Coffee"
      )}`,
      title: "Iced Coffee",
      description: "Cold brewed coffee with a hint of vanilla.",
      price: 4.99,
      link: "https://lqrs.com",
    },
    {
      id: 4,
      image: `https://source.unsplash.com/random/300x200?${encodeURIComponent(
        "Mojito"
      )}`,
      title: "Mojito",
      description: "Classic Cuban cocktail with mint and lime.",
      price: 7.99,
      link: "https://lqrs.com",
    },
    {
      id: 5,
      image: `https://source.unsplash.com/random/300x200?${encodeURIComponent(
        "Matcha Latte"
      )}`,
      title: "Matcha Latte",
      description: "Creamy green tea latte, rich in antioxidants.",
      price: 6.49,
      link: "https://lqrs.com",
    },
    {
      id: 6,
      image: `https://source.unsplash.com/random/300x200?${encodeURIComponent(
        "Fruit Punch"
      )}`,
      title: "Fruit Punch",
      description: "Sweet and tangy punch, bursting with fruity flavors.",
      price: 3.99,
      link: "https://lqrs.com",
    },
    {
      id: 7,
      image: `https://source.unsplash.com/random/300x200?${encodeURIComponent(
        "Bubble Tea"
      )}`,
      title: "Bubble Tea",
      description: "Chewy tapioca pearls in a sweet milk tea base.",
      price: 4.99,
      link: "https://lqrs.com",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-customColor-dark-magenta via-customColor-dark-blue to-customColor-dark-magenta">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <div className="text-center px-6">
          <h2 className="mb-4 text-xl md:text-3xl text-center my-4 font-extrabold tracking-tight text-gray-900 dark:text-white">
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
                <div className="bg-customColor-dark-blue rounded-lg overflow-hidden mb-4">
                  <img
                    src={card.image}
                    alt=""
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg leading-6 font-bold text-white">
                      {card.title}
                    </h3>
                    <p className="text-gray-200 mt-2 text-sm">
                      {card.description}
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-2xl font-extrabold text-gray-900">
                        {card.logo ? <img height={40} width={40} src={card.logo} /> : ''}
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
