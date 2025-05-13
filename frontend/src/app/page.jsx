import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <div>
            {/* Hero Area */}
            <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/pexels-rosario-fernandes-26325-3835638.jpg')" }}>
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-">

                    <div className="mb-8">
                        {/* Replace with your actual logo */}
                        <img src="/" alt="Logo" className="mx-auto w-24 mb-2" />
                        <h1 class="text-6xl font-extrabold text-white mb-6 font-roboto">
          EVENT VISTA 360
        </h1>
        <h2 class="text-2xl italic font-light mb-6 text-gray-100 font-roboto">
          Where Every Detail Tells Your Story.
        </h2>
                    </div>

                    <div className='flex flex-col md:flex-row items-center justify-around w-full gap-8'>
                        {/* <div>
                            <img src="/phool1.png" alt="" width={500}/>
                        </div> */}
                        <div className=''>
                            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4">Where Fairytales <br /> Become Reality</h2>
                            <p className="text-lg md:text-xl mb-6">Your trusted partner in wedding planning.</p>
                            <Link 
                                href="/browse" 
                                className="inline-block bg-[#e8d5c0] text-gray-800 font-semibold py-2 px-6 rounded border border-gray-700 hover:bg-[#d4c3af] transition"
                            >
                                BROWSE
                            </Link>
                        </div>
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