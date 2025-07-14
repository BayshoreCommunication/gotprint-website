import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Check, ArrowLeft, ShoppingCart, Download } from "lucide-react";
import Link from "next/link";

export default function BusinessCardsPage() {
  const cardTypes = [
    {
      name: "Standard Business Cards",
      price: "$19.99",
      originalPrice: "$29.99",
      description: "Professional quality on 14pt cardstock",
      features: [
        "14pt Cardstock",
        "Full Color",
        "Matte or Gloss Finish",
        'Standard Size 3.5" x 2"',
      ],
      image: "/placeholder.svg?height=300&width=400",
      popular: false,
    },
    {
      name: "Premium Business Cards",
      price: "$39.99",
      originalPrice: "$59.99",
      description: "Luxury feel with premium finishes",
      features: [
        "16pt Cardstock",
        "UV Coating",
        "Rounded Corners",
        "Premium Finishes",
      ],
      image: "/placeholder.svg?height=300&width=400",
      popular: true,
    },
    {
      name: "Textured Business Cards",
      price: "$49.99",
      originalPrice: "$69.99",
      description: "Unique texture for memorable impression",
      features: [
        "Linen Texture",
        "18pt Cardstock",
        "Elegant Feel",
        "Multiple Textures Available",
      ],
      image: "/placeholder.svg?height=300&width=400",
      popular: false,
    },
    {
      name: "Embossed Business Cards",
      price: "$79.99",
      originalPrice: "$99.99",
      description: "Raised elements for premium touch",
      features: [
        "Embossed Design",
        "20pt Cardstock",
        "Luxury Finish",
        "Custom Embossing",
      ],
      image: "/placeholder.svg?height=300&width=400",
      popular: false,
    },
  ];

  const specifications = [
    { label: "Standard Size", value: '3.5" x 2"' },
    { label: "Cardstock Options", value: "14pt, 16pt, 18pt, 20pt" },
    { label: "Finish Options", value: "Matte, Gloss, UV Coating" },
    { label: "Minimum Order", value: "250 cards" },
    { label: "Turnaround Time", value: "3-5 business days" },
    { label: "File Formats", value: "PDF, AI, PSD, JPG" },
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment:
        "Excellent quality business cards. The premium finish really makes them stand out!",
      date: "2 weeks ago",
    },
    {
      name: "Mike Chen",
      rating: 5,
      comment:
        "Fast delivery and great customer service. Will definitely order again.",
      date: "1 month ago",
    },
    {
      name: "Lisa Rodriguez",
      rating: 4,
      comment:
        "Good quality cards, though the colors were slightly different than expected.",
      date: "3 weeks ago",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              href="/#services"
              className="text-blue-600 hover:text-blue-800"
            >
              Business Essentials
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Business Cards</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Business Card Printing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Make a lasting first impression with professional business cards.
            Choose from standard, premium, textured, or embossed options to
            match your brand perfectly.
          </p>
        </div>

        {/* Product Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cardTypes.map((card, index) => (
            <Card
              key={index}
              className={`relative ${
                card.popular ? "ring-2 ring-blue-500" : ""
              }`}
            >
              {card.popular && (
                <Badge className="absolute -top-2 left-4 bg-blue-600 text-white">
                  Most Popular
                </Badge>
              )}
              <CardContent className="p-6">
                <div className="aspect-[4/3] mb-4 bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={card.image || "/placeholder.svg"}
                    alt={card.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{card.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{card.description}</p>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl font-bold text-green-600">
                    {card.price}
                  </span>
                  <span className="text-lg text-gray-400 line-through">
                    {card.originalPrice}
                  </span>
                </div>
                <ul className="space-y-2 mb-6">
                  {card.features.map((feature, featureIndex) => (
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
                    <h4 className="font-semibold mb-4">Technical Details</h4>
                    <div className="space-y-3">
                      {specifications.map((spec, index) => (
                        <div
                          key={index}
                          className="flex justify-between py-2 border-b border-gray-100"
                        >
                          <span className="text-gray-600">{spec.label}:</span>
                          <span className="font-medium">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Design Guidelines</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Minimum 300 DPI resolution</li>
                      <li>• CMYK color mode preferred</li>
                      <li>• 0.125" bleed on all sides</li>
                      <li>• Keep text 0.125" from edges</li>
                      <li>• Embed all fonts or convert to outlines</li>
                    </ul>
                    <Button variant="outline" className="mt-4 bg-transparent">
                      <Download className="w-4 h-4 mr-2" />
                      Download Templates
                    </Button>
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
                      <div className="aspect-[3.5/2] bg-gray-100 rounded-lg mb-3 overflow-hidden">
                        <Image
                          src={`/placeholder.svg?height=200&width=350&text=Template ${template}`}
                          alt={`Template ${template}`}
                          width={350}
                          height={200}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <h4 className="font-medium">
                        Professional Template {template}
                      </h4>
                      <p className="text-sm text-gray-600">
                        Modern design for professionals
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
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold">Customer Reviews</h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="text-gray-600">(4.8 out of 5)</span>
                  </div>
                </div>
                <div className="space-y-6">
                  {reviews.map((review, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-100 pb-6 last:border-b-0"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{review.name}</h4>
                        <span className="text-sm text-gray-500">
                          {review.date}
                        </span>
                      </div>
                      <div className="flex mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${
                              star <= review.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
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
                      What file formats do you accept?
                    </h4>
                    <p className="text-gray-600">
                      We accept PDF, AI, PSD, and high-resolution JPG files. PDF
                      is preferred for best results.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      How long does printing take?
                    </h4>
                    <p className="text-gray-600">
                      Standard turnaround is 3-5 business days. Rush options
                      available for 1-2 day delivery.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Can I see a proof before printing?
                    </h4>
                    <p className="text-gray-600">
                      Yes, we provide digital proofs for all orders. Physical
                      proofs available upon request.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      What's your minimum order quantity?
                    </h4>
                    <p className="text-gray-600">
                      Minimum order is 250 cards. We offer quantity discounts
                      for larger orders.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related Services */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Related Services</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                name: "Letterhead Printing",
                image: "/placeholder.svg?height=200&width=200",
              },
              {
                name: "Envelope Printing",
                image: "/placeholder.svg?height=200&width=200",
              },
              {
                name: "Custom Notepads",
                image: "/placeholder.svg?height=200&width=200",
              },
              {
                name: "Invoice Books",
                image: "/placeholder.svg?height=200&width=200",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardContent className="p-4">
                  <div className="aspect-square mb-4 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h4 className="font-semibold text-center">{service.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
