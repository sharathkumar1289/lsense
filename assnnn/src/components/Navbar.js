import React from 'react';

const Navbar = () => {
  return (
    <>
      <header className="p-4 flex justify-between items-center">
        <div className="flex items-center pl-10">
          <span className="text-blue-600 font-bold text-3xl">C</span>
          <span className="text-black font-bold text-3xl">vette</span>
        </div>
        <button className="text-xl text-gray-600 pr-10">Contact</button>
      </header>
      <div className="h-1 bg-gray-300 shadow-md"></div> {/* Shadow line */}
    </>
  );
};

export default Navbar;
