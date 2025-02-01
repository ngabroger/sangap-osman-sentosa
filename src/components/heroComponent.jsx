import { SliderComponent } from './sliderComponents';

export function HeroComponent() {
  return (
    <div className="items-center flex flex-col  h-screen dark:bg-gray-800 ">
      <h1 className="text-3xl font-bold text-white mt-32">
        CAT PELAPIS ANTI BOCOR:{' '}
      </h1>
      <p className="text-2xl mt-4 text-white font-bold ">
        Melindungi Seluruh <span className="text-blue-400"> RUMAH</span> Anda
      </p>
      <div className="justify-center w-1/2 bottom-0 absolute">
        <h2 className="text-center p-12 text-3xl font-bold text-white">
          Our Product
        </h2>
        <SliderComponent />
      </div>
    </div>
  );
}
