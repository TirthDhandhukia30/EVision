import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "./Results.css";

const Results = () => {
  return (
    <section id="results" className="results-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-logo">
            <Link to="/" className="logo-link">
              <svg
                className="logo-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill="currentColor" />
              </svg>
              <span className="logo-text">EVision</span>
            </Link>
          </div>

          <div className="nav-buttons">
            <ThemeToggle />
            <Link to="/results">
              <button className="btn-demo">Results</button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Results Content */}
      <div className="results-content">
        <h1 className="results-title">Results</h1>

        <div className="results-description">
          <p>
            After rigorous evaluation of multiple machine learning models, our
            Gradient Boosting model emerged as the clear winner with an
            exceptional 99.32% accuracy. This hypertuned model successfully
            identified optimal locations for new EV charging stations across
            Mumbai by analyzing complex patterns in traffic density, urban
            infrastructure, EV adoption rates, and demographic factors. The map
            below showcases the predicted optimal locations for new charging
            stations. Each location has been carefully selected based on our
            model's analysis to maximize accessibility, minimize infrastructure
            gaps, and support the growing electric vehicle ecosystem in Mumbai.
          </p>
        </div>

        {/* Predicted Locations Map */}
        <div className="map-section">
          <h3 className="map-title">
            Predicted Optimal Charging Station Locations
          </h3>
          <iframe
            src="/maps/predicted-locations-map.html"
            title="Predicted Charging Station Locations"
            className="map-iframe"
          />
        </div>
      </div>
    </section>
  );
};

export default Results;
