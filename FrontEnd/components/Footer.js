import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

const Footer = () => {

  const year = new Date().getFullYear();
  return (
    <div className="footer py-6 pr-5 pl-5">
      <div className="max-w-7xl m-auto flex items-center">
        <div className="w-3/5 lg:w-1/2 flex items-center gap-2 flex-wrap md:flex-nowrap">
          <Link href="/" className="flex gap-2 items-center">
            <Image 
              src="/images/mridul-logo.png"
              width={40}
              height={40}
              alt="Mridul Singh Saklani"
            />
            <h4 className=" text-sm lg:text-xl font-bold text-white">Mridul Singh Saklani</h4>
          </Link>
          <p className="text-neutral-400 text-sm">
            &copy; {year} | <Link href="/" className="underline">mridulsinghsaklani.com</Link>
          </p>
        </div>
        <div className="w-2/5 lg:w-1/2 flex justify-end items-center ">
          <ul className="flex items-center gap-2 lg:gap-3 ">
            <li >
              <Link href="https://www.linkedin.com/in/mridul-singh-saklani?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target='_blank' className="h-8 w-8 lg:h-9 lg:w-9 flex items-center justify-center text-blue-600 bg-white rounded-full text-xl">
                <FaLinkedinIn className='text-lg lg:text-base' />
              </Link>
            </li>
            <li >
              <Link href="https://x.com/SaklaniMridul?t=CdL8Iepe8SST-h0QY-Ek-A&s=09" target='_blank' className="h-8 w-8 lg:h-9 lg:w-9 flex items-center justify-center text-blue-600 bg-white rounded-full text-xl">
                <FaXTwitter className='text-lg lg:text-base'/>
              </Link>
            </li>
            <li >
              <Link href="https://github.com/mridulsaklani" target='_blank' className="h-8 w-8 lg:h-9 lg:w-9 flex items-center justify-center text-blue-600 bg-white rounded-full text-xl">
                <FiGithub className='text-lg lg:text-base'/>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
