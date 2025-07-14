import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Check, ArrowLeft, ShoppingCart } from "lucide-react"
import Link from "next/link"

export default function FlyersBrochuresPage() {
  const productTypes = [
    {
      name: "Tri-Fold Brochures",
      price: "$89.99",
      originalPrice: "$119.99",
      description: "Classic tri-fold design for maximum information",
      features: ["100lb Gloss Text", "Full Color Both Sides", '8.5" x 11" Flat Size', "Professional Folding"],
      image: "/placeholder.svg?height=300&width=400",
      popular: true,
    },
    {
      name: "Bi-Fold Brochures",
      price: "$79.99",
      originalPrice: "$99.99",
      description: "Simple bi-fold for clean presentation",
      features: ["100lb Gloss Text", "Full Color", '8.5" x 11" or 11" x 17"', "Crisp Fold Lines"],
      image: "/placeholder.svg?height=300&width=400",
      popular: false,
    },
    {
      name: "Flyers",
      price: "$49.99",
      originalPrice: "$69.99",
      description: "Single-page promotional materials",
      features: ["Multiple Sizes", "80lb or 100lb Text", "Full Color", "Matte or Gloss Finish"],
      image: "/placeholder.svg?height=300&width=400",
      popular: false,
    },
    {
      name: "Z-Fold Brochures",
      price: "$94.99",
      originalPrice: "$124.99",
      description: "Accordion-style fold for unique presentation",
      features: ["100lb Gloss Text", "6 Panels", "Professional Folding", "Eye-catching Design"],
      image: "/placeholder.svg?height=300&width=400",
      popular: false,
    },
  ]

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
            <Link href="/#services" className="text-blue-600 hover:text-blue-800">
              Marketing & Sales Materials
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Flyers & Brochures</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Flyers & Brochures</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Professional marketing materials that showcase your business. From simple flyers to complex tri-fold
            brochures, we help you communicate your message effectively.
          </p>
        </div>

        {/* Product Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {productTypes.map((product, index) => (
            <Card key={index} className={`relative ${product.popular ? "ring-2 ring-blue-500" : ""}`}>
              {product.popular && <Badge className="absolute -top-2 left-4 bg-blue-600 text-white">Most Popular</Badge>}
              <CardContent className="p-6">
                <div className="aspect-[4/3] mb-4 bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl font-bold text-green-600">{product.price}</span>
                  <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
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
                <h3 className="text-2xl font-semibold mb-6">Product Specifications</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-4">Available Sizes</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• 8.5\" x 11\" (Letter)</li>
                      <li>• 8.5\" x 14\" (Legal)</li>
                      <li>• 11\" x 17\" (Tabloid)</li>
                      <li>• Custom sizes available</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Paper Options</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• 80lb Gloss Text</li>
                      <li>• 100lb Gloss Text</li>
                      <li>• 80lb Matte Text</li>
                      <li>• 100lb Matte Text</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="templates" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Design Templates</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((template) => (
                    <div key={template} className="group cursor-pointer">
                      <div className="aspect-[8.5/11] bg-gray-100 rounded-lg mb-3 overflow-hidden">
                        <Image
                          src={`/placeholder.svg?height=300&width=230&text=Brochure ${template}`}
                          alt={`Template ${template}`}
                          width={230}
                          height={300}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <h4 className="font-medium">Marketing Template {template}</h4>
                      <p className="text-sm text-gray-600">Professional brochure design</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Customer Reviews</h3>
                <div className="space-y-6">
                  <div className="border-b border-gray-100 pb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Jennifer Walsh</h4>
                      <span className="text-sm text-gray-500">1 week ago</span>
                    </div>
                    <div className="flex mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600">
                      Outstanding quality tri-fold brochures! The colors came out vibrant and the folding was perfect.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faq" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">What's the difference between tri-fold and bi-fold?</h4>
                    <p className="text-gray-600">
                      Tri-fold brochures have two fold lines creating three panels, while bi-fold has one fold creating
                      two panels.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Can you help with design?</h4>
                    <p className="text-gray-600">
                      Yes! We offer professional design services and have templates available for quick customization.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
