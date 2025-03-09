"use client"
import React, {useState,  useEffect} from 'react'
import axios from 'axios'


const ProfileHeader = () => {
  const [userData, setUserData] = useState({});

  // Get User

  useEffect(()=>{

    const getUser = async()=>{
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}user/userdata`,
                {withCredentials: true});
                if(response.status === 200){
                    setUserData(response.data);
                    console.log(response)
                }
        } catch (error) {
            console.error(error)
        }
    }
    getUser();

  },[])

  return (
    <>
    <div className='max-w-7xl m-auto py-24'>
      
      <h2>{userData.email}</h2>
      <h2>{userData.name}</h2>
      <h2>{userData.phone}</h2>

    </div>
        
    </>
  )
}

export default ProfileHeader