import React from 'react';

const RobotCard = ({ robot }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN').format(price);
  };

  return (
    <div className="robot-card">
      <div className="robot-image">
        <img src={robot.image} alt={robot.title} />
        <div className="robot-type">{robot.type}</div>
      </div>
      
      <div className="robot-content">
        <h3 className="robot-title">{robot.title}</h3>
        <p className="robot-brand">{robot.brand} - {robot.model} - {robot.year}</p>
        
        <div className="robot-location">
          <span className="location">{robot.location}</span>
          <span className="state">State: {robot.state}</span>
        </div>
        
        <div className="robot-price">₹{formatPrice(robot.price)}</div>
        
        <div className="robot-applications">
          {robot.applications.map((app, index) => (
            <span key={index} className="application-tag">{app}</span>
          ))}
        </div>
        
        <div className="robot-seller">
          {robot.seller}
          {robot.verified && <span className="verified-badge">Verified</span>}
        </div>
        
        <div className="robot-actions">
          <button className="btn-details">Details</button>
          <button className="btn-ai-analysis">Sign in for AI Analysis</button>
          <button className="btn-chat">Login to Chat</button>
        </div>
      </div>
    </div>
  );
};

export default RobotCard;