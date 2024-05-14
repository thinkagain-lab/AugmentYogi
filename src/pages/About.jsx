import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <section className="mt-[-0.5m] bg-gradient-to-r from-customColor-dark-magenta to-customColor-dark-blue ">
        <Navbar />

        <div className="max-w-screen-xl px-4 py-4 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6 text-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-0 items-center">
            <div className=" mt-20 md:mt-0 grid grid-cols-2 gap-5">
              <div className="text-start">
                <img
                  className="img-fluid rounded w-full"
                  src="ourfilter/CrownFilterAR.jpeg"
                  alt="portfolio image 1"
                />
              </div>
              <div className="text-start">
                <img
                  className="img-fluid rounded w-3/4"
                  src="ourfilter/facetatoofilter.jpeg"
                  alt="portfolio image 2"
                  style={{ marginTop: "25%" }}
                />
              </div>
              <div className="text-right  flex justify-end">
                <img
                  className="img-fluid rounded w-3/4 self-start"
                  src="ourfilter/fairywing.jpeg"
                  alt="portfolio image 3"
                />
              </div>
              <div className="text-right">
                <img
                  className="img-fluid rounded w-full"
                  src="ourfilter/photoframeARFilter.jpeg"
                  alt="portfolio image 4"
                />
              </div>
            </div>

            <div className="ms-4 text-left text-gray-300">
              <h5 className="text-sm md:text-md text-left my-4  tracking-tight text-white">
                About Us
              </h5>
              <h2 className="text-xl md:text-3xl text-left my-4 font-extrabold tracking-tight text-white">
                Welcome to{" "}
                <span className="bg-gradient-to-br from-customColor-brand-blue to-customColor-brand-magenta bg-clip-text text-transparent">
                  Augment Yogi
                </span>
              </h2>
              <p className="mb-4">
                An innovative brand operating under the visionary{" "}
                <a
                  className="text-yellow-400"
                  href="https://www.thinkagainlab.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  Think Again Lab{" "}
                </a>
              </p>
              <p className="mb-4">
                At Augment Yogi, we are passionate about leveraging augmented
                reality (AR) technology to revolutionize brand marketing. Our
                mission is to deliver high-quality, customized AR Filters that
                showcase brands' products and services, enabling organic
                marketing engagements
              </p>

              <div class="flex justify-center lg:justify-start mt-5">
                <button className="mt-5 flex items-center relative p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br from-customColor-brand-blue to-customColor-brand-magenta group-hover:from-customColor-brand-blue group-hover:to-pink-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-purple-800">
                  <span className="relative text-sm md:text-base px-10 md:px-20 py-4 transition-all ease-in duration-75 bg-customColor-dark-blue rounded-md group-hover:bg-opacity-0">
                    Get Your Filter
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="container mb-5 text-gray-300">
            <p>
              With our expertise and dedication, we empower brands to create
              immersive experiences that captivate their audience and elevate
              their online presence. Whether you're promoting a new product
              line, showcasing a service, or hosting an event, Augment Yogi's AR
              Filters provide a unique and interactive way to connect with your
              customers.
            </p>
            <p>
              Backed by the expertise of Think Again Lab, we are at the
              forefront of AR innovation, constantly pushing the boundaries to
              deliver cutting-edge solutions that drive results. Our team of
              passionate visionaries combines creativity with technical
              expertise to ensure each AR Filter is tailored to meet the unique
              needs and objectives of our clients.
            </p>
            <p>
              Join us in embracing the future of marketing through augmented
              reality. Discover how Augment Yogi can help you amplify your
              brand's message and create memorable experiences for your
              audience. Let's elevate your marketing strategy to new heights
              with immersive AR solutions that leave a lasting impression.
            </p>
          </div>
       
       
       
       
        </div>
        <Footer />
      </section>
    </>
  );
};

export default About;
