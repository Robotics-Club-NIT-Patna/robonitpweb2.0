import React from 'react'
import {Linkedin} from 'lucide-react'
import {Instagram} from 'lucide-react'
import {Github} from 'lucide-react'
import {Twitter} from 'lucide-react'

const TeamMemberCard = ({name,post,linkedin,instagram, github, twitter,bgcolor,image,position,margin}) => {
  
  return (
    <>
      <div className={`flex flex-col-reverse md:flex-row justify-center mt-20 gap-20 items-center`}>
                 <div className='p-5 h-fit -mt-20 md:mt-0'>
                      <div><h1 className='text-3xl text-white'>{name}</h1></div>
                      <div><p className='text-gray-400 text-xl'>{post}</p></div>
                      <div className='flex mt-5 gap-5'>
                             <div><i><Linkedin color='blue'/></i></div> 
                             <div><i><Instagram color="#ef2eb5" /></i></div>       
                             <div><i><Github color='white'/></i></div>       
                             <div><i><Twitter color="#97dee8" /></i></div>       
      
                      </div>
                 </div>
                 <div className='flex justify-center items-center h-[20rem] -mt-20 md:mt-0'>
                       <div className={`h-[16rem] w-[24rem] ${bgcolor} rounded-xl`}></div>
                       <div className={`h-[16rem] w-[24rem] ${bgcolor} shadow-[-1px_-1px_30px_0_rgba(0,0,0,0.3)] mt-10 ${margin}  rounded-md overflow-hidden flex justify-center items-center`}>
                            <img src='./images/arduino.jpg' alt='' className='h-full w-full p-2 object-cover'/>
                       </div>
                 </div>
            </div>
    </>
  )
}

export default TeamMemberCard