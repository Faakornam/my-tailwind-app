// Home.js

import React from 'react';

const Home = () => {
  return (
    <div className="bg-yellow-100 py-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Welcome to Royale Seam Montessori</h1>
        <p className="text-lg text-center mb-8">A nurturing environment for young minds to grow and thrive.</p>
        <div className="flex justify-center">
          <a href="/about" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
