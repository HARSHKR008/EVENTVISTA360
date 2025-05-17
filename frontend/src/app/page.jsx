import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <div>
            {/* Hero Area */}
            <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/pexels-rosario-fernandes-26325-3835638.jpg')", backgroundAttachment: 'fixed' }}>
                <div className='bg-black/50 h-full pb-20'>
                    <div className="h-full container mx-auto grid grid-cols-12 text-left text-white">
                        <div className="my-auto col-span-7">
                            <img src="/logo2.png" alt="Logo" className="w-84 h-84 mb-4" />
                            <h1 className="text-6xl font-extrabold text-amber-100 mb-6 font-roboto">
                                EVENT VISTA 360
                            </h1>
                            <h2 className="text-2xl italic font-light mb-6 text-amber-100 font-roboto">
                                Where Every Detail Tells Your Story.
                            </h2>
                            <div className="flex space-x-4 mt-8">
                                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-amber-100/20">
                                    <h3 className="text-amber-100 text-lg font-semibold">500+ Events</h3>
                                    <p className="text-white">Successfully Organized</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-amber-100/20">
                                    <h3 className="text-amber-100 text-lg font-semibold">50+ Venues</h3>
                                    <p className="text-white">Premium Partnerships</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-auto col-span-5'>
                            <div className='bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-amber-100/20'>
                                <div>
                                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-amber-100">Where Fairytales <br /> Become Reality</h2>
                                    <p className="text-lg md:text-xl mb-6 text-white">Your trusted partner in creating unforgettable moments.</p>
                                    <div className="space-y-4 mb-6">
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 text-amber-100 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-white">Customized event planning</span>
                                        </div>
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 text-amber-100 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-white">Premium vendor network</span>
                                        </div>
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 text-amber-100 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-white">Stress-free experience</span>
                                        </div>
                                    </div>
                                    <div className="flex space-x-4">
                                        <Link
                                            href="/browse"
                                            className="inline-block bg-[#e8d5c0] text-gray-800 font-semibold py-3 px-8 rounded border border-gray-700 hover:bg-[#d4c3af] transition"
                                        >
                                            BROWSE EVENTS
                                        </Link>
                                        <Link
                                            href="/contact"
                                            className="inline-block bg-transparent text-amber-100 font-semibold py-3 px-8 rounded border border-amber-100 hover:bg-amber-100/10 transition"
                                        >
                                            GET A QUOTE
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-10 left-0 right-0 flex justify-center">
                    <svg className="w-10 h-10 text-amber-100 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </section>

            {/* Info Section */}
            <section className="bg-[#e8d5c0] py-20 md:flex items-center justify-around">
                <div className="container mx-auto md:flex items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col pl-6 justify-around">
                        <span className="text-amber-800 font-semibold mb-2">ABOUT OUR SERVICES</span>
                        <h3 className="text-4xl font-bold mb-6 text-gray-800">Crafting Unforgettable Experiences</h3>
                        <p className="text-lg leading-relaxed text-gray-800 mb-6">
                            At Event Vista 360, we transform visions into reality with our comprehensive event planning services. From intimate gatherings to grand celebrations, our team of experts handles every detail with precision and creativity.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-white/70 p-4 rounded-lg">
                                <h4 className="font-bold text-gray-800 mb-2">Weddings</h4>
                                <p className="text-gray-700">Tailored ceremonies that reflect your unique love story</p>
                            </div>
                            <div className="bg-white/70 p-4 rounded-lg">
                                <h4 className="font-bold text-gray-800 mb-2">Corporate</h4>
                                <p className="text-gray-700">Professional events that impress and inspire</p>
                            </div>
                            <div className="bg-white/70 p-4 rounded-lg">
                                <h4 className="font-bold text-gray-800 mb-2">Social</h4>
                                <p className="text-gray-700">Memorable parties for all your special occasions</p>
                            </div>
                            <div className="bg-white/70 p-4 rounded-lg">
                                <h4 className="font-bold text-gray-800 mb-2">Themed</h4>
                                <p className="text-gray-700">Immersive experiences with creative concepts</p>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <button className="bg-gray-800 text-white font-semibold py-3 px-8 rounded hover:bg-gray-700 transition">
                                Our Services
                            </button>
                            <button className="bg-transparent text-gray-800 font-semibold py-3 px-8 rounded border border-gray-800 hover:bg-white/30 transition">
                                View Portfolio
                            </button>
                        </div>
                    </div>
                    <div className="md:w-1/2 relative">
                        <div className="w-full h-full clip-hex overflow-hidden">
                            <img src="/pic2.png" alt="Decor" className="object-cover h-[85vh] w-full" />
                            <div className="absolute -bottom-10 -right-10 bg-white p-6 shadow-xl rounded-lg w-64">
                                <div className="flex items-center mb-2">
                                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-bold">15 Years</h4>
                                </div>
                                <p className="text-sm text-gray-600">Of creating magical events and lasting memories for our clients.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-gray-100">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-amber-600 font-semibold">CLIENT TESTIMONIALS</span>
                        <h3 className="text-4xl font-bold text-gray-800 mt-2">What Our Clients Say</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-amber-100 rounded-full mr-4"></div>
                                <div>
                                    <h4 className="font-bold">Sarah & Michael</h4>
                                    <p className="text-sm text-gray-600">Wedding Clients</p>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-4">
                                "Event Vista 360 made our wedding dreams come true! Their attention to detail and creative vision exceeded all our expectations."
                            </p>
                            <div className="flex text-amber-400">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-amber-100 rounded-full mr-4"></div>
                                <div>
                                    <h4 className="font-bold">TechCorp Inc.</h4>
                                    <p className="text-sm text-gray-600">Corporate Client</p>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-4">
                                "Our annual conference was flawlessly executed. The Event Vista team handled everything from venue selection to attendee experience."
                            </p>
                            <div className="flex text-amber-400">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-amber-100 rounded-full mr-4"></div>
                                <div>
                                    <h4 className="font-bold">Jessica</h4>
                                    <p className="text-sm text-gray-600">Birthday Celebration</p>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-4">
                                "My 30th birthday was absolutely magical! The team created an enchanted forest theme that left all my guests speechless."
                            </p>
                            <div className="flex text-amber-400">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Events Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-amber-600 font-semibold">OUR PORTFOLIO</span>
                        <h3 className="text-4xl font-bold text-gray-800 mt-2">Featured Events</h3>
                        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                            Explore some of our most memorable events that showcase our creativity and attention to detail.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
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
                        ].map((event, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                                <img 
                                    src={event.image} 
                                    alt={event.title} 
                                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                                    <span className="text-amber-300 font-medium">{event.type}</span>
                                    <h4 className="text-2xl font-bold text-white mt-1">{event.title}</h4>
                                    <p className="text-white/90 mt-2">{event.description}</p>
                                    <button className="mt-4 self-start bg-amber-400 text-gray-900 font-semibold py-2 px-6 rounded hover:bg-amber-500 transition">
                                        View Gallery
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <button className="bg-gray-800 text-white font-semibold py-3 px-8 rounded hover:bg-gray-700 transition">
                            View All Events
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;