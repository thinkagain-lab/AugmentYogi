import React from "react";
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import WhyAR from "../components/WhyAR"
import OurFiltersBenToGrid from "../components/OurFiltersBenToGrid"
import GetYourProject from "../components/GetYourProject"
import OurSolutions from "../components/OurSolutions"
import ContactForm from "../components/ContactForm"
import ARFeature from "../components/ARFeature"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import SoldFilters from "../components/SoldFilters"
import SupportedPlatforms from "../components/SupportedPlatforms"
import OurAchivements from "../components/OurAchivements.jsx";



const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyAR />
      <OurFiltersBenToGrid />
      <GetYourProject />
      <OurSolutions />
      <SupportedPlatforms />
      <SoldFilters />
      <ContactForm />
      <OurAchivements/>
      <ARFeature />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Homepage;
