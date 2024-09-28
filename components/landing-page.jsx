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
import Image from "next/image";
import farmer from "@/assets/farmer.jpg";
import guava from "@/assets/prod_1.jpg";
import tomato from "@/assets/prod_2.jpg";
import potato from "@/assets/prod_3.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BioFermenter from "./BioFermenter";
import CountUp from "react-countup";

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
      <Navbar />

      <main className="flex-grow">
        <section className="bg-green-50 text-gray-900 py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Connecting Farmers to Consumers
              </h1>
              <p className="text-xl mb-8">
                Fostering sustainable agriculture and empowering local
                communities
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-green-600 text-white hover:bg-green-700">
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="text-green-600 border-green-600 hover:bg-green-50 flex items-center"
                >
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Download App
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src={farmer}
                alt="Farmer in field"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </section>

        <BioFermenter />

        <section className="py-16 bg-white" id="impact-section">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Our Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Users className="h-12 w-12 text-green-600 mb-4" />
                  <p className="text-4xl font-bold text-gray-900 mb-2">
                    {isVisible && (
                      <CountUp end={1227} duration={2.5} separator="," />
                    )}
                    +
                  </p>
                  <p className="text-lg text-gray-600 text-center">
                    Farmers Connected
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Sprout className="h-12 w-12 text-green-600 mb-4" />
                  <p className="text-4xl font-bold text-gray-900 mb-2">
                    {isVisible && <CountUp end={18} duration={2} />}+
                  </p>
                  <p className="text-lg text-gray-600 text-center">
                    FPO&apos;s Connected
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Truck className="h-12 w-12 text-green-600 mb-4" />
                  <p className="text-4xl font-bold text-gray-900 mb-2">
                    {isVisible && <CountUp end={50} duration={2} />}+
                  </p>
                  <p className="text-lg text-gray-600 text-center">
                    Clients Served
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Why Choose Krishi Mandi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardContent className="p-6">
                  <Leaf className="h-12 w-12 text-green-600 mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2 text-center text-gray-900">
                    Pure and Untouched
                  </h3>
                  <p className="text-gray-600 text-center">
                    Organic farming practices ensure no harmful chemicals touch
                    our produce.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <ShieldCheck className="h-12 w-12 text-green-600 mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2 text-center text-gray-900">
                    Eco-Friendly Cultivation
                  </h3>
                  <p className="text-gray-600 text-center">
                    Our farmers prioritize soil health and biodiversity in their
                    practices.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Apple className="h-12 w-12 text-green-600 mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2 text-center text-gray-900">
                    100% Organic
                  </h3>
                  <p className="text-gray-600 text-center">
                    Join us in fostering a future of health and environmental
                    responsibility.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Star className="h-12 w-12 text-green-600 mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2 text-center text-gray-900">
                    Delectable Solutions
                  </h3>
                  <p className="text-gray-600 text-center">
                    Enjoy real-time data analytics and crop yield predictions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Featured Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[guava, potato, tomato].map((image, index) => (
                <Card key={index}>
                  <Image
                    src={image}
                    alt={`Organic Product ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      Organic{" "}
                      {index === 0
                        ? "Guava"
                        : index === 1
                        ? "Potato"
                        : "Tomato"}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Fresh from our farms to your table.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-green-50 text-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Join Our Community</h2>
            <p className="text-xl mb-8">
              Stay updated with our latest news, offers, and farming tips.
            </p>
            <form className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Input
                type="email"
                placeholder="Your email"
                className="max-w-xs"
              />
              <Button
                type="submit"
                className="bg-green-600 text-white hover:bg-green-700"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </section>

        <section id="faq" className="py-16 bg-white">
          <div className="container mx-auto px-4 text-gray-900">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="max-w-2xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How does Krishi Mandi ensure fair pricing for farmers?
                </AccordionTrigger>
                <AccordionContent>
                  Krishi Mandi employs a transparent pricing model that
                  considers market rates, production costs, and fair profit
                  margins. We leverage technology to provide real-time market
                  insights, enabling farmers to make informed decisions and
                  secure equitable returns for their produce.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  What sets Krishi Mandi apart from other agricultural
                  platforms?
                </AccordionTrigger>
                <AccordionContent>
                  Krishi Mandi stands out through its commitment to organic
                  farming, direct farmer-consumer connections, and innovative
                  use of technology for agricultural optimization.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  How does Krishi Mandi address the issue of farmer loans and
                  financial struggles?
                </AccordionTrigger>
                <AccordionContent>
                  We partner with financial institutions to provide farmers with
                  access to low-interest loans and financial literacy programs,
                  helping them manage their finances more effectively.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
