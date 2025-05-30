"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion } from "framer-motion"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userRole, setUserRole] = useState(null)

  useEffect(() => {
    // Check authentication status
    const token = localStorage.getItem('token')
    const role = localStorage.getItem('role')
    setIsAuthenticated(!!token)
    setUserRole(role)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    setIsAuthenticated(false)
    setUserRole(null)
  }

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/aboutus", label: "ABOUT US" },
    { href: "/services", label: "SERVICES" },
    { href: "#", label: "GALLERY" },
    { href: "/contactus", label: "CONTACT US" },
  ]

  const getAuthButton = () => {
    if (!isAuthenticated) {
      return (
        <Link href="/login">
          <Button className="bg-white text-emerald-600 hover:bg-emerald-100 font-semibold rounded-full shadow-lg px-6 py-2 transition-all duration-300 hover:shadow-emerald-400/30">
            LOGIN
          </Button>
        </Link>
      )
    }

    return (
      <div className="flex gap-2">
        {userRole === 'admin' ? (
          <Link href="/admin/dashboard">
            <Button className="bg-white text-emerald-600 hover:bg-emerald-100 font-semibold rounded-full shadow-lg px-6 py-2 transition-all duration-300 hover:shadow-emerald-400/30">
              DASHBOARD
            </Button>
          </Link>
        ) : (
          <Link href="/user/profile">
            <Button className="bg-white text-emerald-600 hover:bg-emerald-100 font-semibold rounded-full shadow-lg px-6 py-2 transition-all duration-300 hover:shadow-emerald-400/30">
              PROFILE
            </Button>
          </Link>
        )}
        <Button 
          onClick={handleLogout}
          className="bg-red-500 text-white hover:bg-red-600 font-semibold rounded-full shadow-lg px-6 py-2 transition-all duration-300 hover:shadow-red-400/30"
        >
          LOGOUT
        </Button>
      </div>
    )
  }

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-emerald-600 to-emerald-900 shadow-xl backdrop-blur-sm border-b border-emerald-500/20">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo/Brand - Add your logo here */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center"
        >
          <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-200">
            EVENT VISTA360
          </Link>
        </motion.div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-emerald-700/50 rounded-full p-2 transition-all"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="left" 
            className="bg-gradient-to-b from-emerald-900 to-emerald-800 text-white border-r border-emerald-700/30 w-[280px]"
          >
            <div className="h-full flex flex-col">
              <div className="pt-6 pb-4 border-b border-emerald-700/30">
                <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-300 px-4">
                  Menu
                </h2>
              </div>
              <nav className="flex-1 flex flex-col space-y-1 pt-6">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.label}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={link.href}
                      className="block px-4 py-3 text-lg font-medium hover:bg-emerald-800/50 transition-all duration-200 rounded-r-lg group"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="flex items-center">
                        <span className="w-1 h-6 bg-emerald-400 mr-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto p-4 border-t border-emerald-700/30">
                {getAuthButton()}
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2 relative">
          {navLinks.map((link, index) => (
            <div 
              key={link.label}
              className="relative"
              onMouseEnter={() => setHoveredLink(index)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <Link 
                href={link.href} 
                className="relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 z-10"
              >
                <span className={`relative z-10 ${hoveredLink === index ? 'text-white' : 'text-emerald-100 hover:text-white'}`}>
                  {link.label}
                </span>
              </Link>
              
              {hoveredLink === index && (
                <motion.div
                  layoutId="navHighlight"
                  className="absolute inset-0 bg-emerald-500/30 rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                />
              )}
            </div>
          ))}
        </nav>

        {/* Auth Button - Desktop */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block"
        >
          {getAuthButton()}
        </motion.div>
      </div>
    </header>
  )
}

export default Navbar