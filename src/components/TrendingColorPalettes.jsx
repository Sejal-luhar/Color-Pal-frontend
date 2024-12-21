import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const TrendingColorPalettes = () => {
  // Sample data for color palettes
  const palettes = [
    ['#6B754A', '#202F14', '#FFF8DC', '#E1A76A', '#B66A2A'],
    ['#600000', '#9B0A1D', '#F9E2C3', '#003049', '#6E9BC8'],
    ['#88C0D0', '#0A6F85', '#001F3F', '#FF9F1C', '#FF7F0F'],
    ['#386641', '#6a994e', '#a7c957', '#f2e8cf', '#bc4749'],
    ['#cdb4db', '#ffc8dd', '#ffafcc', '#bde0fe', '#a2d2ff'],
    ['#ffbe0b', '#fb5607', '#ff006e', '#8338ec', '#3a86ff'],
    ['#e63946', '#f1faee', '#a8dadc', '#457b9d', '#1d3557'],
    ['#000000', '#14213d', '#fca311', '#e5e5e5', '#ffffff'],
    ['#edede9', '#d6ccc2', '#f5ebe0', '#e3d5ca', '#d5bdaf'],
    ['#ffe5ec', '#ffc2d1', '#ffb3c6', '#ff8fab', '#fb6f92'],
    ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'],
    ['#2b2d42', '#8d99ae', '#edf2f4', '#ef233c', '#d90429'],
    ['#6f1d1b', '#bb9457', '#432818', '#99582a', '#ffe6a7'],
    ['#03045e', '#0077b6', '#00b4d8', '#90e0ef', '#caf0f8'],
    ['#335c67', '#fff3b0', '#e09f3e', '#9e2a2b', '#a6e1fa'],
  ];

  // Color name-to-hex mapping
  const colorNameMap = {
    black: '#000000',
    white: '#ffffff',
    red: '#e63946',
    yellow: '#ffbe0b',
    blue: '#0077b6',
    orange: '#fca311',
    pink: '#ffc2d1',
    green: '#6a994e',
    teal: '#2a9d8f',
    purple: '#8338ec',
    brown: '#6f1d1b',
    navy: '#001F3F',
    gold: '#e09f3e',
    lavender: '#cdb4db',
    coral: '#ff8fab',
    skyblue: '#caf0f8',
  };

  const [copiedColor, setCopiedColor] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to copy color to clipboard
  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);

    // Remove copied feedback after 1.5 seconds
    setTimeout(() => setCopiedColor(null), 1500);
  };

  // Enhanced filtering for both hex and color names
  const filteredPalettes = palettes.filter((palette) =>
    palette.some((color) => {
      // Check if search matches hex or mapped color name
      const colorName = Object.keys(colorNameMap).find(
        (key) => colorNameMap[key].toLowerCase() === color.toLowerCase()
      );

      return (
        color.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (colorName && colorName.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    })
  );

  return (
    <>
      <Header />
      <div className="flex flex-col items-center bg-gray-50 min-h-screen p-6">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Trending Color Palettes</h1>
        <p className="text-gray-600 mb-4">
          Get inspired by beautiful color schemes and click a color to copy it!
        </p>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by color name or hex code..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-10 p-3 shadow-md  shadow-gray-500 rounded-3xl w-full max-w-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Display Filtered Color Palettes */}
        <div className="flex flex-wrap justify-center gap-12">
          {filteredPalettes.map((palette, index) => (
            <div key={index} className="flex shadow shadow-gray-800">
              {palette.map((color, idx) => (
                <div
                  key={idx}
                  style={{ backgroundColor: color }}
                  onClick={() => copyToClipboard(color)}
                  className="w-16 h-28 cursor-pointer rounded-sm  shadow-lg border hover:scale-110 transition-transform relative"
                >
                  {copiedColor === color && (
                    <span className="absolute bottom-0 bg-black text-white text-xs px-2 py-1 rounded-md left-1/2 transform -translate-x-1/2">
                      Copied!
                    </span>
                  )}
                </div>
              ))}
            </div>
          ))}
          {filteredPalettes.length === 0 && (
            <p className="text-gray-500 mt-4">No palettes match your search.</p>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default TrendingColorPalettes;
