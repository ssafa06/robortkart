import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Your Complete Robotics Solution
          </h1>
          <p className="hero-subtitle">
            Buy Industrial Robots with Spare Parts, Services, Logistics – All in One Platform
          </p>
          
          <div className="search-container">
            <div className="search-filters">
              <select className="filter-select">
                <option>All Categories</option>
                <option>Industrial Robot</option>
                <option>Palletizing Robot</option>
                <option>Collaborative Robot (Cobot)</option>
                <option>Articulated Robot</option>
                <option>AGV/AMR</option>
                <option>SCARA Robot</option>
                <option>Mobile Robot</option>
                <option>AMR (Autonomous Mobile Robot)</option>
                <option>Mig Welding Robot</option>
                <option>Cobot</option>
                <option>Heavy Handling Robot</option>
                <option>Small Handling Robot</option>
                <option>Medium Handling Robot</option>
                <option>Laser Welding Robot</option>
                <option>Laser Cutting Robot</option>
                <option>SCARA</option>
              </select>
              <select className="filter-select">
                <option>All Locations</option>
                <option>Krishnagiri</option>
                <option>Bengaluru</option>
                <option>Coimbatore</option>
                <option>Chennai</option>
                <option>Pune</option>
                <option>Ahmedabad</option>
                <option>Germany</option>
                <option>Madurai</option>
              </select>
            </div>
            <div className="search-main">
              <input 
                type="text" 
                placeholder="Search robots, parts, services..." 
                className="search-main-input"
              />
              <button className="search-btn">Search</button>
            </div>
          </div>
          
          <div className="hero-actions">
            <button className="btn-explore">Explore Robots</button>
            <button className="btn-sell">Start Selling</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;