import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Check, ArrowLeft, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function YardSignsPage() {
  const signTypes = [
    {
      name: "Real Estate Signs",
      price: "$24.99",
      originalPrice: "$34.99",
      description: "Professional signs for property listings",
      features: [
        '18" x 24" Standard',
        "Corrugated Plastic",
        "Weather Resistant",
        "H-Stakes Included",
      ],
      image: "/placeholder.svg?height=300&width=400",
      popular: true,
    },
    {
      name: "Political Signs",
      price: "$19.99",
      originalPrice: "$29.99",
      description: "Campaign signs for elections",
      features: [
        "Multiple Sizes",
        "Full Color",
        "UV Resistant",
        "Fast Turnaround",
      ],
      image: "/placeholder.svg?height=300&width=400",
      popular: false,
    },
    {
      name: "Contractor Signs",
      price: "$29.99",
      originalPrice: "$39.99",
      description: "Professional contractor advertising",
      features: [
        "Heavy Duty Material",
        "Custom Sizes",
        "Professional Design",
        "Durable Stakes",
      ],
      image: "/placeholder.svg?height=300&width=400",
      popular: false,
    },
    {
      name: "Event Signs",
      price: "$22.99",
      originalPrice: "$32.99",
      description: "Temporary event signage",
      features: ["Lightweight", "Easy Setup", "Bright Colors", "Reusable"],
      image: "/placeholder.svg?height=300&width=400",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              href="/#services"
              className="text-blue-600 hover:text-blue-800"
            >
              Signage
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Yard Signs</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Yard Signs</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Durable outdoor signage for real estate, political campaigns,
            contractors, and events. Weather-resistant materials ensure your
            message stays visible.
          </p>
        </div>

        {/* Product Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {signTypes.map((sign, index) => (
            <Card
              key={index}
              className={`relative ${
                sign.popular ? "ring-2 ring-blue-500" : ""
              }`}
            >
              {sign.popular && (
                <Badge className="absolute -top-2 left-4 bg-blue-600 text-white">
                  Most Popular
                </Badge>
              )}
              <CardContent className="p-6">
                <div className="aspect-[4/3] mb-4 bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={sign.image || "/placeholder.svg"}
                    alt={sign.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{sign.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{sign.description}</p>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl font-bold text-green-600">
                    {sign.price}
                  </span>
                  <span className="text-lg text-gray-400 line-through">
                    {sign.originalPrice}
                  </span>
                </div>
                <ul className="space-y-2 mb-6">
                  {sign.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm"
                    >
                      <Check className="w-4 h-4 text-green-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Order Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Information */}
        <Tabs defaultValue="specifications" className="mb-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>

          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">
                  Product Specifications
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-4">Standard Sizes</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• 12\" x 18\"</li>
                      <li>• 18\" x 24\" (Most Popular)</li>
                      <li>• 24\" x 36\"</li>
                      <li>• Custom sizes available</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Materials</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• 4mm Corrugated Plastic</li>
                      <li>• UV Resistant Inks</li>
                      <li>• Weather Resistant</li>
                      <li>• H-Stakes Included</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="templates" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">
                  Design Templates
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((template) => (
                    <div key={template} className="group cursor-pointer">
                      <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-3 overflow-hidden">
                        <Image
                          src={`/placeholder.svg?height=200&width=300&text=Sign ${template}`}
                          alt={`Template ${template}`}
                          width={300}
                          height={200}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <h4 className="font-medium">
                        Yard Sign Template {template}
                      </h4>
                      <p className="text-sm text-gray-600">
                        Professional outdoor signage
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">
                  Customer Reviews
                </h3>
                <div className="space-y-6">
                  <div className="border-b border-gray-100 pb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">David Thompson</h4>
                      <span className="text-sm text-gray-500">2 weeks ago</span>
                    </div>
                    <div className="flex mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600">
                      Great quality yard signs for our real estate business.
                      They hold up well in all weather conditions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faq" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">
                      How long do yard signs last outdoors?
                    </h4>
                    <p className="text-gray-600">
                      Our signs are designed to last 6-12 months outdoors with
                      proper care and normal weather conditions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Are stakes included?</h4>
                    <p className="text-gray-600">
                      Yes, H-stakes are included with all yard sign orders at no
                      extra cost.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
