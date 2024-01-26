import { useState } from "react";
import "./App.css";
import { projectList } from "./Project/ProjectList";
import { LogoSlide } from "./Skills";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  function handleSelected(id) {
    setSelectedProject(id !== selectedProject ? id : null);
  }

  return (
    <div id="projects" className="section">
      <h1>Projetos</h1>
      <div className="projects--list">
        {projectList.map((project) => (
          <Project
            project={project}
            key={project.id}
            onHandleSelected={handleSelected}
            selectedProject={selectedProject}
          />
        ))}
      </div>
    </div>
  );
}

function Project({ project, onHandleSelected, selectedProject }) {
  return (
    <div
      className="project"
      onClick={() => {
        onHandleSelected(project.id);
      }}
    >
      {selectedProject === project.id ? (
        <div className="project--info">
          <h2>{project.title}</h2>
          <p>{project.projectInfo}</p>
          <div className="project-techs">
            <LogoSlide react={false} className="project--style" />
          </div>
          <ProjectAccess
            repository={project.repositoryLink}
            youtubeLink={project.youtubeLink}
            siteLink={project.siteLink}
          />
        </div>
      ) : (
        <div className="project--image">
          <img src={project.image} alt="" />
        </div>
      )}
    </div>
  );
}

function ProjectAccess({ youtubeLink, siteLink, repository }) {
  return (
    <div className="project--access">
      <a target="_blank" href={youtubeLink} rel="noreferrer">
        <button>
          <ion-icon name="logo-youtube"></ion-icon> Video
        </button>
      </a>
      <a target="_blank" href={siteLink} rel="noreferrer">
        <button>
          <ion-icon name="globe-outline"></ion-icon>
          Acessar
        </button>
      </a>
      <a target="_blank" href={repository} rel="noreferrer">
        <button>
          <ion-icon name="logo-github"></ion-icon>
          Repositório
        </button>
      </a>
    </div>
  );
}
