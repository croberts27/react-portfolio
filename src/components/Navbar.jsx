import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 hover:text-yellow text-xl">
            {/* <img className="h-20 w-22 pb-3 mb-2 rounded-sm" src="favicon.ico" /> */}
            Home
          </a>
        </a>

        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-yellow	flex flex-wrap items-center text-lg justify-center">
          <a
            href="#about"
            className="mr-5 text-white rounded-md  hover:text-yellow"
          >
            About Me
          </a>
          <a
            href="#projects"
            className="mr-5 text-white rounded-md  hover:text-yellow"
          >
            Portfolio
          </a>
          <a
            href="#blogs"
            className="mr-5 text-white rounded-md  hover:text-yellow"
          >
            Blog Posts
          </a>
          <a
            href="#skills"
            className="mr-5 text-white rounded-md  hover:text-yellow"
          >
            Skills
          </a>
          <a
            href="#footer"
            className="mr-5 text-white rounded-md  hover:text-yellow"
          >
            Contact Me
          </a>
        </nav>
        {/* <a
          href="#contact"
          className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a> */}
      </div>
    </header>
  );
}

export default Navbar;
