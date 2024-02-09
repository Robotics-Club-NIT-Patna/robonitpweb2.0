import React from 'react'
import CarouselCard from './CarouselCard'
import carouselCardData from '../../carouselCardData'
import Carousel from 'react-elastic-carousel'
const Carousels = () => {

  const breakPoints = [
   {width: 1, itemsToShow: 1},
   {width: 1000, itemsToShow: 2},
   {width: 768, itemsToShow: 3}
  ];

  return (
    <>
      <div className='flex ml-10 overflow-x-scroll overflow-y-hidden gap-10'>
        <Carousel breakPoints={breakPoints}>
          {carouselCardData.map((it) => (
          
                <CarouselCard key={it.id} imageUrl={it.imageUrl} head1={it.head1} head2={it.head2} backgroundColor={it.backgroundColor} para={it.para} />
            
          ))}
        </Carousel>
      </div>

      <div className='flex justify-center gap-4 mt-8'>
        <div className='h-1 w-6 bg-gray-500 hover:bg-white rounded-sm hover:cursor-pointer'></div>
        <div className='h-1 w-6 bg-gray-500 hover:bg-white rounded-sm hover:cursor-pointer'></div>
        <div className='h-1 w-6 bg-gray-500 hover:bg-white rounded-sm hover:cursor-pointer'></div>
      </div>
    </>
  );
};

export default Carousels;