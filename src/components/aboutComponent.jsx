import React from 'react';
import backgroundImage from '../assets/images/second-image.png';

export function AboutComponent() {
  return (
    <div className="min-h-screen bg-[#f9f6f1] flex items-center justify-center md:p-12">
      <div className="grid md:grid-cols-2 gap-8 max-w-screen">
        {/* Gambar utama */}
        <div className="relative">
          <img
            src={backgroundImage}
            alt="sos"
            className="md:rounded-lg shadow-lg w-screen h-auto"
          />
          <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
            Meningkatkan Kualitas Ruangan
          </div>
        </div>

        {/* Konten kanan */}
        <div className="flex flex-col justify-between ">
          <h1 className="text-4xl font-bold text-center md:text-start text-gray-900">
            Inovasi Cat Tembok Berkualitas
          </h1>

          <div className="bg-white p-4 rounded-xl shadow-md">
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs">
              Teknologi Terdepan
            </span>
            <h2 className="text-xl font-semibold mt-2">
              Transformasi Ruang Anda
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Selamat datang di perusahaan kami, spesialis cat tembok yang
              menggabungkan inovasi dan estetika untuk menciptakan warna yang
              tidak hanya melindungi, tetapi juga memperindah setiap ruangan.
            </p>
          </div>

          <div className="relative w-full h-auto  p-6 justify-end  items-center flex shadow-lg bg-blue-400 rounded-xl">
            <div className="md:absolute inset-0   flex items-end md:p-4 md:rounded-lg">
              <div className="text-white">
                <span className="text-sm bg-gray-800 px-2 py-1 rounded-full">
                  Pilihan Terbaik
                </span>
                <p className="text-lg md:text-lg font-semibold mt-1">
                  Percayakan keindahan Rumah Anda pada kami
                </p>
              </div>
            </div>
            <div className="z-50">
              <button className="p-3 mr-3 bg-gray-900 text-white rounded-full w-12 h-12  items-center justify-center hover:bg-gray-800">
                ➜
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
