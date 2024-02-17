import React, { useEffect } from 'react';
import Iphoto from './RoboExperience/RoboExperienceImages.jsx';
import "./RoboExperience/RoboExperience.css";
import Buttonrobo from './RoboExperience/Button.jsx';
import Aos from 'aos';

function Roboexperience() {
  useEffect(()=>{
    Aos.init({duration: 1000})
},[])


  return (
    <>

      <div className="inline-block flex flex-row xl:flex-row justify-center mt-20 ml-5 mr-5 gap-10">
        <div className="flex flex-col items-end justify-center w-auto">
          <Iphoto className="cirimage1locat" />
          <Iphoto className="cirimage2locat" />
          <Iphoto className="cirimage3locat" />
        </div>


        <div className="flex flex-col items-center gap-8 justify-center w-1/2">
        <div data-aos='fade-up' className="relative font-anton text-5xl sm:text-7xl  md:text-8xl  text-white">
          <h1>MAKE MERCH</h1>
          <h1>THE EXPERIENCE</h1>
        </div>
        <p data-aos='fade-up' className="relative text-xl xl:text-2xl">
          We believe that the strongest connections are made in
          person. Our On-site merch customization experiences
          have organically connected the world's leading brands
          with countless consumers at thousands of events
          across the globe.
        </p>
        <div data-aos='fade-up'>
        <Buttonrobo width={"48"} buttontext={"Learn More →"} />
        </div>
        </div>


        <div className="flex flex-col items-start justify-center w-auto">
          <Iphoto className="cirimage4locat" />
          <Iphoto className="cirimage5locat" />
          <Iphoto className="cirimage6locat" />
        </div>
      </div>
    </>
  );

}

export default Roboexperience;
