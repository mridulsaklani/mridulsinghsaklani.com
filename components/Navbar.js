"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosContact } from "react-icons/io";
import { LuLogIn } from "react-icons/lu";
import { FaXmark } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { adduser } from "@/Store/slice";
import Greate from "./Greate";
import { usePathname } from "next/navigation";
import { PiSignOutBold } from "react-icons/pi";
import { useSession, signIn, signOut } from "next-auth/react"
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { data: session } = useSession()

  const username =  session?.user?.name
  console.log(session)
  const [showProfile, setShowProfile] = useState(false)
  const [popupShow, setPopupShow] = useState(false);
  const [showGreate, setShowGreate] = useState(false);
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(adduser(userData));

    setUserData({
      firstname: "",
      lastname: "",
      email: "",
      number: "",
      message: "",
    });

    setShowGreate(true);

    setTimeout(() => {
      setShowGreate(false);
    }, 4200);
  };

  const pathname = usePathname();

  const rounter = useRouter();
  useEffect(() => {
    if(session){
      rounter.push('/profile')
    }
    
  }, [session])
  
 

  return (
    <> 
      
      {popupShow && <div className="blur-overlay w-full h-full fixed top-0 left-0 backdrop-blur-lg z-30"></div>}
      {popupShow && (
        <div className="half-translate fixed top-1/2 left-1/2 background rounded-lg z-40 w-2/3 flex overflow-hidden">
          <div className="w-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 p-10"></div>
          <div className="w-1/2 p-8">
            <div className="flex items-center justify-between mb-5 text-white">
              <h4 className="text-xl font-semibold">Send me a Message</h4>
              <span onClick={() => setPopupShow(!popupShow)}>
                <FaXmark className="text-2xl cursor-pointer" />
              </span>
            </div>
            <form className="flex gap-4 flex-col" onSubmit={handleSubmit}>
              <div className="flex gap-4">
                <input
                  className="w-1/2 outline-none p-3 rounded-md"
                  type="text"
                  id="first-name"
                  value={userData.firstname}
                  name="firstname"
                  onChange={handleChange}
                  placeholder="First Name"
                />
                <input
                  className="w-1/2 outline-none p-3 rounded-md"
                  type="text"
                  id="lastname"
                  value={userData.lastname}
                  onChange={handleChange}
                  name="lastname"
                  placeholder="Last Name"
                />
              </div>
              <div className="flex gap-4">
                <input
                  className="w-1/2 outline-none p-3 rounded-md"
                  type="email"
                  id="email"
                  value={userData.email}
                  name="email"
                  onChange={handleChange}
                  placeholder="Email"
                />
                <input
                  className="w-1/2 outline-none p-3 rounded-md"
                  type="number"
                  id="number"
                  value={userData.number}
                  onChange={handleChange}
                  name="number"
                  placeholder="Number"
                />
              </div>
              <textarea
                className="p-3 rounded-lg"
                name="message"
                id="message"
                placeholder="Type here..."
                value={userData.message}
                onChange={handleChange}
                rows={6}
              ></textarea>
              <button disabled={userData.message== "" || userData.number== "" || userData.email=="" || userData.firstname =="" || userData.lastname==""} className="disabled:bg-blue-400 py-3 rounded-lg bg-blue-600 text-white" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {showGreate && <Greate />}

      <div className="navbar py-2 sticky top-0 w-full z-20 backdrop-blur-xl">
        <div className="max-w-7xl m-auto flex items-center justify-center">
          <div className="w-1/6">
            <Link href="/">
              <Image src="/images/mridul-logo.png" width={75} height={75} alt="logo" />
            </Link>
          </div>
          <div className="w-3/6">
            <nav>
              <ul className="flex items-center justify-end gap-14">
                <li>
                  <Link  href="/about" prefetch={true} className={`${pathname === "/about" ? "text-blue-500" : "text-neutral-200"} hover:text-blue-600 transition-all`}>
                    About Me
                  </Link>
                </li>
                <li>
                  <Link href="/skills" prefetch={true} className={`${pathname === "/skills" ? "text-blue-600" : "text-neutral-200"} hover:text-blue-600 transition-all`}>
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="/notes" prefetch={true} className={`${pathname === "/notes" ?" text-blue-600": "text-neutral-200"} hover:text-blue-600 transition-all flex relative pr-3`}>
                    My Notes <FaLock className="lock absolute top-0 right-0 text-sm text-blue-600" />
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" prefetch={true} className={`${pathname === "/blogs" ?" text-blue-600": "text-neutral-200"} hover:text-blue-600 transition-all`}>
                    Blogs
                  </Link>
                </li>
                
              </ul>
            </nav>
          </div>
          <div className="w-2/6 flex justify-end items-center gap-3">
            <button className="py-3 px-8 rounded-lg bg-blue-600 text-nowrap flex items-center gap-2 text-white hover:bg-white hover:text-blue-600 transition-all" onClick={() => setPopupShow(!popupShow)}>
              <IoIosContact className="text-xl" />
              Contact Me
            </button>
            <div>
            {session ? <button className="py-3 px-8 rounded-lg bg-blue-600 text-nowrap flex items-center gap-2 text-white transition-all hover:bg-white hover:text-blue-600" onClick={() => signOut()}>
            <PiSignOutBold className="text-xl"/> Sign out </button> : <button onClick={() => signIn()} className="py-3 px-8 rounded-lg bg-blue-600 text-nowrap flex items-center gap-2 text-white transition-all hover:bg-white hover:text-blue-600">
              <LuLogIn className="text-xl" /> Sign in
            </button>}
            </div>
             {session && <Link href="/profile" className="bg-blue-600 h-10 w-10 flex items-center justify-center text-white rounded-full hover:bg-white hover:text-blue-600 transition-all relative" onMouseEnter={()=>setShowProfile(true)} onMouseLeave={()=>setShowProfile(false)}>
            <FaUser />
            {showProfile && <span className="absolute top-12 px-3 py-2 text-white border background rounded-lg w-28 text-center"> My profile </span>}
            </Link>}

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
