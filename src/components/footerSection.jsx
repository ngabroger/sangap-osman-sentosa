import image1 from '../assets/images/second-image.png';
import image2 from '../assets/images/logosos.svg';
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
              dolores laborum necessitatibus! Distinctio laborum eveniet iure
              mollitia, ea architecto minus? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Omnis necessitatibus quisquam
              possimus quod culpa voluptatibus!
            </p>
          </div>
        </div>
        <div className="md:py-12 md:px-10">
          <img src={image1} className="  rounded-3xl" alt="" />
        </div>
      </div>
      <div className="grid md:grid-cols-4 w-full gap-10 mt-12">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-secondaryBold">About Us</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quod, quae, voluptatum, quos quas dolorum.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-secondaryBold">Services</h2>
          <p className="text-sm">Painting</p>
          <p className="text-sm">Renovation</p>
          <p className="text-sm">Consultation</p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-secondaryBold">Contact Us</h2>
          <p className="text-sm">+62 812 3456 7890</p>
          <p className="text-sm"></p>
        </div>
        <div>
          <img src={image2} className="w-52" alt="" />
        </div>
      </div>
    </div>
  );
}
