import React from 'react';
import backgroundImage from '../assets/images/second-image.png';

export function AboutComponent() {
  return (
    <div className="min-h-screen bg-[#f9f6f1] flex items-center justify-center p-12">
      <div className="grid md:grid-cols-2 gap-8 max-w-7xl">
        {/* Gambar utama */}
        <div className="relative">
          <img
            src={backgroundImage}
            alt="Modern Minimalist"
            className="rounded-lg shadow-lg w-full h-auto"
          />
          <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
            Georgeus Interior
          </div>
        </div>

        {/* Konten kanan */}
        <div className="flex flex-col justify-between space-y-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Modern Minimalist
          </h1>

          <div className="bg-white p-4 rounded-xl shadow-md">
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs">
              Aesthetic
            </span>
            <h2 className="text-xl font-semibold mt-2">
              Into a gallery of elegance
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Aesthetic furniture where every piece tells a story of style.
            </p>
          </div>

          <div className="relative w-full h-32">
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-4 rounded-lg">
              <div className="text-white">
                <span className="text-sm bg-gray-800 px-2 py-1 rounded-full">
                  Best Furniture
                </span>
                <p className="text-lg font-semibold mt-1">
                  Indulge in the artistry of everyday living
                </p>
              </div>
            </div>
            <div className="abosolute right-0 bottom-0">
              <button className="mt-4 p-3 bg-black text-white rounded-full w-12 h-12  items-center justify-center hover:bg-gray-800">
                ➜
              </button>
            </div>
          </div>

          {/* Tombol Navigasi */}
        </div>
      </div>
    </div>
  );
}
