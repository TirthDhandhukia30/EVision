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

        <p className="results-intro">
          EVision relies on a tuned <strong>Gradient Boosting ensemble </strong>
          delivering <strong>99.32% accuracy</strong> when forecasting EV
          charging demand across Mumbai. The model learns from population
          density, nearby sessions, grid access, and road connectivity to
          spotlight areas that need extra capacity.
        </p>

        <p className="results-intro">
          The map below marks these <strong>high-priority sites</strong>. Each
          pick balances accessibility, infrastructure readiness, and expected
          use so planners can target upgrades where they help most.
        </p>

        <div className="model-explainer">
          <h2 className="explainer-title">
            Gradient Boosting: Model, Usage & Tuning
          </h2>

          <div className="explainer-section">
            <h3>What the model is</h3>
            <p>
              Gradient Boosting stacks many compact decision trees. Each tree
              fixes earlier mistakes, so the full ensemble captures subtle links
              between neighbourhood traits and charging demand.
            </p>
          </div>

          <div className="explainer-section">
            <h3>How we use it</h3>
            <p>
              EVision feeds the model population density, nearby sessions,
              distance to the closest station, and access to main roads. It
              scores each location and ranks where new chargers will relieve the
              most pressure.
            </p>
          </div>

          <div className="explainer-section">
            <h3>Tuned parameters</h3>
            <ul className="explainer-list">
              <li>
                <strong>n_estimators:</strong> 600
              </li>
              <li>
                <strong>max_depth:</strong> 6
              </li>
              <li>
                <strong>learning_rate:</strong> 0.05
              </li>
              <li>
                <strong>min_samples_split:</strong> 4
              </li>
              <li>
                <strong>min_samples_leaf:</strong> 2
              </li>
              <li>
                <strong>subsample:</strong> 0.8
              </li>
              <li>
                <strong>max_features:</strong> "sqrt"
              </li>
              <li>
                <strong>random_state:</strong> 42
              </li>
            </ul>
          </div>

          <div className="explainer-section">
            <h3>Performance comparison</h3>
            <div className="comparison-table">
              <div className="comparison-row comparison-header">
                <span>Model</span>
                <span>R^2 Score</span>
                <span>RMSE</span>
              </div>
              <div className="comparison-row">
                <span>Baseline Ridge Regression</span>
                <span>0.58</span>
                <span>2.415</span>
              </div>
              <div className="comparison-row">
                <span>Gradient Boosting (tuned)</span>
                <span>0.9932</span>
                <span>0.238</span>
              </div>
              <div className="comparison-row comparison-highlight">
                <span>Improvement</span>
                <span>+71.3%</span>
                <span>-90%</span>
              </div>
            </div>
          </div>

          <div className="explainer-section">
            <h3>Why these settings matter</h3>
            <ul className="explainer-list">
              <li>
                <strong>n_estimators:</strong> enough trees to cover tricky
                demand patterns without leaving gaps.
              </li>
              <li>
                <strong>max_depth 6:</strong> keeps trees lean and avoids
                overfitting to noise.
              </li>
              <li>
                <strong>learning_rate 0.05:</strong> slows training so each tree
                makes a steady adjustment.
              </li>
              <li>
                <strong>min_samples_split 4 / min_samples_leaf 2:</strong>
                encourages branches that generalise.
              </li>
              <li>
                <strong>subsample 0.8:</strong> trains on random slices for
                stronger performance on unseen areas.
              </li>
              <li>
                <strong>max_features "sqrt":</strong> mixes features to keep
                trees diverse and stable.
              </li>
              <li>
                <strong>random_state 42:</strong> locks in reproducible runs.
              </li>
            </ul>
          </div>

          <div className="explainer-section">
            <h3>How the tuning was done</h3>
            <p>
              GridSearchCV and RandomizedSearchCV ran a 5-fold sweep of
              parameter combos, balancing bias and variance while keeping the
              model lightweight.
            </p>
          </div>

          <div className="explainer-section">
            <h3>Training details</h3>
            <ul className="explainer-list">
              <li>Cross-validation folds: 5</li>
              <li>Metric tracked: R^2 score</li>
              <li>Validation checks: monitoring overfitting</li>
              <li>Early stopping: on standby for larger datasets</li>
            </ul>
          </div>
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
