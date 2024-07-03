import Project from "./Project";
import projects from "../constants/projects.json";
import "../styles/Portfolio.css";

import styled, { keyframes } from "styled-components";
import fadeInUp from "react-animations/lib/fadeInUp";

const Portfolio = () => {
  const FadeInUp = styled.div`
    animation: 1s ${keyframes`${fadeInUp}`};
  `;

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">My Projects</h1>
        <FadeInUp>
      <div className="portfolio">
        
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}

      </div>
        </FadeInUp >
    </div>
  );
};

export default Portfolio;
