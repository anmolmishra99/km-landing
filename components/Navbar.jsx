import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="bg-white text-gray-900 py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://krishimandi.in/wp-content/uploads/2024/01/K__7_-removebg-preview-1-Copy.png"
            alt="Krishi Mandi"
            width={200}
            height={200}
          />
        </Link>
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
        </nav>
        <Button variant="outline" className="md:hidden">
          Menu
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
