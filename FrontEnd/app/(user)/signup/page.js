"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    dob: "",
    image: null,
  });

  const [showPass, setShowPass] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const imageHandler = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("dob", formData.dob);

    if (formData.image) {
      formDataToSend.append("image", formData.image);
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}user`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if(response.status === 201){
        toast.success('Your account created successfully', {
            position: 'top-right',
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: 'colored',
          });
          setFormData({
            name: "",
            email: "",
            phone: "",
            password: "",
            dob: "",
            image: null,
          })
          setTimeout(() => {
            
              router.push("/");
          }, 2500);
      }
      
    } catch (error) {
      console.error("Error uploading:", error.message);
      toast.error('Your account not created', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: 'colored',
      });
    }
  };

  return (
    <>
    <ToastContainer />
    <div className="min-h-screen">
      <div className="fixed w-[650px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 p-10 rounded-lg border-[1px] background">
        <h2 className="text-white font-bold pb-4">Sign Up</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex gap-3">
            <input
              className="w-1/2 bg-transparent text-white p-3 rounded-md outline-none border"
              value={formData.name}
              onChange={handleChange}
              type="text"
              name="name"
              id="name"
              placeholder="Name"
            />
            <input
              className="w-1/2 bg-transparent text-white p-3 rounded-md outline-none border"
              value={formData.email}
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="flex gap-3">
            <input
              className="w-1/2 bg-transparent text-white p-3 rounded-md outline-none border"
              value={formData.phone}
              onChange={handleChange}
              type="number"
              name="phone"
              id="phone"
              placeholder="Phone"
            />
            <div className="w-1/2 bg-transparent text-white p-3 rounded-md border flex items-center">
              <input
                className="w-full outline-none bg-transparent"
                value={formData.password}
                onChange={handleChange}
                type={showPass ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter your password"
              />
              {showPass ? (
                <FaEyeSlash
                  className="cursor-pointer"
                  onClick={() => setShowPass(!showPass)}
                />
              ) : (
                <FaEye
                  className="cursor-pointer"
                  onClick={() => setShowPass(!showPass)}
                />
              )}
            </div>
          </div>
          <div className="flex gap-3">
            <input
              type="date"
              className="w-1/2 bg-transparent text-white p-3 rounded-md outline-none border"
              value={formData.dob}
              onChange={handleChange}
              name="dob"
              id="dob"
              placeholder="Date of Birth"
            />
            <input
              type="file"
              className="w-1/2 bg-transparent text-white p-3 rounded-md outline-none border"
              onChange={imageHandler}
              name="image"
              id="image"
            />
          </div>
          <button
            className="py-3 px-8 bg-blue-600 text-white rounded-lg text-lg flex gap-2 items-center justify-center"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Page;
