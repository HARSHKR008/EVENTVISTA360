'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const HeroSection = () => {
    const [hoveredEvent, setHoveredEvent] = useState(null);
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 50) {
            // Swipe left
            setActiveTestimonial((prev) => 
                prev === testimonials.length - 1 ? 0 : prev + 1
            );
        }

        if (touchStart - touchEnd < -50) {
            // Swipe right
            setActiveTestimonial((prev) => 
                prev === 0 ? testimonials.length - 1 : prev - 1
            );
        }
    };

    const testimonials = [
        {
            name: "Sarah & Michael",
            type: "Wedding Clients",
            quote: "Event Vista 360 made our wedding dreams come true! Their attention to detail and creative vision exceeded all our expectations.",
            stars: 5
        },
        {
            name: "TechCorp Inc.",
            type: "Corporate Client",
            quote: "Our annual conference was flawlessly executed. The Event Vista team handled everything from venue selection to attendee experience.",
            stars: 5
        },
        {
            name: "Jessica",
            type: "Birthday Celebration",
            quote: "My 30th birthday was absolutely magical! The team created an enchanted forest theme that left all my guests speechless.",
            stars: 5
        }
    ];

    const eventTypes = [
        {
            title: "Enchanted Garden Wedding",
            type: "Wedding",
            image: "/wedding-sample.jpg",
            description: "A fairytale wedding with floral installations and twinkling lights"
        },
        {
            title: "Tech Summit 2023",
            type: "Corporate",
            image: "/corporate-sample.jpg",
            description: "Immersive technology conference with interactive displays"
        },
        {
            title: "Masquerade Gala",
            type: "Social",
            image: "/gala-sample.jpg",
            description: "Elegant charity event with mystery and sophistication"
        }
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Area */}
            <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/pexels-rosario-fernandes-26325-3835638.jpg')", backgroundAttachment: isMobile ? 'scroll' : 'fixed' }}>
                <div className='bg-black/50 h-full pb-20'>
                    <div className="h-full container mx-auto px-4 grid grid-cols-1 md:grid-cols-12 text-left text-white">
                        <div className="my-auto col-span-1 md:col-span-7 animate-fade-in pt-20 md:pt-0">
                            <img 
                                src="/logo2.png" 
                                alt="Logo" 
                                className="w-64 md:w-84 h-auto mb-4 transition-transform duration-500 hover:scale-105 mx-auto md:mx-0" 
                            />
                            <h1 className="text-4xl md:text-6xl font-extrabold text-amber-100 mb-6 font-roboto animate-slide-in-left text-center md:text-left">
                                EVENT VISTA 360
                            </h1>
                            <h2 className="text-xl md:text-2xl italic font-light mb-6 text-amber-100 font-roboto animate-slide-in-left delay-100 text-center md:text-left">
                                Where Every Detail Tells Your Story.
                            </h2>
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8 animate-fade-in delay-200 justify-center md:justify-start">
                                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-amber-100/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg mx-auto sm:mx-0">
                                    <h3 className="text-amber-100 text-lg font-semibold">500+ Events</h3>
                                    <p className="text-white">Successfully Organized</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-amber-100/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg mx-auto sm:mx-0">
                                    <h3 className="text-amber-100 text-lg font-semibold">50+ Venues</h3>
                                    <p className="text-white">Premium Partnerships</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-auto col-span-1 md:col-span-5 animate-fade-in delay-300 mb-10 md:mb-0'>
                            <div className='bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-amber-100/20 transition-all duration-500 hover:shadow-xl hover:bg-white/15'>
  <div>
    <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-amber-100 text-center md:text-left">
      <span className="relative">
        <span className="text-amber-50/70">W</span>
        HERE
      </span> Fairytales Become Reality
    </h2>
    <p className="text-lg md:text-xl mb-6 text-white text-center md:text-left">
      Your trusted partner in creating unforgettable moments.
    </p>
    <div className="space-y-4 mb-6">
      {["Customized event planning", "Premium vendor network", "Stress-free experience"].map((item, index) => (
        <div key={index} className="flex items-center animate-fade-in-right" style={{ animationDelay: `${index * 100 + 400}ms` }}>
          <svg className="w-5 h-5 text-amber-100 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-white">{item}</span>
        </div>
      ))}
    </div>
    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in delay-500 justify-center md:justify-start">
      <Link
        href="/browse"
        className="inline-block bg-[#e8d5c0] text-gray-800 font-semibold py-3 px-8 rounded border border-gray-700 hover:bg-[#d4c3af] transition-all duration-300 hover:scale-105 hover:shadow-md text-center"
      >
        BROWSE EVENTS
      </Link>
      <Link
        href="/contactus"
        className="inline-block bg-transparent text-amber-100 font-semibold py-3 px-8 rounded border border-amber-100 hover:bg-amber-100/10 transition-all duration-300 hover:scale-105 hover:shadow-md text-center"
      >
        GET A QUOTE
      </Link>
    </div>
  </div>
</div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
                    <svg className="w-10 h-10 text-amber-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </section>

            {/* Info Section */}
            <section className="bg-[#e8d5c0] py-12 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0 flex flex-col pl-0 md:pl-6 justify-around animate-slide-in-left order-2 md:order-1">
                        <span className="text-amber-800 font-semibold mb-2 text-center md:text-left">ABOUT OUR SERVICES</span>
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center md:text-left">Crafting Unforgettable Experiences</h3>
                        <p className="text-lg leading-relaxed text-gray-800 mb-6 text-center md:text-left">
                            At Event Vista 360, we transform visions into reality with our comprehensive event planning services. From intimate gatherings to grand celebrations, our team of experts handles every detail with precision and creativity.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {["Weddings", "Corporate", "Social", "Themed"].map((item, index) => (
                                <div 
                                    key={index}
                                    className="bg-white/70 p-4 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-md hover:-translate-y-1"
                                >
                                    <h4 className="font-bold text-gray-800 mb-2">{item}</h4>
                                    <p className="text-gray-700 text-sm md:text-base">
                                        {item === "Weddings" && "Tailored ceremonies that reflect your unique love story"}
                                        {item === "Corporate" && "Professional events that impress and inspire"}
                                        {item === "Social" && "Memorable parties for all your special occasions"}
                                        {item === "Themed" && "Immersive experiences with creative concepts"}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                            {/* <button className="bg-gray-800 text-white font-semibold py-3 px-8 rounded hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-md">
                                Our Services
                            </button>
                            <button className="bg-transparent text-gray-800 font-semibold py-3 px-8 rounded border border-gray-800 hover:bg-white/30 transition-all duration-300 hover:scale-105 hover:shadow-md">
                                View Portfolio
                            </button> */}
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 relative animate-slide-in-right order-1 md:order-2 mb-8 md:mb-0">
                        <div className="w-full h-64 md:h-[85vh] overflow-hidden transition-all duration-500 hover:scale-105 mx-auto">
                            <img src="/pic2.png" alt="Decor" className="w-full h-full" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    {/* Section Header - Editable */}
    <div className="text-center mb-12">
      <h2 className="text-3xl font-extrabold text-gray-900">
        What Our Clients Say
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Hear from people who've used our event platform
      </p>
    </div>

    {/* Testimonials Grid - Fully Editable */}
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Testimonial 1 - Edit all content below */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          {/* Replace with your image (can be URL or path) */}
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Client Name"
          />
          <div className="ml-4">
            {/* Edit name and title */}
            <h3 className="font-medium text-gray-900">Alex Johnson</h3>
            <p className="text-gray-500 text-sm">Marketing Director, TechCorp</p>
          </div>
        </div>
        {/* Edit testimonial text */}
        <p className="text-gray-600">
          "This platform transformed our annual conference. The registration process was seamless and we saw a 40% increase in attendance compared to last year."
        </p>
        {/* Edit stars (remove or add svg elements) */}
        <div className="mt-4 flex text-yellow-400">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      </div>

      {/* Testimonial 2 - Edit all content below */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          {/* Replace with your image */}
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Client Name"
          />
          <div className="ml-4">
            {/* Edit name and title */}
            <h3 className="font-medium text-gray-900">Aditya Jairaj</h3>
            <p className="text-gray-500 text-sm">MD, JEEP India</p>
          </div>
        </div>
        {/* Edit testimonial text */}
        <p className="text-gray-600">
          "The analytics dashboard provided incredible insights into our attendees. We've been able to tailor our events much better since we started using this platform."
        </p>
        {/* Edit stars */}
        <div className="mt-4 flex text-yellow-400">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      </div>

      {/* Testimonial 3 - Edit all content below */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          {/* Replace with your image */}
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Client Name"
          />
          <div className="ml-4">
            {/* Edit name and title */}
            <h3 className="font-medium text-gray-900">David Kim</h3>
            <p className="text-gray-500 text-sm">CEO, Startup Ventures</p>
          </div>
        </div>
        {/* Edit testimonial text */}
        <p className="text-gray-600">
          "From setup to execution, everything was intuitive. Our hybrid event ran without a hitch and attendees loved the mobile app integration. Will definitely use again!"
        </p>
        {/* Edit stars */}
        <div className="mt-4 flex text-yellow-400">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      </div>
    </div>

    {/* Add more testimonials as needed by duplicating the above blocks */}
  </div>
</section>

            {/* Featured Events Section */}
{/* Featured Events Section */}
<section className="py-12 md:py-20 bg-white">
    <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16 animate-fade-in">
            <span className="text-amber-600 font-semibold">OUR PORTFOLIO</span>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">Featured Events</h3>
            <p className="text-lg text-gray-600 mt-2 md:mt-4 max-w-2xl mx-auto">
                Explore some of our most memorable events that showcase our creativity and attention to detail.
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Event 1 - Corporate Conference */}
            <div 
                className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl"
                onMouseEnter={() => !isMobile && setHoveredEvent(0)}
                onMouseLeave={() => !isMobile && setHoveredEvent(null)}
                onClick={() => isMobile && setHoveredEvent(hoveredEvent === 0 ? null : 0)}
            >
                {/* Replace with your actual image */}
                <img 
                    src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Corporate Conference" 
                    className={`w-full h-64 md:h-80 object-cover transition-all duration-500 ${hoveredEvent === 0 ? 'scale-110' : ''}`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4 md:p-6 ${isMobile && hoveredEvent === 0 ? 'bg-black/70' : ''}`}>
                    <span className="text-amber-300 font-medium transition-all duration-300 group-hover:text-amber-400">Corporate</span>
                    <h4 className="text-xl md:text-2xl font-bold text-white mt-1 transition-all duration-300 group-hover:text-amber-100">Tech Summit 2023</h4>
                    <p className={`text-white/90 mt-2 transition-all duration-300 group-hover:text-white ${isMobile ? (hoveredEvent === 0 ? 'block' : 'hidden md:block') : 'block'}`}>
                        Annual technology conference featuring industry leaders and innovative startups.
                    </p>
                </div>
            </div>

            {/* Event 2 - Wedding */}
            <div 
                className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl"
                onMouseEnter={() => !isMobile && setHoveredEvent(1)}
                onMouseLeave={() => !isMobile && setHoveredEvent(null)}
                onClick={() => isMobile && setHoveredEvent(hoveredEvent === 1 ? null : 1)}
            >
                {/* Replace with your actual image */}
                <img 
                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Wedding Celebration" 
                    className={`w-full h-64 md:h-80 object-cover transition-all duration-500 ${hoveredEvent === 1 ? 'scale-110' : ''}`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4 md:p-6 ${isMobile && hoveredEvent === 1 ? 'bg-black/70' : ''}`}>
                    <span className="text-amber-300 font-medium transition-all duration-300 group-hover:text-amber-400">Wedding</span>
                    <h4 className="text-xl md:text-2xl font-bold text-white mt-1 transition-all duration-300 group-hover:text-amber-100">Sarah & Michael's Wedding</h4>
                    <p className={`text-white/90 mt-2 transition-all duration-300 group-hover:text-white ${isMobile ? (hoveredEvent === 1 ? 'block' : 'hidden md:block') : 'block'}`}>
                        A beautiful beachside wedding with sunset ceremony and elegant reception.
                    </p>
                </div>
            </div>

            {/* Event 3 - Music Festival */}
            <div 
                className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl"
                onMouseEnter={() => !isMobile && setHoveredEvent(2)}
                onMouseLeave={() => !isMobile && setHoveredEvent(null)}
                onClick={() => isMobile && setHoveredEvent(hoveredEvent === 2 ? null : 2)}
            >
                {/* Replace with your actual image */}
                <img 
                    src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Music Festival" 
                    className={`w-full h-64 md:h-80 object-cover transition-all duration-500 ${hoveredEvent === 2 ? 'scale-110' : ''}`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4 md:p-6 ${isMobile && hoveredEvent === 2 ? 'bg-black/70' : ''}`}>
                    <span className="text-amber-300 font-medium transition-all duration-300 group-hover:text-amber-400">Festival</span>
                    <h4 className="text-xl md:text-2xl font-bold text-white mt-1 transition-all duration-300 group-hover:text-amber-100">Sunset Beats Festival</h4>
                    <p className={`text-white/90 mt-2 transition-all duration-300 group-hover:text-white ${isMobile ? (hoveredEvent === 2 ? 'block' : 'hidden md:block') : 'block'}`}>
                        3-day outdoor music festival featuring international artists and local talents.
                    </p>
                </div>
            </div>
        </div>

        {/* Optional View All Button (uncomment if needed) */}
        {/* <div className="text-center mt-8 md:mt-12 animate-pulse">
            <button className="bg-gray-800 text-white font-semibold py-3 px-8 rounded hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                View All Events
            </button>
        </div> */}
    </div>
</section>

            {/* Add this to your globals.css or CSS file */}
            <style jsx>{`
                .clip-hex {
                    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
                }
                .clip-hex-mobile {
                    clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);
                }
                .animate-slide-in-left {
                    animation: slideInLeft 0.8s ease-out forwards;
                }
                .animate-slide-in-right {
                    animation: slideInRight 0.8s ease-out forwards;
                }
                .animate-fade-in {
                    animation: fadeIn 0.8s ease-out forwards;
                }
                .animate-fade-in-right {
                    animation: fadeInRight 0.6s ease-out forwards;
                }
                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                @keyframes fadeInRight {
                    from {
                        opacity: 0;
                        transform: translateX(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default HeroSection;