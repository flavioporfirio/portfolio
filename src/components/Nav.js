import "./App.css";

export default function Nav() {
  return (
    <nav>
      <SetLanguage />
      <SectionList />
      {/* <ThemeToggler /> */}
    </nav>
  );
}

function SetLanguage() {
  return (
    <div>
      <p>English | Português</p>
    </div>
  );
}

function SectionList() {
  return (
    <div className="section-list">
      <ul>
        <li>
          <a href="#">Sobre</a>
        </li>
        <li>
          <a href="#">Habilidades</a>
        </li>
        <li>
          <a href="#">Projetos</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </ul>
      <ThemeToggler />
    </div>
  );
}

function ThemeToggler() {
  return (
    <div>
      <ion-icon name="moon-outline"></ion-icon>
    </div>
  );
}
