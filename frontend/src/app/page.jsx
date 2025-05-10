import React from 'react';

const HeroSection = () => {
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
            <section
  style={{ background: 'url("/images/bg-4.jpg") no-repeat center center/cover' }}
  className="w-full py-40 relative text-white"
>
  {/* Stronger Overlay */}
  <div className="absolute inset-100 bg-black bg-opacity-10 z-0" />
  {/* Content */}
  <div className="relative z-10 container mx-auto px-8 flex items-center justify-start min-h-[60vh]">
    <div className="bg-grey bg-opacity-200 p-12 rounded-2xl max-w-2xl shadow-2xl backdrop-blur-lg">
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
        href="#"
        className="px-8 py-4 text-lg bg-gradient-to-r from-purple-500 to-black-500 rounded-full font-bold shadow-xl hover:scale-105 transition-transform duration-300"
      >
        BROWSE
      </a>
    </div>
  </div>
</section>


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

            {/* Info Section */}
            <section className="bg-[#e8d5c0]  md:flex items-center justify-around">
                <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col pl-6 justify-around">
                    <h3 className="text-4xl font-bold mb-4">Planning Your Perfect Day</h3>
                    <p className="text-lg leading-relaxed text-gray-800">
                        We believe that weddings should be a reflection of your unique love story and personal style. We work closely with our clients to develop a cohesive theme and aesthetic, ensuring every detail is perfectly curated.
                    </p>
                    <button className="mt-6 bg-white text-black font-semibold py-2 px-6 border border-black hover:bg-gray-100 transition">Learn More</button>
                </div>
                <div className="md:w-1/2 relative">
                    <div className="w-full h-full clip-hex overflow-hidden">
                        <img src="/pic2.png" alt="Decor" className="object-cover h-[85vh] " />
                    </div>
                </div>
            </section>
        </div>
    );
};


export default HeroSection;
