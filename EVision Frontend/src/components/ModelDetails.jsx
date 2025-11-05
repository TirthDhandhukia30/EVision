import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "./ModelDetails.css";

const ModelDetails = () => {
  return (
    <div className="model-details">
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
            <Link to="/results" className="btn-demo">
              View Results
            </Link>
          </div>
        </div>
      </nav>

      <main className="model-details-main">
        <header className="model-details-header">
          <span className="model-tag">Model Documentation</span>
          <h1>Inside the EVision Machine Learning Stack</h1>
          <p>
            A concise view of how we prepare data, train models, and ship
            predictions that guide new EV charging deployments across Mumbai.
          </p>
        </header>

        <section className="model-details-section">
          <h2>Gradient Boosting Overview</h2>
          <p>
            Gradient Boosting is our production model because it consistently
            captures the non-linear interactions between utilisation, grid
            pressure, and urban context. After a learning-rate sweep and tree
            depth tuning, the model delivers 99.32% siting accuracy and surfaces
            clear SHAP explanations that planners can trace back to individual
            site recommendations.
          </p>
        </section>

        <section className="model-details-section">
          <h2>Data Requirements</h2>
          <p>
            Reuse the cleaned Session Master and Station Aggregate exports to
            match training conditions. Each geocoded row should expose:
          </p>
          <ul className="data-features">
            <li>
              Energy usage totals (<code>energy_consumed_kwh_sum</code>,
              <code>energy_consumed_kwh_mean</code>)
            </li>
            <li>
              Charging behaviour averages (
              <code>charging_duration_hours_mean</code>,
              <code>charging_rate_kw_mean</code>)
            </li>
            <li>
              Site coordinates (<code>latitude</code>, <code>longitude</code>)
            </li>
            <li>
              Local demand density (<code>stations_within_2km</code>,
              <code>nearby_sessions_2km</code>)
            </li>
            <li>
              Competition spacing (<code>competitors_within_2km</code>,
              <code>distance_to_nearest_station_km</code>)
            </li>
          </ul>
        </section>

        <section className="model-code">
          {/* <h2>Base Code</h2> */}
          <div className="code-window">
            <div className="code-window-header">
              <span className="code-dot red" aria-hidden="true" />
              <span className="code-dot yellow" aria-hidden="true" />
              <span className="code-dot green" aria-hidden="true" />
              <span className="code-title">bash</span>
            </div>
            <pre className="code-block">
              <code>{`$ python - <<'PY'
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import GradientBoostingClassifier

FEATURES = [
    "sessions_count",
    "energy_consumed_kwh",
    "charging_duration_hours",
    "avg_soc_delta",
    "weekend_share",
    "stations_within_2km",
]

df = pd.read_csv("Files/Code Generated CSV/sessions_master.csv")
X = df[FEATURES]
y = df["is_high_suitability"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

model = GradientBoostingClassifier(
    learning_rate=0.05,
    n_estimators=400,
    max_depth=3,
    subsample=0.9,
    random_state=42,
)

model.fit(X_train, y_train)
accuracy = model.score(X_test, y_test)
print(f"Gradient Boosting accuracy: {accuracy:.2%}")
PY`}</code>
            </pre>
          </div>
          <div className="code-output">
            <span className="code-output-label">$</span>
            <code>Gradient Boosting accuracy: 99.32%</code>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ModelDetails;
