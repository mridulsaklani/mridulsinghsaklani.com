"use client";
import React, { useState } from "react";
import RichTextEditor from "./RichTextEditor";

const AddBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    category: "",
    author: "",
    content: "", // Store rich text content
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditorChange = (content) => {
    setFormData({ ...formData, content });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Blog Data:", formData);
    // Send `formData` to your backend API
  };

  return (
    <div className="background p-8 rounded-xl border flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-white">Add Blog</h2>
      <form className="grid grid-cols-2 gap-8" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title" className="text-white">
            Title
          </label>
          <input
            type="text"
            name="title"
            className="mt-2 p-2 w-full outline-none rounded-md bg-transparent border"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="shortDescription" className="text-white">
            Short Description
          </label>
          <input
            type="text"
            name="shortDescription"
            className="mt-2 p-2 w-full outline-none rounded-md bg-transparent border"
            placeholder="Short Description"
            value={formData.shortDescription}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="category" className="text-white">
            Category
          </label>
          <input
            type="text"
            name="category"
            className="mt-2 p-2 w-full outline-none rounded-md bg-transparent border"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="author" className="text-white">
            Author Name
          </label>
          <input
            type="text"
            name="author"
            className="mt-2 p-2 w-full outline-none rounded-md bg-transparent border"
            placeholder="Author"
            value={formData.author}
            onChange={handleChange}
          />
        </div>
        <div className="col-span-2">
          <label className="text-white">Content</label>
          <RichTextEditor value={formData.content} onChange={handleEditorChange} />
        </div>
        <div className="col-span-2">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Submit Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
