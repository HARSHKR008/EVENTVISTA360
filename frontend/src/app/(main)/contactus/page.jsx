'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiCheck, FiX, FiMail, FiUser, FiMessageSquare } from 'react-icons/fi';
import axios from 'axios';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [activeField, setActiveField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {      
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/contact/add`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      console.log('Response:', response.data);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  console.log('API URL:', process.env.NEXT_PUBLIC_API_URL);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center relative overflow-hidden px-4 py-12">
      {/* Floating bubbles background */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: 0, x: Math.random() * 100 - 50 }}
          animate={{ 
            y: [0, Math.random() * 100 - 50, 0],
            x: [Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50]
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className={`absolute rounded-full opacity-20 ${i % 2 ? 'bg-blue-400' : 'bg-indigo-400'}`}
          style={{
            width: `${20 + Math.random() * 30}px`,
            height: `${20 + Math.random() * 30}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 w-full max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">Get In Touch</h1>
          <p className="text-lg text-gray-600 max-w-lg mx-auto">
            Have a question or want to work together? Drop us a message below!
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Decorative header */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white">
            <div className="flex items-center justify-center space-x-3">
              <FiMail className="text-2xl" />
              <h2 className="text-2xl font-bold">Contact Form</h2>
            </div>
          </div>

          {/* Form container */}
          <div className="p-8 md:p-10">
            <AnimatePresence>
              {submitStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-8"
                >
                  <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                    <FiCheck className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">We'll get back to you soon.</p>
                </motion.div>
              ) : submitStatus === 'error' ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-8"
                >
                  <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
                    <FiX className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Oops! Error occurred</h3>
                  <p className="text-gray-600">Please try again later.</p>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                      <FiUser className="mr-2" />
                      Your Name <span className="text-red-500 ml-1">*</span>
                    </label>
                    <motion.div
                      animate={{
                        borderColor: activeField === 'name' ? '#3b82f6' : '#e5e7eb',
                        boxShadow: activeField === 'name' ? '0 0 0 3px rgba(59, 130, 246, 0.2)' : 'none'
                      }}
                      transition={{ duration: 0.2 }}
                      className="relative rounded-lg"
                    >
                      <input
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setActiveField('name')}
                        onBlur={() => setActiveField(null)}
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none transition-all"
                      />
                    </motion.div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                      <FiMail className="mr-2" />
                      Email Address <span className="text-red-500 ml-1">*</span>
                    </label>
                    <motion.div
                      animate={{
                        borderColor: activeField === 'email' ? '#3b82f6' : '#e5e7eb',
                        boxShadow: activeField === 'email' ? '0 0 0 3px rgba(59, 130, 246, 0.2)' : 'none'
                      }}
                      transition={{ duration: 0.2 }}
                      className="relative rounded-lg"
                    >
                      <input
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setActiveField('email')}
                        onBlur={() => setActiveField(null)}
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none transition-all"
                      />
                    </motion.div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                      <FiMessageSquare className="mr-2" />
                      Your Message <span className="text-red-500 ml-1">*</span>
                    </label>
                    <motion.div
                      animate={{
                        borderColor: activeField === 'message' ? '#3b82f6' : '#e5e7eb',
                        boxShadow: activeField === 'message' ? '0 0 0 3px rgba(59, 130, 246, 0.2)' : 'none'
                      }}
                      transition={{ duration: 0.2 }}
                      className="relative rounded-lg"
                    >
                      <textarea
                        name="message"
                        rows="5"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setActiveField('message')}
                        onBlur={() => setActiveField(null)}
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none transition-all resize-none"
                      />
                    </motion.div>
                  </div>

                  <div className="pt-2">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full flex items-center justify-center py-3 px-6 rounded-lg font-medium text-white transition-all ${
                        isSubmitting ? 'bg-blue-400' : 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FiSend className="mr-2" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Floating contact info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center"
        >
          {[
            { icon: <FiMail className="text-2xl" />, title: "Email", value: "contact@example.com" },
            { icon: <FiUser className="text-2xl" />, title: "Office", value: "123 Business Ave" },
            { icon: <FiMessageSquare className="text-2xl" />, title: "Social", value: "@ourcompany" }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-2 text-blue-500">{item.icon}</div>
              <h3 className="font-medium text-gray-700">{item.title}</h3>
              <p className="text-gray-500">{item.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;