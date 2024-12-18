import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate();

  return (
    <section className="text-gray-700 text-center  py-12 px-6">
      <h2 className="text-5xl font-bold mb-4">
        The super fast <br /> color palettes generator!
      </h2>
      <p className="text-lg mb-8">
        Create the perfect palette or get inspired by thousands of beautiful color schemes.
      </p>
      <div className="flex justify-center gap-6">
        <button onClick={() => navigate('/palette-manager')} className="bg-blue-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-600 transition">
          Start the generator!
        </button>
        <button onClick={() => navigate('/Trending-palettes')} className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Explore trending palettes
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
