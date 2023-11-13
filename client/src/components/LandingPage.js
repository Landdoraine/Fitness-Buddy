// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page-container">
        <img
        src="LandingPage.jpg"
        alt="Welcome Image"
        className="landing-page-image"
      />
      <div className="landing-page-content">
        <h1 className="landing-page-title">Your Fitness Journey Starts Here</h1>
        <Link to="/signup">
          <button className="get-started-button">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
