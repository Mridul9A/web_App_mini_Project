import React from 'react';
import '../styles/mainslide.css';

const MainSlide = () => {
  return (
    <div className="main-slide-container">
      <h1 className="main-title">Welcome to Our Platform</h1>
      <h3 className="main-subtitle">Discover amazing features and opportunities</h3>
      <div className="button-group">
        <button className="main-button">Get Started</button>
        <button className="main-button">Learn More</button>
      </div>
    </div>
  );
};

export default MainSlide;
