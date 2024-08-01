import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS for home page styling

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to FalcShopMate</h1>
          <p>Your personal shopping assistant</p>
          <div className="hero-buttons">
            <Link to="/recommendations" className="btn btn-primary">Recommendations</Link>
            <Link to="/about" className="btn btn-secondary">About</Link>
            <Link to="/Settings" className="btn btn-primary">Settings</Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
