import React from "react";
import "./AuroraBackground.css";

export const AuroraBackground = ({ children, showRadialGradient = true }) => {
  return (
    <div className="aurora-wrapper">
      <div
        className={`aurora-container ${
          showRadialGradient ? "radial-mask" : ""
        }`}
      >
        <div className="aurora-blur"></div>
        <div className="aurora-gradient aurora-gradient-1"></div>
        <div className="aurora-gradient aurora-gradient-2"></div>
        <div className="aurora-gradient aurora-gradient-3"></div>
        <div className="aurora-gradient aurora-gradient-4"></div>
      </div>
      <div className="aurora-content">{children}</div>
    </div>
  );
};
