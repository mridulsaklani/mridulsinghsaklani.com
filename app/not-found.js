"use client"
import React from 'react'


import { useRouter } from 'next/navigation'

const custom404 = () => {

  const router = useRouter();

  setTimeout(()=>{
    router.push('/')
  },3000)

  const backHome = (e)=>{
     e.preventDefault();
     router.push('/')
  }
  return (
    <>
      <div className="flex items-center justify-center min-h-screen ">
      <div className="text-center p-6  rounded-lg max-w-md mx-auto">
        <h1 className="text-9xl font-extrabold text-red-600">404</h1>
        <h2 className="text-2xl font-semibold text-white mt-4">Oops! Page Not Found</h2>
        <p className="text-lg text-neutral-200 mt-2">The page you're looking for doesn't exist.</p>
        <button onClick={backHome}>
          <p className="mt-6 inline-block text-xl text-blue-500 hover:text-blue-700 font-semibold">
            Go back to Home
          </p>
        </button>
      </div>
    </div>
    </>
  )
}

export default custom404
