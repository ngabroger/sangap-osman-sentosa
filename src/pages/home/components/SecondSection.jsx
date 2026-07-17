import { Button } from '../../../components/widget/button';
import Reveal from '../../../components/widget/Reveal';
import imageBackground from '../../../assets/images/background-image-4.png';

export default function SecondSection() {
  return (
    <section className="min-h-fit md:min-h-screen flex justify-center items-center py-12 md:py-0 w-full">
      <div className="grid md:grid-cols-4 gap-8 md:gap-14 items-center max-w-screen-xl w-full px-4 md:px-0">
        <Reveal className="md:col-span-2 w-full overflow-hidden md:rounded-lg group">
          <img
            src={imageBackground}
            className="w-full h-72 md:h-[28rem] object-cover md:rounded-lg transition-transform duration-700 ease-out group-hover:scale-105"
            alt="Sangap Osman Sentosa"
          />
        </Reveal>
        <Reveal
          delay={150}
          className="md:col-span-2 items-center text-center md:text-start md:items-start flex flex-col w-full justify-center"
        >
          <p className="font-primaryMedium">Inovation | Resistance </p>
          <h1 className="font-secondaryBold text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-2">
            Komitmen dalam Kualitas
          </h1>
          <p className="text-wrap md:w-2/3 py-5 md:py-0 md:text-start">
            Komitmen perusahaan terhadap inovasi dibuktikan dengan peluncuran
            berbagai produk unggulan yang dirancang untuk memenuhi standar
            kualitas tertinggi.
          </p>
          <div className="my-5">
            <Button link="/about" name="About Us " />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
