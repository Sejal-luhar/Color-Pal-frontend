import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // For receiving state
import chroma from 'chroma-js'; // Import chroma.js
import Header from './Header';
import Footer from './Footer';

const ColorVariantsPage = () => {
  const location = useLocation();
  const { color } = location.state || {}; // Get the passed color from state
  const [colorVariants, setColorVariants] = useState([]);
  const [copied, setCopied] = useState(null); // To show feedback when a color is copied

  // Generate similar color variants
  useEffect(() => {
    if (color) {
      // Generate 17 color variants
      const variants = chroma.scale([color, chroma(color).darken(2), chroma(color).brighten(2)]).mode('lab').colors(17);
      setColorVariants(variants);
    }
  }, [color]);

  const handleCopyColor = (color) => {
    // Copy the color to clipboard
    navigator.clipboard.writeText(color).then(() => {
      setCopied(color); // Set the copied color to show feedback
      setTimeout(() => setCopied(null), 2000); // Clear feedback after 2 seconds
    }).catch((err) => {
      console.error('Failed to copy color: ', err);
    });
  };

  if (!color) {
    return <div className="text-center py-8">No color selected!</div>;
  }

  return (
    <>
      <Header />
      <section className="py-8 bg-gradient-to-r from-indigo-200 to-purple-300">
        <h3 className="text-gray-800 text-3xl font-bold mb-8 text-center">Similar Color Variants</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 px-6">
          {colorVariants.map((variant, index) => (
            <div
              key={index}
              className="relative h-40 rounded-md shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
              style={{ backgroundColor: variant }}
              onClick={() => handleCopyColor(variant)} // Handle copy on click
              title={variant} // Tooltip with color hex value
            >
              {/* Darken overlay */}
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-all duration-300"></div>
              {/* Display the color hex value */}
              <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-all duration-300 text-lg font-semibold">
                {variant}
              </div>
              {/* Copy Feedback */}
              {copied === variant && (
                <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold bg-gray-800 bg-opacity-50 rounded-md">
                  Copied!
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default ColorVariantsPage;
