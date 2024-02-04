import About from "./About/About";
import Contact from "./Contact/Contact.js";
import Formations from "./Formation/Formations";
import Nav from "./Nav/Nav.js";
import Projects from "./ProjectList/Projects";
import Skills from "./Skills/Skills";
import "./app.css";

export default function App() {
  return (
    <div className="app">
      <Nav />
      <About />
      <Skills />
      <Projects />
      <Formations />
      <Contact />
    </div>
  );
}
