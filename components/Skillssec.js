"use client"
import React,{useEffect} from "react";
import Image from "next/image";
import AOS from "aos";
import 'aos/dist/aos.css';

const Skills = () => {

  useEffect(() => {
  AOS.init({
    duration: 2000,
    once: true
  })
  }, [])

  return (
    <>
      <div className="max-w-7xl m-auto py-20">
        <div className="mb-14">
          <h2 className="text-5xl font-bold text-white mb-4">
            Mastering the Art of Code
          </h2>
          <span className="border-blue-600 border-4 w-20 rounded-full flex flex-col"></span>
        </div>
        <div className="flex flex-col gap-16">
          <div className="  skill-border grid grid-cols-6 p-8 rounded-lg">
            <div className="border-right p-4 flex items-center justify-center">
              <h3 className="text-xl font-semibold text-white">
                Front End Skills
              </h3>
            </div>
            <div className="border-right p-4 flex items-center justify-center">
              <Image className="skill-img transition-all" src="/images/html.png" width={100} height={100} alt="html" data-aos="zoom-in" />
            </div>
            <div className="border-right p-4 flex items-center justify-center" >
            <Image className="skill-img transition-all" src="/images/css.png" width={100} height={100} alt="css" data-aos="zoom-in" data-aos-delay="200"/>
            </div>
            <div className="border-right p-4 flex items-center justify-center">
            <Image className="skill-img transition-all" src="/images/javascript.png" width={100} height={100} alt="JavaScript" data-aos="zoom-in" data-aos-delay="400"/>
            </div>
            <div className="border-right p-4 flex items-center justify-center">
            <Image className="skill-img transition-all" src="/images/react.png" width={100} height={100} alt="react" data-aos="zoom-in" data-aos-delay="600"/>
            </div>
            <div className=" p-4 flex items-center justify-center">
            <Image className="skill-img rounded-xl transition-all" src="/images/nextjs.jpeg" width={100} height={100} alt="nextjs" data-aos="zoom-in" data-aos-delay="800"/>
            </div>
          </div>
          <div className="background grid grid-cols-6 p-8 rounded-lg">
          <div className="border-white p-4 flex items-center justify-center">
              <h3 className="text-xl font-semibold text-white">
                Back End Skills
              </h3>
            </div>
            <div className="border-white p-4 flex items-center justify-center">
            <Image className="skill-img transition-all" src="/images/nodejs.png" width={100} height={100} alt="nodejs" data-aos="zoom-in" />
            </div>
            <div className="border-white p-4 flex items-center justify-center">
            <Image className="skill-img transition-all" src="/images/mongo-db.png" width={100} height={100} alt="mongo-db" data-aos="zoom-in" data-aos-delay="200"/>
            </div>
            <div className=" p-4 flex items-center justify-center">
            <Image className="skill-img transition-all" src="/images/express-js.png" width={100} height={100} alt="express js" data-aos="zoom-in" data-aos-delay="200"/>
            </div>
          </div>
          <div className="  skill-border grid grid-cols-6 p-8 rounded-lg">
            <div className="border-right p-4 flex items-center justify-center">
              <h3 className="text-xl font-semibold text-white">
                Other Skills
              </h3>
            </div>
            <div className="border-right p-4 flex items-center justify-center">
              <Image className="skill-img transition-all" src="/images/python.png" width={100} height={100} alt="python" data-aos="zoom-in" />
            </div>
            <div className="border-right p-4 flex items-center justify-center">
            <Image className="skill-img transition-all" src="/images/typescript.png" width={100} height={100} alt="typescript" data-aos="zoom-in" data-aos-delay="200"/>
            
            </div>
            <div className="border-right p-4 flex items-center justify-center">
            <Image className="skill-img transition-all" src="/images/figma.png" width={100} height={100} alt="figma" data-aos="zoom-in" data-aos-delay="400"/>
            </div>
            <div className="border-right p-4 flex items-center justify-center">
            <Image className="skill-img transition-all" src="/images/tailwind.png" width={100} height={100} alt="tailwind" data-aos="zoom-in" data-aos-delay="600"/>
            </div>
            <div className=" p-4 flex items-center justify-center">
            <Image className="skill-img transition-all" src="/images/wordpress.png" width={100} height={100} alt="wordpress" data-aos="zoom-in" data-aos-delay="800"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
