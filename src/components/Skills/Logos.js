import cssImg from "../../assets/skills/css.svg";
import htmlImg from "../../assets/skills/html.svg";
import jsImg from "../../assets/skills/js.svg";
import reactImg from "../../assets/skills/react.svg";
import tsImg from "../../assets/skills/ts.svg";

export default function LogoSlide({
  html = true,
  css = true,
  js = true,
  react = true,
  ts = false,
  className = "",
}) {
  return (
    <div className={`logos--slide ${className}`}>
      {html && (
        <div className="item">
          <img src={htmlImg} alt="html logo" />
          <p>HTML</p>
        </div>
      )}
      {js && (
        <div className="item">
          <img src={jsImg} alt="javascript logo" />
          <p>JavaScript</p>
        </div>
      )}
      {css && (
        <div className="item">
          <img src={cssImg} alt="css logo" />
          <p>CSS</p>
        </div>
      )}
      {ts && (
        <div className="item">
          <img src={tsImg} alt="typescript logo" />
          <p>Typescript</p>
        </div>
      )}
      {react && (
        <div className="item">
          <img src={reactImg} alt="react logo" />
          <p>React</p>
        </div>
      )}
    </div>
  );
}
