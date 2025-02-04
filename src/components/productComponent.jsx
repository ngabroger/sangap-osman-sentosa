import react from 'react';
import { SliderComponent } from './widget/sliderComponents';

export default function ProductComponent() {
  return (
    <div className="h-1/2 flex justify-center items-center overflow-hidden mt-8">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold font-secondaryBold">Our Products</h1>
        <div className="w-1/2 my-12">
          <SliderComponent />
        </div>
      </div>
    </div>
  );
}
