import React from 'react';
import backgroundImage from '../assets/images/second-image.png';

export function AboutComponent() {
  return (
    <div className="min-h-screen bg-[#f9f6f1] flex items-center justify-center md:p-12">
      <div className="grid md:grid-cols-3 gap-8 max-w-screen">
        {/* Gambar utama */}
        <div className=" md:col-span-2 background-image rounded-xl flex bg-gray-400 bg-blend-multiply items-end h-auto">
          <div className="relative mt-52">
            <div className="bg-white rounded-tr-xl w-fit items-center ">
              <button className="bg-transparent py-2 px-5 my-3 mx-3 md:mx-12   h-min border  border-black rounded-full text-black hover:bg-black hover:text-white">
                Find More Now
              </button>
            </div>
            <div className=" bg-white rounded-tr-xl w-fit items-center text-4xl md:text-7xl p-3 ">
              <h2 className="font-secondaryBold me-6">Inovasi Cat </h2>
            </div>
            <div className="bg-white rounded-tr-xl w-fit items-center text-4xl md:text-6xl xl:text-7xl p-3 ">
              <h2 className="font-secondaryBold me-6">Tembok Berkualitas </h2>
            </div>
          </div>
        </div>

        {/* Konten kanan */}
        <div className="flex flex-col  justify-evenly ">
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
