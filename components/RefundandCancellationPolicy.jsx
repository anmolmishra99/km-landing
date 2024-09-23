import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Card, CardContent } from "@/components/ui/card";
const RefundandCancellationPolicy = () => {
  return (
    <div>
      <Navbar />
      <main className="flex-grow">
        <section className="bg-green-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Refund and Cancellation Policy
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
                  REFUNDS: All sales made on our platform are considered final,
                  and no refunds will be issued. We, at Krishi Mandi, strive to
                  ensure the highest quality of service and products, and we
                  encourage users to carefully review their orders before
                  finalizing the purchase.
                  <br />
                  <br />
                  CANCELLATION: Once an order is placed, cancellations are
                  allowed only under specific circumstances and within a limited
                  time frame. Please note that we do not provide returns for
                  products once they have been delivered. QUESTIONS: If you have
                  any questions or concerns regarding our refund and
                  cancellation policy, please feel free to reach out to us. that
                  we do not provide returns for products once they have been
                  delivered.
                  <br />
                  <br />
                  QUESTIONS: If you have any questions or concerns regarding our
                  refund and cancellation policy, please feel free to reach out
                  to us.
                  <br />
                  <br />
                  Our customer support team is available to assist you.
                  <br />
                  <br />
                  Contact Number: +91 84230 88580
                  <br />
                  <br />
                  Email: info@krishimandi.in
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

export default RefundandCancellationPolicy;
