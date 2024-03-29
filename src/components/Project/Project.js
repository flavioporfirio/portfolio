import Logos from "../Skills/Logos";

export default function Project({
  project,
  onHandleSelected,
  selectedProject,
}) {
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
            <Logos
              react={project.react}
              js={project.js}
              html={project.html}
              css={project.css}
              ts={project.ts}
              className="project--style"
            />
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
      {youtubeLink && (
        <a target="_blank" href={youtubeLink} rel="noreferrer">
          <button>
            <ion-icon name="logo-youtube"></ion-icon> Video
          </button>
        </a>
      )}
      {siteLink && (
        <a target="_blank" href={siteLink} rel="noreferrer">
          <button>
            <ion-icon name="globe-outline"></ion-icon>
            Acessar
          </button>
        </a>
      )}

      {repository && (
        <a target="_blank" href={repository} rel="noreferrer">
          <button>
            <ion-icon name="logo-github"></ion-icon>
            Repositório
          </button>
        </a>
      )}
    </div>
  );
}
