import React, { useState, useEffect } from 'react';
import { items } from '../../model/items';
import RoundedButton from './roundedButton';
import SkeletonCard from './skeletonCard';
import Reveal from './Reveal';

export default function CardList() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center m-12 h-fit">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 max-w-screen-xl">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center m-6 md:m-12 h-fit">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-screen-xl">
        {items.map((item, index) => {
          const isLastRow = index >= items.length - (items.length % 3);
          return (
            <Reveal
              key={item.id}
              delay={(index % 3) * 120}
              className={isLastRow ? 'col-span-full' : ''}
            >
              <div className="group relative rounded-lg shadow-md h-64 flex flex-col justify-end overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-100 group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-40"></div>
                <div className="relative p-4 z-10 text-white flex flex-col justify-end h-full">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">{item.title}</h2>
                    <div className="ml-4">
                      <RoundedButton
                        link={`/detail/${item.id}`}
                        name="View Details"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
