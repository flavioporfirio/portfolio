import { useState } from "react";
import "./formation.css";
import { formationList } from "./formationList";
import * as Accordion from "@radix-ui/react-accordion";

export default function Formations() {
  const [selectedFormation, setSelectedFormation] = useState(
    formationList[0].id
  );

  function handleSelectedFormation(id) {
    setSelectedFormation(selectedFormation !== id ? id : null);
  }

  // return (
  //   <div id="formations" className="section">
  //     <h1>Educação</h1>
  //     <div className="formation-container">
  //       {formationList.map((formation) => (
  //         <Formation
  //           formation={formation}
  //           onHandleSelectedFormation={handleSelectedFormation}
  //           selectedFormation={selectedFormation}
  //         />
  //       ))}
  //     </div>
  //   </div>
  // );

  return (
    <div id="formations" className="section">
      <h1>Educação</h1>
      <div className="formation-container">
        <Accordion.Root
          className="formations"
          orientation="horizontal"
          collapsible
        >
          {formationList.map((formation, index) => (
            <Formation
              key={index}
              formation={formation}
              index={index}
              onHandleSelectedFormation={handleSelectedFormation}
              selectedFormation={selectedFormation}
            />
          ))}
        </Accordion.Root>
      </div>
    </div>
  );
}

function Formation({
  formation,
  index,
  selectedFormation,
  onHandleSelectedFormation,
}) {
  return (
    <Accordion.Item
      className={`project--item ${
        selectedFormation === formation.id ? "active" : ""
      }`}
      value={`item-${index}`}
    >
      <Accordion.Trigger
        className="header"
        onClick={() => onHandleSelectedFormation(formation.id)}
      >
        <p>{formation.year}</p>
        <p>{formation.courseName}</p>
        <p>{formation.duration} horas</p>
      </Accordion.Trigger>
      <Accordion.Content className="accordion-content">
        <div className="formation-body">
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
          <div className="separator" />
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
      </Accordion.Content>
    </Accordion.Item>
  );
}
