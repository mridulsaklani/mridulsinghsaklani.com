"use client";
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
import { FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import Cookies from "js-cookie";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  //  States start
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [popupShow, setPopupShow] = useState(false);
  const [showGreate, setShowGreate] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    message: "",
  });

  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const [showPass, setShowPass] = useState(false);

  // States End

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleChangeTwo = (e) => {
    const { name, value } = e.target;
    setSignInData({ ...signInData, [name]: value });
  };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      dispatch(adduser(userData)); // Dispatch action before API call
  
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/quote`,
        userData
      );
  
      if (response.status === 201) {
        // Reset form data after a successful submission
        setUserData({
          firstname: "",
          lastname: "",
          email: "",
          number: "",
          message: "",
        });
  
        setShowGreate(true);
        setPopupShow(false);
  
        setTimeout(() => {
          setShowGreate(false);
        }, 4200);
      } else {
        console.error("Unexpected response status:", response.status);
      }
    } catch (err) {
      console.error("Error submitting form:", err.message);
    }
  };
  

  const pathname = usePathname();

  const router = useRouter();

  const [menushow, setmenushow] = useState(false);

  const smb = (e) => {
    e.preventDefault();
    setPopupShow(!popupShow);
    setmenushow(false);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/user/login`,
        signInData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data.token) {
        Cookies.set("token", res.data.token);
        setIsLoggedIn(true);
        setShowSignUp(false);
        toast.success("You are logged in successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: "colored",
        });
      }
    } catch (err) {
      console.log("Login error:", err.message);
      toast.error(
        "Sorry, you are not logged in, Please check your ID or Password",
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: "colored",
        }
      );
      router.push("/");
    }

    setSignInData({ email: "", password: "" });
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/user/logout`,
        {},
        { withCredentials: true }
      );
      if (response.status === 200) {
        setIsLoggedIn(false);
        router.push("/");
        toast.success("You logged out successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: "colored",
        });
      }
    } catch (error) {
      console.log(error.message);
      toast.error("token not deleted", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "colored",
      });
    }
  };

  return (
    <>
      {popupShow && (
        <div className="blur-overlay w-full h-full fixed top-0 left-0 backdrop-blur-lg z-30"></div>
      )}
      {popupShow && (
        <div className="pl-5 pr-5">
          <div className="half-translate fixed top-1/2 left-1/2 background rounded-lg z-40 w-full sm:w-2/3 flex overflow-hidden flex-col lg:flex-row ">
            <div className="hidden lg:block lg:w-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 p-6 md:p-10"></div>
            <div className="lg:w-1/2 p-8">
              <div className="flex items-center justify-between mb-5 text-white">
                <h4 className="text-xl font-semibold">Send me a Message</h4>
                <span onClick={() => setPopupShow(!popupShow)}>
                  <FaXmark className="text-2xl cursor-pointer" />
                </span>
              </div>
              <form className="flex gap-4 flex-col" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    className="md:w-1/2 outline-none p-2 md:p-3 rounded-md"
                    type="text"
                    id="first-name"
                    value={userData.firstname}
                    name="firstname"
                    onChange={handleChange}
                    placeholder="First Name"
                  />
                  <input
                    className="md:w-1/2 outline-none p-2 md:p-3 rounded-md"
                    type="text"
                    id="lastname"
                    value={userData.lastname}
                    onChange={handleChange}
                    name="lastname"
                    placeholder="Last Name"
                  />
                </div>
                <div className="flex gap-4 flex-col md:flex-row">
                  <input
                    className="md:w-1/2 outline-none p-2 md:p-3 rounded-md"
                    type="email"
                    id="email"
                    value={userData.email}
                    name="email"
                    onChange={handleChange}
                    placeholder="Email"
                  />
                  <input
                    className="md:w-1/2 outline-none p-2 md:p-3 rounded-md"
                    type="number"
                    id="number"
                    value={userData.number}
                    onChange={handleChange}
                    name="number"
                    placeholder="Number"
                  />
                </div>
                <textarea
                  className="p-2 md:p-3 rounded-lg"
                  name="message"
                  id="message"
                  placeholder="Type here..."
                  value={userData.message}
                  onChange={handleChange}
                  rows={6}
                ></textarea>
                <button
                  disabled={
                    userData.message == "" ||
                    userData.number == "" ||
                    userData.email == "" ||
                    userData.firstname == "" ||
                    userData.lastname == ""
                  }
                  className="disabled:bg-blue-400 p-2 md:p-3 rounded-lg bg-blue-600 text-white"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {showGreate && <Greate />}

      {showSignUp && (
        <div className="blur-overlay w-full h-full fixed top-0 left-0 backdrop-blur-lg z-[90]"></div>
      )}
      {showSignUp && (
        <div className="fixed w-[90%] md:w-[520px] lg:w-[650px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] p-5 md:p-8 background rounded-lg overflow-hidden">
          <h2 className="text-xl font-bold text-white pb-4"> Sign In </h2>
          <span
            className="absolute top-4 right-4 text-white"
            onClick={() => setShowSignUp(false)}
          >
            <FaXmark className="text-2xl cursor-pointer" />
          </span>
          <form className="flex flex-col gap-4" onSubmit={handleSignIn}>
            <input
              className="w-full outline-none p-2 md:p-3 rounded-md"
              type="email"
              id="email"
              value={signInData.email}
              name="email"
              onChange={handleChangeTwo}
              placeholder="Email"
            />
            <div className="w-full outline-none p-2 md:p-3 rounded-md bg-white flex  items-center">
              {showPass ? (
                <input
                  type="text"
                  name="password"
                  id="password"
                  className="outline-none w-full"
                  placeholder="Password"
                  value={signInData.password}
                  onChange={handleChangeTwo}
                />
              ) : (
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="outline-none w-full"
                  placeholder="Password"
                  value={signInData.password}
                  onChange={handleChangeTwo}
                />
              )}{" "}
              {showPass ? (
                <FaEye
                  className="text-xl cursor-pointer"
                  onClick={() => setShowPass(!showPass)}
                />
              ) : (
                <FaEyeSlash
                  className="text-xl cursor-pointer"
                  onClick={() => setShowPass(!showPass)}
                />
              )}{" "}
            </div>
            <div className="flex justify-end">
              <Link className="text-blue-600" href={""}>
                {" "}
                Forgot Password?
              </Link>
            </div>
            <button
              className="disabled:bg-blue-400 p-2 md:p-3 rounded-lg bg-blue-600 text-white"
              type="submit"
            >
              {" "}
              Log In{" "}
            </button>
            <div className="text-white flex justify-center">
              {" "}
              Already have an account?&nbsp;{" "}
              <Link
                className="text-blue-600 font-semibold"
                href={"/signup"}
                onClick={() => setShowSignUp(false)}
              >
                {" "}
                Sign Up{" "}
              </Link>
            </div>
          </form>
        </div>
      )}

      <ToastContainer />

      {/* ------------- Side Menu START------------------ */}

      <div
        className={` ${
          menushow ? "mr-0" : "sidemenushow"
        } sidemenu w-full sm:w-[430px]  background fixed top-0 right-0 z-50 h-full`}
      >
        <div className="sideMenu-header flex justify-between items-center p-6">
          <Link href={"/"} onClick={() => setmenushow(false)}>
            <Image
              src="/images/mridul-logo.png"
              width={75}
              height={75}
              alt="logo"
            />
          </Link>
          <div
            className="flex flex-col gap-[5px] bg-blue-600 h-10 w-10 rounded-full justify-center items-center"
            onClick={() => setmenushow(false)}
          >
            <FaXmark className="text-white text-xl" />
          </div>
        </div>
        <div className="sideMenu-main p-10">
          <nav>
            <ul className="flex items-start justify-end flex-col gap-6">
              <li>
                <Link
                  href="/about"
                  prefetch={true}
                  className={`${
                    pathname === "/about" ? "text-blue-500" : "text-neutral-200"
                  } hover:text-blue-600 transition-all`}
                  onClick={() => setmenushow(false)}
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/skills"
                  prefetch={true}
                  className={`${
                    pathname === "/skills"
                      ? "text-blue-600"
                      : "text-neutral-200"
                  } hover:text-blue-600 transition-all`}
                  onClick={() => setmenushow(false)}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="https://asker-inky.vercel.app/"
                  target="_blank"
                  className={`
                       text-neutral-200
                   hover:text-blue-600 transition-all flex relative pr-3`}
                  onClick={() => setmenushow(false)}
                >
                  ChatBot{" "}
                  <FaLock className="lock absolute top-0 right-0 text-sm text-blue-600" />
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  prefetch={true}
                  className={`${
                    pathname === "/blogs"
                      ? " text-blue-600"
                      : "text-neutral-200"
                  } hover:text-blue-600 transition-all`}
                  onClick={() => setmenushow(false)}
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex  items-center justify-start gap-6 pt-10">
            <button
              className="py-2 px-6 rounded-lg bg-blue-600 text-nowrap flex items-center gap-2 text-white hover:bg-white hover:text-blue-600 transition-all"
              onClick={smb}
            >
              <IoIosContact className="text-xl" />
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* ------------- Side Menu End------------------ */}

      <div className="navbar py-2 sticky top-0 w-full z-20 backdrop-blur-xl pl-5 pr-5">
        <div className="max-w-7xl m-auto flex items-center justify-center">
          <div className="w-1/4 lg:w-1/6">
            <Link href="/">
              <Image
                src="/images/mridul-logo.png"
                width={75}
                height={75}
                alt="logo"
              />
            </Link>
          </div>
          <div className=" hidden lg:block lg:w-3/6">
            <nav>
              <ul className="flex items-center justify-end gap-14">
                <li>
                  <Link
                    href="/about"
                    prefetch={true}
                    className={`${
                      pathname === "/about"
                        ? "text-blue-500"
                        : "text-neutral-200"
                    } hover:text-blue-600 transition-all`}
                  >
                    About Me
                  </Link>
                </li>
                <li>
                  <Link
                    href="/skills"
                    prefetch={true}
                    className={`${
                      pathname === "/skills"
                        ? "text-blue-600"
                        : "text-neutral-200"
                    } hover:text-blue-600 transition-all`}
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://asker-inky.vercel.app"
                    target="_blank"
                    prefetch={true}
                    className={` text-neutral-200
                    hover:text-blue-600 transition-all flex relative pr-3`}
                  >
                    ChatBot 
                  </Link>
                </li>
                <li>
                  <Link
                    href="/flashback"
                    prefetch={true}
                    className={`${
                      pathname === "/flashback"
                        ? " text-blue-600"
                        : "text-neutral-200"
                    } hover:text-blue-600 transition-all flex relative pr-3`}
                  >
                    Flashback
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    prefetch={true}
                    className={`${
                      pathname === "/blogs"
                        ? " text-blue-600"
                        : "text-neutral-200"
                    } hover:text-blue-600 transition-all`}
                  >
                    Blogs
                  </Link>
                </li>
                {isLoggedIn && (
                  <li>
                    <Link
                      href="/profile"
                      prefetch={true}
                      className={`${
                        pathname === "/profile"
                          ? " text-blue-600"
                          : "text-neutral-200"
                      } hover:text-blue-600 transition-all`}
                    >
                      Profile
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          </div>
          <div className=" hidden lg:flex lg:w-2/6  justify-end items-center gap-3">
            <button
              className="py-3 px-8 rounded-lg bg-blue-600 text-nowrap flex items-center gap-2 text-white hover:bg-white hover:text-blue-600 transition-all"
              onClick={() => setPopupShow(!popupShow)}
            >
              <IoIosContact className="text-xl" />
              Contact Me
            </button>
            <div>
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="py-3 px-8 rounded-lg bg-blue-600 text-white hover:bg-white hover:text-blue-600 transition-all flex  gap-2 items-center"
                >
                  <PiSignOutBold className="text-xl" /> Log Out
                </button>
              ) : (
                <button
                  onClick={() => setShowSignUp(true)}
                  className="py-3 px-8 rounded-lg bg-blue-600 text-white hover:bg-white hover:text-blue-600 transition-all flex  gap-2 items-center"
                >
                  <LuLogIn className="text-xl" /> Log In
                </button>
              )}
            </div>
          </div>
          <div className="lg:hidden w-3/4 flex justify-end items-center gap-5">
            <div>
              {isLoggedIn ? (
                <button className="py-2 px-6 rounded-lg bg-blue-600 text-nowrap flex items-center gap-2 text-white transition-all hover:bg-white hover:text-blue-600">
                  <LuLogIn className="text-xl" /> Log out
                </button>
              ) : (
                <button
                  className="py-2 px-6 rounded-lg bg-blue-600 text-nowrap flex items-center gap-2 text-white transition-all hover:bg-white hover:text-blue-600"
                  onClick={() => setShowSignUp(true)}
                >
                  <LuLogIn className="text-xl" /> Sign in
                </button>
              )}
            </div>
            <span
              className=" bg-blue-600 rounded-full h-10 w-10 flex items-center justify-center"
              onClick={() => setmenushow(true)}
            >
              <GiHamburgerMenu className="text-xl text-white" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
