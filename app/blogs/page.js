import React from 'react'
import Image from "next/image";
import Link from "next/link";
import fs from 'fs'
import matter from "gray-matter";

const page = () => {

     const BlogFile = fs.readdirSync("content", "utf-8")
     const blog = BlogFile.map((e)=>{

         const blogs = fs.readFileSync(`content/${e}`, "utf-8")
         const {data} = matter(blogs)
         return data
     }    
     )


  return (
    <>
      <div className='max-w-7xl m-auto my-20'>
      <div className="grid grid-cols-3 gap-8">
          {blog.map((e, i) => (
            <div key={i} className="border p-10 rounded-lg">
              <Image
                className="w-full mb-8"
                src={e.image}
                width={300}
                height={200}
                alt="mridul"
              ></Image>
              <div>
              <h3 className=" text-3xl font-semibold text-white mb-4 ">
                {e.title}
              </h3>
              <p className="text-white pb-8">
                {e.discription}
              </p>
              <Link href={`/blogpost/${e.slug}`} className="bg-blue-600 py-3 px-7 text-white rounded-lg">Click Here</Link>
            </div>
            </div>
          ))}
         
        </div>
      </div>
    </>
  )
}

export default page
