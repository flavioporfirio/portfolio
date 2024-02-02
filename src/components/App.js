import About from "./About";
import Contact from "./Contact";
import Formations from "./Formations";
import Nav from "./Nav";
import Projects from "./Projects";
import Skills from "./Skills";

function App() {
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

export default App;
