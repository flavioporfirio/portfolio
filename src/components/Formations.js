import { useState } from "react";
import "./App.css";
import { formationList } from "./Formation/formationList";

export default function Formations() {
  const [selectedFormation, setSelectedFormation] = useState(
    formationList[0].id
  );

  function handleSelectedFormation(id) {
    setSelectedFormation(selectedFormation !== id ? id : null);
  }

  return (
    <div id="formations" className="section">
      <h1>Educação</h1>
      <div className="formation-container">
        {formationList.map((formation) => (
          <Formation
            formation={formation}
            onHandleSelectedFormation={handleSelectedFormation}
            selectedFormation={selectedFormation}
          />
        ))}
      </div>
    </div>
  );
}

function Formation({
  formation,
  onHandleSelectedFormation,
  selectedFormation,
}) {
  return (
    <div
      className={`formation ${
        selectedFormation === formation.id ? "active" : ""
      }`}
    >
      <div
        className="header"
        onClick={() => onHandleSelectedFormation(formation.id)}
      >
        <p>{formation.year}</p>
        <p>{formation.courseName}</p>
        <p>{formation.duration} horas</p>
      </div>
      {selectedFormation === formation.id ? (
        <div className={"formation-body"}>
          <header>
            <div className="course-logo">
              <img
                src={formation.courseTech}
                alt={`${formation.courseName} learned tech`}
              />
            </div>
            <div className="course-title">
              <h3>{formation.courseName}</h3>
              <div className="company-info">
                <p>{formation.companyName}</p>
                <p>{formation.duration} horas</p>
              </div>
            </div>
          </header>
          <p className="description">{formation.description}</p>
          <hr />
          <div className="teacher-container">
            <div className="teacher-info">
              <img
                src={formation?.teacherProfileImg}
                alt={`${formation.teacher} profile pic`}
              />
              <h2>Diego Fernandes</h2>
            </div>
            <div className="teacher-contact">
              <a target="_blank" href={formation.github} rel="noreferrer">
                <ion-icon name="logo-github"></ion-icon>
              </a>
              <a target="_blank" href={formation.linkedIn} rel="noreferrer">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
              <a target="_blank" href={formation.github} rel="noreferrer">
                <ion-icon name="globe-outline"></ion-icon>
              </a>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
