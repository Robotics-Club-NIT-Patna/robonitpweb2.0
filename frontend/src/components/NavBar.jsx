import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AlignJustify, X } from 'lucide-react';
import '../App.css'
import '../../public/images/Untitled.jpg'
const NavBar = () => {

  const [circleSize, setCircleSize] = useState(0);

  const [opacity, setOpacity] = useState(0);
  const [isOpen, setOpen] = useState(false);

  const toggleAccordion = () => {
    setOpen(!isOpen);
   
  }
 
   


  useEffect(() => {
    if (isOpen) {
      const fadeInInterval = setInterval(() => {
        setOpacity((prevOpacity) => Math.min(prevOpacity + 0.05, 1));
      }, 25); 
      return () => clearInterval(fadeInInterval);
    } else {
      // const fadeOutInterval = setInterval(() => {
      //   setOpacity((prevOpacity)=> Math.max(prevOpacity - 0.5, 1))
      // }, 40);

      // return () => clearInterval(fadeOutInterval)
      setOpacity(0)
    }
  }, [isOpen]);

 

  useEffect(()=>{
    if(isOpen){
      let currentSize = 0;
      const increaseSize = () =>{
        if(currentSize < 140){
          setCircleSize(currentSize);
          currentSize += 3;
          setTimeout(increaseSize, 1)
        }else{
          setCircleSize(140);
        }
      };
      increaseSize();
    }else{
      let currentSize = 140;
      const decreaseSize = () =>{
        if(currentSize >= 140){
          setCircleSize(currentSize);
          currentSize -= 3;
          setTimeout(decreaseSize, 1)
        }else{
          setCircleSize(0);
        }
      }
      decreaseSize();
    }  
  },[isOpen]);

  return (
    <>
      <div className=' sm:flex gap-18 p-5 font-mono bg-black '>
             <Link to="/"><div className='p-2 items-center'><img src='../../public/images/Untitled.jpg' alt='' className='h-20 cursor-pointer' /></div></Link>

              <div className='hidden sm:flex sm:gap-2 sm:ml-auto '>
                    <Link to='/about'>
                          <div className=' hover:bg-white hover:text-black rounded-md cursor-pointer p-2  items-center '>About</div>
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

              <div className='fixed top-0 right-0 sm:hidden p-8 font-anton flex justify-end w-full'>

                     <div onClick={toggleAccordion}> {!isOpen && <div className=' w-full'><AlignJustify size={30} /></div>}

              </div>

          {isOpen && (
            <div>
                    <div className={`circle bg-black fixed top-0 right-0 rounded-bl-full ${isOpen ? 'transition-all duration-3 ease-in-out' : ''}`}style={{ width: `${circleSize}%`, height: `${circleSize}%` }}></div>
                    <div className='fixed top-0 right-0 sm:hidden p-8 font-anton flex justify-end  w-full'>
                           <div onClick={toggleAccordion} ><div className=' w-full'><X size={30} /></div></div>
                    </div>

               <div  className=' fixed gap-2 right-0  z-10 p-4 w-full mt-10 flex-col justify-center items-center cursor-pointer  h-full text-white  '>
                   <Link to='/about'>
                          <div className='hover:bg-white hover:text-black rounded-md cursor-pointer p-2 flex justify-center items-center  transition-all hover:translate-x-1 ease-in-out text-5xl mt-5' style={{ opacity, transition: 'opacity 0.1s ease-in-out' }}>About</div>
                   </Link>
                   <Link to="/teams">
                          <div className='hover:bg-white hover:text-black rounded-md  cursor-pointer p-2  flex justify-center items-center text-5xl mt-5' style={{ opacity, transition: 'opacity 0.2s ease-in-out' }}>Teams</div>
                   </Link>
                   <Link to="/gallery">
                          <div className='hover:bg-white hover:text-black rounded-md cursor-pointer p-2  flex justify-center items-center text-5xl mt-5 ' style={{ opacity, transition: 'opacity 0.3s ease-in-out' }}>Gallery</div>
                   </Link>
                   <Link to="/stories">
                          <div className='hover:bg-white hover:text-black rounded-md cursor-pointer  p-2  flex justify-center items-center text-5xl mt-5' style={{ opacity, transition: 'opacity 0.4s ease-in-out' }}>Stories</div>
                   </Link>
                   <Link to="/experiences">
                          <div className='hover:bg-white hover:text-black rounded-md  cursor-pointer p-2 flex justify-center items-center text-5xl mt-5' style={{ opacity, transition: 'opacity 0.5s ease-in-out' }}>Experiences</div>
                   </Link>
                   <Link to="/getstarted">
                          <div className='flex justify-center'>
                                   <div className='p-2 bg-white rounded-md text-black flex justify-center items-center text-2xl mt-5 w-40' style={{ opacity, transition: 'opacity 0.6s ease-in-out' }}>Get Started</div>
                          </div>
                   </Link>

                </div>

            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default NavBar;