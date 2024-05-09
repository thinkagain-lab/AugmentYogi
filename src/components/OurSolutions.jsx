import React from "react";
import FilterCard from "./FilterCard";

const OurSolutions=()=> {

  const solutionsArray = [
    {
      id:1,
      img:'/public/storeimg/faceFilter.jpg',
      name:'Face Filter',
      description: 'AR face filters offer enjoyable methods to interact with your audience, enhancing visibility and driving sales',
      originalPrice:'₹11,999',
      salePrice:'₹9,999'
    },
    {
      id:2,
      img:'/public/storeimg/RandomisersFilter.jpg',
      name:'Randomisers Filter',
      description: 'Randomisers refer to software capable of generating random content, including text, numbers, expressions, and even facial features',
      originalPrice:'₹26,399',
      salePrice:'₹21,999'
    },
    {
      id:3,
      img:'/public/storeimg/WorldEffectFilter.jpg',
      name:'World Effect Filter',
      description: 'World effects integrate virtual objects seamlessly into real-world environments',
      originalPrice:'₹57,599',
      salePrice:'₹47,999'
    },
    {
      id:4,
      img:'/public/storeimg/TrackersFilter.jpg',
      name:'Trackers Filter',
      description: 'This filter functions as a plane, body, image, and target tracker, enabling the creation of interactive AR effects that can engage with art and iconic imagery',
      originalPrice:'₹69.599',
      salePrice:'₹57,999'
    },
    {
      id:5,
      img:'/public/storeimg/MiniGamesFilter.jpg',
      name:'Mini-Games / Quizzes Filters',
      description: 'An engaging filter offering various games, quizzes, and fun activities for entertainment',
      originalPrice:'₹91,199',
      salePrice:'₹75,999'
    },
    {
      id:6,
      img:'/public/storeimg/PortalFilter.jpg',
      name:'Portal Filter',
      description: 'AR portals serve as gateways to immersive virtual worlds, accessible through doorways, windows, and portals',
      originalPrice:'₹119,999',
      salePrice:'₹99,999'
    }
  ] 

  return (
    <section className="bg-gradient-to-r from-customColor-dark-magenta to-customColor-dark-blue relative z-10">
      <div className="text-center p-10">
        <h2 className="mb-4 text-xl md:text-3xl text-center my-4 font-extrabold tracking-tight text-gray-900 dark:text-white">
          Our Strategic Solution and Pricing
        </h2>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl px-4 py-8 mx-auto place-items-center">
        {solutionsArray.map((card, index) => (
          <FilterCard key={index} filterimage={card.img} filtername={card.name} filterdesc={card.description} filterop={card.originalPrice} filtersp={card.salePrice} />
        ))}
      </section>
    </section>
  );
}

export default OurSolutions;
