import { Button } from '../../../components/widget/button';
import Reveal from '../../../components/widget/Reveal';

export default function ForthSection() {
  return (
    <div className="h-fit w-full p-6 md:p-12">
      <div className="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto gap-6">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-secondaryBold text-start mb-5">
            Jelajahi Koleksi Kami yang
            <br />
            <span className="mt-4 inline-block">Membanggakan</span>
          </h2>
        </Reveal>
        <Reveal
          delay={150}
          className="flex flex-col flex-1 items-start md:items-end"
        >
          <Button link="/pricing" name="View More"></Button>
          <p className="text-start md:text-end mt-5 max-w-md">
            Temukan berbagai produk unggulan kami yang dirancang dengan
            kualitas terbaik untuk memenuhi kebutuhan Anda. Dari bahan
            berkualitas tinggi hingga desain inovatif, setiap produk kami
            dibuat dengan perhatian terhadap detail dan komitmen terhadap
            kepuasan pelanggan.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
