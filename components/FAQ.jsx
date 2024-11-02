"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqItems = [
  {
    question: "How does Krishi Mandi ensure fair pricing for farmers?",
    answer:
      "Krishi Mandi employs a transparent pricing model that considers market rates, production costs, and fair profit margins. We leverage technology to provide real-time market insights, enabling farmers to make informed decisions and secure equitable returns for their produce.",
  },
  {
    question: "What sets Krishi Mandi apart from other agricultural platforms?",
    answer:
      "Krishi Mandi stands out through its commitment to organic farming, direct farmer-consumer connections, and innovative use of technology for agricultural optimization.",
  },
  {
    question:
      "How does Krishi Mandi address the issue of farmer loans and financial struggles?",
    answer:
      "We partner with financial institutions to provide farmers with access to low-interest loans and financial literacy programs, helping them manage their finances more effectively.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 text-gray-900">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600"
        >
          Frequently Asked Questions
        </motion.h2>
        <Accordion
          type="single"
          collapsible
          className="max-w-2xl mx-auto space-y-4"
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <AccordionItem
                value={`item-${index + 1}`}
                className="border border-green-200 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="bg-gradient-to-r from-green-50 to-blue-50 px-4 py-2 hover:bg-gradient-to-r hover:from-green-100 hover:to-blue-100 transition-all duration-300">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="bg-white px-4 py-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
