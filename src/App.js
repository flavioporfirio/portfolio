import About from "./components/About/About.js";
import Contact from "./components/Contact/Contact.js";
import Formations from "./components/Formation/Formations.js";
import Nav from "./components/Nav/Nav.js";
import Projects from "./components/ProjectList/Projects.js";
import Skills from "./components/Skills/Skills.js";

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
