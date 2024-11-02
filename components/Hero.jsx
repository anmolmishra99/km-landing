"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import logo from "@/assets/logo.png";

const images = [
  "https://images.unsplash.com/photo-1643474004250-05d73e1473e0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1643474004794-84bc99460fea?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1537084642907-629340c7e59c?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1600150806193-cf869bcfee05?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function LandingPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white text-gray-900 shadow-md"
            : "bg-transparent text-white"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Image src={logo} alt="Krishi Mandi" width={50} height={50} />

          <nav className="hidden md:flex space-x-6">
            {["Home", "FAQ", "About Us", "Organic Waste Management"].map(
              (item) => (
                <Link
                  key={item}
                  href={
                    item === "Organic Waste Management"
                      ? `/organic-waste-management`
                      : `/#${item.toLowerCase()}`
                  }
                  className={`hover:text-green-400 transition-colors duration-300 ${
                    isScrolled ? "text-gray-900" : "text-white"
                  }`}
                >
                  {item}
                </Link>
              )
            )}
          </nav>

          <Button
            variant="outline"
            className={`md:hidden ${
              isScrolled
                ? "text-gray-900 border-gray-900"
                : "text-white border-white"
            }`}
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? "Close" : "Menu"}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-200 shadow-md">
            <ul className="flex flex-col space-y-4 py-4 px-4">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="block hover:text-green-600 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <section className="relative h-screen overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImageIndex]}
              alt={`Farming scene ${currentImageIndex + 1}`}
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="max-w-2xl text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Connecting Farmers to Consumers
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl mb-8"
            >
              Fostering sustainable agriculture and empowering local communities
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Button className="bg-green-600 text-white hover:bg-green-700 text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                Get Started
              </Button>
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-green-600 text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
