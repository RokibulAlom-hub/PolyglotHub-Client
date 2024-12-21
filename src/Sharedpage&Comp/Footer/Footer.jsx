import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">PolyglotHub</h2>
            <p className="text-gray-400">Connecting the world through language.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <a href="#about" className="text-gray-400 hover:text-white mx-2">About Us</a>
            <a href="#services" className="text-gray-400 hover:text-white mx-2">Services</a>
            <a href="#contact" className="text-gray-400 hover:text-white mx-2">Contact</a>
          </div>
        </div>
        <div className="text-center text-gray-400 mt-4">
          <p>&copy; {new Date().getFullYear()} PolyglotHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
