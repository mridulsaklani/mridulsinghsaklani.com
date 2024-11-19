"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineDollarCircle } from "react-icons/ai";
import AOS from "aos";
import 'aos/dist/aos.css';
import { ReactTyped } from "react-typed";
import HeroLine from "../public/images/hero-line-shape-2.png"

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
    <div className="relative py-24">
      
      <Image 
      className="absolute top-0 right-0"
      src="/images/hero-line-shape-2.png"
      width={700}
      height={200}
      alt="linne"></Image>

      <span className="blue-circle absolute left-right"></span>


      <div className="max-w-7xl m-auto flex items-center">
        <div className="w-1/2" data-aos="zoom-in-right">
          <h1 className="text-6xl font-extrabold leading-tight text-white mb-6 tracking-wide">
            Building Digital Solutions – Mridul <br/>
            <ReactTyped
      strings={[
        "  Singh  ",
        "Saklani",
        "Singh Saklani"
      ]}
      typeSpeed={40}
      backSpeed={50}
      
      loop
    ></ReactTyped>
          </h1>
          <p className="text-xl text-neutral-200 mb-10">
            Creating seamless web experiences, I specialize in crafting
            responsive, engaging sites that align with client goals and capture
            user attention. Every project brings a new opportunity for
            innovation.
          </p>
          <div className="flex">
            <Link
              href=""
              className="text-lg bg-blue-600 py-3 px-8 rounded-lg text-white flex items-center gap-2"
            >
              
              <AiOutlineDollarCircle className="text-xl" /> Hire Me
            </Link>
          </div>
        </div>
        <div className="w-1/2  flex justify-center items-center " data-aos="zoom-in-left">
          <Image
            className="shadow-blue-400 shadow-xl rounded-xl"
            src="/images/Mridul-Singh-saklani.jpg"
            width={400}
            height={400}
            alt="Mridul Singh Saklani"
          />
        </div>
      </div>
      </div>
    </>
  );
};

export default Banner;
