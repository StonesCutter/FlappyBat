import { React, useRef, useEffect, forwardRef } from "react";
import PropTypes from "prop-types";
import Spritesheet from "react-responsive-spritesheet";
import "./character.css";

const Character = forwardRef((props, ref) => {
  let charRef = useRef(null);

  function callback(e) {
    props.callbackInput(e);
  }

  useEffect(() => {
    if (ref) {
      ref.current = {
        getButtonCoords: () => {
          let buttonCoords = charRef.current.getBoundingClientRect();
          return {
            top: buttonCoords.top,
            left: buttonCoords.left,
            right: buttonCoords.right,
            bottom: buttonCoords.bottom,
            width: buttonCoords.width,
            height: buttonCoords.height,
          };
        },
      };
    }
  }, [ref]);

  return (
    <div
      className={"divRed"}
      onClick={callback}
      ref={charRef}
      style={{
        transform: `translateY(${props.distanceTop}vh)`,
        transition: "0.3s ease-in",
      }}
    />
  );
});

export default Character;
