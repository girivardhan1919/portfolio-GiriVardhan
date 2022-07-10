import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "FrontEnd Developer",
          "MERN Stack Developer",
          "an Avid Coder❤",
          "Data science Specialization",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}


export default TypeWriter;