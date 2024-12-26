import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink
            to="/about"
            className="navbar-link"
            activeClassName="active"
          >
            About
          </NavLink>
        </li>
        <li className="navbar-item">x
          <NavLink
            to="/resume"
            className="navbar-link"
            activeClassName="active"
          >
            Services
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/portfolio"
            className="navbar-link"
            activeClassName="active"
          >
            Portfolio
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/blog"
            className="navbar-link"
            activeClassName="active"
          >
            Blog
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/contact"
            className="navbar-link"
            activeClassName="active"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
