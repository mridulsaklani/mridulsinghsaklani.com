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
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
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
    setIsLoading(true);
    setErrorMessage("");

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
        `${process.env.NEXT_PUBLIC_SERVER_URL}/user/add`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
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
        });

        setTimeout(() => {
          router.push("/");
        }, 2500);
      }
    } catch (error) {
      console.error("Error uploading:", error.message);
      setErrorMessage(error?.response?.data?.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen flex justify-center items-center p-5">
        <div className="w-full md:w-[520px] lg:w-[650px] p-6 lg:p-10 rounded-lg border-[1px] background relative">
          <h2 className="text-white font-bold pb-4">Sign Up</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-wrap md:flex-nowrap gap-3">
              <input
                className="w-full lg:w-1/2 bg-transparent text-white p-3 rounded-md outline-none border"
                value={formData.name}
                onChange={handleChange}
                type="text"
                name="name"
                placeholder="Name"
              />
              <input
                className="w-full lg:w-1/2 bg-transparent text-white p-3 rounded-md outline-none border"
                value={formData.email}
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-3">
              <input
                className="w-full lg:w-1/2 bg-transparent text-white p-3 rounded-md outline-none border"
                value={formData.phone}
                onChange={handleChange}
                type="number"
                name="phone"
                placeholder="Phone"
              />
              <div className="w-full lg:w-1/2 bg-transparent text-white p-3 rounded-md border flex items-center">
                <input
                  className="w-full outline-none bg-transparent"
                  value={formData.password}
                  onChange={handleChange}
                  type={showPass ? "text" : "password"}
                  name="password"
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
            <div className="flex flex-wrap md:flex-nowrap gap-3">
              <input
                type="date"
                className="w-full lg:w-1/2 bg-transparent text-white p-3 rounded-md outline-none border"
                value={formData.dob}
                onChange={handleChange}
                name="dob"
              />
              <input
                type="file"
                className="w-full lg:w-1/2 bg-transparent text-white p-3 rounded-md outline-none border"
                onChange={imageHandler}
                name="image"
              />
            </div>
            <div>
              <p className="text-red-500">{errorMessage}</p>
            </div>
            <button
              className="py-3 px-8 bg-blue-600 text-white rounded-lg text-lg flex gap-2 items-center justify-center disabled:opacity-60"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5 inline-block" />
                  Submitting...
                </>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
