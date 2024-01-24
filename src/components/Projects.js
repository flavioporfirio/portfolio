import "./App.css";
import { projectList } from "./Project/ProjectList";
import { LogoSlide } from "./Skills";

export default function Projects() {
  return (
    <div id="projects" className="section">
      <h1>Projetos</h1>
      <div className="projects--list">
        {projectList.map((project) => (
          <Project
            title={project.title}
            projectInfo={project.projectInfo}
            tech={project.tech}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

function Project({ title, projectInfo, tech, image, link }) {
  return (
    <div className="project">
      <div className="project--info">
        <h2>{title}</h2>
        <p>{projectInfo}</p>
        <div className="project-techs">
          <LogoSlide react={false} className="project--style" />
        </div>
      </div>
      <div className="project--image">
        <a target="_blank" href={link} rel="noreferrer">
          <img src={image} alt="" />
        </a>
      </div>
    </div>
  );
}
