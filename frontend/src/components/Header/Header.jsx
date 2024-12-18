import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const TOKEN_KEY = 'token';

const Header = ({ searchQuery, setSearchQuery }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem(TOKEN_KEY);

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleSignIn = () => {
    navigate('/signin');
  };

  const handleWishlist = () => {
    navigate('/wishlist'); // Navigate to the wishlist page
  };

  const handleSignOut = () => {
    localStorage.removeItem(TOKEN_KEY); // Remove token from localStorage
    navigate('/signin'); // Redirect to the sign-in page
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); // Update search query in LandingPageC
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>ShopSavvy</h1>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery} // Bind input to searchQuery state
          onChange={handleSearchChange} // Update state on input change
        />
      </div>
      <div className="header-buttons">
        {token ? (
          <>
            <button onClick={handleWishlist}>Wishlist</button>
            <button onClick={handleSignOut}>Sign Out</button>
          </>
        ) : (
          <>
            <button onClick={handleSignUp}>Create Account</button>
            <button onClick={handleSignIn}>Sign In</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
