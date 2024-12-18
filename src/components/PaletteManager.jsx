import React, { useState } from 'react';
import axiosInstance from '../api/axios';
import ColorPickerModal from './ColorPickerModal';
import Header from './Header';
import Footer from './Footer';

const PaletteManager = () => {
  const [baseColor, setBaseColor] = useState('#3498db'); // Default base color
  const [colors, setColors] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [newColor, setNewColor] = useState(baseColor); // Temporary color for modal
  const [copiedColor, setCopiedColor] = useState(null); // Store the color that was copied

  // Function to generate the palette
  const handleGeneratePalette = async () => {
    try {
      if (!baseColor) {
        setError('Please select a valid base color.');
        return;
      }
  
      setError(null);
      setSuccess(null);
  
      // Ensure baseColor is correctly formatted
      console.log("Sending base color:", baseColor); // Check what is being sent
  
      const response = await axiosInstance.post('/generate', { baseColor });
  
      if (response.data.colors && Array.isArray(response.data.colors)) {
        setColors(response.data.colors);
        setSuccess('Palette generated successfully!');
      } else {
        throw new Error('Invalid response from server.');
      }
    } catch (err) {
      console.error('Error generating palette:', err);
      setError('Failed to generate palette. Please check the color format or try again.');
    }
  };
  
  // Function to save the palette
  const handleSavePalette = async () => {
    if (colors.length === 0) {
      setError('No colors to save. Generate a palette first.');
      return;
    }

    try {
      setError(null);
      setSuccess(null);

      await axiosInstance.post('/save', { baseColor, colors });
      setSuccess('Palette saved successfully!');
    } catch (err) {
      console.error('Error saving palette:', err);
      setError('Failed to save the palette. Please try again.');
    }
  };

  // Open Modal
  const openModal = () => {
    setNewColor(baseColor);
    setIsModalOpen(true);
  };

  // Close Modal
  const closeModal = () => setIsModalOpen(false);

  // Update the base color from the modal
  const updateColor = () => {
    setBaseColor(newColor);
    setIsModalOpen(false);
    setSuccess(null);
    setError(null);
  };

  // Function to copy color to clipboard
  const handleCopyColor = (color) => {
    navigator.clipboard.writeText(color).then(() => {
      setCopiedColor(color); // Update the state to show the copied color
      setTimeout(() => setCopiedColor(null), 2000); // Clear the copied color message after 2 seconds
    }).catch((err) => {
      console.error('Failed to copy color:', err);
    });
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-6">
        
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Color Palette Generator 🎨</h1>

        {/* Base Color Display */}
        <div className="flex items-center justify-center  h-[40px] rounded-md overflow-hidden w-[20%] mb-6">
          <div
            style={{ backgroundColor: baseColor }}
            className="w-16 h-12  border shadow-lg"
          ></div>
          <button
            onClick={openModal}
            className="bg-blue-500 px-6 py-2  text-white font-semibold hover:bg-blue-600 transition transform hover:scale-105"
          >
            Pick a Base Color
          </button>
        </div>

        {/* Generate and Save Palette Buttons */}
        <div className="flex gap-6 mb-6">
          <button
            onClick={handleGeneratePalette}
            className="bg-green-500 px-6 py-2 rounded-lg text-white font-semibold hover:bg-green-600 transition transform hover:scale-105"
          >
            Generate Palette
          </button>
          <button
            onClick={handleSavePalette}
            className="bg-purple-500 px-6 py-2 rounded-lg text-white font-semibold hover:bg-purple-600 transition transform hover:scale-105"
          >
            Save Palette
          </button>
        </div>

        {/* Error and Success Messages */}
        {error && <p className="text-red-500 text-lg mb-4">{error}</p>}
        {success && <p className="text-green-500 text-lg mb-4">{success}</p>}

        {/* Display the Generated Palette */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-8">
          {colors.map((color, index) => (
            <div
              key={index}
              style={{ backgroundColor: color }}
              className="w-full h-40 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
              onClick={() => handleCopyColor(color)} // Call the copy function on click
            >
              {/* Optional: Show a tooltip or message when the color is copied */}
              {copiedColor === color && (
                <div className="absolute inset-0 flex justify-center items-center bg-opacity-50 bg-gray-800 text-white text-lg rounded-lg">
                  Copied!
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Modal for Color Picker */}
        {isModalOpen && (
          <ColorPickerModal
            newColor={newColor}
            setNewColor={setNewColor}
            updateColor={updateColor}
            closeModal={closeModal}
          />
        )}
      </div>
      <Footer/>
    </>
  );
};

export default PaletteManager;
