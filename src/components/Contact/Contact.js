import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

import "./contact.css";
import "../app.css";

export default function Contact() {
  return (
    <div id="contact" className="section">
      <h1>Contact</h1>
      <div className="contact-container">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}
