import React from "react";
import { useTheme } from "../context/ThemeContext";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle-container">
      <label className="theme-toggle">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleTheme}
          aria-label="Toggle dark mode"
        />
        <span className="toggle-slider"></span>
      </label>
    </div>
  );
};

export default ThemeToggle;
