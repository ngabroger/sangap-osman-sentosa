import React, { useEffect } from 'react';
import image1 from '../assets/images/images1.png';
import images2 from '../assets/images/images2.png';
import images3 from '../assets/images/images3.png';
import images4 from '../assets/images/images4.png';
import '../index.css';

export function SliderComponent() {
  const logos = [
    image1,
    images2,
    images3,
    images4,
    image1,
    images2,
    images3,
    images4,
  ];

  useEffect(() => {
    function addAnimation() {
      const scroller = document.querySelector('.scroller');
      if (!scroller) return;
      const innerScroller = scroller.querySelector('.scroll_inner');
      if (!innerScroller) return;
      if (innerScroller.getAttribute('data-cloned') === 'true') return;

      const innerScrollerChildren = Array.from(innerScroller.children);
      innerScrollerChildren.forEach((item) => {
        const extendedLogos = item.cloneNode(true);
        innerScroller.appendChild(extendedLogos);
      });

      innerScroller.setAttribute('data-cloned', 'true');
    }

    addAnimation();
  }, []);

  return (
    <div className="overflow-hidden whitespace-nowrap scroller ">
      <div className="animate-scroll flex scroll_inner">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index}`}
            className="h-16 mx-4"
          />
        ))}
      </div>
    </div>
  );
}
