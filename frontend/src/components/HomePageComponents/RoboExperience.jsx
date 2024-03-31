import React, { useEffect } from 'react';
//import Background from './RoboExperience/Background.jsx';
//import Iphoto from './RoboExperience/RoboExperienceImages.jsx';
import Button from '../Buttons.jsx';
import Aos from 'aos';
//import { AlignCenter } from 'lucide-react';

import image1 from "./RoboExperience/cirimage1locat.jpg";
import image2 from "./RoboExperience/cirimage2locat.jpg";
import image3 from "./RoboExperience/cirimage3locat.jpg";
import image4 from "./RoboExperience/cirimage4locat.jpg";
import image5 from "./RoboExperience/cirimage5locat.jpg";
import image6 from "./RoboExperience/cirimage6locat.jpg";

function Roboexperience() {
  useEffect(()=>{
    Aos.init({duration: 1000})
},[])

// 640       1535

  return (
    <>
  <div className="containerr sm:mx-auto sm:w-8/12 md:w-11/12 relative top-10 grid place-items-center w-full">

    
      <div data-aos='fade-up' className="py-5 px-5 md:w-full
      main-content relative inline-block flex items-center flex-col sm:items-center xl:flex-col sm:gap-8 justify-center">

        <p className="inline-block w-12/12 flex flex-col items-center font-anton text-6xl sm:text-7xl  md:text-6xl text-white">
          <h1>MAKE MERCH</h1>
          <h1>THE EXPERIENCE</h1>
        </p>
        <div data-aos='fade-up' className="inline-block max-w-xl min-w-52 ml-2 mr-2 text-2xl sm:text-3xl">   
          We believe that the strongest connections are made in
          person. Our On-site merch customization experiences
          have organically connected the world's leading brands
          with countless consumers at thousands of events
          across the globe..
        </div>
        <div data-aos='fade-up'>
        <Button buttonText={"Learn More →"} />
        </div>
                  <div className="background absolute h-full w-full -z-10">
                    <div className="images h-20 w-20 absolute top-0 left-40 ">
                      <img src={image1} className='border-2 border- yellow rounded-full h-full w-full' alt="this is image 1" />
                    </div>
                    <div className="images h-20 w-20 absolute top-0 right-40">
                      <img src={image2} className='border-2 border- yellow rounded-full h-full w-full' alt="this is image 1" />
                    </div>
                    <div className="images h-20 w-20 absolute top-1/2 left-0 ">
                      <img src={image3} className='border-2 border- yellow rounded-full h-full w-full' alt="this is image 1" />
                    </div>
                    <div className="images h-20 w-20 absolute top-1/2 right-0 ">
                      <img src={image4} className='border-2 border- yellow rounded-full h-full w-full' alt="this is image 1" />
                    </div>
                    <div className="images h-20 w-20 absolute bottom-0 left-40 ">
                      <img src={image5} className='border-2 border- yellow rounded-full h-full w-full' alt="this is image 1" />
                    </div>
                    <div className="images h-20 w-20 absolute bottom-0 right-40 ">
                      <img src={image6} className='border-2 border- yellow rounded-full h-full w-full' alt="this is image 1" />
                    </div>
                  </div>

        </div>


  </div>    
    </>
  );

}

export default Roboexperience;