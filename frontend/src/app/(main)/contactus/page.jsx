'use client'
import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#f3ede3] flex items-center justify-center relative overflow-hidden px-4">
      {/* Envelope base */}
      <div className="absolute bottom-0 w-[90%] max-w-lg h-64 bg-[#3b7b9e] mx-auto rounded-b-lg z-0" />

      {/* Envelope flap */}
      <div className="absolute bottom-64 w-0 h-0 border-l-[200px] border-r-[200px] border-b-[100px] 
                      border-l-transparent border-r-transparent border-b-[#3b7b9e] z-0 mx-auto left-1/2 transform -translate-x-1/2" />

      {/* Animated contact form (letter) */}
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-white w-full max-w-lg rounded-md shadow-xl z-10 p-8 border border-gray-200"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              E-mail <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="4"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#4c8cae] hover:bg-[#417898] text-white px-6 py-2 rounded shadow transition"
            >
              Submit
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactPage;
