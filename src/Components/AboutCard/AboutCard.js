import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, My Self <span className="purple">Sai Giri Vardhan Daggupati </span>
            I am a Fresh Undergraduate Engineer from <span className="purple"> Punjab, India.</span>
            <br />
            
            <br />I am currently pursuing my Bachelor's degree in Computer Science from <span className="purple">
              Lovely Professional University </span>2019-2023.<br /> <br />
           <br />
            
            ⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CN etc.
            <br />
           <br />
            <br />
            ⚡ Apart from this, I have done courses on Data science and Full Stack Development .
 
          </p>
          
              </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;