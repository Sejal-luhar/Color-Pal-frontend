import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold font-serif italic text-yellow-400 hover:text-yellow-500 transition-all duration-300 cursor-pointer">
          COLOR<span className="text-pink-400">PAL</span>
        </h1>
        {/* Navigation Links */}
        <div className="flex space-x-8 text-lg">
          <Link
            to="/"
            className="relative group transition-all duration-300"
          >
            <span className="absolute inset-0 scale-0 bg-yellow-400 opacity-25 rounded-lg transition-transform duration-300 group-hover:scale-100"></span>
            <span className="relative text-white group-hover:text-yellow-300 font-medium">
              Home
            </span>
          </Link>
          <Link
            to="/Trending-palettes"
            className="relative group transition-all duration-300"
          >
            <span className="absolute inset-0 scale-0 bg-pink-400 opacity-25 rounded-lg transition-transform duration-300 group-hover:scale-100"></span>
            <span className="relative text-pink-400 group-hover:text-pink-500 font-medium">
              Explore
            </span>
          </Link>
          <Link
            to="/saved-palettes"
            className="relative group transition-all duration-300"
          >
            <span className="absolute inset-0 scale-0 bg-yellow-400 opacity-25 rounded-lg transition-transform duration-300 group-hover:scale-100"></span>
            <span className="relative text-white group-hover:text-yellow-300 font-medium">
              Saved Palettes
            </span>
          </Link>
          <Link
            to="/about"
            className="relative group transition-all duration-300"
          >
            <span className="absolute inset-0 scale-0 bg-yellow-400 opacity-25 rounded-lg transition-transform duration-300 group-hover:scale-100"></span>
            <span className="relative text-white group-hover:text-yellow-300 font-medium">
              About
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
