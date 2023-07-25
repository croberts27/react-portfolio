import React from "react";

function Footer() {
  return (
    <footer className="w-100 mt-auto bg-secondary p-4 bg-gray-900">
      <div className="container px-5 py-5 mx-auto text-center">
        <h4 className="pb-2"></h4>
        <ul className="mt-3 text-lg font-medium text-white-900 dark:text-gray-900 sm:mt-0">
          <li>
            <a
              href="https://github.com/croberts27/"
              target="_blank"
              className="mr-4 hover:underline text-white md:mr-6 "
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="www.linkedin.com/in/calvin-mroberts"
              className="mr-4 hover:underline md:mr-6 text-white"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/caaalvino"
              target="_blank"
              className="mr-4 hover:underline text-white md:mr-6 "
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
