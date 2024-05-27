// Admission.js

import React from 'react';

const Admission = () => {
  return (
    <div className="bg-purple-100 py-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Admission Information</h1>
        <p className="text-lg text-center mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
        <div className="flex justify-center">
          <a href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Admission;
