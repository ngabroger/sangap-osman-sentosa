import React from 'react';
import RoundedButton from '../../../components/widget/roundedButton';
export default function FirstSection() {
  return (
    <section className="min-h-screen  flex items-center overflow-hidden justify-center md:p-12">
      <div className="grid md:grid-cols-4 gap-8 max-w-screen">
        {/* Gambar utama */}
        <div className=" md:col-span-3 background-image-2 md:rounded-xl flex bg-gray-300 bg-blend-multiply bg-center items-end h-auto">
          <div className="relative mt-52">
            <div className="bg-white rounded-tr-xl w-fit items-start  ">
              <button className="bg-transparent py-2 px-5 my-3 mx-3 md:mx-12   h-min border  border-black rounded-full text-black hover:bg-black hover:text-white">
                Find More Now
              </button>
            </div>
            <div className=" bg-white rounded-tr-xl w-fit items-center text-4xl md:text-7xl p-3 ">
              <h2 className="font-secondaryBold me-6">Inovasi Cat </h2>
            </div>
            <div className="bg-white rounded-tr-xl w-fit items-center text-4xl md:text-6xl xl:text-7xl p-3 ">
              <h2 className="font-secondaryBold me-0 md:me-6">
                Tembok Berkualitas{' '}
              </h2>
            </div>
          </div>
        </div>

        {/* Konten kanan */}
        <div className="flex flex-col   gap-5 md:gap-0 ">
          <div className="bg-blue-400 p-4 md:rounded-xl shadow-md w-fit h-fit">
            <span className=" text-black px-3 py-2  rounded-full text-xs font-secondaryBold border border-gray-700">
              Teknologi Terdepan
            </span>
            <p className="text-black font text-sm mt-4">
              Selamat datang di perusahaan cat tembok yang melindungi, dan
              memperindah ruangan.
            </p>
            <h2 className="text-3xl font-secondaryBold mt-2 text-wrap">
              Transformasi Ruang Anda
            </h2>
          </div>

          <div className="relative w-full h-full mt-5  shadow-lg bg-center background-image-3 bg-gray-400 bg-blend-multiply  md:rounded-xl">
            <div className="justify-start items-start p-5 ">
              <span className=" text-white px-3 py-2  rounded-full text-xs font-secondaryBold border border-white">
                Best Seller
              </span>
              <p className="w-fit mt-5 font-secondaryBold text-white">
                cari barang yang ada inginkan untuk rumah anda!
              </p>
            </div>
            <div className="z-50 flex justify-end items-end absolute md:-bottom-5 -bottom-5 right-4 md:right-0">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center ">
                <RoundedButton link="/pricing" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
