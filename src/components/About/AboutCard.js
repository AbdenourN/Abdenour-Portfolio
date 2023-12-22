import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour à tous, je suis <span className="purple">NEJJARI Abdenour. </span>
            
            <br />
            Je suis actuellement en <span className="purple"> troisième année </span> de <span className="purple"> BUT Informatique </span> à l'université Sorbonne Paris Nord. 
            <br />
            Je suis à la recherche d'un stage de <span className="purple">4  mois</span> à partir du <span className="purple">11 mars 2024</span>.
            <br />
            <br />
            En dehors du codage, voici d'autres activités que j'apprécie :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jouer à des jeux vidéos
            </li>
            <li className="about-activity">
              <ImPointRight /> Foot & Footing
            </li>
            <li className="about-activity">
              <ImPointRight /> Lire
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "M'efforcer de construire des choses qui font la différence !"{" "}
          </p>
          <footer className="blockquote-footer">Abdenour</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
