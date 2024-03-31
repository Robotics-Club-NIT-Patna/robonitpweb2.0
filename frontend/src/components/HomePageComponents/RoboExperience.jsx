import React, { useEffect } from 'react';
//import Background from './RoboExperience/Background.jsx';
//import Iphoto from './RoboExperience/RoboExperienceImages.jsx';
import Button from '../Buttons.jsx';
import Aos from 'aos';
//importimage-cover  { AlignCenter } from 'lucide-react';

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



// sm: prefix applies styles on screens larger than or equal to 640px wide (sm:mx-auto, sm:w-8/12, sm:gap-8, sm:text-3xl).
// md: prefix applies styles on screens larger than or equal to 768px wide (md:w-11/12, md:text-6xl).
// lg: prefix applies styles on screens larger than or equal to 1024px wide.
// xl: prefix applies styles on screens larger than or equal to 1280px wide (xl:flex-col).

  return (
    <>
  <div className="xl:w-max containerr sm:mx-auto sm:w-8/12 md:w-11/12 relative top-10 grid place-items-center w-full">

    
      <div data-aos='fade-up' className="py-5 px-5 md:w-full
                main-content relative inline-block flex items-center flex-col sm:items-center xl:flex-col sm:gap-8 justify-center">

               <p className="inline-block w-12/12 flex flex-col items-center font-anton 
               text-6xl sm:text-7xl  md:text-7xl lg:text-8xl text-white">
               <h1>MAKE MERCH</h1>
               <h1>THE EXPERIENCE</h1>
               </p>
               <div data-aos='fade-up' className="inline-block max-w-xl min-w-52 ml-2 mr-2
                text-2xl sm:text-3xl md:text-3xl lg:text-3xl">   
                  We believe that the strongest connections are made in
                  person. Our On-site merch customization experiences
                  have organically connected the world's leading brands
                   with countless consumers at thousands of events
                 across the globe..
               </div>
               <div data-aos='fade-up'>
               <Button buttonText={"Learn More →"} />
               </div>
            <div className="background absolute h-full w-full xl:w-max -z-10">
                    <div className="images lg:w-32 lg:h-32 w-20 h-20 md:h-24 md:w-24 absolute 
                    top-0 left-10 sm:top-0 sm:left-1 md:top-0 md:left-36 xl:left-56 ">
                      <img src={image1} className='image-cover md:border-0 rounded-full h-full w-full' alt="this is image 1" />
                    </div>
                    <div className="images lg:w-32 lg:h-32 w-20 h-20 md:h-24 md:w-24 absolute 
                    top-0 right-10 sm:top-0 sm:right-1 md:top-0 md:right-36 xl:right-56">
                      <img src={image2} className='image-cover md:border-0 rounded-full h-full w-full' alt="this is image 1" />
                    </div>
                    <div className="images lg:w-32 lg:h-32 w-20 h-20 md:h-24 md:w-24 absolute 
                    top-2/4 -left-0 sm:top-2/4 sm:-left-20 md:top-1/2 md:left-0 xl:left-72">
                      <img src={image3} className='image-cover md:border-0 rounded-full h-full w-full' alt="this is image 1" />
                    </div>
                    <div className="images lg:w-32 lg:h-32 w-20 h-20 md:h-24 md:w-24 absolute 
                    top-1/4 -right-0 sm:top-1/4 sm:-right-20 md:top-1/2 md:right-0 xl:right-72 ">
                      <img src={image4} className='image-cover md:border-0 rounded-full h-full w-full' alt="this is image 1" />
                    </div>
                    <div className="images lg:w-32 lg:h-32 w-20 h-20 md:h-24 md:w-24 absolute 
                    bottom-0 left-10 sm:bottom-0 sm:left-1 md:bottom-0 md:left-40 xl:left-56">
                      <img src={image5} className='image-cover md:border-0 rounded-full h-full w-full' alt="this is image 1" />
                    </div>
                    <div className="images lg:w-32 lg:h-32 w-20 h-20 md:h-24 md:w-24 absolute 
                    bottom-0 right-10 sm:bottom-0 sm:right-1 md:bottom-0 md:right-40 xl:right-56 ">
                      <img src={image6} className='image-cover md:border-0 rounded-full h-full w-full' alt="this is image 1" />
                    </div>
            </div>

      </div>


  </div>    
    </>
  );

}

export default Roboexperience;
