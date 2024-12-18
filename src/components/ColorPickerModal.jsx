import React from 'react';
import { HexColorPicker } from 'react-colorful';

const ColorPickerModal = ({ newColor, setNewColor, updateColor, closeModal }) => (
  <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">Pick a Base Color</h3>
      <HexColorPicker color={newColor} onChange={setNewColor} />
      <div className="flex justify-between mt-4">
        <button
          onClick={closeModal}
          className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
        >
          Cancel
        </button>
        <button
          onClick={updateColor}
          className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Confirm
        </button>
      </div>
    </div>
  </div>
);

export default ColorPickerModal;
