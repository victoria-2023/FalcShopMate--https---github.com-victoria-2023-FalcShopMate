import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-modified.png';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Search from './Search';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="FalcShopMate Logo" style={{ height: '40px', marginRight: '10px' }} />
          FalcShopMate
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/recommendations">Recommendations</Link>
            </li>
          </ul>
          <Search />
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/settings">
              <FontAwesomeIcon icon="user-circle" size="2x" />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/history">
              History
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
