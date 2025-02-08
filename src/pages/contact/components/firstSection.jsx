import { Button } from 'flowbite-react';

export default function FirstSection() {
  return (
    <div className="h-fit w-full ">
      <div className="h-fit bg-blue-100 flex flex-col md:flex-row justify-between p-6 md:p-16 ">
        <div className="flex flex-col md:flex-col justify-center mb-12">
          <h2 className="font-secondaryBold  text-6xl mb-5">Contact Us</h2>
          <p className="max-w-xl">
            Kami selalu siap mendengar dari Anda. Jika Anda memiliki pertanyaan,
            saran, atau membutuhkan informasi lebih lanjut tentang produk dan
            layanan kami, jangan ragu untuk menghubungi kami. Tim kami akan
            dengan senang hati membantu Anda.
          </p>
          <div className="grid-cols-1  grid mt-5 mb-12 gap-y-3">
            <p>sangaposmansentosa@gmail.com</p>
            <p> +62 851 5677 0062</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <h2 className="font-secondaryBold mb-2">
                Feedback and Suggestions
              </h2>
              <p className="max-w-md">
                Kami sangat menghargai masukan dan saran dari Anda. Jika Anda
                memiliki ide atau umpan balik yang dapat membantu kami
                meningkatkan produk dan layanan kami, jangan ragu untuk
                menghubungi kami. Kami berkomitmen untuk terus berinovasi dan
                memberikan yang terbaik bagi pelanggan kami.
              </p>
            </div>
            <div className="flex flex-col">
              <h2 className="font-secondaryBold mb-2">Media Inquiring</h2>
              <p className="max-w-md">
                Untuk pertanyaan media, wawancara, atau permintaan informasi
                lebih lanjut tentang perusahaan kami, silakan hubungi tim media
                kami. Kami siap membantu Anda dengan informasi yang Anda
                butuhkan dan menjawab pertanyaan Anda seputar produk dan layanan
                kami.
              </p>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center h-full md:ms-12 md:w-1/2">
          <div className="flex flex-col  text-start  shadow-lg  p-6 bg-white rounded-2xl">
            <h2 className="text-4xl font-secondaryBold mb-3">Our Shop</h2>
            <p>
              Temukan produk kami di platform e-commerce terkemuka. Kami hadir
              di Tokopedia dan Shopee untuk memudahkan Anda dalam mendapatkan
              produk cat berkualitas tinggi kami. Klik tombol di bawah untuk
              mengunjungi toko online kami dan temukan berbagai penawaran
              menarik.
            </p>
            <div className="grid grid-cols-1 gap-y-3 mt-5 font-secondaryBold">
              <Button href="https://www.tokopedia.com/catosman" color="success">
                Tokopedia
              </Button>
              <Button color="warning">Shopee</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
