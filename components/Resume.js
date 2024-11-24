"use client"
import React,{useState,useEffect} from "react";
import Skillbar from "./Skillbar";
import Image from "next/image";
import { FaLock } from "react-icons/fa";
import AOS from "aos";
import 'aos/dist/aos.css';
const Resume = () => {
  const [num, setnum] = useState(1)

   useEffect(() => {
     AOS.init({
      duration: 1200
     })
   }, [])
   


  return (
    <>
      <div className="max-w-7xl m-auto pt-20 pl-5 pr-5 overflow-hidden">
        <div className="mb-14 flex flex-col items-center lg:items-start">
          <h2 className="lg:text-5xl font-bold text-white mb-4">My Resume</h2>
          <span className="border-blue-600 border-4 w-20 rounded-full flex flex-col"></span>
        </div>
        <div className="w-full mb-14">
          <div className="resume-shadow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 rounded-xl" data-aos="zoom-in">
            <div className="py-8 flex justify-center items-center">
              <button className={num === 1 ? " text-blue-600 text-xl font-semibold tracking-wide" : "text-white text-xl font-semibold tracking-wide"}onClick={()=>setnum(1)}>
                Education
              </button>
            </div>
            <div className="py-8 flex justify-center items-center">
              <button className={num === 2 ? " text-blue-600 text-xl font-semibold tracking-wide" : "text-white text-xl font-semibold tracking-wide"} onClick={()=>setnum(2)}>
                Profetional Skills
              </button>
            </div>
            <div className="py-8 flex justify-center items-center">
              <button className={num === 3 ? " text-blue-600 text-xl font-semibold tracking-wide" : "text-white text-xl font-semibold tracking-wide"} onClick={()=>setnum(3)}>
                Working
              </button>
            </div>
          </div>
          <div  className={ num===1 ? "flex w-full flex-col lg:flex-row py-16  gap-14" : " hidden" }>
            <div className="lg:w-1/2" data-aos="zoom-in-right">
              <div className="mb-12 flex flex-col  items-center lg:items-start">
                <h5 className="text-blue-600 mb-4">2018 - Current</h5>
                <h3 className="text-4xl font-bold text-white">
                  Education Quality
                </h3>
              </div>
              <div className="pl-8 border-l-4 border-rose-200  flex flex-col gap-12">
                <div className="skill-border edu relative p-8 rounded-lg flex flex-col ">
                  <div className="border-circle">
                  <div className=" flex items-center border-bottom pb-8">
                    <div className="w-3/4">
                      <h4 className="font-bold text-2xl text-white mb-3">
                        Bechelor of Science
                      </h4>
                      <h5 className="font-bold text-neutral-300">Himachal Pradesh University (2018 - 2021) </h5>
                    </div>
                    <div className="w-1/4 flex items-center justify-end">
                      <p className="text-blue-600 font-semibold">7.86 / 10</p>
                    </div>
                  
                  </div>
                  <div className="text-neutral-200 pt-8"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sunt ratione dolorem delectus culpa fugit aperiam, illum repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur unde quod maiores!</p></div>
                  </div>
                </div>
                <div className="skill-border edu relative p-8 rounded-lg flex flex-col ">
                  <div className="border-circle">
                  <div className=" flex items-center border-bottom pb-8">
                    <div className="w-3/4">
                      <h4 className="font-bold text-2xl text-white mb-3">
                      Master of Computer Applications
                      </h4>
                      <h5 className="font-bold text-neutral-300">Lovely Professional University (2022 - 2024) </h5>
                    </div>
                    <div className="w-1/4 flex items-center justify-end">
                      <p className="text-blue-600 font-semibold">8.52 / 10</p>
                    </div>
                  
                  </div>
                  <div className="text-neutral-200 pt-8"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sunt ratione dolorem delectus culpa fugit aperiam, illum repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur unde quod maiores!</p></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2" data-aos="zoom-in-left">
            <div className="mb-12 flex flex-col items-center lg:items-start">
              <h5 className="text-blue-600 mb-4">2018 - Current</h5>
              <h3 className=" text-4xl font-bold text-white">
                Education Quality
              </h3>
              </div>
              <div className="pl-8 border-l-4 border-rose-200  flex flex-col gap-12">
                <div className="skill-border edu relative p-8 rounded-lg flex flex-col ">
                  <div className="border-circle">
                  <div className=" flex items-center border-bottom pb-8">
                    <div className="w-3/4">
                      <h4 className="font-bold text-2xl text-white mb-3">
                      Master of Biz Administration
                      </h4>
                      <h5 className="font-bold text-neutral-300">Lovely Professional University (2024 - Present) </h5>
                    </div>
                    <div className="w-1/4 flex items-center justify-end">
                      <p className="text-blue-600 font-semibold">Pursuing</p>
                    </div>
                  
                  </div>
                  <div className="text-neutral-200 pt-8"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sunt ratione dolorem delectus culpa fugit aperiam, illum repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur unde quod maiores!</p></div>
                </div>
                </div>
                <div className="skill-border  relative p-8 rounded-lg flex flex-col ">
                  <div className="absolute z-10 w-full h-full backdrop-blur-md top-0 left-0 rounded-xl flex justify-center items-center"><FaLock className="text-4xl"/></div>
                  <div className="border-circle">
                  <div className=" flex items-center border-bottom pb-8">
                    <div className="w-3/4">
                      <h4 className="font-bold text-2xl text-white mb-3">
                      Master of Computer Applications
                      </h4>
                      <h5 className="font-bold text-neutral-300">Lovely Professional University (2022 - 2024) </h5>
                    </div>
                    <div className="w-1/4 flex items-center justify-end">
                      <p className="text-blue-600 font-semibold">8.52 / 10</p>
                    </div>
                  
                  </div>
                  <div className="text-neutral-200 pt-8"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sunt ratione dolorem delectus culpa fugit aperiam, illum repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur unde quod maiores!</p></div>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div  className={num ===2 ? "flex w-full py-16  gap-14": "hidden" }>
              <Skillbar/>
          </div>
          <div className={num === 3 ? "flex w-full py-16 gap-14": "hidden"}>
            <div className="w-1/2 flex justify-center items-center">
            <Image
            className="shadow-blue-400 shadow-xl rounded-xl"
            src="/images/dev-team.jpg"
            width={500}
            height={500}
            alt="Image"
            />
            
            </div>
            <div className="w-1/2">
            <h5 className="text-blue-600 mb-4">Currenty Working</h5>
                <h3 className="text-4xl font-bold text-white mb-4">
                  Xonier Technology
                </h3>
                <p className="text-neutral-200 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus odit doloremque tempore! Rerum illum culpa debitis, laborum nobis labore reprehenderit vero obcaecati quae? Est vitae veritatis, porro aliquid dicta cum quisquam placeat consequatur doloribus, error neque modi suscipit autem in non iure eius voluptatibus expedita at enim voluptatum sapiente ea!</p>
            </div>
           

          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
