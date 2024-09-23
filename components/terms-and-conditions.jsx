"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Leaf,
  Book,
  ShieldCheck,
  UserCheck,
  CreditCard,
  Scale,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";

export function TermsAndConditionsComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-green-50">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-green-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms and Conditions
            </h1>
            <p className="text-xl mb-8">
              Please read these terms carefully before using our services
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-green-800">
                  Introduction
                </h2>
                <p className="text-gray-600 mb-4">
                  Welcome to Krishi Mandi. These Terms and Conditions govern
                  your use of our website and services. By accessing or using
                  Krishi Mandi, you agree to be bound by these Terms. If you
                  disagree with any part of the terms, you may not use our
                  services.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Book className="h-6 w-6 text-green-600 mr-2" />
                    <h2 className="text-xl font-bold text-green-800">
                      Definitions
                    </h2>
                  </div>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      "Krishi Mandi," "we," "us," and "our" refer to the Krishi
                      Mandi platform and company.
                    </li>
                    <li>
                      "User," "you," and "your" refer to individuals accessing
                      or using our services.
                    </li>
                    <li>
                      "Services" refers to all features, products, and services
                      offered by Krishi Mandi.
                    </li>
                    <li>
                      "Content" includes text, images, videos, and other
                      materials on our platform.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <UserCheck className="h-6 w-6 text-green-600 mr-2" />
                    <h2 className="text-xl font-bold text-green-800">
                      User Accounts
                    </h2>
                  </div>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      You must be at least 18 years old to create an account.
                    </li>
                    <li>
                      You are responsible for maintaining the confidentiality of
                      your account and password.
                    </li>
                    <li>
                      You agree to notify us immediately of any unauthorized use
                      of your account.
                    </li>
                    <li>
                      We reserve the right to refuse service, terminate
                      accounts, or remove content at our discretion.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <ShieldCheck className="h-6 w-6 text-green-600 mr-2" />
                    <h2 className="text-xl font-bold text-green-800">
                      Intellectual Property
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-4">
                    The content on Krishi Mandi, including text, graphics,
                    logos, and software, is the property of Krishi Mandi and is
                    protected by copyright and other intellectual property laws.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      You may not use our content for commercial purposes
                      without our express written consent.
                    </li>
                    <li>
                      You agree not to reproduce, duplicate, copy, sell, or
                      exploit any portion of our Services without express
                      written permission from us.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <CreditCard className="h-6 w-6 text-green-600 mr-2" />
                    <h2 className="text-xl font-bold text-green-800">
                      Payments and Transactions
                    </h2>
                  </div>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      All payments are processed securely through our payment
                      partners.
                    </li>
                    <li>
                      Prices for products are subject to change without notice.
                    </li>
                    <li>
                      We reserve the right to refuse or cancel any order for any
                      reason.
                    </li>
                    <li>
                      You agree to provide current, complete, and accurate
                      purchase and account information for all purchases made on
                      our site.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Scale className="h-6 w-6 text-green-600 mr-2" />
                    <h2 className="text-xl font-bold text-green-800">
                      Limitation of Liability
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Krishi Mandi shall not be liable for any indirect,
                    incidental, special, consequential, or punitive damages
                    resulting from your use of or inability to use the service.
                  </p>
                  <p className="text-gray-600">
                    We do not guarantee the accuracy, completeness, or
                    usefulness of any information on the site and will not be
                    liable for any errors or omissions in the content.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <MessageCircle className="h-6 w-6 text-green-600 mr-2" />
                    <h2 className="text-xl font-bold text-green-800">
                      Contact Us
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-4">
                    If you have any questions about these Terms and Conditions,
                    please contact us at:
                  </p>
                  <address className="text-gray-600 not-italic">
                    Krishi Mandi
                    <br />
                    123 Farm Road, Green City
                    <br />
                    Agricultural State, 12345
                    <br />
                    Email: legal@krishimandi.com
                    <br />
                    Phone: +1 (555) 123-4567
                  </address>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                These Terms and Conditions were last updated on{" "}
                {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
