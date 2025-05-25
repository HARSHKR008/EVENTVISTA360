'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <span className="text-3xl font-bold text-gray-900">EVENT VISTA 360</span>
            </Link>
            <p className="text-gray-600 text-lg">
              Creating unforgettable experiences with precision and creativity.
            </p>
            <div className="flex space-x-6">
              {['twitter', 'instagram', 'facebook', 'youtube'].map((social) => (
                <Link 
                  key={social} 
                  href="#" 
                  className="text-gray-500 hover:text-amber-500 transition-colors duration-300"
                  aria-label={`Follow us on ${social}`}
                >
                  <span className="sr-only">{social}</span>
                  <i className={`fab fa-${social} text-2xl`} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-gray-600 hover:text-amber-500 text-lg transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Our Services</h3>
            <ul className="space-y-4">
              {['Wedding Planning', 'Corporate Events', 'Birthday Parties', 'Themed Events', 'Venue Selection', 'Catering'].map((service) => (
                <li key={service}>
                  <Link 
                    href="#" 
                    className="text-gray-600 hover:text-amber-500 text-lg transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Us</h3>
            <address className="not-italic text-gray-600 space-y-4 text-lg">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-amber-500" />
                <span>123 Event Street, Suite 456<br />New York, NY 10001</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-amber-500" />
                <Link href="tel:+11234567890" className="hover:text-amber-500 transition-colors duration-300">
                  +1 (123) 456-7890
                </Link>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope mr-3 text-amber-500" />
                <Link href="mailto:info@eventvista360.com" className="hover:text-amber-500 transition-colors duration-300">
                  info@eventvista360.com
                </Link>
              </div>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-10"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-lg mb-4 md:mb-0">
            © {new Date().getFullYear()} EVENT VISTA 360. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-500 hover:text-amber-500 text-lg transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-500 hover:text-amber-500 text-lg transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-500 hover:text-amber-500 text-lg transition-colors duration-300">
              Sitemap
            </Link>
          </div>
        </div>

        {/* Back to Top Button */}
        {/* <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-amber-500 text-white p-3 rounded-full shadow-lg hover:bg-amber-600 transition-colors duration-300 z-50"
          aria-label="Back to top"
        >
          <i className="fas fa-arrow-up text-xl" />
        </button> */}
      </div>
    </footer>
  );
};

export default Footer;