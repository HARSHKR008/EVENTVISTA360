import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Beautiful Header</title>
      <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg text-white">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center justify-between">
          {/* Navigation */}
          <nav className="flex flex-wrap items-center text-base justify-center space-x-6 font-medium">
            <a href="/" className="hover:text-indigo-200 transition duration-200">HOME</a>
            <a href="/aboutus" className="hover:text-indigo-200 transition duration-200">ABOUT US</a>
            <a href="/services" className="hover:text-indigo-200 transition duration-200">SERVICES</a>
            <a href="#" className="hover:text-indigo-200 transition duration-200">GALLERY</a>
            <Link href="/contactus" className="hover:text-indigo-200 transition duration-200">CONTACT US</Link>
          </nav>
          {/* Login Button */}
          <Link href="/login" className=" mt-4 md:mt-0 inline-flex items-center bg-white text-indigo-600 font-semibold py-2 px-5 rounded-full hover:bg-indigo-100 transition duration-300 shadow-md">
            LOGIN
          </Link>
        </div>
      </header>
    </div>
  )
}

export default Navbar