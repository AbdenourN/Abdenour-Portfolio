import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/discord.png";
import emotion from "../../Assets/Projects/plat.jpg";
import editor from "../../Assets/Projects/java.png";
import chatify from "../../Assets/Projects/stage.jpg";
import suicide from "../../Assets/Projects/bdd.jpg";
import bitsOfCode from "../../Assets/Projects/python.png";
import eloq from "../../Assets/Projects/eloquence.png"
import mariage from "../../Assets/Projects/mariage.jpg"
import dicho from "../../Assets/Projects/dicho.jpg"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        Mes travaux <strong className="purple">récents </strong>
        </h1>
        <p style={{ color: "white" }}>
        Voici quelques projets sur lesquels j'ai récemment travaillé.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={chatify}
            isBlog={false}
            title={
              <>
                Stage : Développement d'un ERP format Web
                <br />
              </>
            }
            description={
              <><br />
                Mission : Développement d'un ERP format WEB pour centraliser les données et ressources de l'entreprise,  Avril - Juin 2023
                <br />
                En HTML - CSS - Bootstrap - PHP - MVC - PhpMyAdmin - MySQL - Méthodes Scrum
                <br /><br />
              </>
            }
            //ghLink=""
            //demoLink=""
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={bitsOfCode}
            isBlog={false}
            title={
              <>
                Python Codage & Décodage de l'ADN/ARN/Codon
                <br />
              </>
            }
            description={
              <>
                
                <br /><br />
                Mission : En utilisant python et en suivant des consignes j'ai réalisé un script python qui permet d'extraire certaines informations selon un code ADN, ARN et Codon et les codés et décodées.
                <br /><br />
              </>
            }
            ghLink="https://github.com/AbdenourN/Projets/tree/main/Projets/Projets%20Informatique/Processus%20de%20l'adn%20dans%20ces%20diff%C3%A9rentes%20formes%20en%20python"
            demoLink="https://mesprojets1.000webhostapp.com/PS/1/Projets/Py/saepy.html"
          />
        </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title={
                <>
                  Création d'une plateforme de stage
                  <br />
                </>
              }
              description={
                <><br />
                  Mission : Créer une plateforme de gestion de stage pour faciliter la gestion de stage pour les professeurs et les étudiants au sein de l'Université Sorbonne Paris Nord en HTML/CSS, JS, PHP MVC, MySQL, Figma.
                  <br /><br />
                </>
              }
              ghLink="https://github.com/AbdenourN/Projets/tree/main/Projets/Projets%20Informatique/Cr%C3%A9ation%20d'une%20plateforme%20de%20gestion%20de%20stage"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title={
                <>
                  Création d'un BOT Discord de cryptomonnaie
                  <br />
                </>
              }
              description={
                <><br />
                  Mission : Création d'un Bot Discord en JavaScript qui retourne le prix actuel d'une cryptomonnaie en comparaison avec une monnaie au choix grâce à l'API CoinGecko, actualisés à chaque seconde. En JavaScript 
                  <br /><br /> 
                </>
              }
              ghLink="https://github.com/AbdenourN/Projets/tree/main/Projets/Projets%20Personnels/D%C3%A9veloppement%20de%20bot%20Discord%20en%20JavaScript/Bot%20info%20cryptomonnaie"
              demoLink="https://mesprojets1.000webhostapp.com/PP1/PP/2.php"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title={
                <>
                  Création & Exploitation de base de données
                  
                </>
              }
              description={
                <>
                  Mission : Analyser un modèle de BDD, en réaliser une en PlpgSQL et créer des fonctions pour faciliter les besoins des professeurs pour leur permettre d'ajouter des notes à leurs élèves en fonction de différentes situations (Individuel, Par Classe, Par promo, Par année).
                  <br />
                </>
              }
              ghLink="https://github.com/AbdenourN/Projets/tree/main/Projets/Projets%20Informatique/Cr%C3%A9ation%20et%20Exploitation%20de%20base%20de%20donn%C3%A9es"
              demoLink="https://docs.google.com/document/d/1FSJ1cTSkoZRF2vs0c0X7D8eACk2riafk-adaIK6qhgw/edit" 
            />
          </Col>


        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={editor}
            isBlog={false}
            title={
              <>
                Développement d'une calculatrice en Java
                <br />
              </>
            }
            description={
              <><br /><br />
                    Mission : Programmer une calculatrice interactive, qui calculee que les opérations binaires basiques.               <br /><br /><br />
              </>}
            ghLink="https://github.com/AbdenourN/Projets/tree/main/Projets/Projets%20Informatique/Calculatrice%20en%20Java"
            demoLink="https://www.mediafire.com/file/hqwzdwbprkp8n4e/CalculatriceJava.zip/file"              
          />
        </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eloq}
              isBlog={false}
              title={
                <>
                  Création d'un site web pour promouvoir un évènement
                  <br />
                </>
              }
              description={
                <><br />
                  Mission : Créer un site web pour promouvoir le concours d'éloquence de l'Université Sorbonne Paris Nord en HTML/CSS et JavaScript.
                  <br /><br />
                </>
              }
              ghLink="https://github.com/AbdenourN/Projets/tree/main/Projets/Projets%20Informatique/Cr%C3%A9ation%20d'un%20site%20web%20pour%20promouvoir%20le%20concours%20d'%C3%A9loquence"
              demoLink="https://mesprojets1.000webhostapp.com/PS/1/Projets/siteevenement/Accueil/Accueil.html" 
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mariage}
              isBlog={false}
              title={
                <>
                  Création d'un site web pour promouvoir le mariage d'un client
                  <br />
                </>
              }
              description={
                <><br /><br />
                  Mission : Créer un site web pour promouvoir le mariage d'un client fictif avec lequel j'ai discuté pour mettre en place les limites et les besoins du projet en HTML et CSS.
                  <br /><br /><br />
                </>
              }
              ghLink="https://github.com/AbdenourN/Projets/tree/main/Projets/Projets%20Informatique/Cr%C3%A9ation%20d'un%20site%20web%20pour%20un%20mariage"
              demoLink="https://mesprojets1.000webhostapp.com/PS/1/Projets/Mar/Accueil/Accueil.html" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dicho}
              isBlog={false}
              title={<>Exploration algorithmique d'un problème mathématique: <br /> La Dichotomie <br /><br /></> }
              description={
                <>
                  Mission : Saisir un problème mathématique dont la preuve fait intervenir un algorithme, 
                  <br />
                  en HTML/CSS, Python, LateX et Jupyter Notebook.
                  <br /><br /><br />
                  
                </>
              }              ghLink="https://github.com/AbdenourN/Projets/tree/main/Projets/Projets%20Non-Informatique/Exploration%20algorithmique%20d'un%20probl%C3%A8me"
              demoLink="https://mesprojets1.000webhostapp.com/PS/1/Projets/mathpy/SaeMaths.html"  
            />
          </Col>
                
      <Link to="https://mesprojets1.000webhostapp.com/index.html">
        Voir mes autres projets scolaires, personnels et professionnels
      </Link>
        </Row>
      </Container>

    </Container>
    
  );
}

export default Projects;
