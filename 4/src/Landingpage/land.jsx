// src/components/LandingPage.jsx
import React from 'react';
import './land.css';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className='land'>
    <div className="landing-container">
      <h1>BumpBliss</h1>
      <div className="buttons-container">
        <button className="login-button"><Link to="/login">Login</Link></button>
        <button className="register-button"><Link to={"/register"}>Register</Link></button>
      </div>
    </div>
    </div>
  );
};

export default Landing;
