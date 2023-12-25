import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import {
  AiFillGithub,
  AiFillPhone,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./t.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('sendEmail.php', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(data => {
      console.log(data); // Afficher la réponse du serveur
      // Réinitialiser le formulaire après l'envoi
      setFormData({ name: "", email: "", message: "" });
    })
    .catch(error => {
      console.error('Erreur :', error);
    });
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Particle />
      <Container>
        <Row>
          <Col md={12} className="home-about-social" id="contactSection">
            <h1>RETROUVEZ-MOI SUR</h1>
            <p>
              N'hésitez pas à me <span className="purple">contacter </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AbdenourN/Projets"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:ab.nejjari@hotmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abdenour-nejjari-57a4ba254/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="tel:"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillPhone />
                </a>
              </li>
            </ul>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Nom"
                name="name"
                value={name}
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="E-mail"
                name="email"
                value={email}
                onChange={handleChange}
              />
              <textarea
                placeholder="Votre message"
                name="message"
                value={message}
                onChange={handleChange}
              ></textarea>
              <button type="submit">Envoyer</button>
            </form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ContactForm;
