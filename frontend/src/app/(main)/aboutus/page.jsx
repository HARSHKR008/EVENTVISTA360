import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About <span className="text-indigo-600">EVENTvista360</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Revolutionizing event experiences with immersive 360° views and voice-powered navigation.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Mission Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></span>
            Our Mission
          </h2>
          <p className="text-gray-700">
            To transform event presentations with <strong className="text-indigo-600">360° media</strong> and <strong className="text-indigo-600">voice navigation</strong>, creating intuitive, accessible, and engaging digital experiences.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { stat: "60%", desc: "Prefer immersive portfolios (Event Tech 2024)" },
            { stat: "45%", desc: "Engage more with voice-enabled sites (Statista)" },
            { stat: "30%", desc: "Higher engagement with 360° features" }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-[1.02] transition-transform">
              <p className="text-4xl font-bold text-indigo-600 mb-2">{item.stat}</p>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Core Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "360° panoramic event viewing",
              "Voice-command navigation (Google Cloud/Amazon Lex)",
              "Interactive hotspots & media galleries",
              "Real-time dashboard & CMS",
              "Personalized voice filtering"
            ].map((feature, index) => (
              <div key={index} className="flex items-start">
                <svg className="w-5 h-5 text-indigo-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Audience & Tech Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-indigo-50 rounded-xl p-6">
            <h2 className="text-xl font-bold text-indigo-800 mb-3">Our Audience</h2>
            <p className="text-gray-700">
              Event planners, corporate clients, and venues seeking <strong>innovative digital showcases</strong> for their events.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3">Technologies Used</h2>
            <p className="text-gray-700">
              React, Node.js, MongoDB, WebGL, and voice APIs for seamless interactivity.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Harsh Kr. Prajapati",
                role: "360° Media & Voice Navigation",
                desc: "Led development of immersive viewer and voice integration."
              },
              {
                name: "Prashant Singh",
                role: "UI/UX & Dynamic Components",
                desc: "Designed interactive interfaces and voice filtering."
              }
            ].map((member, index) => (
              <div key={index} className="border-l-4 border-indigo-500 pl-4 py-2">
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-indigo-600 text-sm mb-2">{member.role}</p>
                <p className="text-gray-700">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">The Future of Event Tech</h2>
          <p>
            EVENTvista360 sets a new standard for digital event interaction—combining <strong>immersion</strong>, <strong>accessibility</strong>, and <strong>cutting-edge technology</strong> to delight users and clients alike.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;