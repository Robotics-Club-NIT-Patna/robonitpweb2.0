import React from 'react';
import Marquee from 'react-fast-marquee';
import { ArrowBigRight } from 'lucide-react';

const MarqueeTwo = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center m-10 w-[90vw] bg-gray-900'>
        <div className='flex flex-col justify-center p-10'>
          <div className='flex flex-row items-center gap-3 w-[84vw] font-anton text-[4.5vw] sm:text-[5vw] xl:text-[6vw] text-white'>
            <div><h3>ROBOTICS</h3></div>
            <div className='flex-grow'>
              <div className='flex bg-green-400  h-[5vw] rounded-3xl overflow-hidden'>
                <Marquee direction='right'>
                  <div className='text-black top-2/4'><ArrowBigRight /></div>
                  <div className='text-black top-2/4 ml-10'><ArrowBigRight /></div>
                  <div className='text-black top-2/4 ml-10'><ArrowBigRight /></div>
                </Marquee>
              </div>
            </div>
            <div>CLUB</div>
          </div>

          <div className='flex flex-row items-center gap-3 w-[84vw]   font-anton text-[4.5vw] sm:text-[5vw]  xl:text-[6vw] text-white'>
            <div>IDEAS</div>
            <div>TO REALITY</div>
            <div className='flex-grow'>
              <div className='flex justify-center items-center  h-[5vw]     rounded-3xl bg-yellow-200'>
                <Marquee>
                  <div className='text-black top-2/4'><ArrowBigRight /></div>
                  <div className='text-black top-2/4 ml-10'><ArrowBigRight /></div>
                  <div className='text-black top-2/4 ml-10'><ArrowBigRight /></div>
                </Marquee>
              </div>
            </div>
          </div>

          <div className='flex flex-row items-center gap-3 font-anton w-[84]  text-[4.5vw] sm:text-[5vw]  xl:text-[6vw] text-white'>
            <div
              style={{
                WebkitTextStroke: '1px white',
                color: 'black',
                textStroke: '1px white'
              }}
            >SINCE</div>
            <div
              style={{
                WebkitTextStroke: '1px white',
                color: 'black',
                textStroke: '1px white'
              }}
            >2018</div>
            <div className='flex-grow'>
              <div className='flex items-center overflow-y-hidden bg-green-400 h-[5vw] relative rounded-3xl overflow-hidden'>
                <Marquee>
                  <div className='text-black top-2/4'><ArrowBigRight /></div>
                  <div className='text-black top-2/4 ml-10'><ArrowBigRight /></div>
                  <div className='text-black top-2/4 ml-10'><ArrowBigRight /></div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarqueeTwo;
