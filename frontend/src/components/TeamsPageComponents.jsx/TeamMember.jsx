import React from 'react'
import { useEffect } from 'react'
import TeamMemberCard from './TeamMemberCard'
import TeamData from './TeamData'
import Aos from 'aos'
import 'aos/dist/aos.css'

const TeamMember = () => {
  useEffect(()=>{
    Aos.init({duration: 1000})
},[])

  console.log(TeamData.map(member => member.position));

  return (
    <>
      <div className='text-8xl font-anton flex justify-center'
        style={{
          WebkitTextStroke: '1px white',
          color: 'black',
          textStroke: '1px white'
        }}
      >Team</div>

      {TeamData.map((item) => (
        <div data-aos={item.id % 2 ===0? 'fade-left': 'fade-right'}>
          <TeamMemberCard
            id={item.id}
            name={item.name}
            post={item.post}
            linkedin={item.linkedin}
            instagram={item.instagram}
            github={item.github}
            twitter={item.twitter}

            image={item.image}
            bgcolor={item.bgcolor}
            position={item.position}
            margin={item.margin}
          />
        </div>
      ))}

    </>
  )
}

export default TeamMember