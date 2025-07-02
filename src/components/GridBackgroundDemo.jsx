import React from "react";
import "./Grid.css";

export function GridBackgroundDemo() {
  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100"
      style={{ zIndex: -1 ,backgroundColor: "black" }}
    >
      {/* Grid background layer */}
      <div className="position-absolute top-0 start-0 w-100 h-100 grid-bg-dark"></div>

      {/* Radial gradient fade overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-black radial-mask-dark"></div>
    </div>
  );
}
