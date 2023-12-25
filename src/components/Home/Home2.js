import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillPhone,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            PERMETTEZ-MOI DE ME <span className="purple">PRÉSENTER</span> 
            </h1>
            <p className="home-about-body">
            Je suis tombé amoureux de la programmation et j'ai au moins appris quelque chose, je pense… 🤷‍♂️
              <br />
              <br />Je suis à l'aise avec des langages classiques tels que
              <i>
                <b className="purple"> Javascript, Python, SQL, PHP, Java. </b>
              </i>
              <br />
              <br />
              Mes domaines d'intérêt incluent &nbsp;
              <i>
                <b className="purple">la création de nouveaux sites internet, de scripts automatisés </b>  
                ainsi que des domaines liés à {" "}
                <b className="purple">
                l'intelligence artificielle.
                </b>
              </i>
              <br />
              <br />
              Chaque fois que possible, j'applique également ma passion pour développer des produits avec 
               <b className="purple"> Python,</b>
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, Java et SQL, 
                </b>
              </i>
              &nbsp;  mettant ainsi en avant ma passion pour ces 
              <i>
                <b className="purple"> langages </b> et  <b className="purple"> technologies.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
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
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
