"use client"
import React,{useEffect} from 'react'
import Image from "next/image";
import AOS from "aos";
import 'aos/dist/aos.css';

const Aboutbanner = () => {

    useEffect(() => {
    AOS.init({
        duration: 1200,
        once: true
    })
    }, [])
  return (
    <>
      <div className='max-w-7xl m-auto py-20 flex flex-col lg:flex-row gap-8 items-center pl-5 pr-5'>
        <div className="lg:w-1/2"  data-aos="zoom-out">
        <h1 className='text-4xl lg:text-5xl font-extrabold leading-tight text-neutral-200 mb-6 tracking-wide text-center lg:text-start'>Building with Purpose: The Story of <span className='text-blue-500'>Mridul Singh Saklani</span> </h1>
        <p className='text-xl text-neutral-200 mb-10 text-center lg:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, eligendi. Dolor fugit facilis molestias obcaecati quibusdam beatae nihil eum adipisci? Fugit, harum! Corrupti hic modi vero impedit non magni, delectus deleniti harum! Non vero nulla eius recusandae corrupti.</p></div>
        <div className="lg:w-1/2 justify-center flex"  data-aos="zoom-out">
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
    </>
  )
}

export default Aboutbanner
