import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Blogs from "./components/Blog";

function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Blogs />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
