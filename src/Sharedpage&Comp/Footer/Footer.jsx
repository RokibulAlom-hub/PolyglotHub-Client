import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary dark:bg-black border border-t text-black dark:text-white  py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">PolyglotHub</h3>
            <p className="mt-2 ">Learn languages with the best tutors from around the world.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" >
              <FaFacebook size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" >
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" >
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center ">
          &copy; {new Date().getFullYear()} PolyglotHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
