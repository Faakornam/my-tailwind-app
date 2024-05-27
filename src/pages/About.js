// About.js

import React from 'react';

const About = () => {
  return (
    <div className="bg-green-100 py-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">About Royale Seam Montessori</h1>
        <p className="text-lg text-center mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
        <div className="flex justify-center">
          <a href="/programs" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Explore Programs
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
