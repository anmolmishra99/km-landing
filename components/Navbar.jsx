"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // Adjust the path as necessary
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for the menu toggle
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white text-gray-900 py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={logo}
            alt="Krishi Mandi"
            width={200} // Adjusted for better visibility on mobile
            height={200}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-green-600">
            Home
          </Link>
          <Link href="#faq" className="hover:text-green-600">
            FAQ
          </Link>
          <Link href="/about-us" className="hover:text-green-600">
            About Us
          </Link>
          <Link
            href="/organic-waste-management"
            className="hover:text-green-600"
          >
            Organic Waste Management
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="outline"
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col space-y-4 py-4 px-4">
            <li>
              <Link href="/" className="block hover:text-green-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="#faq" className="block hover:text-green-600">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="block hover:text-green-600">
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/organic-waste-management"
                className="block hover:text-green-600"
              >
                Organic Waste Management
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
