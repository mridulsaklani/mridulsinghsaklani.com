import React from 'react'
import Image from 'next/image'

const Learning = () => {
  return (
    <>
    <div className="pr-5 pl-5">
        <div  className="border max-w-7xl m-auto px-6 py-10 lg:p-16 backdrop-blur-md rounded-xl background my-20" data-aos="fade-up">
            <div className="mb-2 flex flex-col items-center lg:items-start pb-5 lg:pb-0" >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">What I learn from my life</h2>
          <span className="border-blue-600 border-4 w-20 rounded-full flex flex-col"></span>
        </div>
        </div>
         <div className="flex flex-col lg:flex-row w-full items-center">
            <div className=" lg:w-2/3 mb-10 lg:mb-0">
            <ul>
                <li><p className='text-white text-lg'>Log kehte hai ke sab thik ho jaega thik kuch nahi hota mere bhai bas log us halaat mai jeena sikh jaate hai</p></li>
            </ul>
            </div>
             <div className="lg:w-1/3 flex  justify-center">
                       
                        <Image className="object-cover shadow-blue-400 shadow-xl rounded-xl"
                        src="images/mridul-rajput.jpg"
                        width={300}
                        height={300}
                        unoptimized
                        alt="developer"/>
                      </div>
         </div>
    </div>
    </>
  )
}

export default Learning