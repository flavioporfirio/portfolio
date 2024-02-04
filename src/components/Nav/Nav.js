import Logo from "../Logo";
import "../app.css";

export default function Nav() {
  return (
    <nav>
      <a href="#about">
        <Logo />
      </a>

      <SectionList />
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
      <ThemeToggler />
    </div>
  );
}

function ThemeToggler() {
  return (
    <div className="theme-toggler">
      <button className="btn-theme">
        <ion-icon name="moon-outline"></ion-icon>
      </button>
    </div>
  );
}
