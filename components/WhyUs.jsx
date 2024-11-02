"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, ShieldCheck, Apple, Star } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Leaf,
    title: "Pure and Untouched",
    description:
      "Organic farming practices ensure no harmful chemicals touch our produce.",
    gradient: "from-green-400 to-green-600",
  },
  {
    icon: ShieldCheck,
    title: "Eco-Friendly Cultivation",
    description:
      "Our farmers prioritize soil health and biodiversity in their practices.",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    icon: Apple,
    title: "100% Organic",
    description:
      "Join us in fostering a future of health and environmental responsibility.",
    gradient: "from-red-400 to-red-600",
  },
  {
    icon: Star,
    title: "Delectable Solutions",
    description: "Enjoy real-time data analytics and crop yield predictions.",
    gradient: "from-yellow-400 to-yellow-600",
  },
];

const WhyUs = () => {
  return (
    <section
      id="about us"
      className="py-16 bg-gradient-to-b from-green-50 to-white"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600"
        >
          Why Choose Krishi Mandi
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <CardContent className="p-6 bg-gradient-to-br from-white to-green-50">
                  <div
                    className={`p-4 rounded-full bg-gradient-to-br ${feature.gradient} mb-6 mx-auto w-20 h-20 flex items-center justify-center`}
                  >
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
