// src/components/HomePage.jsx
import React from 'react';
import './home.css';
import CusNavbar from '../Navbar/nav';

const Home = () => {
  return (
    <>
        <CusNavbar/>
        
      <div className="title-panel">
        <h1>BumpBliss</h1>
        <p>This is the content of the homepage.</p>
      </div>
      <div className="button-container">
        <button onClick={() => handleButtonClick(1)}>Theme</button>
        <button onClick={() => handleButtonClick(2)}>Food</button>
        <button onClick={() => handleButtonClick(3)}>Photography</button>
        <button onClick={() => handleButtonClick(4)}>Mehendi</button>
        <button onClick={() => handleButtonClick(5)}>Cake</button>
      </div>
    
      
      
      
    </>
  );
};

export default Home;
