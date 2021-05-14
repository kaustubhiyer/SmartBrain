import React from "react";
import Tilt from "react-parallax-tilt";
import brain from "./brain.png";
import "./Logo.css";

export default function Logo() {
  return (
    <div className="ma4 mt0">
      <Tilt
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        className="Tilt br2 shadow-2"
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner pa3">
          <img src={brain} alt="logo"></img>
        </div>
      </Tilt>
    </div>
  );
}
