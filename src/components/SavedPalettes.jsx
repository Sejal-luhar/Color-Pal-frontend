import React, { useState, useEffect } from "react";
import axiosInstance from "../api/axios";
import Header from "./Header";
import Footer from "./Footer";

const SavedPalettes = () => {
  const [palettes, setPalettes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPalette, setSelectedPalette] = useState(null);

  useEffect(() => {
    const fetchPalettes = async () => {
      try {
        const response = await axiosInstance.get("/palettes");
        if (Array.isArray(response.data)) {
          setPalettes(response.data);
        } else {
          throw new Error("Fetched data is not an array");
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching palettes:", err);
        setError("Failed to load palettes.");
        setLoading(false);
      }
    };

    fetchPalettes();
  }, []);

  // Function to copy color to clipboard
  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color);
    alert(`Copied ${color} to clipboard!`);
  };

  // Function to delete a palette
  const deletePalette = async (id) => {
    try {
      await axiosInstance.delete(`/palettes/${id}`);
      setPalettes(palettes.filter((palette) => palette._id !== id));
      alert("Palette deleted successfully!");
    } catch (err) {
      console.error("Error deleting palette:", err);
      alert("Failed to delete palette. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <div className="bg-gray-200 mx-auto p-6">
        {loading && <p className="text-center text-xl font-semibold">Loading palettes...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {palettes.length > 0 ? (
              palettes.map((palette) => (
                <div
                  key={palette._id}
                  className="bg-white shadow-lg shadow-gray-600 rounded-lg  p-4 hover:scale-105 transform transition-all cursor-pointer relative"
                >
                  <h3 className="text-xl font-bold text-gray-700 mb-4">
                    Base Color: {palette.baseColor}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {palette.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-12 h-12 rounded-lg shadow-md"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                  {/* Delete Button */}
                  <button
                    onClick={() => deletePalette(palette._id)}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                    title="Delete Palette"
                  >
                    <i class="ri-delete-bin-3-line"></i>
                  </button>
                  {/* Open Full-Screen Modal */}
                  <button
                    onClick={() => setSelectedPalette(palette)}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-3xl hover:bg-blue-600"
                  >
                    View Palette
                  </button>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-lg font-semibold">
                No palettes available.
              </p>
            )}
          </div>
        )}

        {/* Modal for full-screen palette */}
        {selectedPalette && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 relative">
              <button
                onClick={() => setSelectedPalette(null)}
                className="absolute top-2 right-2 bg-red-500 text-white p-1 px-3 text-2xl rounded-full hover:bg-red-600"
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold text-gray-700 mb-6">
                Base Color: {selectedPalette.baseColor}
              </h3>
              <div className="flex flex-wrap gap-4">
                {selectedPalette.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-20 h-20 rounded-lg shadow-md relative cursor-pointer"
                    style={{ backgroundColor: color }}
                    onClick={() => copyToClipboard(color)}
                  >
                    <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm bg-black bg-opacity-30 hover:bg-opacity-50">
                      Copy
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SavedPalettes;
