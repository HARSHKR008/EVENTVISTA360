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
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      // Hide form and show thank you message
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
    <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative py-12" 
         style={{
           backgroundImage: "url('/images/bg-9.jpg')",
           backgroundSize: "100%",
           backgroundPosition: "center",
           backgroundAttachment: "fixed"
         }}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

      <div className="relative z-10">
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Event Feedback Form</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
              body {
                font-family: 'Poppins', sans-serif;
              }
              .glass-card {
                background: rgba(255, 255, 255, 0.9);
                backdrop-filter: blur(12px);
                -webkit-backdrop-filter: blur(12px);
                border: 1px solid rgba(255, 255, 255, 0.3);
                box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
              }
              .form-field {
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
              }
              .form-field:hover {
                transform: translateY(-2px);
              }
              .rating-star {
                transition: all 0.2s ease;
              }
              .rating-star:hover {
                transform: scale(1.3);
              }
              @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
              }
              .floating {
                animation: float 6s ease-in-out infinite;
              }
            `
          }}
        />
        
        <div className="w-full max-w-md mx-auto md:ml-8 md:mr-auto px-4 py-8 floating">
          {!showThankYou ? (
            <div className="glass-card rounded-3xl overflow-hidden p-8">
              <div className="text-left mb-8 relative">
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-purple-500/10 blur-xl" />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-blue-500/10 blur-xl" />
                <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent relative z-10">
                  Your Feedback
                </h1>
                <p className="text-gray-700/90 text-lg relative z-10">
                  We value your experience at our event
                </p>
                <div className="w-20 h-1.5 bg-gradient-to-r from-purple-400 to-blue-400 mt-4 rounded-full relative z-10" />
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-field group">
                  <label htmlFor="event" className="block text-sm font-medium text-gray-700/90 mb-1">
                    <span className="w-8 h-8 flex items-center justify-center bg-purple-100 text-purple-600 rounded-lg mr-2">
                      <i className="fas fa-calendar-day text-sm" />
                    </span>
                    Which event did you attend?
                  </label>
                  <select
                    id="event"
                    name="event"
                    value={formData.event}
                    onChange={handleChange}
                    required
                    className="mt-2 block w-full pl-4 pr-10 py-3 text-base border border-gray-300/70 rounded-xl"
                  >
                    <option value="" disabled>Select an event</option>
                    <option>Tech Summit 2023</option>
                    <option>Design Innovation Expo</option>
                    <option>Startup Launch Night</option>
                    <option>Creative Minds Workshop</option>
                    <option>Industry Networking Gala</option>
                  </select>
                </div>

                <div className="form-field group">
                  <label className="block text-sm font-medium text-gray-700/90 mb-2">
                    <span className="w-8 h-8 flex items-center justify-center bg-yellow-100 text-yellow-600 rounded-lg mr-2">
                      <i className="fas fa-star text-sm" />
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
                          className="rating-star text-3xl cursor-pointer peer-checked:text-yellow-400 text-gray-300 hover:text-yellow-400"
                        >
                          <i className="fas fa-star" />
                        </label>
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="form-field group">
                  <label htmlFor="liked" className="block text-sm font-medium text-gray-700/90 mb-1">
                    <span className="w-8 h-8 flex items-center justify-center bg-green-100 text-green-600 rounded-lg mr-2">
                      <i className="fas fa-heart text-sm" />
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
                    className="mt-2 block w-full sm:text-sm border border-gray-300/70 rounded-xl p-3"
                    placeholder="The speakers, venue, networking opportunities..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center items-center py-3.5 px-4 border border-transparent rounded-xl text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <i className="fas fa-spinner fa-spin mr-2" /> Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <i className="fas fa-paper-plane mr-2" /> Submit Feedback
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="glass-card rounded-3xl overflow-hidden p-8 text-center">
              <div className="text-green-500 text-6xl mb-4 animate-bounce">
                <i className="fas fa-check-circle" />
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
                className="px-6 py-2.5 rounded-xl border border-gray-300/70 text-gray-700 hover:bg-white/50"
              >
                <i className="fas fa-redo mr-2" /> Submit Another
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Feedback;