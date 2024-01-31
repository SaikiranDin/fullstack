// src/components/PageWithHoverPanels.jsx
import React from 'react';
import './theme.css';

const HPanels = () => {
  return (
    <div className="page">
      <div className="panel" id="panel1">
        <h2>Barbie</h2>
        <p>your pinky dream theme</p>
      </div>
      <div className="panel" id="panel2">
        <h2>Chota Bheem</h2>
        <p>Dolakpur in your Theme.</p>
      </div>
      <div className="panel" id="panel3">
        <h2>Nemo</h2>
        <p>Find your Nemo</p>
      </div>
    </div>
  );
};

export default HPanels;
