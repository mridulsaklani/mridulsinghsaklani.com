"use client"
import React,{useEffect} from "react";
import Image from "next/image";
import AOS from "aos";
import 'aos/dist/aos.css';

const MyHobbie = () => {
  useEffect(() => {
    AOS.init({
      duration:1200
    })
  }, [])
  
  return (
    <>
      <div className="pl-5 pr-5">

      
      <div className="about max-w-7xl m-auto  px-6 py-12 lg:p-16 backdrop-blur-md rounded-xl background my-20">
        <div className="mb-10 flex flex-col items-center lg:items-start">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 text-center lg:text-start">Where My Heart Wanders</h2>
          <span className="border-blue-600 border-4 w-20 rounded-full flex flex-col"></span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="skill-border flex justify-center items-center gap-5 flex-col p-8 rounded-lg">
                <Image
               
                src="/images/Quantom.webp"
                width={250}
                height={250}
                alt="guitar"
                data-aos="zoom-in"
                
                >

                </Image>
                <h4 className="text-2xl text-white text-center">Quantom Physics</h4>

            </div>
        <div className="skill-border flex justify-center items-center gap-5 flex-col p-8 rounded-lg">
                <Image
               
                src="/images/Space.webp"
                width={250}
                height={250}
                alt="Universe"
                data-aos="zoom-in"
                data-aos-delay="200"
                >

                </Image>
                <h4 className="text-2xl text-white text-center">Universe</h4>

            </div>
        <div className="skill-border flex justify-center items-center gap-5 flex-col p-8 rounded-lg">
                <Image
               
                src="/images/Ethical.webp"
                width={250}
                height={250}
                alt="Universe"
                data-aos="zoom-in"
                data-aos-delay="400"
                >

                </Image>
                <h4 className="text-2xl text-white text-center">Ethical Heacking</h4>

            </div>

            <div className="skill-border flex justify-center items-center gap-5 flex-col p-8 rounded-lg">
                <Image
                
                src="/images/guitar.png"
                width={250}
                height={250}
                alt="guitar"
                data-aos="zoom-in"
                data-aos-delay="600"
                >

                </Image>
                <h4 className="text-2xl text-white text-center">Playning Guitar</h4>

            </div>
            <div className="skill-border flex justify-center items-center gap-5 flex-col p-8 rounded-lg">
                <Image
                
                src="/images/Singing.webp"
                width={250}
                height={250}
                alt="guitar"
                data-aos="zoom-in"
                
                >

                </Image>
                <h4 className="text-2xl text-white text-center">Singing</h4>

            </div>
            <div className="skill-border flex justify-center items-center gap-5 flex-col p-8 rounded-lg">
                <Image
               className="aspect-square object-contain"
                src="/images/camping.webp"
                width={250}
                height={250}
                alt="guitar"
                data-aos="zoom-in"
                data-aos-delay="200"
                >

                </Image>
                <h4 className="text-2xl text-white text-center">Tracking</h4>

            </div>
            <div className="skill-border flex justify-center items-center gap-5 flex-col p-8 rounded-lg">
                <Image
               
                src="/images/gym.webp"
                width={250}
                height={250}
                alt="guitar"
                data-aos="zoom-in"
                data-aos-delay="400"
                >

                </Image>
                <h4 className="text-2xl text-white text-center">GYM</h4>

            </div>
            <div className="skill-border flex justify-center items-center gap-5 flex-col p-8 rounded-lg">
                <Image
               
                src="/images/aI.webp"
                width={250}
                height={250}
                alt="guitar"
                data-aos="zoom-in"
                data-aos-delay="600"
                >

                </Image>
                <h4 className="text-2xl text-white text-center">AI</h4>

            </div>
           

        </div>
      </div>
      </div>
    </>
  );
};

export default MyHobbie;
