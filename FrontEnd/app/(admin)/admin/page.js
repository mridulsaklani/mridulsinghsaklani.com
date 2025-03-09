"use client";
import React, { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
const Page = () => {
  const [passShow, setPassShow] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}user/login`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
        { withCredentials: true }
      );
      if (response.status === 200 || response.data.token) {
        toast.success("You are login successfully", {
          position: "top-right",
          draggable: true,
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          theme: "colored",
        });
        Cookies.set("admin", response.data.token);
        setFormData({ email: "", password: "" });
        router.push("/dashboard");
      } 
      
    } catch (err) {
      console.log(err.message);
      toast.error("You are not login", {
        position: "top-right",
        draggable: true,
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "colored",
        style: {
          backgroundColor: "red",
        },
      });
      setFormData({ email: "", password: "" });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="h-screen w-full ">
        <div className="background backdrop-blur-md border rounded-xl w-1/3 fixed p-8 top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-3xl font-black mb-3 text-white">Welcome Admin</h1>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              className="w-full bg-transparent text-white p-3 rounded-md outline-none border"
              type="email"
              name="email"
              required
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
            />

            <div className="bg-transparent flex items-center gap-2 p-3 border rounded-md">
              {passShow ? (
                <input
                  className="w-full text-white  bg-transparent rounded-md outline-none"
                  type="password"
                  name="password"
                  required
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              ) : (
                <input
                  className="w-full text-white  bg-transparent rounded-md outline-none "
                  type="text"
                  name="password"
                  required
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              )}
              {passShow ? (
                <FaEye onClick={() => setPassShow(!passShow)} />
              ) : (
                <FaEyeSlash onClick={() => setPassShow(!passShow)} />
              )}
            </div>
            <button
              className="bg-blue-600 text-white p-3 rounded-md"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
