import Aurora from '@/components/aurora'
import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <div>
            <Navbar />
            <div>
                <Aurora
                    colorStops={["#00E5FF", "#00E1FD", "#1200FF"]}
                    blend={0.5}
                    amplitude={1}
                    speed={2}
                />
            </div>
<<<<<<< HEAD
            {/* hero section */}
            <section className="w-full py-20">
                <div className="container mx-auto px-4 text-center">
                    {/* Website Title */}c
                    <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-blue-600 drop-shadow-lg mb-4 transition-transform transform hover:scale-105 duration-300">
                        EventVista 360
                    </h1>
                    {/* Tagline */}
                    <h2 className="text-gray-700 font-semibold text-2xl md:text-3xl italic mb-6 transition-opacity duration-1000 opacity-90">
                        Where Every Detail Tells Your Story.
                    </h2>
                    {/* Description */}
                    <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                        We help you create the best memories of your special moments with style,
                        passion, and precision. Let us make your event unforgettable.
                    </p>
                    {/* Book Now Button */}
                    <a
                        href="/browse"
                        className="inline-block px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-pink-600 transform hover:scale-a transition-all duration-300"
                    >
                        BROWSE
                    </a>
                </div>
            </section>

=======
            <section className="w-full py-40 relative text-white overflow-hidden">
                {/* Video Background */}
                <video
                    autoPlay
                    muted
                    loop
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src="/images/vid-2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Optional dark overlay */}
                {/* <div class="absolute inset-0 bg-black bg-opacity-50 z-0"></div> */}
                {/* Content */}
                <div className="relative z-10 container mx-auto px-8 flex items-center justify-start min-h-[60vh]">
                    <div className="bg-grey bg-opacity-100 p-12 rounded-2xl max-w-2xl shadow-2xl backdrop-blur-lg">
                        <h1 className="text-6xl font-extrabold text-white mb-6 font-roboto">
                            EVENT VISTA 360
                        </h1>
                        <h2 className="text-2xl italic font-light mb-6 text-gray-100 font-roboto">
                            Where Every Detail Tells Your Story.
                        </h2>
                        <p className="text-lg mb-8 text-gray-200 font-merriweather">
                            We help you create the best memories of your special moments with style,
                            passion, and precision.
                        </p>
                        <a
                            href="/browse"
                            className="px-8 py-4 text-lg bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-bold text-white shadow-xl 
           transform transition-all duration-300 ease-in-out 
           hover:scale-110 hover:shadow-pink-500/50 hover:ring-2 hover:ring-white hover:ring-offset-2"
                        >
                            BROWSE
                        </a>
                    </div>
                </div>
            </section>


>>>>>>> 108a4b38d46a8954e733bffbd54141ce047a7709
            <section className="">
                <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 flex flex-col items-center justify-center space-y-12">
                    {/* Centered GALLERY Text */}
                    <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-pulse">
                        GALLERY
                    </h1>
                    {/* Gallery Images */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <a href="#_">
                            <img
                                src="/images/WEDDINGSAMPLE.jpg"
                                loading="lazy"
                                className="rounded-xl rotate-3 hover:rotate-0 duration-500 hover:-translate-y-6 h-full w-full object-cover hover:scale-110 transform origin-bottom"
                                alt="A couple celebrating their wedding"
                            />
                        </a>
                        <a href="#_">
                            <img
                                src="/images/intropic.jpg"
                                loading="lazy"
                                className="rounded-xl -rotate-3 hover:rotate-0 duration-500 hover:-translate-y-6 h-full w-full object-cover hover:scale-110 transform origin-bottom"
                                alt="A portrait of a person"
                            />
                        </a>
                        <a href="#_">
                            <img
                                src="/images/intro pic2.jpg"
                                loading="lazy"
                                className="rounded-xl rotate-3 hover:rotate-0 duration-500 hover:-translate-y-6 h-full w-full object-cover hover:scale-110 transform origin-bottom"
                                alt="A group of friends"
                            />
                        </a>
                        <a href="#_">
                            <img
                                src="/images/ENGAGEMESAMPLE.jpg"
                                loading="lazy"
                                className="rounded-xl -rotate-3 hover:rotate-0 duration-500 hover:-translate-y-6 h-full w-full object-cover hover:scale-110 transform origin-bottom"
                                alt="An engagement ring"
                            />
                        </a>
                    </div>
                </div>
            </section>

<<<<<<< HEAD
            <section className="bg-white py-16 px-8">
                <div className="max-w-screen-xl mx-auto text-center">
                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12">
                        What We Offer
                    </h2>
                    {/* 3x2 Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Offer Item */}
                        <div className="p-6 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 rounded-xl shadow-lg hover:scale-105 transition transform duration-500 cursor-pointer">
                            <i className="fas fa-camera-retro text-4xl text-purple-600 mb-4" />
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Photography</h3>
                            <p className="text-gray-600">
                                Capture your special moments with our professional photography
                                services.
                            </p>
                        </div>
                        <div className="p-6 bg-gradient-to-r from-yellow-100 via-pink-100 to-red-100 rounded-xl shadow-lg hover:scale-105 transition transform duration-500 cursor-pointer">
                            <i className="fas fa-music text-4xl text-red-500 mb-4" />
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                Music &amp; DJ
                            </h3>
                            <p className="text-gray-600">
                                Live music, DJ services, and sound systems for every occasion.
                            </p>
                        </div>
                        <div className="p-6 bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 rounded-xl shadow-lg hover:scale-105 transition transform duration-500 cursor-pointer">
                            <i className="fas fa-utensils text-4xl text-green-500 mb-4" />
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Catering</h3>
                            <p className="text-gray-600">
                                Delicious cuisine options tailored to your event and preferences.
                            </p>
                        </div>
                        <div className="p-6 bg-gradient-to-r from-blue-100 via-cyan-100 to-teal-100 rounded-xl shadow-lg hover:scale-105 transition transform duration-500 cursor-pointer">
                            <i className="fas fa-umbrella-beach text-4xl text-blue-500 mb-4" />
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Decorations</h3>
                            <p className="text-gray-600">
                                Beautiful, customizable decor to match your event theme.
                            </p>
                        </div>
                        <div className="p-6 bg-gradient-to-r from-indigo-100 via-violet-100 to-pink-100 rounded-xl shadow-lg hover:scale-105 transition transform duration-500 cursor-pointer">
                            <i className="fas fa-glass-cheers text-4xl text-indigo-500 mb-4" />
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                Event Planning
                            </h3>
                            <p className="text-gray-600">
                                End-to-end event planning for stress-free, seamless experiences.
                            </p>
                        </div>
                        <div className="p-6 bg-gradient-to-r from-orange-100 via-amber-100 to-yellow-100 rounded-xl shadow-lg hover:scale-105 transition transform duration-500 cursor-pointer">
                            <i className="fas fa-bus-alt text-4xl text-orange-500 mb-4" />
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                Transportation
                            </h3>
                            <p className="text-gray-600">
                                Comfortable and reliable transport solutions for your guests.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="w-full py-14">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
=======

            <footer
                className="w-full py-14 bg-cover bg-center text-white relative"
                style={{ backgroundImage: "url('images//bg-2.jpg')" }}
            >

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
>>>>>>> 108a4b38d46a8954e733bffbd54141ce047a7709
                    <div className="max-w-3xl mx-auto">
                        <a className="flex justify-center text-4xl font-bold">EVENT VISTA 360</a>

                        <ul className="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-16 mb-10 border-b border-white/30">
                            <li><a href="#" className="hover:text-gray-300">EVENT VISTA 360</a></li>
                            <li><a href="#" className="hover:text-gray-300">Products</a></li>
                            <li><a href="#" className="hover:text-gray-300">Resources</a></li>
                            <li><a href="#" className="hover:text-gray-300">Blogs</a></li>
                            <li><a href="#" className="hover:text-gray-300">Support</a></li>
                        </ul>

                        <div className="flex space-x-10 justify-center items-center mb-14">
                            {/* Social Icon 1 */}
                            <a href="#" className="text-white hover:text-indigo-400 transition-all duration-500">
                                <svg className="w-[1.688rem] h-[1.688rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                                    <path d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z" fill="currentColor" />
                                </svg>
                            </a>

                            {/* Social Icon 2 */}
                            <a href="#" className="text-white hover:text-indigo-400 transition-all duration-500">
                                <svg className="w-[1.688rem] h-[1.688rem]" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.76556 14.8811C9.76556 12.3243 11.8389 10.2511 14.3972 10.2511C16.9555 10.2511 19.03 12.3243 19.03 14.8811C19.03 17.4379 16.9555 19.5111 14.3972 19.5111C11.8389 19.5111 9.76556 17.4379 9.76556 14.8811ZM7.26117 14.8811C7.26117 18.82 10.456 22.0129 14.3972 22.0129C18.3385 22.0129 21.5333 18.82 21.5333 14.8811C21.5333 10.9422 18.3385 7.7493 14.3972 7.7493C10.456 7.7493 7.26117 10.9422 7.26117 14.8811ZM20.1481 7.46652C20.148 7.79616 20.2457 8.11843 20.4288 8.39258C20.6119 8.66674 20.8723 8.88046 21.177 9.00673C21.4817 9.133 21.8169 9.16614 22.1405 9.10196C22.464 9.03778 22.7612 8.87916 22.9945 8.64617C23.2278 8.41318 23.3868 8.11627 23.4513 7.79299C23.5157 7.46972 23.4829 7.13459 23.3568 6.83C23.2307 6.5254 23.017 6.26502 22.7428 6.08178C22.4687 5.89853 22.1463 5.80065 21.8164 5.80052H21.8158C21.3737 5.80073 20.9497 5.9763 20.637 6.28867C20.3243 6.60104 20.1485 7.02467 20.1481 7.46652Z" fill="currentColor" />
                                </svg>
                            </a>

                            {/* Social Icon 3 */}
                            <a href="#" className="text-white hover:text-indigo-400 transition-all duration-500">
                                <svg className="w-[0.938rem] h-[1.625rem]" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.7926 14.4697L14.5174 9.86889H10.0528V6.87836C10.0528 5.62033 10.6761 4.39105 12.6692 4.39105H14.7275V0.473179C13.5289 0.282204 12.3177 0.178886 11.1037 0.164062C7.42917 0.164062 5.0302 2.37101 5.0302 6.36077V9.86889H0.957031V14.4697H5.0302V25.5979H10.0528V14.4697H13.7926Z" fill="currentColor" />
                                </svg>
                            </a>

                            {/* Social Icon 4 */}
                            <a href="#" className="text-white hover:text-indigo-400 transition-all duration-500">
                                <svg className="w-[1.875rem] h-[1.375rem]" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M26.3106 1.27838C27.5782 1.62071 28.5745 2.61957 28.9113 3.88573C29.524 6.18356 29.524 10.9809 29.524 10.9809C29.524 10.9809 29.524 15.7782 28.9113 18.076C28.5698 19.3469 27.5735 20.3457 26.3106 20.6834C24.0186 21.2977 14.8226 21.2977 14.8226 21.2977C14.8226 21.2977 5.63122 21.2977 3.33456 20.6834C2.06695 20.3411 1.07063 19.3422 0.73385 18.076C0.121094 15.7782 0.121094 10.9809 0.121094 10.9809C0.121094 10.9809 0.121094 6.18356 0.73385 3.88573C1.07531 2.61488 2.07162 1.61602 3.33456 1.27838C5.63122 0.664062 14.8226 0.664062 14.8226 0.664062C14.8226 0.664062 24.0186 0.664062 26.3106 1.27838ZM19.5234 10.9809L11.885 15.403V6.55872L19.5234 10.9809Z" fill="currentColor" />
                                </svg>
                            </a>
                        </div>

                        <span className="text-lg text-white text-center block">
                            © <a href="https://pagedone.io/" className="underline hover:text-indigo-300">EVENT VISTA 360</a> 2024, All rights reserved.
                        </span>
                    </div>
                </div>
            </footer>



        </div>
    )
}

export default Home