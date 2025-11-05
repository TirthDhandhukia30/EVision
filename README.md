# EVision – Intelligent EV Charging Planner

EVision is a full-stack research project developed as part of a Master of Science program to evaluate technology for intelligent electric-vehicle infrastructure planning. The system combines a production-ready React frontend with a robust Python machine-learning pipeline to forecast charging demand and recommend optimal station locations across Mumbai, India.

---

## Why It Matters
- **Urban EV readiness** – Helps city administrators and utilities understand when/where charging pressure will spike.
- **Invest smarter** – Provides data-backed site recommendations instead of anecdotal decisions.
- **Scales beyond Mumbai** – Pipeline is geography-agnostic; swapping datasets allows rapid replication in other cities.

---

## Solution Overview

| Layer | Responsibilities | Key Technologies |
|-------|------------------|------------------|
| Data Engineering | Ingest and clean public EV ownership, grid load, traffic density, and GIS datasets | pandas, GeoPandas, NumPy |
| Feature Engineering & Scoring | Build composite suitability scores for candidate locations | scikit-learn, SHAP, custom scoring functions |
| ML Modeling | Benchmark linear, ridge, and gradient boosting regressors; tune hyperparameters | scikit-learn, Optuna |
| Frontend Experience | Present findings through an interactive single-page app with dedicated dashboard and results views | React 18, Vite 5, React Router, CSS modules |
| Visualization | Embed Folium-generated maps to display current stations and predicted sites | Folium, Leaflet |

---

## Highlighted Features

- **Model Benchmarking Dashboard** – Pricing-card inspired comparison of Ridge, Gradient Boosting, and Linear Regression models with contextual explanations.
- **Results Portal** – Displays final Gradient Boosting predictions with an interactive map of recommended stations.
- **Theme System** – Light/dark palette, persisted via Context API and localStorage, with a custom toggle component in the global navbar.
- **Maps Without Clutter** – Clean map embeds stripped of default Folium controls for a polished presentation.

---

## Data & Methodology

- **Region**: Mumbai Metropolitan Region (MMR)
- **Sources**: Government EV ownership records, transport department traffic density, utility smart-grid usage, open petrol pump registries, and crowdsourced EV charging station data.
- **Target Metric**: Charging session demand per locality.
- **Best Model**: Hypertuned Gradient Boosting Regressor with **99.32%** accuracy on hold-out evaluation, outperforming Linear Regression (95.97%) and baseline Ridge Regression (60%).
- **Explainability**: SHAP summary plots used to communicate feature influence to stakeholders.

---

## Getting Started (Frontend)

```bash
git clone https://github.com/TirthDhandhukia30/EVision.git
cd "EVision Frontend"
npm install
npm run dev
```

Visit `http://localhost:5173` to explore the interface. Use `npm run build` to generate the production bundle in `dist/` (already configured for Vercel deployment).

### Project Structure

```
EVision Frontend/
├── src/
│   ├── components/      # Hero, Dashboard, Results, About, theme toggle
│   ├── context/         # ThemeContext for global light/dark management
│   ├── pages/           # Routed views (Home, Dashboard, Results)
│   ├── utils/           # Utility helpers
│   └── styles/          # Scoped CSS modules
├── public/maps/         # Pre-rendered Folium HTML maps
├── vite.config.js       # Vite + React configuration
└── package.json         # Scripts and dependencies
```

---

## Backend & Modeling Notebooks

The machine-learning workflow lives under the top-level `Python/` directory:

- `Step1-Data Preprocessing.ipynb` – Clean and normalize raw CSV inputs.
- `Step2-Data Exploration.ipynb` – Exploratory data analysis, feature correlation.
- `Step3-Feature Engineering & Suitability Scoring.ipynb` – Feature synthesis and weighted scoring.
- `Step4-Existing Location.ipynb` – Baseline evaluation of current EV station distribution.
- `Step5-Initial ML+Prediction.ipynb` – Baseline modeling experiments.
- `Step6-Enhanced ML+Prediction.ipynb` – Final tuned models, residual analysis, deployment outputs.

---

## Results Snapshot

- **Champion Model**: Gradient Boosting (99.32% accuracy)
- **Deliverables**: Ranked list of suggested charging stations, interactive maps for existing vs. proposed sites, explainability narratives for non-technical stakeholders.
- **Outcomes**: Identified 20+ high-confidence stations that fill demand gaps while aligning with grid capacity and traffic patterns.

---

## Roadmap

1. Integrate live grid load and traffic feeds for near real-time adjustments.
2. Expand to other Indian metros (Delhi, Bengaluru) by reusing the pipeline with minimal reconfiguration.
3. Package the ML pipeline as APIs to power municipal dashboards or partner apps.
4. Add ROI calculators for investment partners (capex vs. utilization forecasts).

---

## Contributors

- **Tirth Dhandhukia** – ML engineering, data pipeline, product vision.
- **Yash Joshi** – Frontend architecture, UI/UX, map integrations.

Mentored by faculty advisors and industry professionals supporting sustainable mobility research.

---

## License

Released under the MIT License. See [LICENSE](../LICENSE) for details.
