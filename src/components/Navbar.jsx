import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`w-full fixed z-20 transition-all ${
        isScrolled
          ? "bg-customColor-dark-blue"
          : "bg-customColor-dark-blue lg:bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="ay_white.svg" className="h-14 w-48" alt="AY LOGO" />
        </Link>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <i
              className={`relative z-20 fa-solid fa-${
                isMenuOpen ? "times" : "bars"
              } text-2xl`}
            ></i>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden fixed top-20 left-0 w-full h-100 p-20 bg-customColor-dark-blue ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="mobile-menu"
        >
          <ul className="font-medium flex flex-col items-center justify-center h-full">
            <li>
              <a
                href="#oursolutions"
                className="block py-2 px-3 text-white rounded"
                aria-current="page"
                onClick={closeMenu}
              >
                Buy AR Filters
              </a>
            </li>
            <li>
              <a
                href="#tryoutyourself"
                className="block py-2 px-3 text-white rounded"
                onClick={closeMenu}
              >
                Explore Filters
              </a>
            </li>
            <li>
              <a
                href="#contactform"
                className="block py-2 px-3 text-white rounded"
                onClick={closeMenu}
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://calendly.com/augmentyogi/consultation"
                className="block py-2 px-3 text-white rounded relative transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              >
                <span className="relative text-sm md:text-base items-center px-7 py-4 bg-gradient-to-br rounded text-white from-customColor-brand-blue to-customColor-brand-magenta transition-colors duration-300 ease-in-out hover:from-customColor-brand-dark-blue hover:to-customColor-brand-blue">
                  Book A Free AR Consultancy
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0">
            <li>
              <a
                href="#oursolutions"
                className="block py-2 px-3 text-white rounded md:bg-transparent"
                aria-current="page"
              >
                Buy AR Filters
              </a>
            </li>
            <li>
              <a
                href="#tryoutyourself"
                className="block py-2 px-3 text-white rounded"
              >
                Explore Filters
              </a>
            </li>
            <li>
              <a
                href="#contactform"
                className="block py-2 px-3 text-white rounded"
              >
                Contact Us
              </a>
            </li>
            {/* Add https://calendly.com/augmentyogi/consultation button as Book a free AR consultancy */}
            <li>
              <a
                target="_blank"
                href="https://calendly.com/augmentyogi/consultation"
                className="block py-2 px-3 text-white rounded relative transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg animate-breathing"
              >
                <span className="relative text-sm md:text-base items-center px-7 py-4 bg-gradient-to-br rounded text-white from-customColor-brand-blue to-customColor-brand-magenta transition-colors duration-300 ease-in-out">
                  Book A Free AR Consultancy
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
