import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Tools Section */}
        <div>
          <h2 className="font-bold text-lg mb-4 text-yellow-400">Tools</h2>
          <ul className="space-y-2">
            <li>Generate your palettes</li>
            <li>Explore popular palettes</li>
            <li>Extract palette from image</li>
            <li>Contrast checker</li>
            <li>Color picker</li>
            <li>Browse free fonts</li>
          </ul>
        </div>

        {/* More Section */}
        <div>
          <h2 className="font-bold text-lg mb-4 text-yellow-400">More</h2>
          <ul className="space-y-2">
            <li>List of colors</li>
            <li>Browse gradients</li>
            <li>Create a gradient</li>
            <li>Image converter</li>
            <li>Font Generator</li>
          </ul>
        </div>

        {/* Apps Section */}
        <div>
          <h2 className="font-bold text-lg mb-4 text-yellow-400">Apps</h2>
          <ul className="space-y-2">
            <li>iOS App</li>
            <li>Android App</li>
            <li>Figma Plugin</li>
            <li>Adobe Extension</li>
            <li>Chrome Extension</li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h2 className="font-bold text-lg mb-4 text-yellow-400">Company</h2>
          <ul className="space-y-2">
            <li>Pricing</li>
            <li>Terms of service</li>
            <li>Privacy policy</li>
            <li>Help center</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 mt-8 border-t border-gray-700 pt-6">
        <p>
          &copy; {new Date().getFullYear()} COLORPAL. Made with 💛 for developers
          and designers.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
