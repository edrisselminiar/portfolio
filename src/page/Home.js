import React from "react";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
// import Blog from "../components/Blog";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <About />
      <Skills />
      <Projects />
      {/* <Blog /> */}
      <Contact />
    </>
  );
};

export default Home;
