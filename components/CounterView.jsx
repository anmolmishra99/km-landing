"use client";

import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Sprout, Truck } from "lucide-react";
import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";

const impactData = [
  {
    icon: Users,
    count: 1227,
    label: "Farmers Connected",
    color: "from-green-400 to-green-600",
  },
  {
    icon: Sprout,
    count: 18,
    label: "FPO's Connected",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Truck,
    count: 50,
    label: "Clients Served",
    color: "from-yellow-400 to-yellow-600",
  },
];

const CounterView = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <section
      ref={ref}
      className="py-16 bg-gradient-to-b from-white to-green-50"
      id="impact-section"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600"
        >
          Our Impact
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impactData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="flex flex-col items-center p-6 bg-gradient-to-br from-white to-green-50">
                  <div
                    className={`p-4 rounded-full bg-gradient-to-br ${item.color} mb-6`}
                  >
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-5xl font-bold text-gray-900 mb-2">
                    {hasAnimated && (
                      <CountUp end={item.count} duration={2.5} separator="," />
                    )}
                    <span className="text-3xl">+</span>
                  </p>
                  <p className="text-lg text-gray-600 text-center font-medium">
                    {item.label}
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

export default CounterView;
