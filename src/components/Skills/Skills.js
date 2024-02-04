import "./skill.css";

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

export function LogoSlide({
  html = true,
  css = true,
  js = true,
  react = true,
  className = "",
}) {
  return (
    <div className={`logos--slide ${className}`}>
      {html && (
        <div className="item">
          <img src="./imgs/skills/html.svg" alt="html logo" />
          <p>HTML</p>
        </div>
      )}
      {js && (
        <div className="item">
          <img src="./imgs/skills/js.svg" alt="javascript logo" />
          <p>JavaScript</p>
        </div>
      )}
      {css && (
        <div className="item">
          <img src="./imgs/skills/css.svg" alt="css logo" />
          <p>CSS</p>
        </div>
      )}
      {react && (
        <div className="item">
          <img src="./imgs/skills/react.svg" alt="react logo" />
          <p>React</p>
        </div>
      )}
    </div>
  );
}
