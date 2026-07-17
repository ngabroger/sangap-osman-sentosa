import React from 'react';
import RoundedButton from '../../../components/widget/roundedButton';
import Reveal from '../../../components/widget/Reveal';

export default function FirstSection() {
  return (
    <section className="min-h-fit md:min-h-screen flex items-center overflow-hidden justify-center p-4 md:p-12">
      <div className="grid md:grid-cols-4 gap-6 md:gap-8 max-w-screen w-full">
        {/* Gambar utama */}
        <Reveal className="md:col-span-3 group">
          <div className="background-image-2 md:rounded-xl flex bg-gray-300 bg-blend-multiply bg-center items-end h-[420px] md:h-full overflow-hidden relative">
            <div className="relative mt-32 md:mt-52 transition-transform duration-500 ease-out group-hover:-translate-y-2">
              <div className="bg-white rounded-tr-xl w-fit items-start">
                <button className="bg-transparent py-2 px-5 my-3 mx-3 md:mx-12 h-min border border-black rounded-full text-black transition-colors duration-300 hover:bg-black hover:text-white">
                  Find More Now
                </button>
              </div>
              <div className="bg-white rounded-tr-xl w-fit items-center text-3xl sm:text-4xl md:text-7xl p-3">
                <h2 className="font-secondaryBold me-6">Inovasi Cat </h2>
              </div>
              <div className="bg-white rounded-tr-xl w-fit items-center text-3xl sm:text-4xl md:text-6xl xl:text-7xl p-3">
                <h2 className="font-secondaryBold me-0 md:me-6">
                  Tembok Berkualitas{' '}
                </h2>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Konten kanan */}
        <div className="flex flex-col gap-5 md:gap-0">
          <Reveal delay={150}>
            <div className="bg-blue-400 p-4 md:rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 w-full md:w-fit h-fit">
              <span className="text-black px-3 py-2 rounded-full text-xs font-secondaryBold border border-gray-700">
                Teknologi Terdepan
              </span>
              <p className="text-black font text-sm mt-4">
                Selamat datang di perusahaan cat tembok yang melindungi, dan
                memperindah ruangan.
              </p>
              <h2 className="text-2xl md:text-3xl font-secondaryBold mt-2 text-wrap">
                Transformasi Ruang Anda
              </h2>
            </div>
          </Reveal>

          <Reveal delay={300} className="mt-5">
            <div className="group relative w-full h-52 md:h-full shadow-lg bg-center background-image-3 bg-gray-400 bg-blend-multiply md:rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              <div className="justify-start items-start p-5">
                <span className="text-white px-3 py-2 rounded-full text-xs font-secondaryBold border border-white">
                  Best Seller
                </span>
                <p className="w-fit mt-5 font-secondaryBold text-white">
                  cari barang yang ada inginkan untuk rumah anda!
                </p>
              </div>
              <div className="z-50 flex justify-end items-end absolute md:-bottom-5 -bottom-5 right-4 md:right-0">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                  <RoundedButton link="/detail/3" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
