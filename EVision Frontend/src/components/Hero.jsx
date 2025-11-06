import React from "react";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  const buttons = [
    { name: "Result", href: "/results", type: "navigate" },
    { name: "Model Details", href: "/model-details", type: "navigate" },
    { name: "About", href: "#about", type: "scroll" },
    { name: "Dashboard", href: "/dashboard", type: "navigate" },
    {
      name: "GitHub",
  href: "https://github.com/TirthDhandhukia30/EVision",
      type: "external",
    },
  ];

  const handleClick = (e, button) => {
    e.preventDefault();
    if (button.type === "navigate") {
      navigate(button.href);
    } else if (button.type === "external") {
      window.open(button.href, "_blank", "noopener,noreferrer");
    } else {
      const element = document.querySelector(button.href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="hero-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-logo">
            <svg
              className="logo-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill="currentColor" />
            </svg>
            <span className="logo-text">EVision</span>
          </div>

          <div className="nav-buttons">
            <ThemeToggle />
            <button
              className="btn-demo"
              type="button"
              onClick={() => navigate("/results")}
            >
              Results
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <main className="hero-main">
        <div className="hero-content">
          <h1 className="hero-headline">Drive the Future.</h1>

          <p className="hero-subtext">
            EV Charging Forecasting & Location Planner
          </p>

          <div className="hero-highlights">
            <div className="highlight-card">
              <svg
                className="highlight-icon"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill="currentColor" />
              </svg>
              <div>
                <p className="highlight-title">Gradient Boosting</p>
                <p className="highlight-subtitle">99.32% siting accuracy</p>
              </div>
            </div>

            <div className="highlight-card">
              <svg
                className="highlight-icon"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4h16v4H4V4zm0 6h16v2H4v-2zm0 4h10v2H4v-2z"
                  fill="currentColor"
                  opacity="0.7"
                />
                <path
                  d="M18 14l2.5 2.5L18 19"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <p className="highlight-title">80+ Predicted Sites</p>
                <p className="highlight-subtitle">
                  Matches red markers on the map
                </p>
              </div>
            </div>
          </div>

          <div className="hero-workflow">
            <div className="workflow-row">
              <div className="workflow-node">
                <span className="node-title">Collected Data</span>
              </div>
              <span className="workflow-arrow" aria-hidden="true" />
              <div className="workflow-node">
                <span className="node-title">Feature Engineering</span>
                <span className="node-subtitle">Suitability scoring</span>
              </div>
              <span className="workflow-arrow" aria-hidden="true" />
              <div className="workflow-node">
                <span className="node-title">Model Training</span>
                <span className="node-subtitle">
                  Gradient Boosting + baselines
                </span>
              </div>
              <span className="workflow-arrow" aria-hidden="true" />
              <div className="workflow-node">
                <span className="node-title">Final Prediction</span>
              </div>
            </div>
          </div>

          {/* Research Type Buttons with Connectors */}
          <div className="research-types">
            <svg
              className="connector-lines"
              viewBox="0 0 800 120"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Curved lines connecting buttons to a central point */}
              <path
                d="M 133 60 Q 133 90, 400 100"
                stroke="#e0e0e0"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M 267 60 Q 267 85, 400 100"
                stroke="#e0e0e0"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M 400 60 L 400 100"
                stroke="#e0e0e0"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M 533 60 Q 533 85, 400 100"
                stroke="#e0e0e0"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M 667 60 Q 667 90, 400 100"
                stroke="#e0e0e0"
                strokeWidth="1.5"
                fill="none"
              />

              {/* Center point */}
              <circle cx="400" cy="105" r="4" fill="#1a1a1a" />
            </svg>

            <div className="button-row">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  className="research-btn"
                  onClick={(e) => handleClick(e, button)}
                >
                  {button.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
