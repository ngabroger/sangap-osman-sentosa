import React, { useState, useEffect } from 'react';
import { items } from '../../model/items';
import RoundedButton from './roundedButton';
import SkeletonCard from './skeletonCard';

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
    <div className="flex justify-center items-center m-12 h-fit">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-screen-xl">
        {items.map((item, index) => {
          const isLastRow = index >= items.length - (items.length % 3);
          return (
            <div
              key={item.id}
              className={`relative bg-cover bg-center bg-no-repeat rounded-lg shadow-md h-64 flex flex-col justify-end overflow-hidden transition-transform transform hover:scale-105 ${
                isLastRow ? 'col-span-full' : ''
              }`}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
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
          );
        })}
      </div>
    </div>
  );
}
