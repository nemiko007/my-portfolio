import React from 'react';

const Header = () => {
  return (
    <header className="bg-white p-4 shadow-lg shadow-pink-100 border-b-4 border-pink-300">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400 hover:scale-105 transition-transform duration-300">
          My Portfolio
        </a>
        <ul className="flex space-x-8">
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
