import { Link } from 'react-router-dom';
import { items } from '../../model/items';
import Reveal from '../../components/widget/Reveal';
import SeoManage from '../../components/seoManage';

const WHATSAPP_NUMBER = '6285156770062';

export default function PricingPage() {
  return (
    <div>
      <SeoManage title={'Pricing'} />

      <section className="w-full py-16 md:py-24 px-4 text-center max-w-screen-md mx-auto">
        <Reveal>
          <p className="font-primaryMedium text-blue-500 mb-3">
            Harga & Penawaran
          </p>
          <h1 className="font-secondaryBold text-4xl sm:text-5xl md:text-6xl mb-5">
            Katalog Produk Kami
          </h1>
          <p className="text-gray-600">
            Harga produk kami menyesuaikan volume, ukuran kemasan, dan lokasi
            pengiriman. Hubungi tim kami untuk mendapatkan penawaran harga
            terbaik sesuai kebutuhan proyek Anda.
          </p>
        </Reveal>
      </section>

      <section className="max-w-screen-xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => {
            const message = encodeURIComponent(
              `Halo, saya ingin menanyakan harga untuk produk ${item.title}.`
            );
            return (
              <Reveal key={item.id} delay={(index % 3) * 120}>
                <div className="group relative rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full flex flex-col">
                  <div
                    className="h-48 bg-cover bg-center bg-no-repeat scale-100 group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="p-5 flex flex-col flex-1">
                    <h2 className="text-xl font-secondaryBold mb-2">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-600 flex-1 mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-col gap-2">
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-900 text-white text-sm text-center py-2 rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        Hubungi Kami untuk Harga
                      </a>
                      <Link
                        to={`/detail/${item.id}`}
                        className="text-sm text-center py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors"
                      >
                        Lihat Detail
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
