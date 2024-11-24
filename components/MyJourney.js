"use client"
import React,{useEffect} from 'react'
import Image from 'next/image'
import AOS from "aos";
import 'aos/dist/aos.css';

const MyJourney = () => {
   useEffect(() => {
     AOS.init({
      duration: 1200,
      once: true
     })
   }, [])
  return (
    <>
    <div className='w-full overflow-hidden pr-5 pl-5'>

    
      <div className="max-w-7xl m-auto  backdrop-blur-md rounded-xl background my-20 px-6 py-12 lg:p-16" data-aos="zoom-out-up">
      <div className="mb-7 flex flex-col items-center lg:items-start" >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 text-center lg:text-start ">Foundations of My Journey</h2>
          <span className="border-blue-600 border-4 w-20 rounded-full flex flex-col"></span>
        </div>
        <div className='flex flex-col lg:flex-row gap-7 items-center'>
            <div className='lg:w-1/2'>
            <p className="text-lg text-neutral-200 mb-5 text-center lg:text-start">I was born on May 1, 2001. At the age of 4, I took my first steps into formal education, joining nursery school. Throughout my school years, I consistently maintained a steady academic record, achieving between 70% and 80% in my studies.</p>
            <p className="text-lg text-neutral-200 mb-5 text-center lg:text-start">My initial academic interests leaned towards science, where I was fascinated by how things worked, and later, I developed a strong curiosity for mathematics. These early interests laid a foundation for my continued learning and exploration.</p></div>
            <div className="lg:w-1/2 flex justify-center items-center" >
            <Image
            src="/images/business-award.png"
            height={380}
            width={380}
            alt='target'
            >
              
              </Image></div>
        </div>
       
      </div>
      </div>
    </>
  )
}

export default MyJourney
