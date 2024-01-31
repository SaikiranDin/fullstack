// src/components/PageWithHoverPanels.jsx
import React from 'react';
import './Mehen.css';

const H3Panels = () => {
  return (
    <div className="page">
      <div className="panel" id="panel1">
        <h2>Traditional</h2>
        <p>Traditional designs</p>
      </div>
      <div className="panel" id="panel2">
        <h2>Creativity</h2>
        <p>Your own design</p>
      </div>
      <div className="panel" id="panel3">
        <h2>Themed</h2>
        <p>Based on your Theme</p>
      </div>
    </div>
  );
};

export default H3Panels;
