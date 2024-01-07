import React from 'react'

const CarouselCard = ({imageUrl,head1, head2, backgroundColor,para}) => {
   
    
  return (
   <>
       
          <div className='flex-col rounded-3xl bg-slate-50 ' >
               <div className=' main flex justify-center overflow-hidden  bg-green-500 ' style={{width:'24rem',height:'22rem'}}>
                    <img className=' w-auto' src={imageUrl} alt='' style={{height:'23rem'}}/>
               </div>
               <div className='p-8  bg-customPink' style={{height:'20rem'}}>
                    <div className='flex justify-center  '><h1 className='text-black text-7xl font-anton'>{head1}</h1></div>
                    <div className=''
                         style={{
                                    WebkitTextStroke:'1px black',
                                    stroke:'1px black',
                                    color:'transparent'    
                               }}      
                    >
                     <h1 className='flex justify-center font-anton text-7xl'>{head2}</h1>
                    </div>
                    <div className='flex justify-center text-black mt-6'><p>{para}</p></div>
                    
               </div>
            </div>       
     

    
   </>
  )
}

export default CarouselCard