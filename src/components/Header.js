// Header.js

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-orange-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">Royale Seam Montessori</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/about" className="text-white hover:text-gray-300">About Us</Link></li>
            <li><Link to="/programs" className="text-white hover:text-gray-300">Programs</Link></li>
            <li><Link to="/admission" className="text-white hover:text-gray-300">Admission</Link></li>
            <li><Link to="/contact" className="text-white hover:text-gray-300">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
