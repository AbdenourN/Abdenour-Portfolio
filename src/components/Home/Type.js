import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Développeur logiciel en devenir",
          "Passionné d'informatique",
          "Apprenti développeur Full Stack",
          "Passionné d'exploration en informatique",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
