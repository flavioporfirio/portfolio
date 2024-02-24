import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const createFormSchema = z.object({
  name: z.string().min(1, "Insira seu nome"),
  email: z.string().email("Insira um email válido"),
  phone: z.string().min(11, "Insira seu telefone"),
  message: z.string().min(1, "Insira sua mensagem"),
});

export default function ContactForms() {
  const { register, handleSubmit, watch, formState } = useForm({
    resolver: zodResolver(createFormSchema),
  });

  const name = watch("name");
  const email = watch("email");
  const phone = watch("phone");
  const message = watch("message");

  function SendWhatsAppMessage() {
    if (formState.errors) return;

    const url = `https://api.whatsapp.com/send?phone=5511961619771&text=`;

    const messageInfo = `*MENSAGEM ENVIADA PELO SITE*%0A%0A
    *Nome:* ${name}%0A
    *Email:* ${email}%0A
    *Telefone:* ${phone}%0A
    *Mensagem:*%0A%0A
    ${message}`;

    window.open(`${url}${messageInfo}`, "_blank");
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
        <input {...register("name")} id="name" type="text" name="name" />
        <label htmlFor="name">Nome</label>
        {formState.errors?.name && (
          <p className="">{formState.errors?.name.message}</p>
        )}
      </div>

      <div className="input-group">
        <input {...register("email")} id="email" type="text" />
        <label htmlFor="email">E-mail</label>
        {formState.errors?.email && (
          <p className="">{formState.errors?.email.message}</p>
        )}
      </div>

      <div className="input-group">
        <input {...register("phone")} id="tel" type="text" />
        <label htmlFor="phone">Telefone</label>
        {formState.errors?.phone && (
          <p className="">{formState.errors?.phone.message}</p>
        )}
      </div>

      <div className="input-group">
        <textarea {...register("message")} id="message" type="text" />
        <label htmlFor="message">Mensagem</label>
        {formState.errors?.message && (
          <p className="">{formState.errors?.message.message}</p>
        )}
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
          }}
        >
          <ion-icon name="logo-whatsapp"></ion-icon>
          Enviar
        </button>
      </div>
    </form>
  );
}
