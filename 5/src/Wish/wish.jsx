// src/components/CartPage.jsx
import React from 'react';
import './wish.css';

const Wishpage = () => {
  return (
    <div className="wish-page">
      <h1>Wish listed</h1>
      <div className="list-panel">
        <ul>
          <li>Product 1</li>
          <li>Product 2</li>
          <li>Product 3</li>
          {/* Add more items as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Wishpage;
