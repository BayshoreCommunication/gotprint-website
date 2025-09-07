"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Star, CheckCircle, Shield, Truck, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {} from "@/config/data";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const productData = {
    postcards: {
      title: "Premium Postcards",
      description:
        "Create stunning, professional postcards that make a lasting impression. Perfect for direct mail campaigns, event promotions, and business marketing.",
      image: "/placeholder.jpg",
      basePrice: 29.75,

      features: [
        "Professional full-color printing",
        "Multiple paper stock options",
        "Fast turnaround times",
        "Free design templates",
        "Bulk quantity discounts",
      ],
    },
  };

  const currentProduct =
    productData[params.slug as keyof typeof productData] ||
    productData.postcards;

  return (
    <div className="min-h-screen bg-white py-16 lg:py-20">
      {/* Breadcrumb */}
      <div className="bg-white/60 backdrop-blur-sm py-3 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <nav className="flex items-center space-x-2 text-sm">
            <Link
              href="/"
              className="text-teal-600 hover:text-teal-800 font-medium transition-colors"
            >
              Home
            </Link>
            <span className="text-gray-700 font-medium">
              / Premium Postcards
            </span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 pt-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Product Image */}
          <div className="lg:col-span-7">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={currentProduct.image}
                alt={currentProduct.title}
                width={700}
                height={300}
                className="object-cover w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <Card className="border-0 shadow-none ">
                <CardContent className="space-y-6 ">
                  {/* Product Header */}
                  <div className="space-y-4">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                      {currentProduct.title}
                    </h1>

                    <p className="text-gray-600 text-lg leading-relaxed">
                      {currentProduct.description}
                    </p>

                    {/* Key Features */}
                    <div className="space-y-2">
                      {currentProduct.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price Display */}
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">
                      Starting at ${currentProduct.basePrice.toFixed(2)}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      Call for exact pricing based on your requirements
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="space-y-4">
                    <Button className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700">
                      <Phone className="w-5 h-5 mr-3" />
                      Call to Book Now
                    </Button>

                    <div className="text-center text-sm text-gray-600">
                      Our printing experts are ready to discuss your project
                    </div>
                  </div>

                  {/* Guarantees */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-gray-900">
                      Our Guarantees
                    </h3>
                    <div className=" flex items-center  justify-between  gap-4">
                      <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg w-full">
                        <Shield className="w-5 h-5 text-green-600" />
                        <div className="text-sm">
                          <div className="font-medium text-green-900">
                            Quality Guarantee
                          </div>
                          <div className="text-xs text-green-700">
                            100% satisfaction guaranteed
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg w-full">
                        <Clock className="w-5 h-5 text-purple-600" />
                        <div className="text-sm">
                          <div className="font-medium text-purple-900">
                            Expert Support
                          </div>
                          <div className="text-xs text-purple-700">
                            Professional guidance available
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
