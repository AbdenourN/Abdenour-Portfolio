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

            
            <br />
            Je suis actuellement en <span className="purple"> troisième année </span> de <span className="purple"> BUT Informatique </span> à l'université Sorbonne Paris Nord. 
            <br />
            Je suis à la recherche d'une alternance pour la <span className="purple">rentrée Septembre 2024/2025</span> dans le domaine du <span className="purple">développement web</span> & <span className="purple">logicielle, cybersécurité, réseau..</span>.
            <br />
            <br />
            Je suis actuellement en stage chez <span className="purple">Thales</span> en tant que <span className="purple">Développeur Full Stack</span>. Ma mission consiste à développer une solution web en utilisant <span className="purple">Spring Boot</span>. Cette solution permet de générer des <span className="purple">certificats</span> auto-signés ou signés par une Autorité de Certification, en utilisant <span className="purple">Bouncy Castle</span>. De plus, elle doit être interconnectée avec un annuaire <span className="purple">OpenLDAP</span>. Tout ce système est sécurisé grâce à <span className="purple">Keycloak</span>.
            <br />
            <br />
            En dehors du codage, voici d'autres activités que j'apprécie :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jouer à des jeux vidéo
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
