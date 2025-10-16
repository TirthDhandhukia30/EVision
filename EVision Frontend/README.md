# ⚡ EVision – EV Charging Forecasting & Location Planner

EVision is a **capstone project** that predicts the demand for EV charging stations and helps plan optimal locations.  
Currently focused on the **Mumbai region**, the system can easily scale to other cities or countries as relevant data becomes available.

---

## 🚀 Features

- **EV Charging Demand Forecasting**  
  Machine Learning models trained to achieve **over 90% accuracy** in predicting future charging demand.

- **Location Planning**  
  Suggests strategic sites for setting up new charging stations based on forecasted demand and regional factors.

- **Web-Based Dashboard**  
  A clean, interactive frontend built with **HTML, CSS, and JavaScript** for showcasing predictions and maps.

- **Scalable Design**  
  The pipeline and architecture can quickly adapt to additional regions when more data is provided.

---

## 🏗️ Tech Stack

| Layer            | Technologies / Tools                          |
|------------------|-----------------------------------------------|
| **Frontend**     | HTML, CSS, JavaScript                          |
| **ML**           | Python, scikit-learn, pandas, NumPy (update with actual libraries) |
| **Data**         | Government official data, Public EV infrastructure datasets, traffic & demographic data (Mumbai) |
| **Deployment**   | Netlify |

---


## ⚙️ Setup & Usage

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/EVision.git
   cd EVision
   ```

2. **Install dependencies** (for ML environment)
   ```bash
   pip install -r requirements.txt
   ```

3. **Launch the web interface**  
   Open `web/index.html` in a browser **or** run a simple local server:
   ```bash
   python -m http.server 8080
   ```
   Then navigate to `http://localhost:8080/web/` in your browser.

---

## 📊 Results

- Achieved **>90% prediction accuracy** on Mumbai EV-charging datasets.
- Visual dashboards display:
  - **Demand heatmaps** for upcoming months.
  - **Recommended station sites** based on forecasted demand.


---

## 🌍 Future Enhancements

- Expand to additional metropolitan regions as datasets become available.
- Integrate real-time traffic, weather, and energy grid data for dynamic forecasts.
- Add user authentication and station management features.
- Deploy as a full-stack web application with APIs.

---

## 👥 Team & Acknowledgments

- **Team Members**: *Tirth Dhandhukia & Yash Joshi*  
- **Mentors / Guides**: *TBD*  
- **Data Sources**: *added to the website.

Special thanks to everyone who provided guidance and resources for this project.

---

## 📝 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.
