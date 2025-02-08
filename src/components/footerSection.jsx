import image1 from '../assets/images/background-image-5.png';
import image2 from '../assets/images/logosos.svg';
import { Link } from 'react-router-dom';
export default function FooterSection() {
  return (
    <div className="w-full bg-blue-500 h-fit p-10">
      <div className="grid md:grid-cols-2 w-full gap-6 ">
        <div className="flex justify-center items-center">
          <div className="relative">
            <h2 className="text-3xl text-center md:text-start md:text-6xl text-blue font-secondaryBold  ">
              Engage with Us in{' '}
              <span className="block md:mt-6">Conversation.</span>
            </h2>
            <p className="mt-12 text-justify md:text-start">
              Kami menghargai masukan Anda dan selalu siap membantu Anda. Jika
              Anda memiliki pertanyaan tentang produk kami, butuh saran untuk
              proyek Anda berikutnya, atau ingin berbagi pengalaman dengan kami,
              kami siap membantu Anda.
            </p>
          </div>
        </div>
        <div className="md:py-12 md:px-10">
          <img src={image1} className="  rounded-3xl" alt="" />
        </div>
      </div>
      <div className="grid md:grid-cols-4 w-full gap-10 mt-12">
        <div className="flex flex-col gap-3">
          <Link to="/about" className="text-2xl font-secondaryBold">
            About Us
          </Link>
          <p className="text-sm">
            Kami adalah perusahaan terkemuka dalam industri cat, yang
            berkomitmen untuk menyediakan solusi cat tembok berkualitas tinggi
            dan inovatif. Misi kami adalah mengubah ruangan dengan warna yang
            menginspirasi dan tahan lama.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Link to="/services" className="text-2xl font-secondaryBold">
            Services
          </Link>
          <p className="text-sm">Proyek Konstruksi Besar</p>
          <p className="text-sm">Reseller ke Toko Bangunan</p>
          <p className="text-sm">Pembelian Pribadi untuk Rumah</p>
        </div>
        <div className="flex flex-col gap-3">
          <Link to="/contact" className="text-2xl font-secondaryBold">
            Contact Us
          </Link>
          <p className="text-sm">Phone: +62 851 5677 0062</p>
          <p className="text-sm">Email: sangaposmansentosa@gmail.com</p>
          <p className="text-sm">
            Address: Jl Kampung Pisang RT 01 RW 06 Kel, Karadenan Kec, Cibinong
            Kab Bogor Jawa Barat
          </p>
        </div>
        <div>
          <img src={image2} className="w-52" alt="" />
        </div>
      </div>
    </div>
  );
}
