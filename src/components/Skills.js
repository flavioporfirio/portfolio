import "./App.css";

export default function Skills() {
  return (
    <div id="skills" className="section">
      <h1>Habilidades</h1>
      <div className="logos--list">
        <LogoSlide />
        <LogoSlide />
      </div>
    </div>
  );
}

function LogoSlide() {
  return (
    <div className="logos--slide">
      <div>
        <img src="./imgs/skills/html.svg" alt="" />
        <p>HTML</p>
      </div>
      <div>
        <img src="./imgs/skills/js.svg" alt="" />
        <p>JavaScript</p>
      </div>
      <div>
        <img src="./imgs/skills/css.svg" alt="" />
        <p>CSS</p>
      </div>
      <div>
        <img src="./imgs/skills/react.svg" alt="" />
        <p>React</p>
      </div>
    </div>
  );
}
