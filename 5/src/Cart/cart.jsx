// src/components/CartPage.jsx
import React from 'react';
import './cart.css';

const CartPage = () => {
  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
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

export default CartPage;
