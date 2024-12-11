"use client";
import React, { useState } from "react";

const page = () => {
  const [form, setform] = useState({
    name: "",
    email: "",
  });
  
  
  const handleSubmit = async(e) => {
    e.preventDefault();

    const a = await fetch('/api/add', {
      method: "POST", headers:{
        "Content-type": "application/json",

      },
      body:JSON.stringify(form)
    })

    const res = await a.json();
    console.log(res)
   
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({
      ...form,
      [name]: value,
    });
  };

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="name"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="enter your mail"
          />
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
};

export default page;
