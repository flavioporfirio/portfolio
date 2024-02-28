import { Toaster } from "sonner";
import About from "./components/About/About.js";
import Contact from "./components/Contact/Contact.js";
import Formations from "./components/Formation/Formations.js";
import Nav from "./components/Nav/Nav.js";
import Projects from "./components/Project/Projects.js";
import Skills from "./components/Skills/Skills.js";
import useIntersectionOberserver from "./hooks/useIntersectionOberserver.js";

export default function App() {
  const { isVisible, containerRef } = useIntersectionOberserver();

  return (
    <div className="app">
      <Nav isVisible={isVisible} />
      <About />
      <Skills containerRef={containerRef} />
      <Projects />
      <Formations />
      <Contact />
      <Toaster richColors visibleToasts={2} />
    </div>
  );
}
