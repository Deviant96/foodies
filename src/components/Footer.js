import React from 'react';
import { LogoWhite } from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-4 py-10 mx-auto text-left">
        <div className="flex items-center gap-2 mb-2">
          <LogoWhite />
          <h1 className="font-bold">Swiggy</h1>
        </div>
        <small>&copy; 2024 MealApp Technologies</small>
      </div>
    </footer>
  );
};

export default Footer;
