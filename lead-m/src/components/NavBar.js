import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-cyan-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Leads Panel</div>
        <div>
        <Link
            to="/"
            className="text-white px-4 py-2 hover:bg-cyan-600 rounded-md"
          > Home </Link>
          <Link
            to="/dashboard"
            className="text-white px-4 py-2 hover:bg-cyan-600 rounded-md"
          >
            Dashboard
          </Link>
          <Link
            to="/management"
            className="text-white px-4 py-2 hover:bg-cyan-600 rounded-md ml-4"
          >
            Lead Management
          </Link>
          {/* Link with dynamic ID (for viewing lead details) */}
          <Link
            to="/details/1" // Replace 1 with the dynamic ID you want to pass
            className="text-white px-4 py-2 hover:bg-cyan-600 rounded-md ml-4"
          >
            Lead Details
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
