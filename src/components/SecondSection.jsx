import { Button } from './widget/button';
import imageBackground from '../assets/images/second-image.png';

export default function SecondSection() {
  return (
    <section className="h-screen  flex justify-center items-center  w-full max-w-screen">
      <div className="grid md:grid-cols-4 gap-14 h-full  ">
        <div className=" md:col-span-2 md:py-28 justify-center  w-full max-w-screen ">
          <img
            src={imageBackground}
            className="w-auto h-full  bg-no-repeat  bg-cover  md:m-6 md:rounded-lg"
            alt="Test"
          />
        </div>
        <div className="md:col-span-2 items-center text-center md:text-start md:items-start flex flex-col w-full justify-center max-w-screen ">
          <p className="font-primaryMedium ">Elegance | Timeless </p>
          <h1 className="font-secondaryBold text-4xl md:text-7xl  mb-3 ">
            Modern Style
          </h1>
          <h1 className="font-secondaryBold text-4xl md:text-7xl ">
            Timeless Charm
          </h1>
          <p className=" text-wrap md:w-1/2 p-5 md:p-0 mt-5 md:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            voluptatibus, animi molestias in esse accusantium!
          </p>
          <div className="my-5">
            <Button link="#" name="About Us " />
          </div>
        </div>
      </div>
    </section>
  );
}
