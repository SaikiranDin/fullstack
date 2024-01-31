// src/components/PageWithHoverPanels.jsx
import React from 'react';
import './cake.css';

const H4Panels = () => {
  return (
    <div className="page">
      <div className="panel" id="panel1">
        <h2>Your choice</h2>
        <p>Your own customization</p>
      </div>
      <div className="panel" id="panel2">
        <h2>Varities</h2>
        <p>Different varities of your choice</p>
      </div>
      <div className="panel" id="panel3">
        <h2>Theme based</h2>
        <p>Cake based on the theme</p>
      </div>
    </div>
  );
};

export default H4Panels;
