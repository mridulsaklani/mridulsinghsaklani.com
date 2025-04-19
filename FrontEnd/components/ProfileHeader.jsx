"use client"
import React, {useState,  useEffect} from 'react'
import axios from 'axios'
import Image from 'next/image'
import { MdEdit } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";


const ProfileHeader = () => {
  const [userData, setUserData] = useState({});
  const [popup, setPopup] = useState(false);
  const [fromData, setFromData] = useState(
    {
      name: '',
      email: '',
      phone: '',
      dob: '',
      image: ''
    }
  )

  // Handle Change
  const handleChange = (e)=>{
    const {name, value} = e.target;
    setFromData({...fromData, [name]: value})
  }

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFromData((prev) => ({ ...prev, image: file }));
    }
  };
  

  // Get User

  useEffect(()=>{

    const getUser = async()=>{
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/userdata`,
                {withCredentials: true});
                if(response.status === 200){
                    setUserData(response.data);
                    console.log(response.data)
                }
        } catch (error) {
            console.error(error)
        }
    }
    getUser();

  },[])

  const date = new Date(userData?.dob);

  const OpenPopup = ()=>{
    setPopup(true);
    setFromData({
      name: userData?.name,
      email: userData?.email,
      phone: userData?.phone,
      dob: userData?.dob,
      image: userData?.image
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("name", fromData.name);
    formData.append("email", fromData.email);
    formData.append("phone", fromData.phone);
    formData.append("dob", fromData.dob);

    if (fromData.image) {
        formData.append("image", fromData.image);
    }

    try {
        const response = await axios.patch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user`, formData, {
            withCredentials: true,
            headers: { "Content-Type": "multipart/form-data" }
        });

        if (response.status === 200) {
            setPopup(false);
        }
    } catch (error) {
        console.error("Error uploading:", error);
    }
};

  

  

  return (
    <>
    {popup && <div className='fixed top-0 left-0 w-full h-full backdrop-blur-md z-40'></div> }

    {popup && <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-1/2 background p-10 rounded-lg z-50'>
     <h2 className='text-3xl font-bold text-white mb-7'>Hey <span className='capitalize'>{userData?.name}</span>, Edit your profile</h2>
     <button className='absolute top-5 right-5 cursor-pointer' onClick={()=>setPopup(!popup)}><FaXmark className='text-2xl text-white'/></button>
      <form onSubmit={handleSubmit}>
      <div className='w-full flex  gap-4 mt-3'>
      <div className='flex flex-col gap-2 w-1/2'>
      <label htmlFor='name' className='text-white'>Name</label>
      <input type="text" className='mt-2 p-2 w-full outline-none rounded-md bg-transparent border text-white' name='name' value={fromData.name} onChange={handleChange} placeholder='Name'/>
      </div>
      <div className='flex flex-col gap-2 w-1/2'>
       <label htmlFor="email" className="text-white">Email</label>
       <input type="email" className='mt-2 p-2 w-full outline-none rounded-md bg-transparent border text-white' name='email' value={fromData.email} onChange={handleChange} placeholder='Email' />
      </div>
      </div>
      <div className='w-full flex  gap-4 mt-3'>
      <div className='flex flex-col gap-2 w-1/2'>
      <label htmlFor='phone' className='text-white'>Phone</label>
      <input type="text" className='mt-2 p-2 w-full outline-none rounded-md bg-transparent border text-white' name='phone' value={fromData.phone} onChange={handleChange} placeholder='Phone'/>
      </div>
      <div className='flex flex-col gap-2 w-1/2'>
       <label htmlFor="dob" className="text-white">Date of Birth</label>
       <input type="date" className='mt-2 p-2 w-full outline-none rounded-md bg-transparent border text-white' name='dob' value={fromData.dob} onChange={handleChange} placeholder='Date of Birth' />
      </div>
     
      </div>
      <div className='flex flex-col gap-2 w-full'>
      <label htmlFor="image" className="text-white">Image</label>
       <input type="file" className='mt-2 p-2 w-full outline-none rounded-md bg-transparent border text-white' name='image' onChange={handleImage} placeholder='Image' />

      </div>
      <button className='mt-5 py-3 px-8 bg-blue-600 text-white rounded-lg text-lg w-full' type="submit">Submit</button>
      </form>
      </div>}

    <div className='max-w-7xl flex items-center m-auto py-24'>
      
      <div className="w-1/3">
       <Image
       src={`${process.env.NEXT_PUBLIC_BASE_SERVER_URL}/${userData.image}`}
       width={200}
       height={200}
        className="object-cover w-80 h-80 rounded-xl shadow-blue-400 shadow-xl"
        alt='User Image'
       />
      </div>
      <div className="w-2/3 relative flex flex-col justify-center items-start gap-5" >
      
      <div className=' capitalize text-3xl font-bold text-blue-500'> Name: &nbsp;<span className='text-4xl text-white tracking-wide'> {userData?.name} </span></div>
      <div className=' text-3xl font-bold text-blue-500'>Email: &nbsp;<span className='text-4xl text-white tracking-wide'> {userData?.email} </span></div>
      <div className=' text-3xl font-bold text-blue-500' > Phone: &nbsp;<span className='text-4xl text-white tracking-wide'> {userData?.phone} </span></div>
      <div className=' text-3xl font-bold text-blue-500'> DOB: &nbsp;<span className='text-4xl text-white tracking-wide'> {date?.toDateString()} </span></div >
      <div className='absolute top-0 right-0'>
        
      <button className='bg-blue-600 px-5 py-1.5 rounded-lg text-lg text-white flex justify-center items-center gap-2' onClick={OpenPopup}> <MdEdit />Edit Profile</button>
      </div>
      </div>


    </div>
        
    </>
  )
}

export default ProfileHeader