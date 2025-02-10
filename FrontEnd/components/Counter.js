"use client"
import React from 'react'
import CountUp from 'react-countup'

const Counter = () => {
  return (
    <>
      <div className='max-w-7xl m-auto'>
      <div className="mb-8 " >
          <h2 className="text-5xl font-bold text-white mb-2">Milestones at a Glance</h2>
          <span className="border-blue-600 border-4 w-20 rounded-full flex flex-col"></span>
        </div>
        <div className='grid grid-cols-4 items-start'>
          <div>
            <h3 className='text-white text-3xl font-bold'><CountUp
            
            start={0}
            end={10}
            duration={2}
            />+</h3>

          </div>

        </div>
            
      </div>
    </>
  )
}

export default Counter
