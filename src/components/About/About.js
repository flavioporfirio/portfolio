import "./about.css";

export default function About() {
  return (
    <div id="about" className="section">
      <div className="profile-img">
        <img src="./imgs/profile-img.jpg" alt="imagem de perfil" />
      </div>
      <div className="intro">
        <div className="name">
          <span className="text first-text">Me chamo </span>
          <span className="text sec-text">Flávio Porfírio</span>
        </div>
        <div className="about--title">
          <span className="text first-text">Eu sou um </span>
          <span className="text sec-text">Desenvolvedor Front-end</span>
        </div>
        <p></p>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1quBRFfzRO76EPUNO4wvNh7dCIVsJjl6D/view"
          rel="noreferrer"
        >
          <button className="btn-cv">CV</button>
        </a>
      </div>
    </div>
  );
}