"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoHomeOutline } from "react-icons/io5";
import MainDashboard from "./components/MainDashboard";
import { IoIosNotifications } from "react-icons/io";
import { SiBloglovin } from "react-icons/si";
import { FaFolderPlus } from "react-icons/fa";
import { TiThSmall } from "react-icons/ti";
import Quotes from "./components/Quotes";
import AddBlog from "./components/AddBlog";
import AddTimeline from "./components/AddTimeline";

const Page = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="w-full">
      {/* Sidebar */}
      <div className="background side-menu fixed top-0 left-0 z-30 w-[275px] p-4 border-r-[1px] border-[#ffffff20] min-h-screen ">
        <Image
          src="/images/mridul-logo.png"
          width={100}
          height={100}
          alt="Mridul Singh Saklani"
        />

        <ul className="mt-10 flex flex-col gap-6">
          <li>
            <button
              className={`text-white flex items-center gap-3 text-lg ${activeTab === "dashboard" ? "font-bold" : ""}`}
              onClick={() => setActiveTab("dashboard")}
            >
              <IoHomeOutline className="text-xl" /> Dashboard
            </button>
          </li>
          <li>
            <button className="text-white flex items-center gap-3 text-lg">
              <SiBloglovin className="text-xl" /> Blogs
            </button>
            <ul className="flex flex-col gap-5 pl-4">
              <li>
                <button
                  className={`text-white flex items-center gap-3 text-lg ${activeTab === "addBlog" ? "font-bold" : ""}`}
                  onClick={() => setActiveTab("addBlog")}
                >
                  <FaFolderPlus className="text-xl" /> Add Blog
                </button>
              </li>
              <li>
                <button
                  className={`text-white flex items-center gap-3 text-lg ${activeTab === "addBlog" ? "font-bold" : ""}`}
                  onClick={() => setActiveTab("allBlog")}
                >
                  <TiThSmall className="text-xl" /> All Blogs
                </button>
              </li>
            </ul>
          </li>
          <li>
            <button className="text-white flex items-center gap-3 text-lg">
              <IoHomeOutline className="text-xl" /> Timelines
            </button>
            <ul className="flex flex-col gap-5 pl-4">
              <li>
                <button
                  className={`text-white flex items-center gap-3 text-lg ${activeTab === "addTimeline" ? "font-bold" : ""}`}
                  onClick={() => setActiveTab("addTimeline")}
                >
                  <FaFolderPlus className="text-xl" /> Add Timeline
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="pl-[275px] relative">
        <div className="fixed top-0 left-0 flex items-center justify-between w-full h-[60px] background p-4 z-10">
          <div></div>
          <div className="flex items-center gap-4">
            <span className="h-10 w-10 rounded-full flex items-center justify-center bg-slate-900 border-[1px] border-[#ffffff20] relative">
              <span className="absolute top-0 right-0 h-3 w-3 bg-rose-600 rounded-full"></span>
              <IoIosNotifications className="text-lg text-white " />
            </span>
          </div>
        </div>

        <div className="mt-20 m-4">
          {activeTab === "dashboard" && (
            <>
              <MainDashboard />
              <Quotes />
            </>
          )}
          {activeTab === "addBlog" && <AddBlog />}
          {activeTab === "addTimeline" && <AddTimeline />}
        </div>
      </div>
    </div>
  );
};

export default Page;
