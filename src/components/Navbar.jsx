import { Link } from "react-router-dom"; // Import Link from React Router
import React from "react";

function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="title-font font-medium text-white mb-4 md:mb-0">
          Home
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-yellow	flex flex-wrap items-center text-lg justify-center">
          <Link
            to="/about"
            className="mr-5 text-white rounded-md  hover:text-yellow"
          >
            About Me
          </Link>
          <Link
            to="/projects"
            className="mr-5 text-white rounded-md  hover:text-yellow"
          >
            Portfolio
          </Link>
          <Link
            to="/blogs"
            className="mr-5 text-white rounded-md  hover:text-yellow"
          >
            Blog Posts
          </Link>
          <Link
            to="/skills"
            className="mr-5 text-white rounded-md  hover:text-yellow"
          >
            Skills
          </Link>
        </nav>
        {/* ... */}
      </div>
    </header>
  );
}

export default Navbar;
