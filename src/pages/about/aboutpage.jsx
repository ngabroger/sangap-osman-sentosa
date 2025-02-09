import image from '../../assets/images/services.jpg';
export default function AboutPage() {
  return (
    <div className="w-full h-fit">
      <div className="h-screen w-full ">
        <div className="flex flex-col md:flex-row justify-center items-center w-full   h-1/2 p-12">
          <div className=" text-start">
            <p className="font-primaryMedium text-xl mb-3 text-blue-500">
              Tentang Kami
            </p>
            <h2 className="font-secondaryBold text-6xl w-10/12">
              Komitmen Kami dalam Kualitas
            </h2>
          </div>
          <div className="ms-5">
            <img src={image} className="rounded-xl h-1/2 w-1/2" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
