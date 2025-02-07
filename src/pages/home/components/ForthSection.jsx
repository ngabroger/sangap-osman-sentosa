import { Button } from '../../../components/widget/button';
export default function ForthSection() {
  return (
    <div className=" h-fit w-full p-12">
      <div className="flex flex-col md:flex-row justify-between">
        <h2 className="text-4xl md:text-6xl font-secondaryBold text-end md:text-start mb-5">
          Jelajahi Koleksi Kami yang
          <br />
          <span className="mt-4 inline-block">Membanggakan</span>
        </h2>
        <div className="flex flex-col flex-1 items-end">
          <Button link="/pricing" name="View More"></Button>
          <p className="text-end mt-5 max-w-md">
            Temukan berbagai produk unggulan kami yang dirancang dengan kualitas
            terbaik untuk memenuhi kebutuhan Anda. Dari bahan berkualitas tinggi
            hingga desain inovatif, setiap produk kami dibuat dengan perhatian
            terhadap detail dan komitmen terhadap kepuasan pelanggan.
          </p>
        </div>
      </div>
    </div>
  );
}
