"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ait from "@/assets/aith.png";
import aktu from "@/assets/aktu.png";
import citi from "@/assets/citi.png";
import siic from "@/assets/siic.webp";
import sui from "@/assets/sui.png";
import dst from "@/assets/dst.png";
import startinup from "@/assets/startinup.png";

const partners = [
  { src: siic, alt: "SIIC" },
  { src: ait, alt: "AIT" },
  { src: aktu, alt: "AKTU" },
  { src: citi, alt: "CITI" },
  { src: sui, alt: "SUI" },
  { src: dst, alt: "DST" },
  { src: startinup, alt: "Start in UP" },
];

const ProudPartner = () => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
      return () => currentRef.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="py-16 px-4 bg-gradient-to-b from-green-50 to-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600"
      >
        Proud Partners
      </motion.h2>
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide space-x-8 pb-8"
          onScroll={handleScroll}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0"
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center w-48 h-32 bg-gradient-to-br from-green-50 to-blue-50">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={150}
                  height={75}
                  className="max-w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-500 text-white rounded-full p-2 shadow-lg hover:bg-green-600 transition-colors duration-300"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
        )}
        {showRightArrow && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-500 text-white rounded-full p-2 shadow-lg hover:bg-green-600 transition-colors duration-300"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>
      <div className="flex justify-center mt-6 space-x-2">
        {partners.map((_, index) => (
          <div
            key={index}
            className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-blue-400 opacity-50 transition-opacity duration-300 hover:opacity-100"
          />
        ))}
      </div>
    </div>
  );
};

export default ProudPartner;
