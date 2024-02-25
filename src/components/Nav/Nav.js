import "./nav.css";
import { Moon, Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const prefersColorScheme = window.matchMedia("(prefers-color-scheme: dark)");

export default function Nav() {
  const [theme, setTheme] = useState(() => {
    const option = prefersColorScheme.matches ? "dark" : "light";

    localStorage.setItem("theme", `${option}`);

    return option;
  });
  const bodyEl = useRef(document.body);

  useEffect(() => {
    if (theme === "dark") {
      bodyEl.current.classList.add("dark");
      bodyEl.current.classList.remove("light");
    } else {
      bodyEl.current.classList.remove("dark");
      bodyEl.current.classList.add("light");
    }
  }, [theme]);

  return (
    <nav>
      <SectionList />
      <div className="config">
        {/*<p> EN | PT</p> */}
        <ThemeToggler theme={theme} setTheme={setTheme} />
      </div>
    </nav>
  );
}

function SectionList() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="section-list">
      <button className="btn-menu" onClick={() => setIsOpen(!isOpen)}>
        <Menu />
      </button>
      {isOpen && (
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
      )}
    </div>
  );
}

function ThemeToggler({ theme, setTheme }) {
  return (
    <div className="theme-toggler">
      <button
        className="btn-theme"
        onClick={() => {
          setTheme((theme) => (theme === "dark" ? "light" : "dark"));

          localStorage.setItem(
            "theme",
            `${theme === "dark" ? "light" : "dark"}`
          );
        }}
      >
        <Moon color="#b854e4" />
      </button>
    </div>
  );
}
