import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './Header.css';

const Header = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleSignUp = () => {
    navigate('/signup');  // Navigate to the signup page
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>ShopSavvy</h1>
      </div>
      <div className="signup-button">
        <button onClick={handleSignUp}>Sign Up</button> {/* Call handleSignUp on click */}
      </div>
    </header>
  );
};

export default Header;
