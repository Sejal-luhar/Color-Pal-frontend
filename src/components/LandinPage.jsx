import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import HeroSection from './HeroSection';
import PaletteGrid from './PaletteGrid';
import Footer from './Footer';

const LandingPage = () => {

  return (
      <div className="min-h-screen bg-gradient-to-r from-white via-gray-200 to-gray-300">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Palette Grid */}
      <PaletteGrid />

      <Footer/>
      </div>
  );
};

export default LandingPage;
