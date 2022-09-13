import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import music from "../../Assets/Projects/music.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import realestate from "../../Assets/Projects/realestate.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={realestate}
              isBlog={false}
              title="Real Estate"
              description="Real Estate App connects seller and buyer with each othe build with react.js, Material-UI, and MongoDb. Have features which allows user to rent his property and contact with the property owner."
              ghLink="https://github.com/somesh123-ctrl/real_estate"
              demoLink="https://somesh789.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Ecommerce Grcerry App"
              description="Ecommerce web application build using React js , commerce js."
              ghLink="https://github.com/somesh123-ctrl/commerce"
              demoLink="https://online-grocerry-shop-by-somesh.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isBlog={false}
              title="Music Application"
              description="Music App developed using react js with static database. This app unables user to play songs."
              ghLink="https://github.com/somesh123-ctrl/vusic"
              demoLink="https://musicapp-by-somesh.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="My First Portfolio"
              description="This was my first and basic portfolio link."
              ghLink="https://github.com/somesh123-ctrl/portfolio"
              demoLink="https://somii123.netlify.app/"
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
