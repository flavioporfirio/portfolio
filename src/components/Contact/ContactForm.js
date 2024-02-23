import { useState } from "react";
import { toast } from "sonner";

export default function ContactForms() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function SendWhatsAppMessage() {
    if (!name || !email || !phone || !message) {
      return;
    }

    const url = `https://api.whatsapp.com/send?phone=5511961619771&text=`;

    const messageInfo = `*MENSAGEM ENVIADA PELO SITE*%0A%0A
    *Nome:* ${name}%0A
    *Email:* ${email}%0A
    *Telefone:* ${phone}%0A
    *Mensagem:*%0A%0A
    ${message}`;

    window.open(`${url}${messageInfo}`, "_blank");
  }

  function validateEmail() {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log(regex.test(email));
    return regex.test(email);
  }

  function notify() {
    if (name && email && phone && message) {
      toast.success("Mensagem enviada com sucesso!", {
        style: {
          backgroundColor: "#22c55e",
          border: "1px solid white",
        },
      });
      return;
    }
    toast.error("Preencha os campos obrigatórios!", {
      style: {
        backgroundColor: "#CC0002",
        border: "1px solid white",
      },
    });
  }

  return (
    <form
      target="_blank"
      className="contact-forms"
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
        <button
          className="btn-email"
          onClick={() => {
            notify();
          }}
        >
          <ion-icon name="mail-outline"></ion-icon>
          Enviar
          <input type="hidden" name="_subject" value="Novo Contato!" />
          <input type="text" name="_honey" style={{ display: "none" }} />
          <input type="hidden" name="_captcha" value={false} />
        </button>
        <input type="hidden" name="_subject" value="Novo Contato!" />
        <button
          className="btn-whatsapp"
          onClick={() => {
            SendWhatsAppMessage();
            notify();
          }}
        >
          <ion-icon name="logo-whatsapp"></ion-icon>
          Enviar
        </button>
      </div>
    </form>
  );
}
