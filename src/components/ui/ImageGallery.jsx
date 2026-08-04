import React, { useState } from "react";
import { X } from "lucide-react";

const ImageGallery = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeModal = () => setSelectedIndex(null);
  const nextImage = () =>
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevImage = () =>
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="relative">
      {/* Thumbnails */}
      <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`thumb-${index}`}
            className="cursor-pointer rounded-lg shadow hover:scale-105 transition"
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      {/* Modal */}
    {/* Modal */}
{selectedIndex !== null && (
  <div className="absolute inset-0 bg-black/90 z-50 flex items-center justify-center">
    {/* Main Image */}
    <div className="relative max-w-5xl w-full px-4">
      <img
        src={images[selectedIndex]}
        alt="selected"
        className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
      />

      {/* Close Button near image */}
      <button
        onClick={closeModal}
        className="absolute top-2 right-2 text-white bg-gray-900/70 p-2 rounded-full hover:bg-red-600 transition"
      >
        <X size={24} />
      </button>

      {/* Controls */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl bg-gray-900/70 px-3 py-1 rounded-full hover:bg-gray-700"
      >
        ‹
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl bg-gray-900/70 px-3 py-1 rounded-full hover:bg-gray-700"
      >
        ›
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default ImageGallery;
