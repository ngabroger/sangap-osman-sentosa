import { SliderComponent } from '../../../components/widget/sliderComponents';
import Reveal from '../../../components/widget/Reveal';

export default function ThirdSection() {
  return (
    <div className="h-fit flex justify-center items-center overflow-hidden mt-8 py-8">
      <div className="flex flex-col items-center w-full">
        <Reveal>
          <h1 className="text-3xl md:text-4xl font-bold font-secondaryBold text-center">
            Our Products
          </h1>
        </Reveal>
        <Reveal delay={150} className="w-4/5 md:w-1/2 my-10 md:my-12">
          <SliderComponent />
        </Reveal>
      </div>
    </div>
  );
}
