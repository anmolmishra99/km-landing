"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Shield, Eye, Lock, Trash2, MessageCircle } from "lucide-react";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";

export function PrivacyPolicyComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-green-50">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-green-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl mb-8">
              Your privacy is important to us at Krishi Mandi
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
                  At Krishi Mandi, we are committed to protecting your privacy
                  and ensuring the security of your personal information. This
                  Privacy Policy outlines how we collect, use, disclose, and
                  safeguard your data when you use our website and services.
                </p>
                <p className="text-gray-600">
                  By using Krishi Mandi's services, you agree to the terms
                  outlined in this Privacy Policy. We encourage you to read this
                  document carefully and contact us if you have any questions or
                  concerns.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Eye className="h-6 w-6 text-green-600 mr-2" />
                    <h2 className="text-xl font-bold text-green-800">
                      Information We Collect
                    </h2>
                  </div>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      Personal information (name, email address, phone number)
                    </li>
                    <li>Demographic information</li>
                    <li>Payment information</li>
                    <li>Usage data and browsing history on our platform</li>
                    <li>Device and connection information</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Shield className="h-6 w-6 text-green-600 mr-2" />
                    <h2 className="text-xl font-bold text-green-800">
                      How We Use Your Information
                    </h2>
                  </div>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>To provide and improve our services</li>
                    <li>To process transactions and deliver products</li>
                    <li>
                      To communicate with you about your account and orders
                    </li>
                    <li>
                      To send promotional offers and newsletters (with your
                      consent)
                    </li>
                    <li>To analyze usage patterns and improve our website</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Lock className="h-6 w-6 text-green-600 mr-2" />
                    <h2 className="text-xl font-bold text-green-800">
                      Data Security
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-4">
                    We implement a variety of security measures to protect your
                    personal information:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Encryption of sensitive data</li>
                    <li>Regular security audits</li>
                    <li>Secure servers and firewalls</li>
                    <li>Limited access to personal information by employees</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Trash2 className="h-6 w-6 text-green-600 mr-2" />
                    <h2 className="text-xl font-bold text-green-800">
                      Your Rights
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-4">You have the right to:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Access your personal information</li>
                    <li>Correct inaccuracies in your personal information</li>
                    <li>Delete your personal information</li>
                    <li>
                      Object to the processing of your personal information
                    </li>
                    <li>Withdraw consent for data processing at any time</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MessageCircle className="h-6 w-6 text-green-600 mr-2" />
                  <h2 className="text-xl font-bold text-green-800">
                    Contact Us
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">
                  If you have any questions or concerns about our Privacy
                  Policy, please contact us at:
                </p>
                <address className="text-gray-600 not-italic">
                  Krishi Mandi
                  <br />
                  123 Farm Road, Green City
                  <br />
                  Agricultural State, 12345
                  <br />
                  Email: privacy@krishimandi.com
                  <br />
                  Phone: +1 (555) 123-4567
                </address>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                This Privacy Policy was last updated on{" "}
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
