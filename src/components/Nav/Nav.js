import "./nav.css";
import { Moon } from "lucide-react";

export default function Nav() {
  return (
    <nav>
      <SectionList />
      <div className="config">
        <p> EN | PT</p>
        <ThemeToggler />
      </div>
    </nav>
  );
}

function SectionList() {
  return (
    <div className="section-list">
      <ul>
        <li>
          <a href="#about">Sobre</a>
        </li>
        <li>
          <a href="#skills">Habilidades</a>
        </li>
        <li>
          <a href="#projects">Projetos</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
    </div>
  );
}

function ThemeToggler() {
  return (
    <div className="theme-toggler">
      <button className="btn-theme">
        <Moon color="#b854e4" />
      </button>
    </div>
  );
}
