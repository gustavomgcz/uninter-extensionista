import PageTitle from "components/PageTitle";
import "./Contact.css";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import FormField from "components/FormField";
import { useEffect, useState } from "react";
import Button from "components/Button";
import MessageAlert from "components/MessageAlert";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [hideMessage, setHideMessage] = useState(true);
  const [message, setMessage] = useState("");
  const [statusClass, setStatusClass] = useState("");

  function submitForm(e) {
    e.preventDefault();
    fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        content: content,
      }),
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Network response was not ok");
        }
        return resp.json();
      })
      .then(() => {
        setMessage("E-mail enviado com sucesso!");
        setStatusClass("sucess");
        setHideMessage(false);

        setName("");
        setEmail("");
        setContent("");
      })
      .catch((err) => {
        console.error("Erro ao enviar o e-mail", err);
        setMessage("Erro ao enviar o e-mail.");
        setStatusClass("error");
        setHideMessage(false);
      });
  }

  useEffect(() => {
    if (!hideMessage) {
      const timer = setTimeout(() => {
        setHideMessage(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [hideMessage]);

  return (
    <>
      <PageTitle title="Contato" />
      {!hideMessage && <MessageAlert message={message} status={statusClass} />}
      <main className="container contact">
        <div className="contact-text-area">
          <p className="contact-text">
            Gostaria de saber mais informações sobre nós?
          </p>
          <p className="contact-text">
            Entre em contato conosco através do telefone abaixo, redes sociais,
            e-mail ou preencha o formulário ao lado e entraremos em contato:
          </p>
          <p className="contact-text">
            Tel: <a href="+551933270797">+55 19 3327-0797</a>
          </p>
          <p className="contact-text">
            E-mail:{" "}
            <a href="mailto:email@email.com">
              email@email.com
            </a>
          </p>
          <div className="contact-icons">
            <Link to="https://www.instagram.com/ipvilaformosa/" target="_blank">
              <FaInstagram />
            </Link>
            <Link to="https://www.facebook.com/ipvilaformosa/" target="_blank">
              <FaFacebook />
            </Link>
            <Link
              to="https://api.whatsapp.com/send?phone=5521981009865"
              target="_blank"
            >
              <FaWhatsapp />
            </Link>
          </div>
        </div>
        <form onSubmit={submitForm}>
          <FormField
            label="Nome"
            placeholder="Digite seu Nome..."
            value={name}
            changed={(typed) => setName(typed)}
          />
          <FormField
            label="E-mail"
            placeholder="Digite seu E-mail..."
            value={email}
            type="email"
            changed={(typed) => setEmail(typed)}
          />
          <FormField
            label="Mensagem"
            placeholder="Digite sua Mensagem..."
            value={content}
            type="textarea"
            changed={(typed) => setContent(typed)}
          />
          <div className="btn-form">
            <Button>Enviar</Button>
          </div>
        </form>
      </main>
    </>
  );
}

export default Contact;
