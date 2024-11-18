import React from "react";
import Image from "next/image";

const MyHobbie = () => {
  return (
    <>
      <div className="about max-w-7xl m-auto p-16 backdrop-blur-md rounded-xl background my-20">
        <div className="mb-10 ">
          <h2 className="text-5xl font-bold text-white mb-4">Where My Heart Wanders</h2>
          <span className="border-blue-600 border-4 w-20 rounded-full flex flex-col"></span>
        </div>
        <div className="grid grid-cols-4 gap-8">
        <div className="skill-border flex justify-center items-center gap-5 flex-col p-8 rounded-lg">
                <Image
               
                src="/images/Quantom.webp"
                width={250}
                height={250}
                alt="guitar"
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
                >

                </Image>
                <h4 className="text-2xl text-white text-center">Playning Guitar</h4>

            </div>
            <div className="skill-border flex justify-center items-center gap-5 flex-col p-8 rounded-lg">
                <Image
               
                src="/images/singing.webp"
                width={250}
                height={250}
                alt="guitar"
                >

                </Image>
                <h4 className="text-2xl text-white text-center">Singing</h4>

            </div>
            <div className="skill-border flex justify-center items-center gap-5 flex-col p-8 rounded-lg">
                <Image
               
                src="/images/camping.webp"
                width={250}
                height={250}
                alt="guitar"
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
                >

                </Image>
                <h4 className="text-2xl text-white text-center">AI</h4>

            </div>
           

        </div>
      </div>
    </>
  );
};

export default MyHobbie;
