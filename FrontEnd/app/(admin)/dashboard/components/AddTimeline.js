'use client';

import { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

export default function AddTimeline() {
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    collection: ''
  });

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      url: URL.createObjectURL(file),
      file,
    }));
    setImages((prev) => [...prev, ...newImages]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    images.forEach((image) => formDataToSend.append('images', image.file));
    formDataToSend.append('title', formData.title);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('collection', formData.collection);
    
    try {
      const res = await axios.post( `${process.env.NEXT_PUBLIC_SERVER_URL}timeline`, formDataToSend, { headers: { 'Content-Type': 'multipart/form-data' } }) 
      if (res.status === 201) {
        alert('Images uploaded successfully!');
        setImages([]);
        setFormData({ title: '', description: '', collection: '' });
      } else {
        alert('Upload failed');
      }
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };

  return (
    <div className="p-8 background rounded-lg border w-full mx-auto">
      <h2 className='text-2xl font-bold text-white mb-5'>Add Timelines</h2>
      <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
        <div className='flex items-center gap-5'>
          <input
            type="text"
            name='title'
            value={formData.title}
            onChange={handleInputChange}
            className='px-4 py-2 rounded-lg outline-none w-1/2 bg-transparent border'
            placeholder='Title'
            required
          />
          <input
            type="text"
            name='description'
            value={formData.description}
            onChange={handleInputChange}
            className='px-4 py-2 rounded-lg outline-none w-1/2 bg-transparent border'
            placeholder='Description'
            required
          />
        </div>
        <input
          type="text"
          name='collection'
          value={formData.collection}
          onChange={handleInputChange}
          className="px-4 py-2 rounded-lg outline-none bg-transparent border"
          placeholder='Collection Name'
          required
        />
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4"
        />
        <div className="grid grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div key={index} className="relative">
              <Image src={img.url} alt="Preview" width={100} height={100} className="rounded-lg" />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
              >
                ×
              </button>
            </div>
          ))}
        </div>
        {images.length > 0 && (
          <button type='submit' className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
            Upload
          </button>
        )}
      </form>
    </div>
  );
}
