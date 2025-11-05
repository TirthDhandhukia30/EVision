import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="about-content">
        <h2 className="about-title">About</h2>

        <div className="about-text">
          <p>
            EVision is an AI-powered platform designed to revolutionize EV
            charging infrastructure planning. Using advanced machine learning
            algorithms and comprehensive data analysis, we identify optimal
            locations for new charging stations across Mumbai.
          </p>
          {/* <p>
            Our system analyzes multiple factors including traffic density, existing infrastructure, 
            road networks, and EV ownership patterns to provide data-driven recommendations that maximize 
            accessibility and efficiency for electric vehicle users.
          </p> */}
        </div>

        <div className="map-container">
          <h3 className="map-title">Existing EV Charging Stations in Mumbai</h3>
          <iframe
            src="/maps/existing-ev-charging-stations.html"
            title="Existing EV Charging Stations Map"
            className="map-iframe"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
