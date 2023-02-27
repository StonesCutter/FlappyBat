import React from "react";
import PropTypes from "prop-types";
import Spritesheet from "react-responsive-spritesheet";
import "./character.css";

class Character extends Component {
  render() {
    return (
      <Spritesheet
        image={``}
        widthFrame={800}
        heightFrame={648}
        steps={46}
        fps={12}
      />
    );
  }
}

export default Character;
