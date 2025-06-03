"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoHomeOutline } from "react-icons/io5";
import MainDashboard from "./components/MainDashboard";
import { IoIosNotifications } from "react-icons/io";
import { SiBloglovin } from "react-icons/si";
import { FaFolderPlus } from "react-icons/fa";
import Quotes from "./components/Quotes";
import AddBlog from "./components/AddBlog";
import AddTimeline from "./components/AddTimeline";

const page = () => {
  return (
    <>
      <div className="w-full">
        <div className="background side-menu fixed top-0 left-0 z-30 w-[275px] p-4 border-r-[1px] border-[#ffffff20] min-h-screen ">
          <Image
            src={"/images/mridul-logo.png"}
            width={100}
            height={100}
            alt="Mridul Singh Saklani"
          ></Image>

          <ul className="mt-10 flex flex-col gap-6">
            <li>
              {" "}
              <button className="text-white flex items-center gap-3 text-lg">
                {" "}
                <IoHomeOutline className="text-xl" /> Dashboard{" "}
              </button>
            </li>
            <li className="text-white flex flex-col gap-3 text-lg">
              {" "}
              <button className="text-white flex  gap-3 text-lg" type="button">
                {" "}
                <SiBloglovin className="text-xl" /> Blogs{" "}
              </button>
              <ul className="flex flex-col gap-5 pl-4">
                <li className="text-white flex items-center gap-3 text-lg">
                  {" "}
                  <FaFolderPlus className="text-xl" /> Add Blog
                </li>
                <li className="text-white flex items-center gap-3 text-lg">
                  {" "}
                  <IoHomeOutline className="text-xl" /> All Blogs
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <button className="text-white flex items-center gap-3 text-lg">
                {" "}
                <IoHomeOutline className="text-xl" /> Timelines{" "}
              </button>
              <ul className="flex flex-col gap-5 pl-4">
                <li className="text-white flex items-center gap-3 text-lg">
                  {" "}
                  <FaFolderPlus className="text-xl" /> Add Timeline
                </li>
                <li className="text-white flex items-center gap-3 text-lg">
                  {" "}
                  <IoHomeOutline className="text-xl" /> All Blogs
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="pl-[275px] relative">
          <div className="fixed top-0 left-0 flex items-center justify-between w-full h-[60px] background p-4 z-10">
            <div></div>
            <div className="flex items-center gap-4">
              <span className="h-10 w-10 rounded-full flex items-center justify-center bg-slate-900 border-[1px] border-[#ffffff20] relative ">
                <span className="absolute top-0 right-0 h-3 w-3 bg-rose-600 rounded-full"></span>
                <IoIosNotifications className="text-lg text-white " />
              </span>
            </div>
          </div>
          <div className="mt-20 m-4">
            <MainDashboard />
            <Quotes />
            <AddBlog />
            <AddTimeline />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
