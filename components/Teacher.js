import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdPersonSearch } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Teacher = () => {
  return (
    <>
      <div className="max-w-7xl m-auto py-20">
        <div className="mb-14">
          <h2 className="text-5xl font-bold text-white mb-4">
            People Who Inspire Me
          </h2>
          <span className="border-blue-600 border-4 w-20 rounded-full flex flex-col"></span>
        </div>
        <div className="w-full grid grid-cols-2 gap-8">
          <div className="background p-10 rounded-lg">
            <div className="b-border flex gap-8 pb-6 ">
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
                  <h4 className="text-white font-bold text-3xl ">
                    Code With Harry
                  </h4>
                </Link>
                <p className="text-neutral-200 text-lg font-white">
                  IIT Kharagpur{" "}
                </p>
              </div>
            </div>
            <div className="pt-5">
              <p className="text-neutral-200 text-lg pb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                necessitatibus, consectetur dicta laborum deserunt nemo impedit
                perspiciatis animi blanditiis exercitationem. Laboriosam
                necessitatibus magnam ea quia.
              </p>
              <div className="flex justify-between items-center">
                <Link
                  href="https://www.codewithharry.com/"
                  target="_blank"
                  className="text-lg bg-blue-600 py-2 px-6 rounded-lg text-white flex items-center gap-2"
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
          <div className="background p-10 rounded-lg">
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
                  <h4 className="text-white font-bold text-3xl ">
                    Hitesh Chaudhary
                  </h4>
                </Link>
                <p className="text-neutral-200 text-lg font-white">
                   JECRC University{" "}
                </p>
              </div>
            </div>
            <div className="pt-5">
              <p className="text-neutral-200 text-lg pb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                necessitatibus, consectetur dicta laborum deserunt nemo impedit
                perspiciatis animi blanditiis exercitationem. Laboriosam
                necessitatibus magnam ea quia.
              </p>
              <div className="flex justify-between items-center">
                <Link
                  href="https://hiteshchoudhary.com/"
                  target="_blank"
                  className="text-lg bg-blue-600 py-2 px-6 rounded-lg text-white flex items-center gap-2"
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
