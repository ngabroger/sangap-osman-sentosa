import React from 'react';
import { Button } from './widget/button';
export default function HeroComponent() {
  return (
    <section className="items-center flex flex-col  h-fit mb-12 ">
      <section class="bg-center md:rounded-3xl bg-no-repeat background-image  bg-gray-400 bg-blend-multiply">
        <div class="px-4 mx-auto max-w-screen-xl w-screen text-center py-24 ">
          <h1 class="mt-12 text-6xl font-extrabold font-secondaryBold tracking-tight leading-none text-white md:text-6xl lg:text-9xl">
            Extreme Waterproof
          </h1>

          <div class="flex flex-col space-y-4 sm:flex-row  sm:space-y-0 text-start mt-12">
            <div className="">
              <div class="flex flex-col items-start bg-gray-500 border  bg-opacity-30 backdrop-blur-sm border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div class="flex flex-col justify-between p-4 leading-normal">
                  <p class="mb-3  text-white font-primaryRegular   dark:text-gray-400">
                    Pelapis anti bocor berkualitas tinggi untuk berbagai
                    permukaan, memberikan perlindungan jangka panjang terhadap
                    kebocoran.
                  </p>

                  <Button link="#" name="View More" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
