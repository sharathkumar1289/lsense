import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#333', color: 'white' }}>
      <h1>Hostel Management</h1>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem' }}>
        <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/rooms" style={{ color: 'white', textDecoration: 'none' }}>Rooms</Link></li>
        <li><Link to="/students" style={{ color: 'white', textDecoration: 'none' }}>Students</Link></li>
        <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
