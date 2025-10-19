import { useState } from 'react';

function Navbar({ toggleDarkMode, isDark }) {
  return (
    <nav className='w-full bg-white dark:bg-gray-800 shadow-md'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16'>
        <h1 className='text-xl font-bold text-blue-600 dark:text-blue-400'>
          Dev Connect
        </h1>
        <button
          onClick={toggleDarkMode}
          className='bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded'
        >
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
