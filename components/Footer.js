import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="footer py-6">
      <div className="max-w-7xl m-auto flex items-center">
        <div className="w-1/2 flex items-center gap-2">
          <Link href="/" className="flex gap-2 items-center">
            <Image 
              src="/images/mridul-logo.png"
              width={40}
              height={40}
              alt="Mridul Singh Saklani"
            />
            <h4 className="text-xl font-bold text-white">Mridul Singh Saklani</h4>
          </Link>
          <p className="text-neutral-400 ">
            &copy; 2024 | <Link href="/" className="underline">mridulsinghsaklani.com</Link>
          </p>
        </div>
        <div className="w-1/2 flex justify-end items-center">
          <ul className="flex items-center gap-3">
            <li>
              <Link href="https://facebook.com" className="h-9 w-9 flex items-center justify-center text-blue-600 bg-white rounded-full text-xl">
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link href="https://instagram.com" className="h-9 w-9 flex items-center justify-center text-blue-600 bg-white rounded-full text-xl">
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link href="https://github.com" className="h-9 w-9 flex items-center justify-center text-blue-600 bg-white rounded-full text-xl">
                <FiGithub />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
