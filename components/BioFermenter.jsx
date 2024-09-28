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
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ait from "@/assets/aith.png";
import aktu from "@/assets/aktu.png";
import citi from "@/assets/citi.png";
import siic from "@/assets/siic.png";
import sui from "@/assets/sui.png";
import waste from "@/assets/waste.jpg";

const BioFermenter = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Sustainable Waste Management
        </h2>
        <p className="text-xl text-center mb-2 text-gray-600 max-w-3xl mx-auto">
          Empowering farmers and fueling a greener future through innovative
          waste-to-energy solutions.
        </p>
        <div className="flex justify-center py-5 pb-12">
          <Link href="/organic-waste-management">
            <Button className="bg-green-600 text-white hover:bg-green-500">
              Learn More
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
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
                vegetables into compressed biogas (CBG) and organic manure using
                advanced microbial fermentation processes.
              </p>
              <p>
                This solution promotes a cleaner environment, creates renewable
                energy, and supports sustainable agriculture.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-800 flex items-center">
                <BarChart3 className="h-6 w-6 text-red-500 mr-2" />
                Key Challenges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center bg-yellow-50 p-3 rounded-lg">
                  <Zap className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Lack of Sustainable Energy
                  </span>
                </li>
                <li className="flex items-center bg-green-50 p-3 rounded-lg">
                  <Recycle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Waste Management Issues</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-green-600 text-white shadow-lg mb-16">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold flex items-center justify-center">
              <Factory className="h-6 w-6 mr-2" />
              Our Waste-to-Energy Bio conversion System
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center mb-8">
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
                <div
                  key={index}
                  className="bg-white text-gray-800 p-6 rounded-lg text-center"
                >
                  <item.icon className="h-12 w-12 mx-auto mb-4 text-green-500" />
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
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
                  },
                  {
                    icon: Zap,
                    text: "Bioenergy Production",
                    color: "text-yellow-500",
                  },
                  {
                    icon: Leaf,
                    text: "Organic Manure",
                    color: "text-green-500",
                  },
                  {
                    icon: Sprout,
                    text: "Environmental Sustainability",
                    color: "text-green-500",
                  },
                  {
                    icon: TrendingUp,
                    text: "Economic Growth",
                    color: "text-blue-500",
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center bg-gray-50 p-3 rounded-lg"
                  >
                    <item.icon
                      className={`h-6 w-6 ${item.color} mr-3 flex-shrink-0`}
                    />
                    <span className="text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="bg-white  rounded-xl w-full h-full">
            <Image
              src={waste}
              alt="Incubator Logo"
              className="mx-auto w-full h-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
      <div className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Proud Partners
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {[ait, aktu, citi, siic, sui].map((image, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center"
            >
              <Image
                src={image}
                alt={`Partner ${index + 1} Logo`}
                width={150}
                height={75}
                className="max-w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BioFermenter;
