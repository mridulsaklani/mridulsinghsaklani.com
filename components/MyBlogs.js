import React from "react";
import Image from "next/image";
import Link from "next/link";
import fs from 'fs'
import matter from "gray-matter";

const MyBlogs = () => {

  const dirContent = fs.readdirSync('content','utf-8')
  
  const blog = dirContent.map(e=>{
    const content = fs.readFileSync(`content/${e}`, 'utf-8')
    const {data} = matter(content)
    return data
  })
  
  return (
    <>
      <div className="border max-w-7xl m-auto p-16 backdrop-blur-md rounded-xl background my-20">
        <div className="mb-10 ">
          <h2 className="text-5xl font-bold text-white mb-4">
            Insights & Ideas
          </h2>
          <span className="border-blue-600 border-4 w-20 rounded-full flex flex-col"></span>
        </div>
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
  );
};

export default MyBlogs;
