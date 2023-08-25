import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Blue from "./components/Blue"; // Import the Blue component
import Red from "./components/Red"; // Import the Red component
import Home from "./components/Home"; // Import the Home component

function App() {
  return (
    <div id="container">
      <div id="navbar">
        <Link to="/blue">blue</Link>
        <Link to="/red">red</Link>
        <Link to="/">home</Link>
      </div>
      <div id="main-section"> 
        <Routes>
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
