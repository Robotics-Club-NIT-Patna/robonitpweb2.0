import React from 'react'
import CarouselCard from './CarouselCard'
import carouselCardData from '../../carouselCardData'
const Carousel = () => {
  return (
    <>
    <div className='flex ml-10 overflow-x-scroll overflow-y-hidden gap-20'>
        {carouselCardData.map((item)=>(
                <CarouselCard key={item.id} imageUrl={item.imageUrl} head1={item.head1} head2={item.head2} backgroundColor={item.backgroundColor} para={item.para}/>
        ))}
         
    </div>

<div className='flex justify-center gap-4 mt-8'>
   <div className='h-1 w-6 bg-gray-500 hover:bg-white rounded-sm hover:cursor-pointer'></div>
   <div className='h-1 w-6 bg-gray-500 hover:bg-white rounded-sm hover:cursor-pointer'></div>
   <div className='h-1 w-6 bg-gray-500 hover:bg-white rounded-sm hover:cursor-pointer'></div>
</div>
</>
  );
};

export default Carousel;