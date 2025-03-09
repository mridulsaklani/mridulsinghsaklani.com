import React from 'react'
import { Skeleton } from '@mui/material'


const Galleries = () => {
  return (
    <>
      <div className=' max-w-7xl m-auto py-24'>
        <div className="grid grid-cols-2 gap-5">
           
            <Skeleton className='w-full' variant="rectangular"  height={200} />
            <Skeleton className='w-full' variant="rectangular"  height={200} />
        </div>
      </div>
    </>
  )
}

export default Galleries