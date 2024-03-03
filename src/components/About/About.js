import "./about.css";

export default function About({ containerRef }) {
  return (
    <div id="about" className="section" ref={containerRef}>
      <div className="profile-img">
        <img src="./imgs/profile-image.jpeg" alt="imagem de perfil" />
      </div>
      <div className="intro">
        <div className="about--title">
          <span className="text sec-text">Desenvolvedor Front-end</span>
        </div>
        <p>
          Olá! Me chamo Flávio Porfírio, tenho 24 anos e venho me dedicando
          diariamente a programação. Desde o início não há um dia que eu não
          aprendi algo novo.Sou um cara bem curioso quando se trata de
          desenvolvimento de software, sempre com uma mente lógica e aberta pra
          aprender mais. Estou sempre em busca de desafios e disposto a explorar
          novas tecnologias.
        </p>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1P3l32WOxmE6iZ-Y7YL19GVNlDNVeBB7o/view?usp=sharing"
          rel="noreferrer"
        >
          <button className="btn-cv">CV</button>
        </a>
      </div>
    </div>
  );
}
