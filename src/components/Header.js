import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/login');
  };

  const handleJoinFree = () => {
    navigate('/register');
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h2>RobotVerse</h2>
          </div>
          
          <nav className="nav-menu">
            <a href="#robots">Robots</a>
            <a href="#spare-parts">Spare Parts</a>
            <a href="#services">Services</a>
            <a href="#logistics">Logistics</a>
          </nav>

          <div className="header-actions">
            <div className="search-bar">
              <input 
                type="text" 
                placeholder="Search..." 
                className="search-input"
              />
            </div>
            
            <div className="auth-buttons">
              <button 
                className="btn-signin"
                onClick={handleSignIn}
              >
                Sign In
              </button>
              <button 
                className="btn-join"
                onClick={handleJoinFree}
              >
                Join Free!
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;