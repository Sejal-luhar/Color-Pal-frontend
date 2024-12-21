import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

const PaletteGrid = () => {
  const palettes = [
    ['#FFD700', '#FF6347', '#40E0D0', '#6495ED', '#6A5ACD'],
    ['#FFB6C1', '#F08080', '#87CEFA', '#90EE90', '#DDA0DD'],
    ['#FFA07A', '#20B2AA', '#778899', '#B0C4DE', '#32CD32'],
    ['#F0E68C', '#DB7093', '#4682B4', '#FFDEAD', '#AFEEEE'],
  ];

  const navigate = useNavigate(); // Hook to navigate to another page

  // Handle color box click
  const handleColorClick = (color) => {
    // Navigate to ColorVariantsPage and pass the selected color via state
    navigate('/color-variants', { state: { color } });
  };

  return (
    <section className="py-8">
      <h3 className="text-gray-700 text-3xl underline font-bold mb-6 text-center">Explore</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {palettes.map((palette, index) => (
          <div key={index} className="flex flex-col gap-2">
            {palette.map((color, idx) => (
              <div
                key={idx}
                className="h-12 rounded-md cursor-pointer"
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)} // Trigger click event
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PaletteGrid;
