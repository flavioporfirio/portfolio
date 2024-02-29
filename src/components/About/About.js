import "./about.css";

export default function About({ containerRef }) {
  return (
    <div id="about" className="section" ref={containerRef}>
      <div className="profile-img">
        <img src="./imgs/profile-image.png" alt="imagem de perfil" />
      </div>
      <div className="intro">
        <div className="about--title">
          <span className="text sec-text">Desenvolvedor Front-end</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
          laudantium quia fugiat distinctio, quo id officia accusamus cum
          aperiam non, tempora dolorum libero doloremque. Reprehenderit ad
          inventore temporibus blanditiis placeat.
        </p>
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
