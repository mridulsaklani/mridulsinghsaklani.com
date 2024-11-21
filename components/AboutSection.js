"use client"
import React,{useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import 'aos/dist/aos.css';
import { IoInformationCircleOutline } from "react-icons/io5";


const About = () => {
   useEffect(() => {
     AOS.init({
      duration: 2000
     })
   }, [])
   
  return (
    <>
      <div id="about"  className="border max-w-7xl m-auto p-16 backdrop-blur-md rounded-xl background my-20" data-aos="fade-up">
        <div className="mb-2 " >
          <h2 className="text-5xl font-bold text-white mb-4">About Me</h2>
          <span className="border-blue-600 border-4 w-20 rounded-full flex flex-col"></span>
        </div>
        <div className="flex w-full items-center">
          <div className="w-1/2">
            <p className="text-lg text-neutral-200 mb-10">
            At Mridul Singh Saklani, we embrace a journey of constant learning and innovation. Guided by a passion for growth, our mission is to create meaningful digital experiences. Rooted in creativity, dedication, and a commitment to excellence, we value simplicity, connection, and collaboration, ensuring every project reflects our vision to inspire, innovate, and make a positive impact on the world.
            </p>
            <div className="flex">

            <Link
              className="py-3 px-8 bg-blue-600 text-white rounded-lg text-lg flex gap-2 items-center "
              href="/about"
            > <IoInformationCircleOutline className="text-xl"/>
              More Information
            </Link>
            </div>
          </div>
          <div className="w-1/2 flex  justify-center">
           
            <Image className="object-cover"
            src="images/about-dev.gif"
            width={400}
            height={300}
            unoptimized
            alt="developer"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
