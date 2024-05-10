import React, { useState, useEffect } from "react";

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
        isScrolled ? "bg-customColor-dark-blue" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="ay_white.svg"
            className="h-14 w-48"
            alt="AY LOGO"
          />
        </a>
        
        {/* Hamburger menu button or Close button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <i className={`fa-solid fa-${isMenuOpen ? "times" : "bars"} text-2xl`}></i> {/* Close button or Hamburger button based on isMenuOpen */}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-customColor-dark-blue ${isMenuOpen ? "block" : "hidden"}`} id="mobile-menu">
          <ul className="font-medium flex flex-col items-center justify-center h-full">
            <li>
              <a
                href="#oursolutions"
                className="block py-2 px-3 text-white rounded"
                aria-current="page"
                onClick={closeMenu}
              >
                Store
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
                Store
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
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
