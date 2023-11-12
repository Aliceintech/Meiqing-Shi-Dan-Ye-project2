import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ showGameLink, showRulesLink }) => {
  return (
    <nav className="Navbar">
      <Link to="/">Welcome</Link>
      {showGameLink && <Link to="/game">Play</Link>}
      {showRulesLink && <Link to="/rules">Rules</Link>}
    </nav>
  );
};

export default Navbar;
