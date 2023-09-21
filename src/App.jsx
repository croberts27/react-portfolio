import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Blogs from "./components/Blog";

function App() {
  return (
    <Router>
      {" "}
      {/* Wrap entire app with BrowserRouter */}
      <div>
        <Navbar />
        <Switch>
          {" "}
          {/* Use Switch to render only the first matching route */}
          <Route path="/about" component={About} />{" "}
          {/* Define a route for the About page */}
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/" component={About} /> {/* Default homepage */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
