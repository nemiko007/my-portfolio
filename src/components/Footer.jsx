import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-6 text-center text-gray-600 text-lg border-t-4 border-pink-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-8 mb-4">
          <a href="#" className="font-bold hover:text-pink-500 transition-all duration-300 transform hover:scale-110">
            GitHub
          </a>
          <a href="#" className="font-bold hover:text-pink-500 transition-all duration-300 transform hover:scale-110">
            LinkedIn
          </a>
          <a href="#" className="font-bold hover:text-pink-500 transition-all duration-300 transform hover:scale-110">
            Twitter
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
