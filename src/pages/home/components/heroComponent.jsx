import React from 'react';
import { Button } from '../../../components/widget/button';

export default function HeroComponent() {
  return (
    <section className="items-center flex flex-col h-fit mb-12">
      <section className="relative bg-center md:rounded-3xl bg-no-repeat background-image bg-gray-400 bg-blend-multiply overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

        <div className="relative px-4 mx-auto max-w-screen-xl w-screen text-center py-20 md:py-28">
          <span className="inline-block animate-fadeInUp opacity-0 [animation-delay:100ms] text-white/90 text-xs md:text-sm tracking-[0.3em] uppercase font-primaryMedium border border-white/40 rounded-full px-4 py-1 mb-6 backdrop-blur-sm">
            Sangap Osman Sentosa
          </span>

          <h1 className="animate-fadeInUp opacity-0 [animation-delay:250ms] mt-4 text-4xl sm:text-5xl font-extrabold font-secondaryBold tracking-tight leading-none text-white md:text-7xl lg:text-8xl xl:text-9xl">
            Extreme Waterproof
          </h1>

          <div className="animate-fadeInUp opacity-0 [animation-delay:450ms] flex flex-col space-y-4 sm:flex-row sm:space-y-0 text-start mt-10 justify-center">
            <div className="w-full sm:w-auto">
              <div className="flex flex-col items-start bg-gray-500 border bg-opacity-30 backdrop-blur-sm border-gray-200 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1 md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <p className="mb-3 text-white font-primaryRegular dark:text-gray-400">
                    Pelapis anti bocor berkualitas tinggi untuk berbagai
                    permukaan, memberikan perlindungan jangka panjang terhadap
                    kebocoran.
                  </p>

                  <Button link="/detail/1" name="View More" />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex justify-center mt-16 animate-bounceDown">
            <svg
              className="w-6 h-6 text-white/80"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>
    </section>
  );
}
