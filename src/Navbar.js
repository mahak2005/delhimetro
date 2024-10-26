import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Delhi <span>Metro</span></div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/analysis">Analysis</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
