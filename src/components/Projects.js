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
        </div>
      ) : (
        <div className="project--image">
          <img src={project.image} alt="" />
        </div>
      )}
    </div>
  );
}
