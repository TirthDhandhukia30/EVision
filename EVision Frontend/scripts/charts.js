document.addEventListener("DOMContentLoaded", function () {
  // Common chart options
  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          padding: 15,
          font: {
            family: "'Outfit', 'Roboto', sans-serif",
            size: 11,
          },
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleFont: {
          family: "'Outfit', 'Roboto', sans-serif",
          size: 13,
        },
        bodyFont: {
          family: "'Outfit', 'Roboto', sans-serif",
          size: 12,
        },
        padding: 12,
        cornerRadius: 8,
      },
    },
  };

  // Charger Type Distribution (Featured Card)
  const chargerTypeCtx = document
    .getElementById("chargerTypeChart")
    .getContext("2d");
  new Chart(chargerTypeCtx, {
    type: "doughnut",
    data: {
      labels: ["Type 2", "Type 1", "DC Fast Charger", ],
      datasets: [
        {
          data: [28.6, 34, 37.4],
          backgroundColor: [
            "rgba(46, 204, 113, 0.8)",
            "rgba(52, 152, 219, 0.8)",
            "rgba(231, 76, 60, 0.8)",
            "rgba(241, 196, 15, 0.8)",
          ],
          borderColor: "rgba(255,255,255,0.5)",
          borderWidth: 2,
          hoverOffset: 4,
        },
      ],
    },
    options: {
      ...commonOptions,
      cutout: "50%",
      layout: {
        padding: 20,
      },
      animation: {
        animateScale: true,
        animateRotate: true,
      },
    },
  });

  // Energy Consumption
  const energyCtx = document
    .getElementById("energyConsumptionChart")
    .getContext("2d");
  new Chart(energyCtx, {
    type: "bar",
    data: {
      labels: Array.from({ length: 12 }, (_, i) => `${i * 5}-${(i + 1) * 5}`),
      datasets: [
        {
          label: "Energy Consumption",
          data: [15, 28, 45, 38, 25, 22, 18, 15, 12, 8, 5, 3],
          backgroundColor: "rgba(46, 204, 113, 0.6)",
          borderColor: "rgba(46, 204, 113, 1)",
          borderWidth: 1,
          borderRadius: 4,
          hoverBackgroundColor: "rgba(46, 204, 113, 0.8)",
        },
      ],
    },
    options: {
      ...commonOptions,
      plugins: {
        ...commonOptions.plugins,
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            display: true,
            color: "rgba(0, 0, 0, 0.05)",
          },
          ticks: {
            font: {
              size: 10,
            },
          },
          title: {
            display: true,
            text: "Number of Sessions",
            font: {
              size: 11,
            },
          },
        },
        x: {
          grid: {
            display: false,
          },
          title: {
            display: true,
            text: "Energy (kWh)",
            font: {
              size: 11,
            },
          },
          ticks: {
            font: {
              size: 10,
            },
          },
        },
      },
    },
  });

  // Sessions by Time of Day (Wide Card)
  const timeCtx = document.getElementById("timeOfDayChart").getContext("2d");
  new Chart(timeCtx, {
    type: "line",
    data: {
      labels: [
        "6AM",
        "8AM",
        "10AM",
        "12PM",
        "2PM",
        "4PM",
        "6PM",
        "8PM",
        "10PM",
      ],
      datasets: [
        {
          label: "Weekday Average",
          data: [15, 45, 80, 65, 55, 70, 85, 50, 20],
          borderColor: "rgba(52, 152, 219, 1)",
          backgroundColor: "rgba(52, 152, 219, 0.1)",
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointHoverRadius: 6,
        },
        {
          label: "Weekend Average",
          data: [10, 30, 55, 75, 80, 75, 60, 45, 25],
          borderColor: "rgba(155, 89, 182, 1)",
          backgroundColor: "rgba(155, 89, 182, 0.1)",
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointHoverRadius: 6,
        },
      ],
    },
    options: {
      ...commonOptions,
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: "rgba(0,0,0,0.05)",
          },
          title: {
            display: true,
            text: "Number of Sessions",
            font: {
              size: 11,
            },
          },
        },
        x: {
          grid: {
            display: false,
          },
          ticks: {
            font: {
              size: 10,
            },
          },
        },
      },
    },
  });

  // Top Stations (Tall Card)
  const stationsCtx = document
    .getElementById("topStationsChart")
    .getContext("2d");
  new Chart(stationsCtx, {
    type: "bar",
    data: {
      labels: [
        "Mumbai Central",
        "Bandra West",
        "Andheri East",
        "Powai",
        "Thane",
        "Worli",
      ],
      datasets: [
        {
          axis: "y",
          label: "Suitability Score",
          data: [0.95, 0.88, 0.85, 0.82, 0.78, 0.75],
          backgroundColor: "rgba(46, 204, 113, 0.6)",
          borderColor: "rgba(46, 204, 113, 1)",
          borderWidth: 1,
          borderRadius: 4,
          hoverBackgroundColor: "rgba(46, 204, 113, 0.8)",
        },
      ],
    },
    options: {
      ...commonOptions,
      indexAxis: "y",
      plugins: {
        ...commonOptions.plugins,
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          beginAtZero: true,
          max: 1,
          grid: {
            display: true,
            color: "rgba(0,0,0,0.05)",
          },
          ticks: {
            callback: (value) => value.toFixed(2),
            font: {
              size: 10,
            },
          },
        },
        y: {
          grid: {
            display: false,
          },
          ticks: {
            font: {
              size: 11,
              weight: "500",
            },
          },
        },
      },
    },
  });

  // Growth Rate (Wide Card)
  const growthCtx = document.getElementById("growthChart").getContext("2d");
  new Chart(growthCtx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      datasets: [
        {
          label: "Charging Stations",
          data: [30, 45, 55, 75, 90, 120, 150, 180, 220],
          borderColor: "rgba(52, 152, 219, 1)",
          backgroundColor: "rgba(52, 152, 219, 0.1)",
          tension: 0.4,
          fill: true,
          pointRadius: 4,
          pointHoverRadius: 6,
          pointBackgroundColor: "rgba(52, 152, 219, 1)",
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
        },
      ],
    },
    options: {
      ...commonOptions,
      plugins: {
        ...commonOptions.plugins,
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            font: {
              size: 11,
            },
          },
        },
        y: {
          grid: {
            color: "rgba(0,0,0,0.05)",
          },
          ticks: {
            stepSize: 50,
            font: {
              size: 11,
            },
          },
          title: {
            display: true,
            text: "Number of Stations",
            padding: {
              bottom: 10,
            },
          },
        },
      },
    },
  });

  // Vehicle Models (Featured Card)
  const vehiclesCtx = document
    .getElementById("vehicleModelsChart")
    .getContext("2d");
  new Chart(vehiclesCtx, {
    type: "bar",
    data: {
      labels: ["Model 3", "Nexon EV", "Kona", "ZS EV", "Tiago EV", "i4"],
      datasets: [
        {
          label: "Registered Vehicles",
          data: [150, 120, 90, 85, 70, 45],
          backgroundColor: "rgba(231, 76, 60, 0.7)",
          borderColor: "rgba(231, 76, 60, 1)",
          borderWidth: 1,
          borderRadius: 6,
          hoverBackgroundColor: "rgba(231, 76, 60, 0.9)",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: "rgba(0,0,0,0.8)",
          titleFont: {
            size: 13,
          },
          bodyFont: {
            size: 12,
          },
          padding: 12,
          cornerRadius: 8,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: "rgba(0,0,0,0.05)",
          },
          ticks: {
            stepSize: 30,
            font: {
              size: 11,
            },
          },
          title: {
            display: true,
            text: "Number of Vehicles",
            font: {
              size: 12,
            },
          },
        },
        x: {
          grid: {
            display: false,
          },
          ticks: {
            maxRotation: 45,
            minRotation: 45,
            font: {
              size: 10,
            },
          },
        },
      },
    },
  });

  // Classification Model Performance (Featured Card)
  const classificationCtx = document
    .getElementById("classificationChart")
    .getContext("2d");
  new Chart(classificationCtx, {
    type: "bar",
    data: {
      labels: ["Random Forest", "XGBoost", "SVM", "KNN", "Decision Tree"],
      datasets: [
        {
          label: "Model Accuracy",
          data: [0.91, 0.89, 0.87, 0.85, 0.83],
          backgroundColor: [
            "rgba(46, 204, 113, 0.8)",
            "rgba(52, 152, 219, 0.8)",
            "rgba(155, 89, 182, 0.8)",
            "rgba(241, 196, 15, 0.8)",
            "rgba(231, 76, 60, 0.8)",
          ],
          borderWidth: 1,
          borderRadius: 4,
          hoverBackgroundColor: [
            "rgba(46, 204, 113, 1)",
            "rgba(52, 152, 219, 1)",
            "rgba(155, 89, 182, 1)",
            "rgba(241, 196, 15, 1)",
            "rgba(231, 76, 60, 1)",
          ],
        },
      ],
    },
    options: {
      ...commonOptions,
      plugins: {
        ...commonOptions.plugins,
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 1,
          grid: {
            color: "rgba(0,0,0,0.05)",
          },
          ticks: {
            callback: (value) => value.toFixed(2),
            font: {
              size: 11,
            },
          },
          title: {
            display: true,
            text: "Accuracy Score",
            padding: {
              bottom: 10,
            },
          },
        },
        x: {
          grid: {
            display: false,
          },
          ticks: {
            maxRotation: 45,
            minRotation: 45,
            font: {
              size: 10,
            },
          },
        },
      },
    },
  });

  // Feature Importance (Key Factors)
  const featureCtx = document
    .getElementById("featureImportanceChart")
    .getContext("2d");
  new Chart(featureCtx, {
    type: "bar",
    data: {
      labels: [
        "Population Density",
        "Energy Demand",
        "Traffic Flow",
        "Grid Capacity",
        "EV Ownership",
      ],
      datasets: [
        {
          label: "Importance Score",
          data: [0.35, 0.25, 0.2, 0.12, 0.08],
          backgroundColor: "rgba(155, 89, 182, 0.6)",
          borderColor: "rgba(155, 89, 182, 1)",
          borderWidth: 1,
          borderRadius: 4,
          hoverBackgroundColor: "rgba(155, 89, 182, 0.8)",
        },
      ],
    },
    options: {
      ...commonOptions,
      indexAxis: "y",
      plugins: {
        ...commonOptions.plugins,
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          beginAtZero: true,
          grid: {
            color: "rgba(0,0,0,0.05)",
          },
          ticks: {
            callback: (value) => value.toFixed(2),
            font: {
              size: 10,
            },
          },
          title: {
            display: true,
            text: "Importance Score",
            padding: {
              top: 10,
            },
          },
        },
        y: {
          grid: {
            display: false,
          },
          ticks: {
            font: {
              size: 11,
              weight: "500",
            },
          },
        },
      },
    },
  });
});
