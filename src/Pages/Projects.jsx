import React from "react";

import NavigationBar from "../Components/NavigationBar/NavigationBar";
import * as DATA from '../constants/Constants';

const headingStyle = {
    textTransform: 'uppercase',
    color: '#e54',
    letterSpacing: '0.5px',
  }
  
  const linkStyle = {
    color: '#e54',
    textDecoration: 'none',
  }

const Projects = () => {
  return (
    <div>
      <NavigationBar />

      <section className="page-description">
        <h1 className="text-center">Projects</h1>
          <p>I've worked on many types of projects both personal and professional. Here are some projects I've developed/created.</p>

          {DATA.PROJECTS.map((project, index) => (
            <div>
              <a href={project.url} target="_blank" style={linkStyle}>
                <h1 style={headingStyle}>{project.heading}</h1>
              </a>
              <p>{project.description}</p>
              <p>{project.tools}</p>
            </div>
          ))}
          
        {/* <Footer /> */}
      </section>
    </div>
  );
};

export default Projects;
