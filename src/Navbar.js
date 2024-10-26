import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={toggleMenu}>
        Delhi <span>Metro</span>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/analysis">Analysis</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
