import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";
import Particle from "../Components/Particles/Particle";

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
        <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://user-images.githubusercontent.com/56465249/178155386-033b12a0-177b-4b9c-a230-cf6e49dafa57.png"
              title="Chat Application using Java Networking"
              description="Developed a Chat Application using Socket Programming(TCP) in JAVA. Designed a Interactive GUI using Java Swing where Client and Server Interact with each-other using IP address and port number. Learnt Java Networking, Java swing And TCP."              
              link="https://github.com/girivardhan1919/Chat-Application-using-JAVA-Networking"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://user-images.githubusercontent.com/56465249/178155537-4b235d96-a1e1-4928-bf04-3d026e39cd61.png"
              title="Student Registration API - CRUD App"
              description="Created own RESTFul API using NodeJS, ExpressJS, MongoDB, and Mongoose. Handled POST, GET, PUT & DELETE requests in Rest API using Postman."
              link="https://github.com/girivardhan1919/RESTFul-API"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://user-images.githubusercontent.com/56465249/178155238-9d6250d1-7237-452e-b9b5-53a94bd5b809.png"
              title="Shopping Cart"
              description="The Project aimed to develop using HTML, CSS & JavaScript.
                        It is a fully Responsive Front-End Website , where we can purchase Tickets for Live music concert."              link="https://github.com/girivardhan1919/Shopping-Cart"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://user-images.githubusercontent.com/56465249/155758189-5bfc64e4-2fd1-422d-8fdb-fbd0cd645b32.jpg"
              
              title="Police Violence in United States of America (USA)"
              description="Created an Interactive & Attractive Excel Dashboards based on Kaggle Dataset
              (Police Violence in US). where I analyzed data using MS Excel Advanced tools and created Pivot Tables & Pivot Charts. Finally able to Extract Insightful information from the dataset."              
              link="https://github.com/girivardhan1919/Police-violence-in-the-US"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
