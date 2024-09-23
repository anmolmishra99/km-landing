import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Card, CardContent } from "@/components/ui/card";

const ShippingandDeliveryPolicy = () => {
  return (
    <div>
      <Navbar />
      <main className="flex-grow">
        <section className="bg-green-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Shipping and Delivery Policy
            </h1>
            <p className="text-xl mb-8">
              We are committed to ensuring that your experience with us is
              seamless and satisfactory.
            </p>
          </div>
        </section>

        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <Card className="mb-8">
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  This Shipping & Delivery Policy is part of our Terms and
                  Conditions (“Terms”) and should therefore be read alongside
                  our main Terms:
                  <a
                    href="https://krishimandi.in/terms-and-conditions/"
                    className="text-blue-500 underline"
                  >
                    https://krishimandi.in/terms-and-conditions/
                  </a>
                  . Please carefully review our Shipping & Delivery Policy when
                  purchasing our products. This policy will apply to any order
                  you place with us.
                </p>

                <h2 className="font-semibold text-lg mb-2">
                  WHAT ARE MY SHIPPING & DELIVERY OPTIONS?
                </h2>

                <h3 className="font-semibold mb-2">Free Shipping</h3>
                <p className="mb-4">
                  We offer free 5-15 business days shipping on orders above Rs.
                  499.
                </p>

                <h3 className="font-semibold mb-2">Expedited Shipping Fees</h3>
                <p className="mb-4">
                  We also offer expedited shipping at the following rates:
                </p>

                <table className="table-auto w-full mb-4">
                  <thead>
                    <tr>
                      <th className="text-left">Shipping Method</th>
                      <th className="text-left">Shipping Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Standard Shipping</td>
                      <td>Rs. 0.6</td>
                    </tr>
                    <tr>
                      <td>Free Shipping</td>
                      <td>Rs. 0</td>
                    </tr>
                  </tbody>
                </table>

                <p className="mb-4">
                  If you select an expedited shipping option, we will follow up
                  after you have placed the order with any additional shipping
                  information.
                </p>

                <p className="mb-4">
                  All times and dates given for delivery of the products are
                  given in good faith but are estimates only.
                </p>

                <h2 className="font-semibold text-lg mb-2">
                  DO YOU DELIVER INTERNATIONALLY?
                </h2>
                <p className="mb-4">We do not offer international shipping.</p>

                <h2 className="font-semibold text-lg mb-2">
                  HOW CAN YOU CONTACT US ABOUT THIS POLICY?
                </h2>
                <p>
                  If you have any further questions or comments, you may contact
                  us by:
                </p>
                <p>
                  Email:
                  <a
                    href="mailto:krishimandi.in@gmail.com"
                    className="text-blue-500 underline"
                  >
                    krishimandi.in@gmail.com
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ShippingandDeliveryPolicy;
