'use client'
import React, { use, useState } from 'react';
import axios from 'axios'; // Assuming you want to use axios for API requests

const ContactUs = () => {
  // Step 1: Initialize state for form inputs and response messages
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  // Step 2: Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Step 3: Validate the form data
  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      formErrors.email = 'Please enter a valid email address';
    if (!formData.message) formErrors.message = 'Message is required';
    return formErrors;
  };

  // Step 4: Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); // Clear existing errors

    // Validate form data
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return; // Stop submission if there are errors
    }

    setIsSubmitting(true); // Indicate that submission is in progress
    setResponseMessage(''); // Clear any previous response message

    try {
      // Step 5: Send data to backend (API call)
      const response = await axios.post('/api/contact', formData);
      setResponseMessage('Thank you for reaching out! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' }); // Clear form fields after successful submission
    } catch (error) {
      setResponseMessage('There was an error submitting your message. Please try again later.');
    } finally {
      setIsSubmitting(false); // Reset submission state
    }
  };

  return (
    
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="border-2 border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="border-2 border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="border-2 border-gray-300 p-2 rounded-lg w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className={`bg-indigo-500 text-white p-2 rounded-lg font-semibold w-full ${isSubmitting ? 'opacity-50' : ''} hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
      </form>

      {responseMessage && (
        <div className={`mt-4 text-sm ${responseMessage.includes('error') ? 'text-red-500' : 'text-green-500'}`}>
          {responseMessage}
        </div>
      )}

    </div>
  );
};

export default ContactUs;