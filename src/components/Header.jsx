import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white p-4 shadow-lg shadow-pink-100 border-b-4 border-pink-300">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400 hover:scale-105 transition-transform duration-300">
          My Portfolio
        </a>
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        <ul
          className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-8 items-center z-50`}
        >
          <li>
            <a href="#about" className="text-lg font-bold text-gray-600 hover:text-pink-500 transition-all duration-300 transform hover:scale-110">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="text-lg font-bold text-gray-600 hover:text-pink-500 transition-all duration-300 transform hover:scale-110">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-lg font-bold text-gray-600 hover:text-pink-500 transition-all duration-300 transform hover:scale-110">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
