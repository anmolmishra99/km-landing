"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import farmer from "@/assets/farmer.jpg";
import guava from "@/assets/prod_1.jpg";
import tomato from "@/assets/prod_2.jpg";
import potato from "@/assets/prod_3.jpg";

const products = [
  {
    image: guava,
    name: "Guava",
    description: "Sweet and nutritious organic guavas.",
  },
  {
    image: potato,
    name: "Potato",
    description: "Versatile and hearty organic potatoes.",
  },
  {
    image: tomato,
    name: "Tomato",
    description: "Juicy and flavorful organic tomatoes.",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600"
        >
          Featured Products
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={`Organic ${product.name}`}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <CardContent className="p-4 bg-gradient-to-br from-white to-green-50">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    Organic {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full hover:from-green-600 hover:to-blue-600 transition-all duration-300">
                    Learn More
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
