import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-gray-200 to-gray-100 text-gray-700 py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">About Color Palette Generator</h1>
          <p className="text-lg leading-relaxed mb-8">
            The <span className="font-semibold text-blue-400">Color Palette Generator</span> is a
            full-stack web application designed to help developers, designers, and enthusiasts create, save, and manage custom color palettes with ease. 
            This tool combines functionality with an intuitive user interface for seamless color management.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-700 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Core Features</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Generate color palettes dynamically based on a base color.</li>
                <li>Save palettes to your personalized collection for future use.</li>
                <li>Explore and manage your saved color schemes in one place.</li>
                <li>Copy individual colors to your clipboard with a single click.</li>
              </ul>
            </div>
            <div className="bg-gray-700 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>
                  <span className="font-semibold text-blue-400">Frontend:</span> React.js with Tailwind CSS for a modern, responsive user interface.
                </li>
                <li>
                  <span className="font-semibold text-blue-400">Backend:</span> Node.js and Express for a robust and scalable server-side application.
                </li>
                <li>
                  <span className="font-semibold text-blue-400">Database:</span> MongoDB for efficient data storage and retrieval.
                </li>
                <li>RESTful APIs for seamless client-server communication.</li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-700 rounded-lg shadow-lg p-6 mt-8">
            <h2 className="text-2xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-300 leading-relaxed">
              Start by generating a color palette using your preferred base color. Save your favorite palettes to your collection for later reference. You can
              view all saved palettes, copy individual colors with ease, and even open a palette in full-screen mode for a closer look.
            </p>
          </div>
          <div className="bg-gray-700 rounded-lg shadow-lg p-6 mt-8">
            <h2 className="text-2xl font-bold mb-4">Future Enhancements</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Integrate user authentication for personalized accounts.</li>
              <li>Add advanced color-generation algorithms for unique palettes.</li>
              <li>Enable sharing palettes via social media and email.</li>
              <li>Provide download options for palettes in JSON or image formats.</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Built with ❤️ by <span className="font-semibold">Sejal Luhar</span>. This project is open-source and welcomes contributions.
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
