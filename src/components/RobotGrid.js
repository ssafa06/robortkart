import React from 'react';
import RobotCard from './RobotCard';

const RobotGrid = ({ robots }) => {
  return (
    <div className="robot-grid">
      <div className="grid-header">
        <h2>Robot Marketplace</h2>
        <p>Discover cutting-edge industrial robots from verified sellers worldwide</p>
        <div className="results-info">
          <span>Showing {robots.length} of {robots.length} robots</span>
          <span className="last-updated">Last updated: 11/28/2024 11:04 am</span>
        </div>
      </div>
      
      <div className="robots-container">
        {robots.map(robot => (
          <RobotCard key={robot.id} robot={robot} />
        ))}
      </div>
    </div>
  );
};

export default RobotGrid;