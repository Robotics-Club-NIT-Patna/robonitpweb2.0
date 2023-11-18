import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ChevronRightCircle, ChevronLeftCircle} from 'lucide-react';

const NavBar = () => {

  const [isOpen, setOpen] = useState(false);
  const toggleAccordion = () => {
    setOpen(!isOpen);
  }

  return (
   <>
      <div className=' sm:flex gap-18 p-5'>
        <Link to="/"><div className='p-2 items-center cursor-pointer '>ROBOTICS</div></Link>

        <div className='hidden sm:flex sm:gap-2 sm:ml-auto '>
          <Link to='/about'>
            <div className=' hover:bg-white hover:text-black rounded-md cursor-pointer p-2  items-center'>About</div>
          </Link>
          <Link to="/teams">

            <div className='hover:bg-white hover:text-black rounded-md  cursor-pointer p-2  items-center'>Teams</div>
          </Link>
          <Link to="/gallery">
            <div className='hover:bg-white hover:text-black rounded-md cursor-pointer p-2  items-center'>Gallery</div>
          </Link>
          <Link to="/stories">
            <div className='hover:bg-white hover:text-black rounded-md cursor-pointer  p-2  items-center'>Stories</div>
          </Link>
          <Link to="/experiences">
            <div className='hover:bg-white hover:text-black rounded-md  cursor-pointer p-2 items-center'>Experiences</div>
          </Link>
          <Link to="/getstarted">
            <div className='p-2 justify-center items-center bg-white rounded-md text-black cursor-pointer'>Get Started</div>
          </Link>
        </div>
        {/* accordion */}

        <div className='fixed top-0 right-0 sm:hidden p-8'>

          <div onClick={toggleAccordion}> {isOpen?<ChevronRightCircle size={30} /> :<ChevronLeftCircle size={30}/>} </div>
          {isOpen && (
            <div className=' fixed gap-2 right-0 w-fit z-10 p-4 justify-center cursor-pointer'>
              <Link to='/about'>
                <div className=' hover:bg-white hover:text-black rounded-md cursor-pointer p-2  items-center'>About</div>
              </Link>
              <Link to="/teams">

                <div className='hover:bg-white hover:text-black rounded-md  cursor-pointer p-2  items-center'>Teams</div>
              </Link>
              <Link to="/gallery">
                <div className='hover:bg-white hover:text-black rounded-md cursor-pointer p-2  items-center'>Gallery</div>
              </Link>
              <Link to="/stories">
                <div className='hover:bg-white hover:text-black rounded-md cursor-pointer  p-2  items-center'>Stories</div>
              </Link>
              <Link to="/experiences">
                <div className='hover:bg-white hover:text-black rounded-md  cursor-pointer p-2 items-center'>Experiences</div>
              </Link>
              <Link to="/getstarted">
                <div className='p-2 justify-center items-center bg-white rounded-md text-black cursor-pointer'>Get Started</div>
              </Link>
            </div>


          )}
          </div>
        </div>  
      </>
      )
}

export default NavBar;