
import MyHobbie from "@/components/MyHobbie";
import MyJourney from "@/components/MyJourney";
import Quite from "@/components/Quite";
import Skills from "@/components/Skillssec";
import React from 'react'
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className='max-w-7xl m-auto py-20 flex gap-8 items-center'>
        <div className="w-1/2">
        <h1 className='text-5xl font-extrabold leading-tight text-neutral-200 mb-6 tracking-wide'>Building with Purpose: The Story of <span className='text-blue-500'>Mridul Singh Saklani</span> </h1>
        <p className='text-xl text-neutral-200 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, eligendi. Dolor fugit facilis molestias obcaecati quibusdam beatae nihil eum adipisci? Fugit, harum! Corrupti hic modi vero impedit non magni, delectus deleniti harum! Non vero nulla eius recusandae corrupti.</p></div>
        <div className="w-1/2 justify-center flex">
        <Image
        src="/images/mridul-singh-saklani2.jpg"
        className="shadow-blue-400 shadow-xl rounded-xl"
        width={360}
        height={360}
        quality={100}
        alt="Mridul Singh Saklani"
        >

        </Image>
        </div>
        
      </div>
     
      <MyJourney/>
      <Quite/>
      <MyHobbie/>
    </>
  )
}

export default page
