export default function SecondSection() {
  return (
    <div className="w-full h-screen ">
      <div className="flex md:flex-row  md:p-12 flex-col items-center h-screen justify-between">
        <div className="w-full md:me-12 md:w-1/2 h-full p-4">
          <div className="relative h-full w-full ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.1192372169!2d106.8126228102246!3d-6.50658749345856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c30073aa25fd%3A0x5b85c9a68838979b!2sPT%20Sangap%20Osman%20Sentosa!5e0!3m2!1sid!2sid!4v1739017863026!5m2!1sid!2sid"
              className="absolute inset-0 w-full md:rounded-2xl h-full border-1 md:shadow-2xl border-black"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="p-6 md:w-1/2 text-start">
          <p className="text-gray-700 mb-2">Our Location</p>
          <h2 className="text-4xl font-bold font-secondaryBold">
            Connecting Near And Far
          </h2>
          <h4 className="mt-5 font-secondaryBold">Factory</h4>
          <p className="w-full mt-3 md:w-1/2 ">
            Jl Kampung Pisang RT 01 RW 06 Kel, Karadenan Kec, Cibinong Kab Bogor
            Jawa Barat
          </p>
        </div>
      </div>
    </div>
  );
}
