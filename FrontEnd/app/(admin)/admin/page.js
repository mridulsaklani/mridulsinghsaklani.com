"use client";
import React,{useState, useEffect} from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Page = () => {

    const [passShow, setPassShow] = useState(true)
    const [formData, setFormData] = useState({
      email:"",
      password:""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <div className='h-screen w-full '>
        <div className='background backdrop-blur-md border rounded-xl w-1/3 fixed p-8 top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2'>
             <h1 className='text-3xl font-black mb-3 text-white'>Welcome Admin</h1>
             <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                 <input className='w-full bg-transparent text-white p-3 rounded-md outline-none border' type="email" name="email" required placeholder='Email'  onChange={handleChange} value={formData.email} />
                  
                 <div className='bg-transparent flex items-center gap-2 p-3 border rounded-md'>
                  {passShow ? <input className='w-full text-white  bg-transparent rounded-md outline-none' type="password" name="password" required placeholder='Password' /> :
                  <input className='w-full text-white  bg-transparent rounded-md outline-none ' type="text" name="password" required placeholder='Password' />}
                  {passShow?<FaEye onClick={()=>setPassShow(!passShow)}/>:<FaEyeSlash onClick={()=>setPassShow(!passShow)} />}
                 </div>
                 <button className='bg-blue-600 text-white p-3 rounded-md' type="submit">Login</button>
             </form>
        </div>

      </div>
    </>
  )
}

export default Page
