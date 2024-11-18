import React from 'react'
import Image from 'next/image'
import Skills from '@/components/Skillssec'
import Teacher from '@/components/Teacher'

const page = () => {
  return (
    <>
    <div className="max-w-7xl m-auto py-20 flex items-center">
        <div className="w-1/2">
        <h1 className='text-5xl font-extrabold leading-tight text-neutral-200 mb-6 tracking-wide'>I am Passionate about   <span className='text-blue-500'>Continuous  Learning.</span> </h1>
        <p className='text-xl text-neutral-200 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, eligendi. Dolor fugit facilis molestias obcaecati quibusdam beatae nihil eum adipisci? Fugit, harum! Corrupti hic modi vero impedit non magni, delectus deleniti harum! Non vero nulla eius recusandae corrupti.</p></div>
        <div className="w-1/2 flex justify-center">
        <Image 
        src="/images/skills.png"
        width={450}
        height={450}
        alt='skill'
        />

        
        </div>
        
      </div>
      <Skills/>
      <Teacher/>
      
      
    </>
  )
}

export default page
