// src/components/PageWithHoverPanels.jsx
import React from 'react';
import './photo.css';

const H2Panels = () => {
  return (
    <div className="page">
      <div className="panel" id="panel1">
        <h2>Traditional</h2>
        <p>Traditional way of shooting</p>
      </div>
      <div className="panel" id="panel2">
        <h2>Candid</h2>
        <p>Shooting eye catchy moments</p>
      </div>
      <div className="panel" id="panel3">
        <h2>Themed</h2>
        <p>Shooting based on the theme</p>
      </div>
    </div>
  );
};

export default H2Panels;
