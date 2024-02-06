import React from 'react';
import { Linkedin } from 'lucide-react'
import { Instagram } from 'lucide-react'
import { Github } from 'lucide-react'
import { Twitter } from 'lucide-react'
import Buttons from '../components/Buttons'

const Footer = () => {
  return (
    <>
      <div className='mt-20 m-10 flex flex-col  gap-2 justify-center md:flex-row sm:gap-5 md:gap-5 lg:gap-40 '>
            <div className='flex flex-col gap-5'>
                <div className='h-16 w-32 overflow-hidden'><img src='./images/logo.png' alt=''  className='object-cover'/></div>
                <div className='flex gap-2'>
                          <div className='border border-gray-700 p-2 rounded-full '><i><Linkedin color='blue' /></i></div>
                          <div className='border border-gray-700 p-2 rounded-full '><i><Instagram color="#ef2eb5" /></i></div>
                          <div className='border border-gray-700 p-2 rounded-full '><i><Github color='white' /></i></div>
                          <div className='border border-gray-700 p-2 rounded-full '><i><Twitter color="#97dee8" /></i></div>
                </div>
                <div className='text-gray-500'>
                    <h3>Robotics Club NIT Patna</h3>
                    <h3>Ashoka Rajpath, Patna</h3>
                </div>    
            </div>

             <div>
                  <div><h2 className='text-2xl'>About</h2></div>
                  <div className='text-gray-500'>
                       <h3>Blog</h3>
                       <h3>Teams</h3>
                  </div>
             </div>
             <div>
                  <div><h2 className='text-2xl'>Contact</h2></div>
                  <div className='text-gray-500'>
                       <h3>Phone no</h3>
                       <h3>Email</h3>
                  </div>
             </div>
             <div>
                  <div><h2 className='text-2xl'>About</h2></div>
                  <div className='text-gray-500'>
                       <h3>Blog</h3>
                       <h3>Teams</h3>
                  </div>
             </div>
             <div>
                  <div><h2 className='text-2xl'>About</h2></div>
                  <div className='text-gray-500'>
                       <h3>Blog</h3>
                       <h3>Teams</h3>
                  </div>
             </div>
             <div className='flex mt-4'>
                  <Buttons buttonText='Get Started'/>
             </div>
            

      </div>
    </>
  );
};

export default Footer;

