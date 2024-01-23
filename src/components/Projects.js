import "./App.css";

export default function Projects() {
  return (
    <div id="projects" className="section">
      <h1>Projetos</h1>
      <div className="projects--list">
        <Project />
      </div>
    </div>
  );
}

function Project() {
  return (
    <div className="project">
      <div className="project--info">
        <h2>Example</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
          possimus numquam odio assumenda neque, animi sequi nulla mollitia,
          facere soluta magnam quisquam nobis veniam blanditiis quo eveniet
          asperiores quos esse.
        </p>
        <div></div>
      </div>
      <div className="project--image">
        <img src="./imgs/main-img.jpg" alt="" />
      </div>
    </div>
  );
}
