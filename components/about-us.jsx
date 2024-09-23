"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Leaf,
  Phone,
  MapPin,
  Mail,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "./Footer";
import farmer from "@/assets/farmer2.jpg";

export function AboutUsComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-green-50">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-green-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Krishi Mandi
            </h1>
            <p className="text-xl mb-8">
              Connecting farmers and consumers for a sustainable future
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-green-800">
                  Our Story
                </h2>
                <p className="text-gray-600 mb-4">
                  Krishi Mandi was founded with a vision to revolutionize the
                  agricultural sector by creating a direct link between farmers
                  and consumers. Our journey began in 2021 when a group of
                  passionate individuals came together with the goal of
                  empowering farmers and providing consumers with access to
                  fresh, organic produce.
                </p>
                <p className="text-gray-600 mb-4">
                  Since our inception, we have been committed to promoting
                  sustainable farming practices, fair pricing, and transparency
                  in the agricultural supply chain. Through our innovative
                  platform, we have successfully connected over 1,200 farmers
                  with consumers across the country.
                </p>
                <p className="text-gray-600">
                  At Krishi Mandi, we believe in the power of technology to
                  transform agriculture. Our platform leverages cutting-edge
                  data analytics and AI to provide real-time insights to
                  farmers, helping them make informed decisions about crop
                  planning and pricing.
                </p>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={farmer}
                  alt="Krishi Mandi team"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-green-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-green-800">
              Our Mission
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Leaf className="h-12 w-12 text-white mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Promote Sustainable Farming
                  </h3>
                  <p className="text-gray-600">
                    Encourage and support eco-friendly cultivation practices to
                    protect our environment.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <MapPin className="h-12 w-12 text-white mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Empower Local Communities
                  </h3>
                  <p className="text-gray-600">
                    Strengthen local economies by connecting farmers directly
                    with consumers.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Leaf className="h-12 w-12 text-white mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Ensure Food Quality
                  </h3>
                  <p className="text-gray-600">
                    Provide consumers with access to fresh, organic, and
                    high-quality produce.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 flex  items-center justify-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-green-800">
              Contact Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <MapPin className="h-6 w-6 text-white mr-2" />
                      <p>B Block Panki Kanpur, Uttar Pradesh</p>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-6 w-6 text-white mr-2" />
                      <p>(+91)-84230 88580</p>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-6 w-6 text-white mr-2" />
                      <p>krishimandi.in@gmail.com</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
                    <div className="flex space-x-4">
                      <Link
                        href="#"
                        className="text-white hover:text-green-700"
                      >
                        <Facebook className="h-6 w-6" />
                      </Link>
                      <Link
                        href="#"
                        className="text-white hover:text-green-700"
                      >
                        <Instagram className="h-6 w-6" />
                      </Link>
                      <Link
                        href="#"
                        className="text-white hover:text-green-700"
                      >
                        <Twitter className="h-6 w-6" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
