import React from 'react';
import { Linkedin } from 'lucide-react'
import { Instagram } from 'lucide-react'
import { Github } from 'lucide-react'
import { Twitter } from 'lucide-react'
import CardMarquee from '../HomePageComponents/CardMarquee';
import Buttons from '../Buttons';

const App = () => {
  return (
    <>

      <div className='flex flex-row mt-20'>
        <div className='w-2/4'>
          <div className='min-h-screen flex just-center items-center bg-bg1  bg-black bg-no-repeat bg-cover sticky top-0 -z-50' ></div>
          <div className='min-h-screen flex just-center items-center bg-bg1  bg-black bg-no-repeat bg-cover sticky top-0 -z-40' ></div>
          <div className='min-h-screen flex just-center items-center bg-bg1  bg-black bg-no-repeat bg-cover  -z-20' ></div>
        </div>

        
        <div className='bg-orange-400 w-2/4'>
              <div  className='bg-orange-400 min-h-screen flex flex-col items-center justify-center p-20'>
                   <div className='flex gap-4'>
                       <h1 className='text-black font-anton text-7xl'>CLASSIC</h1>
                       <h1
                          style={{
                            WebkitTextStroke: '1px black',
                            textStroke:'1px black'
                          }}
                          className='font-anton text-7xl'
                       >DESIGN</h1>
                     </div>
                     <div className='mt-6 text-black font-bold'>
                          <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum id dignissimos nesciunt velit autem magnam delectus consequatur consequuntur dolores, optio nisi, minima nostrum a temporibus sequi ratione ullam. Accusamus quia architecto quis aspernatur? Libero quasi animi earum, praesentium neque mollitia.</p>
                     </div>
                     <div className='mt-10'>
                         <Buttons buttonText='Get Started' />
                     </div>
              </div>
              
              <div  className='bg-green-400 min-h-screen flex flex-col items-center justify-center p-20'>
                   <div className='flex gap-4'>
                       <h1 className='text-black font-anton text-7xl'>CLASSIC</h1>
                       <h1
                          style={{
                            WebkitTextStroke: '1px black',
                            textStroke:'1px black'
                          }}
                          className='font-anton text-7xl'
                       >DESIGN</h1>
                     </div>
                     <div className='mt-6 text-black font-bold'>
                          <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum id dignissimos nesciunt velit autem magnam delectus consequatur consequuntur dolores, optio nisi, minima nostrum a temporibus sequi ratione ullam. Accusamus quia architecto quis aspernatur? Libero quasi animi earum, praesentium neque mollitia.</p>
                     </div>
                     <div className='mt-10'>
                         <Buttons buttonText='Get Started' />
                     </div>
              </div>

              <div  className=' bg-red-500 min-h-screen flex flex-col items-center justify-center p-20'>
                   <div className='flex gap-4'>
                       <h1 className='text-black font-anton text-7xl'>CLASSIC</h1>
                       <h1
                          style={{
                            WebkitTextStroke: '1px black',
                            textStroke:'1px black'
                          }}
                          className='font-anton text-7xl'
                       >DESIGN</h1>
                     </div>
                     <div className='mt-6 text-black font-bold'>
                          <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum id dignissimos nesciunt velit autem magnam delectus consequatur consequuntur dolores, optio nisi, minima nostrum a temporibus sequi ratione ullam. Accusamus quia architecto quis aspernatur? Libero quasi animi earum, praesentium neque mollitia.</p>
                     </div>
                     <div className='mt-10'>
                         <Buttons buttonText='Get Started' />
                     </div>
              </div>
              
        </div>

      </div>
    </>
  );
};

export default App;

