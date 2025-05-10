"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/aboutus", label: "ABOUT US" },
    { href: "/services", label: "SERVICES" },
    { href: "#", label: "GALLERY" },
    { href: "/contactus", label: "CONTACT US" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:bg-indigo-700">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <nav className="flex flex-col space-y-6 pt-10">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-lg font-medium hover:text-indigo-200 transition duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 font-medium">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-indigo-200 transition duration-200">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Login Button */}
        <Link href="/login">
          <Button className="bg-white text-indigo-600 hover:bg-indigo-100 font-semibold rounded-full shadow-md">
            LOGIN
          </Button>
        </Link>
      </div>
    </header>
  )
}

export default Navbar
