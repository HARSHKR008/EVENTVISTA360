'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik'; // Add this import
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const Signup = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); // Add this state
  const router = useRouter();

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setIsSubmitting(true);
      try {
        const response = await axios.post(`http://localhost:5000/user/add`, values);
        console.log('Signup successful:', response.data);
        resetForm();
        toast.success('Signup successful!');
        router.push('/login'); // Redirect to login page after successful signup
        // Add success notification or redirect here
      } catch (error) {
        console.error('Signup error:', error);
        toast.error('Signup failed! Please try again.');
        // Add error notification here
      } finally {
        setIsSubmitting(false);
      }
    }
  });

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
          <form onSubmit={signupForm.handleSubmit} className="space-y-6">
            <div>
              <label htmlFor='name' className="block mb-1 text-gray-800 font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={signupForm.values.name}
                onChange={signupForm.handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg text-gray-700 bg-gray-100 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-md text-lg"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-800 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={signupForm.values.email}
                onChange={signupForm.handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg text-gray-700 bg-gray-100 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-md text-lg"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-800 font-medium">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={signupForm.values.password}
                onChange={signupForm.handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg text-gray-700 bg-gray-100 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-md text-lg"
              />
            </div>
            <button
              type="submit"
              className={`w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg shadow-lg ${isSubmitting ? 'opacity-50' : ''} hover:opacity-90 transition-all transform hover:scale-105`}
            >
              SignUp
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
