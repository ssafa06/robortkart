import React from 'react';

const MarketplaceCategories = () => {
  return (
    <section className="marketplace-categories">
      <div className="container">
        <div className="section-header">
          <h2>Everything You Need in One Marketplace</h2>
          <p className="section-subtitle">
            Buy robots and access all supporting services seamlessly
          </p>
        </div>

        <div className="categories-grid">
          <div className="category-card">
            <h3>Industrial Robots</h3>
            <p>Quality industrial robots and automation</p>
            <div className="listing-count">174 Active Listings</div>
          </div>

          <div className="category-card">
            <h3>Spare Parts</h3>
            <p>Genuine parts for your robots</p>
            <div className="listing-count">86 Active Listings</div>
          </div>

          <div className="category-card">
            <h3>Services</h3>
            <p>Professional maintenance & repair</p>
            <div className="listing-count">18 Service Providers</div>
          </div>

          <div className="category-card">
            <h3>Logistics</h3>
            <p>Shipping & delivery solutions</p>
            <div className="listing-count">17 Logistics Services</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceCategories;