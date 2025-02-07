import { Button } from '../../../components/widget/button';
import imageBackground from '../../../assets/images/background-image-4.png';
import { Link } from 'react-router-dom';

export default function SecondSection() {
  return (
    <section className="h-screen  flex justify-center items-center  w-fit">
      <div className="grid md:grid-cols-4 gap-14 h-full  ">
        <div className=" md:col-span-2 md:py-28 justify-center  w-full max-w-screen ">
          <img
            src={imageBackground}
            className="w-full h-full  object-cover  md:m-6 md:rounded-lg"
            alt="Test"
          />
        </div>
        <div className="md:col-span-2 items-center text-center md:text-start md:items-start flex flex-col w-full justify-center max-w-screen ">
          <p className="font-primaryMedium ">Inovation | Resistance </p>
          <h1 className="font-secondaryBold text-4xl md:text-7xl  mb-2 ">
            Komitmen dalam Kualitas
          </h1>
          <p className=" text-wrap md:w-2/3 p-5 md:p-0  md:text-start">
            Komitmen perusahaan terhadap inovasi dibuktikan dengan peluncuran
            berbagai produk unggulan yang dirancang untuk memenuhi standar
            kualitas tertinggi.
          </p>
          <div className="my-5">
            <Button link="/about" name="About Us " />
          </div>
        </div>
      </div>
    </section>
  );
}
