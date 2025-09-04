import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, Target } from "lucide-react";
const CallToAction = () => {
  return (
    <div>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Print Project?
            </h2>
            <p className="text-xl mb-8 text-teal-100">
              Join over 500,000 satisfied customers who trust us with their
              printing needs. Upload your design or choose from our professional
              templates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Start Your Order
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CallToAction;
