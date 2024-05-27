// Contact.js

import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
      <p className="mb-6">Feel free to reach out to us using the contact information below:</p>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:w-1/2">
          <h2 className="text-xl font-semibold mb-2">Address</h2>
          <p>1234 Royale Seam Street,</p>
          <p>Montessori Town,</p>
          <p>Country, Zip Code</p>
        </div>
        <div className="mb-6 md:w-1/2">
          <h2 className="text-xl font-semibold mb-2">Phone</h2>
          <p>Phone: +1-234-567-890</p>
          <p>Fax: +1-234-567-891</p>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Email</h2>
        <p>Email: info@royaleseamontessori.com</p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Social Media</h2>
        <p>Follow us on:</p>
        <div className="flex space-x-4">
          <a href="#" className="text-blue-500 hover:text-blue-700">Facebook</a>
          <a href="#" className="text-blue-500 hover:text-blue-700">Twitter</a>
          <a href="#" className="text-blue-500 hover:text-blue-700">Instagram</a>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Contact Form</h2>
        {/* Add your contact form component or form elements here */}
        <form>
          {/* Form inputs go here */}
          {/* Submit button */}
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
