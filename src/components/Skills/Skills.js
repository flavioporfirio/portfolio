import Logos from "./Logos";
import "./skill.css";

export default function Skills() {
  return (
    <div id="skills" className="section">
      <h1>Habilidades</h1>
      <div className="logos--list">
        <Logos />
        <Logos />
      </div>
    </div>
  );
}
