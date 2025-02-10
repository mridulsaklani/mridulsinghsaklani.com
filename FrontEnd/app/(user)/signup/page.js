"use client"
import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/navigation'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from 'axios';

const Page = () => {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        phone:"",
        password:""
    })

    const [showPass, setShowPass] = useState(false);


    const router = useRouter()

    const handleChange = (e) => {
        const { name, value } = e.target;    
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }))};

    const handleSubmit = (e) => {
        e.preventDefault();
       
            axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}user`, formData)
            .then((res)=>{
                console.log(res.data)
            })
            .catch((err)=>{
                console.log(err.message)
            })
      setFormData({name:"", email:"", phone:"", password:""});
      router.push("/")
    }
  return (
    <>
     <div className='min-h-screen'>
        <div className="fixed w-[650px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 p-10 rounded-lg border-[1px] background">
        <h2 className='text-white font-bold pb-4'>Sign Up</h2>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div className="flex gap-3">
                <input className='w-1/2 bg-transparent text-white p-3 rounded-md outline-none border' value={formData.name} onChange={(e)=>handleChange(e)}  type="text" name='name' id='name' placeholder='Name' />
                <input className='w-1/2 bg-transparent text-white p-3 rounded-md outline-none border ' value={formData.email} onChange={(e)=>handleChange(e)}   type="email" name='email' id='email' placeholder='Email' />
            </div>
            <div className="flex gap-3">
                <input className='w-1/2 bg-transparent text-white p-3 rounded-md outline-none border ' value={formData.number} onChange={(e)=>handleChange(e)}   type="number" name='phone' id='phone' placeholder='Phone' />
                <div className='w-1/2 bg-transparent text-white p-3 rounded-md border flex items-center'>
                {showPass ? <input className='w-full  outline-none bg-transparent' value={formData.password} onChange={(e)=>handleChange(e)}    type="text" name='password' id='password' placeholder='Enter your password' /> : <input className='w-full  outline-none bg-transparent' onChange={(e)=>handleChange(e)}  value={formData.password}  type="password" name='password' id='password' placeholder='Enter your password' />}
                {showPass ? <FaEyeSlash className='cursor-pointer' onClick={() => setShowPass(!showPass)} /> : <FaEye className='cursor-pointer' onClick={() => setShowPass(!showPass)} />}

                </div>
            </div>
            <button className='py-3 px-8 bg-blue-600 text-white rounded-lg text-lg flex gap-2 items-center justify-center ' type="submit"> Submit </button>
        </form>
        </div>

     </div> 
    </>
  )
}

export default Page
