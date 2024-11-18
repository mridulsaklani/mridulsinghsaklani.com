import React from 'react'
import { useSelector } from 'react-redux'



const Greate = () => {

    const users = useSelector((state)=> state.contact.user)
  return (
    <div className=' half-translate rounded-lg w-1/2 p-10 background fixed top-1/2 left-1/2 z-40 '>
        <h3 className='text-white text-2xl font-bold'>Thanks <span className='text-blue-600'>{users.firstname} {users.lastname} </span> for your interest, We will reach you soon at <span className='text-blue-600'>{users.email}</span></h3>
      
    </div>
  )
}

export default Greate
