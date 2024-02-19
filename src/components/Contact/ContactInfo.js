import {
  UserRoundPlus,
  Linkedin,
  Instagram,
  Github,
  Twitter,
  AtSign,
} from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="social-info">
        <h2>Redes Sociais</h2>
        <div className="icons-container">
          <span>
            <UserRoundPlus size={25} />
          </span>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/flavio-porfirio/"
                rel="noreferrer"
              >
                <Linkedin />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/flavioporfirio86/"
                rel="noreferrer"
              >
                <Instagram />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/flavioporfirio"
                rel="noreferrer"
              >
                <Github />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://twitter.com/flavioporfirio8"
                rel="noreferrer"
              >
                <Twitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="email-info">
        <h2>E-mail</h2>
        <div className="icons-container">
          <span>
            <AtSign size={25} />
          </span>
          <p>flavioporfirio86@gmail.com</p>
        </div>
      </div>
      <div className="phone-info">
        <h2>Telefone</h2>
        <div className="icons-container">
          <span>
            <ion-icon name="logo-whatsapp"></ion-icon>
          </span>
          <p>+55 (11) 96161-9771</p>
        </div>
      </div>
    </div>
  );
}
