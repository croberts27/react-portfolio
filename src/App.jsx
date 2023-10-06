import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Blogs from "./components/Blog";

function App() {
  return (
    <Router>
      {/* Wrap entire app with BrowserRouter */}
      <div>
        <Navbar />
        <Routes>
          {/* Use Switch to render only the first matching route */}
          <Route
            target="_blank"
            rel="noopener noreferrer"
            path="/about"
            element={About}
          />
          {/* Define a route for the About page */}
          <Route
            target="_blank"
            rel="noopener noreferrer"
            path="/projects"
            element={Projects}
          />
          <Route
            target="_blank"
            rel="noopener noreferrer"
            path="/skills"
            element={Skills}
          />
          <Route
            target="_blank"
            rel="noopener noreferrer"
            path="/blogs"
            element={Blogs}
          />
          <Route
            target="_blank"
            rel="noopener noreferrer"
            path="/"
            element={About}
          />{" "}
          {/* Default homepage */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
