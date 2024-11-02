"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Leaf,
  Sprout,
  Apple,
  PlayCircle,
  Truck,
  Users,
  ShieldCheck,
  Star,
} from "lucide-react";
import Link from "next/link";

import Navbar from "./Navbar";
import Footer from "./Footer";
import BioFermenter from "./BioFermenter";
import CountUp from "react-countup";
import Hero from "./Hero";
import CounterView from "./CounterView";
import WhyUs from "./WhyUs";
import FeaturedProducts from "./FeaturedProducts";
import FAQ from "./FAQ";

export function LandingPageComponent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const target = document.querySelector("#impact-section");
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* <Navbar /> */}

      <main className="flex-grow">
        <Hero />

        <BioFermenter />

        <CounterView />

        <WhyUs />

        <FeaturedProducts />

        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
