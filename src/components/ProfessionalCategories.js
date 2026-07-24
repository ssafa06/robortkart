import React from 'react';

const ProfessionalCategories = () => {
  return (
    <section className="professional-categories">
      <div className="container">
        <div className="section-header">
          <h2>Professional Categories</h2>
          <p className="section-subtitle">
            Join thousands of professionals in the robotics ecosystem. Choose your role and start your journey.
          </p>
        </div>

        <div className="professionals-grid">
          <div className="professional-card">
            <h3>Robot Sellers</h3>
            <p>Sell industrial robots and automation equipment</p>
            
            <div className="features-list">
              <h4>Key Features:</h4>
              <ul>
                <li>Product listings</li>
                <li>Inventory management</li>
                <li>Sales analytics</li>
                <li>Customer management</li>
              </ul>
            </div>
            
            <button className="join-btn">Join as robot sellers →</button>
          </div>

          <div className="professional-card">
            <h3>Parts Sellers</h3>
            <p>Supply spare parts and components</p>
            
            <div className="features-list">
              <h4>Key Features:</h4>
              <ul>
                <li>Parts catalog</li>
                <li>Compatibility matching</li>
                <li>Bulk pricing</li>
                <li>Quick delivery</li>
              </ul>
            </div>
            
            <button className="join-btn">Join as parts sellers →</button>
          </div>

          <div className="professional-card">
            <h3>Service Providers</h3>
            <p>Offer maintenance and installation services</p>
            
            <div className="features-list">
              <h4>Key Features:</h4>
              <ul>
                <li>Service scheduling</li>
                <li>Technical expertise</li>
                <li>On-site support</li>
                <li>Warranty coverage</li>
              </ul>
            </div>
            
            <button className="join-btn">Join as service providers →</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalCategories;