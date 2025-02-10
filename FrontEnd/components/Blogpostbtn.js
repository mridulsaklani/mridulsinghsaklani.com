"use client"
import { useRouter } from 'next/navigation'
import { IoIosArrowBack } from "react-icons/io";
import React from 'react'


const Blogpostbtn = () => {
    const router = useRouter()

    const back = (e)=>{
        e.preventDefault()
        router.back()
    }

  return (
    <>
      <button className='py-3 px-8 bg-blue-600 text-white rounded-lg text-lg flex gap-2 items-center ' onClick={back}><IoIosArrowBack className='text-xl' />Go Back</button>
    </>
  )
}

export default Blogpostbtn
