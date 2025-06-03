"use client"
import React, {useState, useEffect} from 'react'
import axios from 'axios'



const AddBlog = () => {
   
    const handleSubmit = ()=>{

    }
  return (
    <>
       <div className='background p-8 rounded-xl border flex flex-col gap-6'>
          <h2 className='text-2xl font-bold text-white'>Add Blogs</h2>
          <form className='grid grid-cols-2 gap-8' onSubmit={handleSubmit}>
             <div className=' '>
                <label htmlFor='title' className='text-white'>Title</label>
                <input type="text" className='mt-2 p-2 w-full outline-none rounded-md bg-transparent border' placeholder='Title'/>
             </div>
             <div className=''>
                  <label className='text-white' htmlFor="sortDescription">Sort Description</label>
                  <input type="text" className='mt-2 p-2 w-full outline-none rounded-md bg-transparent border' placeholder='Sort Description'/>
             </div>
             <div>
             <label htmlFor='category' className='text-white'>Category</label>
             <input type="text" className='mt-2 p-2 w-full outline-none rounded-md bg-transparent border' placeholder='Category'/>
             </div>
             <div>
             <label htmlFor='category' className='text-white'>Author Name</label>
             <input type="text" className='mt-2 p-2 w-full outline-none rounded-md bg-transparent border' placeholder='author'/>
             </div>
            
          </form>
       </div>
    </>
  )
}

export default AddBlog