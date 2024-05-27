// Programs.js

import React from 'react';

const Programs = () => {
  return (
    <div className="bg-yellow-100 py-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Our Programs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Program Card 1 */}
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-2">Preschool Program</h2>
            <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
            <a href="/admission" className="text-blue-500 font-bold hover:underline">Learn More</a>
          </div>
          
          {/* Program Card 2 */}
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-2">Elementary Program</h2>
            <p className="text-gray-700 mb-4">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="/admission" className="text-blue-500 font-bold hover:underline">Learn More</a>
          </div>
          
          {/* Program Card 3 */}
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-2">Summer Camps</h2>
            <p className="text-gray-700 mb-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <a href="/admission" className="text-blue-500 font-bold hover:underline">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
