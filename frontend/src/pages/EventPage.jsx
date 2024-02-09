import React from 'react'
import InfoCards from '../components/EventPageComponents/InfoCard/InfoCards'
import UECarousel from '../components/EventPageComponents/UpcomingEvent/UECarousel'
import REvents from '../components/EventPageComponents/RecentEvent/REvents'

const EventPage = () => {
  return (
    <>
    
           <UECarousel/>
    
            <REvents/>
        
    
     <div className='flex mt-20'>
      <div className='max-w-[1280px] justify-center mx-auto'>
         <InfoCards/>
      </div>
      </div>
    </>
  )
}

export default EventPage