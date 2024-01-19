import "./App.css";

export default function About() {
  return (
    <div>
      <div className="intro">
        <div className="about">
          <span className="text first-text">Eu sou um </span>
          <span className="text sec-text">Desenvolvedor Front-end</span>
        </div>
        <p></p>
        <a href="https://drive.google.com/file/d/1quBRFfzRO76EPUNO4wvNh7dCIVsJjl6D/view">
          <button className="btn-cv">CV</button>
        </a>
      </div>

      <div className="profile-img"></div>
    </div>
  );
}
