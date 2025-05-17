import React from 'react'

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-indigo-600 text-white py-32 px-4">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">Our Services</h1>
          <p className="text-xl md:text-2xl mb-8 animate-fadeIn delay-100">
            Making Your Events Memorable and Extraordinary
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition duration-300 transform hover:scale-105 animate-fadeIn delay-200">
            Get a Quote
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Comprehensive Event Solutions
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            We offer a full range of event management services to bring your vision to life
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-500 transform hover:-translate-y-2 group"
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition">
                  <span className="text-2xl text-indigo-600">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <button className="text-indigo-600 font-semibold flex items-center hover:text-indigo-800 transition">
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-10 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to plan your next event?</h3>
          <p className="mb-8 max-w-2xl mx-auto">Let's create something amazing together</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition duration-300">
              Contact Us
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

// Service data
const servicesData = [
  {
    icon: "💍",
    title: "Wedding Planning",
    description: "Elegant and stress-free wedding planning tailored to your dreams and budget."
  },
  {
    icon: "🏢",
    title: "Corporate Events",
    description: "Professional and impactful corporate event solutions for meetings, retreats, and parties."
  },
  {
    icon: "🎂",
    title: "Birthday Parties",
    description: "Fun, vibrant, and custom-themed birthday celebrations for all ages."
  },
  {
    icon: "🎵",
    title: "Concerts & Festivals",
    description: "Large-scale concert and festival management ensuring unforgettable experiences."
  },
  {
    icon: "🚀",
    title: "Product Launches",
    description: "Creative and impactful product launch events to capture attention and generate buzz."
  },
  {
    icon: "🎉",
    title: "Private Parties",
    description: "Exclusive private party planning with luxurious touches and personal themes."
  },
  {
    icon: "📊",
    title: "Conference Management",
    description: "Full conference management services including logistics, guest handling, and technical setups."
  },
  {
    icon: "🖼️",
    title: "Exhibitions & Trade Shows",
    description: "Professional planning and execution for exhibitions and trade show participation."
  }
]

export default Services