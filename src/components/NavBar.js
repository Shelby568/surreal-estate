import React from 'react';
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="navbar">
    <img className="logo" src="castle.png" alt="castle" />
    <ul className="navbar-links">
      <li className="navbar-links-view">
        <Link to="/">View Properties</Link>
      </li>
      <li className="navbar-links-add">
        <Link to="/add-property">Add A Property</Link>
      </li>
    </ul>
  </div>
);

export default NavBar;
