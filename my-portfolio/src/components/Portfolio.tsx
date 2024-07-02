import Project from './Project';
import projects from '../constants/projects.json';
import "../styles/Portfolio.css"

const Portfolio = () => {
  return (
      <div className='portfolio-container'>
        <h1 className='portfolio-title'>My Projects</h1>

        <div className="portfolio">
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>

      </div>
  );
};

export default Portfolio;