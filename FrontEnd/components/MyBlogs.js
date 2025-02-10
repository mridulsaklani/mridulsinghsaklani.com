import React from "react";
import Image from "next/image";
import Link from "next/link";
import fs from 'fs'
import matter from "gray-matter";

const MyBlogs = () => {


  
  return (
    <>
    <div className="pr-5 pl-5">
      <div className="border max-w-7xl m-auto px-6 py-10  lg:p-16 backdrop-blur-md rounded-xl background my-20">
        <div className="mb-10 flex flex-col items-center lg:items-start ">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 text-center lg:text-start">
            Insights & Ideas
          </h2>
          <span className="border-blue-600 border-4 w-20 rounded-full flex flex-col"></span>
        </div>
        <div className="grid grid-col-1 lg:grid-cols-3 gap-8">
          
         
        </div>
      </div>
      </div>
    </>
  );
};

export default MyBlogs;
