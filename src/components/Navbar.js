import React from 'react';

function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-100 dark:bg-gray-800 transition-colors duration-500">
      <h1 className="text-xl font-bold">My Dashboard</h1>
      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 bg-primary text-white rounded hover:bg-indigo-700 transition"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
}

export default Navbar;
