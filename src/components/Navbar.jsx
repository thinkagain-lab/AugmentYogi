import React, { useState, useEffect } from "react";


const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;
      const scrollPosition = window.scrollY;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);

      if (scrollPosition > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const navbarClass = visible ? "navbar fixed top-0 w-full z-20 slide-down" : "navbar fixed -top-16 w-full z-20 hidden slide-up"; // Adjust the top value to hide the navbar completely
  const navbarColor = isScrolled ? "bg-gray-900" : "bg-transparent"; // Change navbar color based on whether scrolled or not

  return (
    <nav className={`${navbarClass} ${navbarColor} transition-all`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="ay_white.svg" className="h-14 w-48" alt="AY LOGO" />
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
              <a href="#tryoutyourself" className="block py-2 px-3 text-white">
                Explore Filters
              </a>
            </li>

            <li>
              <a href="#contactform" className="block py-2 px-3 text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
