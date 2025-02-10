import image from '../../assets/images/services.jpg';
export default function AboutPage() {
  const ourCons = [
    {
      id: 1,
      title: '2.5',
      desc: 'Years Experience',
    },
    {
      id: 2,
      title: '1000+',
      desc: 'Pembuatan Proyek Sukses',
    },
    {
      id: 3,
      title: '250+',
      desc: 'Positive reviews',
    },
    {
      id: 4,
      title: '500 +',
      desc: 'Kepercayaan dari Konsumen',
    },
  ];

  return (
    <div className="w-full h-fit">
      <div className="h-fit w-full ">
        <div className="flex flex-col md:flex-row items-center max-w-screen-xl justify-between h-1/2   mx-auto">
          <div className="text-start md:w-1/2 mb-5 p-3 ">
            <p className="font-primaryMedium text-xl mb-3 text-blue-500">
              Tentang Kami
            </p>
            <h2 className="font-secondaryBold text-5xl md:text-6xl w-10/12">
              Komitmen Kami dalam Kualitas
            </h2>
          </div>
          <div className="p-0 md:w-1/2 flex justify-center">
            <img
              src={image}
              className="md:rounded-xl h-auto w-screen md:w-full"
              alt="Tentang Kami"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center max-w-screen-xl justify-between h-1/2 p-4  md:p-12 mx-auto">
          <div className="md:w-1/2">
            <p className="text-justify font-primaryRegular md:text-start  ">
              PT SANGAP OSMAN SENTOSA didirikan dengan visi untuk menjadi
              pelopor dalam industri bahan bangunan dan pelapis di Indonesia.
              Sejak awal berdirinya, perusahaan ini telah memfokuskan diri pada
              inovasi dan kualitas produk, menghadirkan solusi terbaik bagi
              kebutuhan pelanggan. Dengan dedikasi terhadap keunggulan, PT
              SANGAP OSMAN SENTOSA terus berkembang dan memperluas lini
              produknya, mencakup berbagai sektor mulai dari bahan konstruksi
              hingga pelapis cat dan perekat.
              <br />
              Komitmen perusahaan terhadap inovasi dibuktikan dengan peluncuran
              berbagai produk unggulan yang dirancang untuk memenuhi standar
              kualitas tertinggi. Dalam perjalanannya, perusahaan telah bermitra
              dengan berbagai perusahaan besar dan berkontribusi pada
              proyek-proyek berskala nasional
            </p>
          </div>
          <div className="p-6 md:p-0 flex justify-center items-center md:ms-24 md:w-1/2 w-screen">
            <div className="flex justify-center  w-screen md:w-full items-center">
              <div className="grid grid-cols-2 md:grid-cols-2 md:gap-x-48 gap-6  md:gap-y-24">
                {ourCons.map((item) => (
                  <div key={item.id} className="flex flex-col">
                    <h2 className="font-secondaryBold text-2xl mb-3">
                      {item.title}
                    </h2>
                    <p className="text-sm font-secondaryLight">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
