import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import { Link, Route, Routes } from "react-router-dom";
import About from "../pages/About";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-customColor-dark-blue text-white  pt-8 pb-6">
      <div className=" max-w-screen-xl px-4  mx-auto ">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 ">
            <h4 className="mb-2 font-semibold">
              <Link to="/">
              <img
                src="ay_white.svg"
                className="h-14 w-48  mx-[-22px]"
                alt=""
              />
              </Link>
            </h4>
            <h5 className="mt-0 mb-2 text-blueGray-600">
              Keep in touch with the leading Creators of the Best Augmented
              Reality Experience
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <button
                className="bg-white  text-customColor-dark-blue shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <a href="https://twitter.com/thinkagainlab" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
              </button>
              <button
                className="bg-white text-customColor-dark-blue shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <a href="https://www.facebook.com/thinkagainlab" target="_blank">
                  <i className="fab fa-facebook-square"></i>
                </a>
              </button>

              <button
                className="bg-white text-customColor-dark-blue shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <a href="https://www.instagram.com/think_again_lab_official" target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
              </button>

              <button
                className="bg-white text-customColor-dark-blue shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <a href="https://www.linkedin.com/company/thinkagainlab/" target="_blank">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </button>
            </div>
          </div>

          <div className="w-full lg:w-6/12  ">
            <div className="flex flex-wrap  items-top mb-6">
              <div className="w-full lg:w-6/12 px-2 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      to="/about"
                      className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm"
                      href="https://thinkagainlab.com/knowledgehub/"
                      target="_blank"
                    >
                      Blogs
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/privacypolicy"
                      className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm"
                    >
                      Privact Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/termsandconditions"
                      className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm"
                    >
                      Terms &amp; Conditions
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="w-full lg:w-6/12 px-2 mt-4 md:mt-0">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Contact Us
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="tel:+917908369443"
                      className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm"
                    >
                      {" "}
                      <i class="fa fa-phone-alt me-3"></i>+91 7908369443
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm"
                      href="mailto:thinkagainlab@gmail.com"
                    >
                      {" "}
                      <i class="fa fa-envelope me-3"></i>thinkagainlab@gmail.com
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm"
                      href="https://www.thinkagainlab.com"
                    >
                      {" "}
                      <i class="fa fa-globe me-3"></i>thinkagainlab.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              <a
                href="https://thinkagainlab.com"
                className="text-blueGray-500 hover:text-blueGray-800"
              >
                Made with <i className="fa-solid fa-heart text-white"></i> by
                Think Again Lab
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
