import React from 'react';
import { Button } from './widget/button';
export default function HeroComponent() {
  return (
    <section className="items-center flex flex-col  h-screen dark:bg-gray-800  ">
      <section class="bg-center md:rounded-3xl bg-no-repeat background-image bg-gray-400 bg-blend-multiply">
        <div class="px-4 mx-auto max-w-screen-xl w-screen text-center py-24 lg:py-56">
          <h1 class="mb-16 text-6xl font-extrabold font-secondaryBold tracking-tight leading-none text-white md:text-6xl lg:text-9xl">
            Extreme Waterproof
          </h1>

          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 text-start">
            <div className="lg:right-2/3 lg:absolute lg:w-[25%]">
              <div class="flex flex-col items-start bg-gray-500 border  bg-opacity-30 backdrop-blur-sm border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div class="flex flex-col justify-between p-4 leading-normal">
                  <p class="mb-3  text-white font-primaryRegular   dark:text-gray-400">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nemo officia numquam quaerat recusandae voluptatum neque.
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
