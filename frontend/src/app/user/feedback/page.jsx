'use client';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const Feedback = () => {
  const [formData, setFormData] = useState({
    event: '',
    rating: 0,
    liked: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/feed/submit-feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setShowThankYou(true);
      toast.success('Feedback submitted successfully!');
    } catch (error) {
      toast.error('Failed to submit feedback. Please try again.');
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[url('/images/bg-9.jpg')] bg-cover bg-center bg-fixed py-12 relative">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {!showThankYou ? (
          <div className="max-w-md mx-auto bg-white/90 backdrop-blur-lg rounded-3xl overflow-hidden p-8 shadow-2xl border border-white/30 transform transition-all hover:scale-[1.01]">
            <div className="text-left mb-8 relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-purple-500/10 blur-xl" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-blue-500/10 blur-xl" />
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Your Feedback
              </h1>
              <p className="text-gray-700/90 text-lg">
                We value your experience at our event
              </p>
              <div className="w-20 h-1.5 bg-gradient-to-r from-purple-400 to-blue-400 mt-4 rounded-full" />
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group transition-all duration-300 hover:-translate-y-1">
                <label htmlFor="event" className="flex items-center text-sm font-medium text-gray-700/90 mb-1">
                  <span className="w-8 h-8 flex items-center justify-center bg-purple-100 text-purple-600 rounded-lg mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </span>
                  Which event did you attend?
                </label>
                <select
                  id="event"
                  name="event"
                  value={formData.event}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full pl-4 pr-10 py-3 text-base border border-gray-300/70 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                >
                  <option value="" disabled>Select an event</option>
                  <option>Tech Summit 2023</option>
                  <option>Design Innovation Expo</option>
                  <option>Startup Launch Night</option>
                  <option>Creative Minds Workshop</option>
                  <option>Industry Networking Gala</option>
                </select>
              </div>

              <div className="group transition-all duration-300 hover:-translate-y-1">
                <label className="flex items-center text-sm font-medium text-gray-700/90 mb-2">
                  <span className="w-8 h-8 flex items-center justify-center bg-yellow-100 text-yellow-600 rounded-lg mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </span>
                  How would you rate this event?
                </label>
                <div className="flex items-center justify-center space-x-1 bg-white/50 rounded-xl py-3">
                  {[5, 4, 3, 2, 1].map((value) => (
                    <React.Fragment key={value}>
                      <input
                        type="radio"
                        id={`rating-${value}`}
                        name="rating"
                        value={value}
                        onChange={handleChange}
                        className="hidden peer"
                        required
                      />
                      <label
                        htmlFor={`rating-${value}`}
                        className="text-3xl cursor-pointer peer-checked:text-yellow-400 text-gray-300 hover:text-yellow-400 hover:scale-110 transition-transform duration-200"
                      >
                        ★
                      </label>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="group transition-all duration-300 hover:-translate-y-1">
                <label htmlFor="liked" className="flex items-center text-sm font-medium text-gray-700/90 mb-1">
                  <span className="w-8 h-8 flex items-center justify-center bg-green-100 text-green-600 rounded-lg mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </span>
                  What did you enjoy most?
                </label>
                <textarea
                  id="liked"
                  name="liked"
                  value={formData.liked}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="mt-2 block w-full sm:text-sm border border-gray-300/70 rounded-xl p-3 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="The speakers, venue, networking opportunities..."
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center items-center py-3.5 px-4 border border-transparent rounded-xl text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Submit Feedback
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="max-w-md mx-auto bg-white/90 backdrop-blur-lg rounded-3xl overflow-hidden p-8 shadow-2xl border border-white/30 text-center animate-in fade-in zoom-in">
            <div className="text-green-500 text-6xl mb-4 animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Thank You!</h2>
            <p className="text-gray-700/90 text-lg mb-6">
              Your feedback helps us create better experiences
            </p>
            <button
              onClick={() => {
                setShowThankYou(false);
                setFormData({ event: '', rating: 0, liked: '' });
              }}
              type="button"
              className="px-6 py-2.5 rounded-xl border border-gray-300/70 text-gray-700 hover:bg-white/50 transition-all hover:shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Submit Another
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;