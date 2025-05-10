"use client";
import axios from 'axios';
import { useFormik } from 'formik';
import { useState } from 'react';
import toast from 'react-hot-toast';

const VenueForm = () => {
  const [normalImages, setNormalImages] = useState([]);
  const [images360, setImages360] = useState([]);
  const [modelImages, setModelImages] = useState([]);
  const [uploading, setUploading] = useState(false); // Add this line

  const venuseForm = useFormik({
    initialValues: {
      name: '',
      description: '',
      location: '',
      capacity: 0,
      category: '',
      modelname: '',
      normalImages: [],
      images360: [],
      model360: []
    },
    onSubmit: (values, {resetForm}) => {
      const formData = {
        name: values.name,
        description: values.description,
        location: values.location,
        capacity: values.capacity,
        category: values.category,
        imgurl: normalImages,
        images360: images360,
        model360: [{
          name: values.modelname,
          description: values.description,
          images360: modelImages
        }]
      };
      
      axios.post(`${process.env.NEXT_PUBLIC_API_URL}/venue/add`, formData)
      .then((result) => {
        console.log(result.data);
        toast.success('Venue added successfully');
        resetForm();
        setNormalImages([]);
        setImages360([]);
        setModelImages([]);
      }).catch((err) => {
        console.log(err);
        toast.error('Failed to add venue');
      });
    }
  });

  const uploadImages = async (e, type) => {
    const files = Array.from(e.target.files);
    setUploading(true);

    try {
      const uploadPromises = files.map(file => {
        const fd = new FormData();
        fd.append('file', file);
        fd.append('upload_preset', 'event360');
        fd.append('cloud_name', 'dxanhgmd8');

        return axios.post('https://api.cloudinary.com/v1_1/dxanhgmd8/image/upload', fd);
      });

      const responses = await Promise.all(uploadPromises);
      const newUrls = responses.map(response => response.data.url);
      
      switch(type) {
        case 'normal':
          setNormalImages(prev => [...prev, ...newUrls]);
          break;
        case '360':
          setImages360(prev => [...prev, ...newUrls]);
          break;
        case 'model':
          setModelImages(prev => [...prev, ...newUrls]);
          break;
      }
      toast.success('Files uploaded successfully');
    } catch (err) {
      console.log(err);
      toast.error('Failed to upload files');
    } finally {
      setUploading(false);
    }
  };

  const removeImage = (index, type) => {
    switch(type) {
      case 'normal':
        setNormalImages(prev => prev.filter((_, i) => i !== index));
        break;
      case '360':
        setImages360(prev => prev.filter((_, i) => i !== index));
        break;
      case 'model':
        setModelImages(prev => prev.filter((_, i) => i !== index));
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">Add New Venue</h2>
          
          <form onSubmit={venuseForm.handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Venue Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={venuseForm.values.name}
                onChange={venuseForm.handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                id="description"
                name="description"
                rows="4"
                value={venuseForm.values.description}
                onChange={venuseForm.handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                id="location"
                name="location"
                value={venuseForm.values.location}
                onChange={venuseForm.handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                min="1"
              />

            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Normal Images</label>
              <input
                type="file"
                onChange={(e) => uploadImages(e, 'normal')}
                multiple
                accept="image/*"
                className="mt-1 block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-indigo-50 file:text-indigo-700
                  hover:file:bg-indigo-100"
              />
              
              <div className="mt-4 grid grid-cols-3 gap-4">
                {normalImages.map((url, index) => (
                  <div key={index} className="relative">
                    <img
                      src={url}
                      alt={`Normal ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index, 'normal')}
                      className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full m-1 hover:bg-red-600"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">360° Panorama Images</label>
              <input
                type="file"
                onChange={(e) => uploadImages(e, '360')}
                multiple
                accept="image/*"
                className="mt-1 block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-indigo-50 file:text-indigo-700
                  hover:file:bg-indigo-100"
              />
              
              <div className="mt-4 grid grid-cols-3 gap-4">
                {images360.map((url, index) => (
                  <div key={index} className="relative">
                    <img
                      src={url}
                      alt={`360° ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index, '360')}
                      className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full m-1 hover:bg-red-600"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              {uploading && <p className="mt-2 text-sm text-gray-500">Uploading...</p>}
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Model Images</label>
              <input
                type="file"
                onChange={(e) => uploadImages(e, 'model')}
                multiple
                accept="image/*"
                className="mt-1 block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-indigo-50 file:text-indigo-700
                  hover:file:bg-indigo-100"
              />
              
              <div className="mt-4 grid grid-cols-3 gap-4">
                {modelImages.map((url, index) => (
                  <div key={index} className="relative">
                    <img
                      src={url}
                      alt={`Model ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index, 'model')}
                      className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full m-1 hover:bg-red-600"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              {uploading && <p className="mt-2 text-sm text-gray-500">Uploading...</p>}
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
              <input
              type='text'
                id="category"
                name="category"
                value={venuseForm.values.category}
                onChange={venuseForm.handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add Venue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default VenueForm;