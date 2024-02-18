import { useState } from "react";

export default function ContactForms() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function SendWhatsAppMessage() {
    const url = `https://api.whatsapp.com/send?phone=5511961619771&text=`;

    const messageInfo = `*MENSAGEM ENVIADA PELO SITE*%0A%0A
    *Nome:* ${name}%0A
    *Email:* ${email}%0A
    *Telefone:* ${phone}%0A
    *Mensagem:*%0A%0A
    ${message}`;

    window.open(`${url}${messageInfo}`, "_blank");
  }

  return (
    <form
      className="contact-forms"
      target="_blank"
      action="https://formsubmit.co/flavioporfirio86@gmail.com"
      method="POST"
    >
      <div className="input-group">
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label value={name}>Nome</label>
      </div>

      <div className="input-group">
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label value={email}>E-mail</label>
      </div>

      <div className="input-group">
        <input
          type="tel"
          name="tel"
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <label value={phone}>Telefone</label>
      </div>

      <div className="input-group">
        <textarea
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <label value={message}>Mensagem</label>
      </div>

      <div className="send-container">
        <button className="btn-email">
          <ion-icon name="mail-outline"></ion-icon>
          Enviar
          <input type="hidden" name="_subject" value="Novo Contato!" />
          <input type="text" name="_honey" style={{ display: "none" }} />
          <input type="hidden" name="_captcha" value={false} />
        </button>
        <input type="hidden" name="_subject" value="Novo Contato!" />
        <button className="btn-whatsapp" onClick={() => SendWhatsAppMessage()}>
          <ion-icon name="logo-whatsapp"></ion-icon>
          Enviar
        </button>
      </div>
    </form>
  );
}
