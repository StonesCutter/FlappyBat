import React from "react";
import Spritesheet from "react-responsive-spritesheet";
import "./character.css";
import bat from "../../../assets/images/bat.png";

function Character() {

  return (
    <div className="divRed">
      <Spritesheet
        className={"divCharacter"}
        image={bat}
        widthFrame={500}
        heightFrame={500}
        steps={6}
        fps={8}
        autoplay={true}
        loop={true}
        timeout={true}
      />
    </div>
  );
}

export default Character;

// onClick per farlo saltare, usando props per passare la funzione