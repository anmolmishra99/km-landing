"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Recycle,
  Zap,
  Leaf,
  TrendingUp,
  Sprout,
  BarChart3,
  Factory,
  Lightbulb,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProudPartner from "./ProudPartner";
import waste from "@/assets/waste.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const BioFermenter = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 via-white to-green-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp}>
          <h2 className="text-5xl font-bold text-center mb-4 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
            Sustainable Waste Management
          </h2>
          <p className="text-xl text-center mb-6 text-gray-600 max-w-3xl mx-auto">
            Empowering farmers and fueling a greener future through innovative
            waste-to-energy solutions.
          </p>
          <div className="flex justify-center pb-12">
            <Link href="/organic-waste-management">
              <Button className="bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Learn More
              </Button>
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div {...fadeInUp} className="h-full">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 h-full border-t-4 border-green-500">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-800 flex items-center">
                  <Lightbulb className="h-6 w-6 text-green-500 mr-2" />
                  Our Solution
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p className="mb-4">
                  Our innovative technology addresses crop spoilage and waste
                  management in agricultural Mandis. We convert discarded
                  vegetables into compressed biogas (CBG) and organic manure
                  using advanced microbial fermentation processes.
                </p>
                <p>
                  This solution promotes a cleaner environment, creates
                  renewable energy, and supports sustainable agriculture.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div {...fadeInUp} className="h-full">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 h-full border-t-4 border-red-500">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-800 flex items-center">
                  <BarChart3 className="h-6 w-6 text-red-500 mr-2" />
                  Key Challenges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center bg-gradient-to-r from-yellow-50 to-yellow-100 p-3 rounded-lg transform hover:scale-105 transition-all duration-300">
                    <Zap className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      Lack of Sustainable Energy
                    </span>
                  </li>
                  <li className="flex items-center bg-gradient-to-r from-green-50 to-green-100 p-3 rounded-lg transform hover:scale-105 transition-all duration-300">
                    <Recycle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      Waste Management Issues
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div {...fadeInUp}>
          <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg mb-16 overflow-hidden">
            <CardHeader>
              <CardTitle className="text-3xl font-semibold flex items-center justify-center">
                <Factory className="h-8 w-8 mr-2" />
                Our Waste-to-Energy Bio conversion System
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center mb-8 text-lg">
                We offer a system that integrates 3 key technologies:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Sprout,
                    title: "Anaerobic Digestion",
                    subtitle: "Microbial Consortia",
                  },
                  {
                    icon: Recycle,
                    title: "Modular Fermenter",
                    subtitle: "Design",
                  },
                  { icon: Zap, title: "Electricity", subtitle: "Production" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white text-gray-800 p-6 rounded-lg text-center transform hover:scale-105 transition-all duration-300 shadow-lg"
                    whileHover={{ y: -5 }}
                  >
                    <item.icon className="h-16 w-16 mx-auto mb-4 text-green-500" />
                    <h3 className="font-semibold mb-1 text-xl">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.subtitle}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div {...fadeInUp} className="h-full">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 h-full border-t-4 border-blue-500">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-800 flex items-center">
                  <TrendingUp className="h-6 w-6 text-blue-500 mr-2" />
                  Key Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    {
                      icon: Recycle,
                      text: "Waste Reduction",
                      color: "text-green-500",
                      gradient: "from-green-50 to-green-100",
                    },
                    {
                      icon: Zap,
                      text: "Bioenergy Production",
                      color: "text-yellow-500",
                      gradient: "from-yellow-50 to-yellow-100",
                    },
                    {
                      icon: Leaf,
                      text: "Organic Manure",
                      color: "text-green-500",
                      gradient: "from-green-50 to-green-100",
                    },
                    {
                      icon: Sprout,
                      text: "Environmental Sustainability",
                      color: "text-green-500",
                      gradient: "from-green-50 to-green-100",
                    },
                    {
                      icon: TrendingUp,
                      text: "Economic Growth",
                      color: "text-blue-500",
                      gradient: "from-blue-50 to-blue-100",
                    },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className={`flex items-center bg-gradient-to-r ${item.gradient} p-3 rounded-lg transform hover:scale-105 transition-all duration-300`}
                      whileHover={{ y: -2 }}
                    >
                      <item.icon
                        className={`h-6 w-6 ${item.color} mr-3 flex-shrink-0`}
                      />
                      <span className="text-gray-700">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div {...fadeInUp} className="h-full">
            <div className="bg-white rounded-xl w-full h-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <Image
                src={waste}
                alt="Waste Management"
                className="w-full h-full object-cover transform hover:scale-105 transition-all duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <ProudPartner />
    </section>
  );
};

export default BioFermenter;
