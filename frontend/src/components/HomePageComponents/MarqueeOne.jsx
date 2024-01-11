import React, { useEffect, useState } from 'react';
import '../../../src/App.css';
import Marquee from 'react-marquee-slider';

const MarqueeOne = () => {
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollX = window.scrollY;
      console.log('ScrollX:', newScrollX);
      setScrollX(newScrollX);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const images = [
    './images/arduino ide.png',
    './images/arduino ide.png',
    './images/arduino ide.png',
    './images/arduino ide.png',
    './images/arduino ide.png',
    './images/arduino ide.png',
    './images/arduino ide.png',
    './images/arduino ide.png',
    './images/arduino ide.png',
    './images/arduino ide.png',
    './images/arduino ide.png',
    './images/arduino ide.png',
    './images/arduino ide.png',
    './images/arduino ide.png',
    './images/arduino ide.png',

  ];

  return (
    <>
      <div
        className='loop-track mt-20 w-full'

      >
        <div className='loop-content flex  w-full'

        >
          <Marquee>
            {images.map((src, index) => (
              <div key={index} className='item ml-10'
                style={{
                  transform: `translate(-${scrollX / 2}%, 0%) translate3d(0px, 0px, 0px)`,
                }}
              >
                <img src={src} alt={`Item ${index}`} width='' height='' className='h-16 w-20 object-cover' />
              </div>
            ))}
          </Marquee>

        </div>
      </div>

      <div
        className='loop-track mt-20 w-full  '

      >
        <div className='loop-content flex  w-full'

        >
          <Marquee direction=''>
            {images.map((src, index) => (
              <div key={index} className='item ml-10'
                style={{
                  transform: `translate(-${scrollX / 2}%, 0%) translate3d(0px, 0px, 0px)`,
                }}
              >
                <img src={src} alt={`Item ${index}`} width='' height='' className='h-16 w-20 object-cover' />
              </div>
            ))}
          </Marquee>

        </div>
      </div>
    </>
  );
};

export default MarqueeOne;
