import "../styles/Project.css"

type ProjectData = {
    name: string,
    description: string, 
    tech_stack: Array<string>,
    link: string, 
    image: string
}

const Project = ({ project }: {project: ProjectData}) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.name} className="project-image" />
      <div className="project-details">
        <h3 className="project-name">{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default Project;