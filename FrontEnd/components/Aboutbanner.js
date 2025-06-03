"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Aboutbanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);
  return (
    <>
      <div className="max-w-7xl m-auto py-20 flex flex-col justify-center lg:flex-row gap-8 items-center pl-5 pr-5">
        <div className="lg:w-1/2" data-aos="zoom-out">
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-neutral-200 mb-6 tracking-wide text-center lg:text-start">
            Building with Purpose: The Story of{" "}
            <span className="text-blue-500">Mridul Singh Saklani</span>{" "}
          </h1>
          <p className="text-xl text-neutral-200 mb-10 lg:mb-0 text-center lg:text-start">
          I’m Mridul Singh Saklani, a software developer passionate about learning and building meaningful solutions. From web development to AI, I love exploring new technologies. Coding is more than work for me—it’s a way to innovate, create, and make an impact with every project.
          </p>
        </div>
        <div className="lg:w-1/2 justify-center flex" data-aos="zoom-out">
          <Image
            src="/images/work.jpg"
            className="shadow-blue-400 shadow-xl rounded-xl"
            width={560}
            height={560}
            quality={100}
            alt="Mridul Singh Saklani"
          /> 
        </div>
      </div>
    </>
  );
};

export default Aboutbanner;