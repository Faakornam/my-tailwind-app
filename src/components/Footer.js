// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Royale Seam Montessori. All Rights Reserved.</p>
        <p className="text-xs mt-2">Designed with ❤️ by J. F Alornyeku</p>
      </div>
    </footer>
  );
};

export default Footer;
