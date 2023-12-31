import React from 'react';
import { SocialMedia, Intro, About, Experience, FeaturedProjects, Projects, Contact } from "../components";

const Home = () => {
  return (
    <div>
      <SocialMedia />
      <Intro />
      <About />
      <Experience />
      <FeaturedProjects />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;