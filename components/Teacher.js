import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdPersonSearch } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Teacher = () => {
  return (
    <>
      <div className="max-w-7xl m-auto py-20 pr-5 pl-5">
        <div className="mb-14 flex flex-col items-center lg:items-start">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 items-center lg:items-start text-center lg:text-start">
            People Who Inspire Me
          </h2>
          <span className="border-blue-600 border-4 w-20 rounded-full flex flex-col"></span>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="background p-6 lg:p-10 rounded-lg">
            <div className="b-border flex  gap-8 pb-6 ">
              <Image
                className="object-cover object-top h-28 rounded-lg"
                src="/images/Harry.webp"
                width={120}
                height={100}
                alt="Harry Bhai"
              />
              <div className="flex flex-col  gap-2">
                <Link
                  href="https://www.youtube.com/@CodeWithHarry"
                  target="_blank"
                >
                  <h4 className="text-white font-bold text-xl lg:text-3xl hover:text-blue-600 transition-all">
                    Code With Harry
                  </h4>
                </Link>
                <p className="text-neutral-200  lg:text-lg font-white">
                  IIT Kharagpur{" "}
                </p>
              </div>
            </div>
            <div className="pt-5">
              <p className="text-neutral-200 text-lg pb-8 text-center lg:text-start">
              CodeWithHarry has been an invaluable mentor on my learning journey. His engaging tutorials and simplified explanations have helped me master coding concepts, making programming enjoyable and accessible. I am grateful for his impactful teaching!
              </p>
              <div className="flex justify-between items-center">
                <Link
                  href="https://www.codewithharry.com/"
                  target="_blank"
                  className="text-lg bg-blue-600 py-2 px-5 lg:px-6 rounded-lg text-white flex items-center gap-2 hover:bg-white hover:text-blue-600 transition-all"
                >
                  <MdPersonSearch className="text-xl" /> Learn More
                </Link>
                <div className="flex gap-3">
                  <Link
                    href=""
                    className="h-9 w-9 flex items-center justify-center text-blue-600 bg-white rounded-full text-xl"
                  >
                    <FaFacebookF />
                  </Link>
                  <Link
                    href=""
                    className="h-9 w-9 flex items-center justify-center text-blue-600 bg-white rounded-full text-xl"
                  >
                    <FiGithub />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="background p-6 lg:p-10 rounded-lg">
            <div className="b-border flex gap-8 pb-6 ">
              <Image
                className="object-cover object-top h-28 rounded-lg"
                src="/images/hitesh-chaudhary.jpg"
                width={120}
                height={100}
                alt="Harry Bhai"
              />
              <div className="flex flex-col  gap-2">
                <Link
                  href="https://www.youtube.com/@HiteshCodeLab"
                  target="_blank"
                >
                  <h4 className="text-white font-bold text-xl lg:text-3xl hover:text-blue-600 transition-all">
                    Hitesh Chaudhary
                  </h4>
                </Link>
                <p className="text-neutral-200  lg:text-lg font-white">
                   JECRC University{" "}
                </p>
              </div>
            </div>
            <div className="pt-5">
              <p className="text-neutral-200 text-lg pb-8 text-center lg:text-start">
              Hitesh Choudhary practical and insightful tutorials have been instrumental in shaping my coding skills. His real-world approach and career guidance inspire me to keep learning and excelling in technology.
              </p>
              <div className="flex justify-between items-center">
                <Link
                  href="https://hiteshchoudhary.com/"
                  target="_blank"
                  className="text-lg bg-blue-600 py-2 px-5 lg:px-6 rounded-lg text-white flex items-center gap-2 hover:bg-white hover:text-blue-600 transition-all"
                >
                  <MdPersonSearch className="text-xl" /> Learn More
                </Link>
                <div className="flex gap-3">
                  <Link
                    href=""
                    className="h-9 w-9 flex items-center justify-center text-blue-600 bg-white rounded-full text-xl"
                  >
                    <FaFacebookF />
                  </Link>
                  <Link
                    href=""
                    className="h-9 w-9 flex items-center justify-center text-blue-600 bg-white rounded-full text-xl"
                  >
                    <FiGithub />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teacher;
