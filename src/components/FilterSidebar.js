import React from 'react';
import { ROBOT_TYPES, ROBOT_BRANDS, STATES } from '../utils/constants';

const FilterSidebar = ({ filters, onFilterChange }) => {
  return (
    <div className="filter-sidebar">
      <h3 className="filter-title">Filters</h3>
      
      <div className="filter-group">
        <label className="filter-label">Search by name, brand, type, location...</label>
        <input 
          type="text" 
          className="filter-input"
          placeholder="Search robots..."
          value={filters.search}
          onChange={(e) => onFilterChange('search', e.target.value)}
        />
      </div>

      <div className="filter-group">
        <label className="filter-label">Type</label>
        <select 
          className="filter-select"
          value={filters.type}
          onChange={(e) => onFilterChange('type', e.target.value)}
        >
          {ROBOT_TYPES.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label className="filter-label">Brand</label>
        <select 
          className="filter-select"
          value={filters.brand}
          onChange={(e) => onFilterChange('brand', e.target.value)}
        >
          {ROBOT_BRANDS.map(brand => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label className="filter-label">Location</label>
        <select 
          className="filter-select"
          value={filters.location}
          onChange={(e) => onFilterChange('location', e.target.value)}
        >
          {STATES.map(state => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label className="filter-label">Price Range</label>
        <div className="price-inputs">
          <input 
            type="number" 
            placeholder="Min" 
            className="price-input"
            value={filters.minPrice}
            onChange={(e) => onFilterChange('minPrice', e.target.value)}
          />
          <span>-</span>
          <input 
            type="number" 
            placeholder="Max" 
            className="price-input"
            value={filters.maxPrice}
            onChange={(e) => onFilterChange('maxPrice', e.target.value)}
          />
        </div>
      </div>

      <div className="marketplace-stats">
        <h4>Marketplace Stats</h4>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">135</div>
            <div className="stat-label">Active Listings</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1.2L</div>
            <div className="stat-label">Min Price</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">14.8L</div>
            <div className="stat-label">Avg Price</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">130.0L</div>
            <div className="stat-label">Max Price</div>
          </div>
        </div>
      </div>

      <div className="top-brands">
        <h4>Top Brands</h4>
        <div className="brands-list">
          {ROBOT_BRANDS.slice(1, 6).map(brand => (
            <span key={brand} className="brand-tag">{brand}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;