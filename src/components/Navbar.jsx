import React, { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <nav
      className={`w-full fixed z-20 transition-all ${
        isScrolled ? "bg-customColor-dark-blue" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="ay_white.svg"
            className="h-14 w-48"
            alt="AY LOGO"
          />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            AUGMENT YOGI
          </span> */}
        </a>
       
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
         
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
                className="block py-2 px-3 text-white"
              >
                Try Out Yourself
              </a>
            </li>

            <li>
              <a
                href="#contactform"
                className="block py-2 px-3 text-white"
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
