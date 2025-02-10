import React from 'react'
import Image from 'next/image'
import { IoHomeOutline } from "react-icons/io5";
import MainDashboard from './components/MainDashboard';
import { IoIosNotifications } from "react-icons/io";
import Quotes from './components/Quotes';

const page = () => {
  return (
    <>
      <div className='w-full'>
        <div className="background side-menu fixed top-0 left-0 z-30 w-[275px] p-4 border-r-[1px] border-[#ffffff20] min-h-screen ">
          <Image 
          src={'/images/mridul-logo.png'}
          width={100}
          height={100}
          alt="Mridul Singh Saklani"
          >

          </Image>

          <ul className='mt-10 flex flex-col gap-2'>
            <li className='text-white flex items-center gap-3 text-lg'> <IoHomeOutline className='text-xl'/> Dashboard</li>
          </ul>
        </div>
        <div className="pl-[275px] relative">
          <div className="fixed top-0 left-0 flex items-center justify-between w-full h-[60px] background p-4 z-10">
            <div></div>
            <div className='flex items-center gap-4'>
              <span className='h-10 w-10 rounded-full flex items-center justify-center bg-slate-900 border-[1px] border-[#ffffff20] relative '><span className='absolute top-0 right-0 h-3 w-3 bg-rose-600 rounded-full'></span><IoIosNotifications className='text-lg text-white ' /></span>
            </div>
          </div>
          <div className='mt-20 m-4'>

          <MainDashboard/>
          <Quotes/>
          </div>
        </div>

      </div>

    </>
  )
}

export default page
