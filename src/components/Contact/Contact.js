import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

import "./contact.css";

export default function Contact() {
  return (
    <div id="contact" className="section">
      <h1>Contato</h1>
      <div className="contact-container">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}
