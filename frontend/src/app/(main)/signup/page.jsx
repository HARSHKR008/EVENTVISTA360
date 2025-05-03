'use client'
import React, { useState } from 'react';
import axios from 'axios'; // Ensure you install axios if you're using it for API requests

const Signup = () => {
  // Step 1: Initialize state for form inputs and errors
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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
    if (!formData.fullName) formErrors.fullName = 'Full Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) 
      formErrors.email = 'Please enter a valid email address';
    if (!formData.password || formData.password.length < 6)
      formErrors.password = 'Password must be at least 6 characters';

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

    try {
      // Step 5: Send data to backend (API call)
      const response = await axios.post('/api/signup', formData);
      console.log('Signup successful:', response.data);
      // Redirect user or show success message
    } catch (error) {
      console.error('Error during signup:', error);
      // Handle errors (e.g., display an error message to the user)
    } finally {
      setIsSubmitting(false); // Reset submission state
    }
  };

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Signup - Patterned Background</title>
      <div className="w-full max-w-md px-6 mx-auto">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 transition-all duration-500 ease-in-out hover:scale-105">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-gray-800">Join Us</h2>
            <p className="text-gray-600 mt-2">Create your account</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-1 text-gray-800 font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg text-gray-700 bg-gray-100 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-md text-lg"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">{errors.fullName}</p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-gray-800 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg text-gray-700 bg-gray-100 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-md text-lg"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-gray-800 font-medium">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg text-gray-700 bg-gray-100 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-md text-lg"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
            <button
              type="submit"
              className={`w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg shadow-lg ${isSubmitting ? 'opacity-50' : ''} hover:opacity-90 transition-all transform hover:scale-105`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-800">Or sign up with</p>
            <div className="flex justify-center mt-4 space-x-4">
              <button className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg shadow hover:bg-blue-500 transition">
                Facebook
              </button>
              <button className="bg-red-600 text-white font-semibold px-5 py-2 rounded-lg shadow hover:bg-red-500 transition">
                Google
              </button>
            </div>
          </div>
          <p className="mt-6 text-center text-gray-800 text-sm">
            Already have an account?
            <a
              href="/login"
              className="underline font-semibold hover:text-gray-600"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
