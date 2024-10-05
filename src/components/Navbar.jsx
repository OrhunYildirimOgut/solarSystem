// src/components/Navbar.jsx
import React from 'react';

function Navbar({ onToggleData, onToggleControls }) {
  return (
    <div id="navbar">
      <a id="toggle-data" href="#data" onClick={onToggleData}>
        <i className="icon-data"></i>Data
      </a>
      <h1>3D CSS Solar System</h1>
      <a id="toggle-controls" href="#controls" onClick={onToggleControls}>
        <i className="icon-controls"></i>Controls
      </a>
    </div>
  );
}

export default Navbar;
