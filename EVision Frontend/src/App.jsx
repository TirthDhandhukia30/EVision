import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Results from "./components/Results";
import ModelDetails from "./components/ModelDetails";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/results" element={<Results />} />
          <Route path="/model-details" element={<ModelDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
