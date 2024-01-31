// src/components/PageWithHoverPanels.jsx
import React from 'react';
import './food.css';

const H1Panels = () => {
  return (
    <div className="page">
      <div className="panel" id="panel1" >
        <h2>Vegetarian</h2>
        <p>serving traditional veg food</p>
      </div>
      <div className="panel" id="panel2">
        <h2>Caterers</h2>
        <p>Choose your favourite caterer from the city</p>
      </div>
      <div className="panel" id="panel3">
        <h2>Non-Veg</h2>
        <p>Drooling Non vegetarian </p>
      </div>
    </div>
  );
};

export default H1Panels;
