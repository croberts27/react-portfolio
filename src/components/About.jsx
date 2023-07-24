import React from "react";
function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center bg-blue-800">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            I'm Calvin!
            <br className="hidden lg:inline-block" /> Welcome to my portfolio
            created with React!
          </h1>
          <p className="mb-8 leading-relaxed text-white">
            Hello! My name is Calvin Roberts and I am starting my coding journey
            with the Columbia University Boot Camp. I intend to begin my career
            as a full-stack web developer once I graduate from the program. I
            live in Salt Lake City, Utah with my fiancee and two cats. I enjoy
            being outside in nature, playing music, video games, Magic: The
            Gathering, Dungeons & Dragons, and plenty other nerdy things!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-center text-lg"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white text-center bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full"
            alt="profile picture"
            src="./prof.jpg"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
