import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "./Dashboard.css";

const Dashboard = () => {
  const [selectedModel, setSelectedModel] = useState(null);

  const modelInfo = {
    ridge: {
      name: "Ridge Regression",
      description:
        "Ridge Regression served as our baseline model, applying L2 regularization to prevent overfitting. While achieving 60% accuracy without hyperparameter tuning, it successfully predicted 20 optimal charging station locations by analyzing key features like traffic density, road networks, and proximity to existing infrastructure. This model helped us establish the foundational relationships between geographic and demographic factors.",
    },
    gradient: {
      name: "Gradient Boosting",
      description:
        "Our champion model achieved an exceptional 99.32% accuracy through extensive hyperparameter tuning. Gradient Boosting builds an ensemble of decision trees sequentially, with each tree correcting errors from previous ones. This iterative approach captured complex non-linear patterns in EV adoption rates, infrastructure gaps, and urban development trends. The model's superior performance makes it our primary tool for identifying the most viable locations for new charging stations across Mumbai.",
    },
    linear: {
      name: "Linear Regression",
      description:
        "After hyperparameter optimization, Linear Regression achieved 95.97% accuracy by modeling linear relationships between variables. This model excels at identifying straightforward correlations between station demand and factors like population density, existing EV ownership, and commercial activity zones. Its interpretability allows stakeholders to clearly understand which factors most influence charging station viability, making it valuable for presenting insights to decision-makers.",
    },
  };

  return (
    <section id="dashboard" className="dashboard-container">
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

      {/* Dashboard Content */}
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Model Performance</h1>
          <p className="dashboard-subtitle">
            Data trained and tested on multiple models.
          </p>
        </div>

        {/* ML Model Comparison Cards */}
        <div className="comparison-cards">
          <div
            className="model-card clickable"
            onClick={() =>
              setSelectedModel(selectedModel === "ridge" ? null : "ridge")
            }
          >
            <div className="card-badge">BASELINE</div>

            <div className="card-price-section">
              <h3 className="card-model-name">Ridge Regression</h3>
              <h2 className="card-accuracy">60%</h2>
              <p className="card-subtitle">Perfect For Initial Testing</p>
            </div>

            <button className="card-button">Learn More</button>

            <div className="card-features">
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span className="feature-text">20 Stations Predicted</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span className="feature-text">L2 Regularization</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span className="feature-text">Non-Hypertuned</span>
              </div>
            </div>
          </div>

          <div
            className="model-card best-model clickable"
            onClick={() =>
              setSelectedModel(selectedModel === "gradient" ? null : "gradient")
            }
          >
            <div className="card-badge featured">BEST MODEL</div>

            <div className="card-price-section">
              <h3 className="card-model-name">Gradient Boosting</h3>
              <h2 className="card-accuracy">99.32%</h2>
              <p className="card-subtitle">Perfect For Production Use</p>
            </div>

            <button className="card-button primary">Learn More</button>

            <div className="card-features">
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span className="feature-text">Highest Accuracy</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span className="feature-text">Ensemble Method</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span className="feature-text">Hypertuned</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span className="feature-text">Complex Pattern Detection</span>
              </div>
            </div>
          </div>

          <div
            className="model-card clickable"
            onClick={() =>
              setSelectedModel(selectedModel === "linear" ? null : "linear")
            }
          >
            <div className="card-badge">OPTIMIZED</div>

            <div className="card-price-section">
              <h3 className="card-model-name">Linear Regression</h3>
              <h2 className="card-accuracy">95.97%</h2>
              <p className="card-subtitle">For Interpretable Results</p>
            </div>

            <button className="card-button">Learn More</button>

            <div className="card-features">
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span className="feature-text">High Accuracy</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span className="feature-text">Easy Interpretation</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span className="feature-text">Hypertuned</span>
              </div>
            </div>
          </div>
        </div>

        {/* Model Explanation Text */}
        {selectedModel && (
          <div className="model-explanation-section">
            <h2 className="explanation-title">
              How {modelInfo[selectedModel].name} Works
            </h2>
            <p className="explanation-description">
              {modelInfo[selectedModel].description}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
