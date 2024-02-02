import { useState } from "react";
import "./App.css";

export default function Formations() {
  return (
    <div id="formations" className="section">
      <div className="formation-container">
        <Formation />

        <Formation />
      </div>
    </div>
  );
}

function Formation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="formation" style={{}}>
      <div className="header" onClick={() => setIsOpen(!isOpen)}>
        <p>2022</p>
        <p>The Ultimate React course</p>
        <p>67 horas</p>
      </div>
      {isOpen ? (
        <div className="-formation-body">
          <header>
            <div className="course-logo">
              <img src="" alt="" />
            </div>
            <div className="course-title">
              <h3>Ignite - ReactJS</h3>
              <div className="company-info">
                <p>Rocketseat</p>
                <p>67 horas</p>
              </div>
            </div>
          </header>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ex
            eum! Aliquid consequuntur, natus nesciunt eos, eum ratione assumenda
            aperiam molestias facilis cumque earum quia? Tenetur consequatur
            libero numquam dolore?
          </p>
          <hr />
          <div className="teacher-info">
            <div>
              <img src="" alt="" />
              <h2>Diego Fernandes</h2>
            </div>
            <div className="teacher-contact">
              <img src="./imgs/skills/react.svg" alt="" />
              <img src="./imgs/skills/react.svg" alt="" />
              <img src="./imgs/skills/react.svg" alt="" />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
