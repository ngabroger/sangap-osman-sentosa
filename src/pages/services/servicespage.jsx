import image from '../../assets/images/services.jpg';
import image2 from '../../assets/images/services-2.jpg';
import SeoManage from '../../components/seoManage';
export default function ServicesPage() {
  const dataServices = [
    {
      title: 'Proyek Konstruksi Besar',
      description:
        'Kami menyediakan material cat berkualitas tinggi untuk proyek konstruksi besar. Dengan layanan custom order, kami memastikan kebutuhan spesifik proyek Anda terpenuhi dengan sempurna.',
    },
    {
      title: 'Reseller ke Toko Bangunan',
      description:
        'Kami menawarkan kesempatan bagi toko bangunan untuk menjadi reseller produk cat kami. Dapatkan keuntungan lebih dengan menjual produk cat berkualitas tinggi yang diminati banyak pelanggan.',
    },
    {
      title: 'Pembelian Pribadi untuk Rumah',
      description:
        'Kami menyediakan berbagai pilihan cat untuk kebutuhan pribadi Anda. Baik untuk renovasi rumah atau proyek DIY, produk kami dirancang untuk memberikan hasil terbaik dan tahan lama.',
    },
    {
      title: 'Layanan Lainnya',
      description:
        'Selain layanan utama kami, kami juga menawarkan berbagai layanan tambahan seperti konsultasi warna, pengiriman cepat, dan dukungan teknis untuk memastikan kepuasan pelanggan.',
    },
  ];

  return (
    <div>
      <SeoManage title={'Services'} />
      <div className="flex flex-col md:flex-row md:mx-20 md:my-8  h-fit max-w-screen-2xl">
        <div className="flex  justify-center items-start max-w-xl  h-screen md:me-52">
          <div className="">
            <div className="p-2 md:p-0">
              <h2 className="font-secondaryBold text-5xl md:text-6xl mb-5">
                Layanan Kami
              </h2>
              <p className="mb-6">
                Kami berkomitmen untuk menyediakan produk dan layanan terbaik
                untuk memenuhi kebutuhan Anda. Dari proyek konstruksi besar
                hingga pembelian pribadi, kami siap membantu Anda dengan solusi
                cat berkualitas tinggi.
              </p>
            </div>
            <img
              src={image}
              className="w-fit md:rounded-2xl object-cover"
              alt="Services"
            />
            <img
              src={image2}
              className="w-full object-top bg-cover h-52 mt-2 md:rounded-2xl object-cover"
              alt="Services"
            />
          </div>
        </div>

        <div className="justify-start p-3 md:p-0 text-start md:w-2/3 ">
          {dataServices.map((data, index) => (
            <div key={index}>
              <h2 className="text-4xl font-secondaryBold mb-4">{data.title}</h2>
              <p className="mb-9">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
