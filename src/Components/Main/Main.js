import "./Main.css";

import About from "./About/About";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";
import React from "react";
import Skills from "./Skills/Skills";
import Work from "./Work/Work";

function Main() {
  return (
    <div className='main'>
      <section id='about'>
        <About />
      </section>
      <section id='projects'>
        <Projects />
      </section>
      <section id='skills'>
        <Skills />
      </section>
      <section id='work'>
        <Work />
      </section>
      <section id='contact'>
        <Contact />
      </section>
    </div>
  );
}

export default Main;
