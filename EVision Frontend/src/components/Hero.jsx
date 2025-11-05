import React from "react";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  const buttons = [
    { name: "Result", href: "/results", type: "navigate" },
    { name: "About", href: "#about", type: "scroll" },
    { name: "Dashboard", href: "/dashboard", type: "navigate" },
    { name: "GitHub", href: "#github", type: "scroll" },
  ];

  const handleClick = (e, button) => {
    e.preventDefault();
    if (button.type === "navigate") {
      navigate(button.href);
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
            <button className="btn-demo">Results</button>
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
