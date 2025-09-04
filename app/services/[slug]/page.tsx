"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Plus,
  Minus,
  HelpCircle,
  ShoppingCart,
  Heart,
  Share2,
  Star,
  CheckCircle,
  Truck,
  Shield,
  Award,
  Clock,
  Zap,
  Info,
  ArrowRight,
  Eye,
  Download,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import Image from "next/image";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const [selectedSize, setSelectedSize] = useState("2x4");
  const [selectedOrientation, setSelectedOrientation] = useState("horizontal");
  const [selectedPaper, setSelectedPaper] = useState("14pt-gloss");
  const [selectedColor, setSelectedColor] = useState(
    "full-color-front-no-back"
  );
  const [quantity, setQuantity] = useState(50);
  const [roundedCorner, setRoundedCorner] = useState("none");
  const [coating, setCoating] = useState("high-gloss-uv-front");
  const [productionTime, setProductionTime] = useState("regular");
  const [country, setCountry] = useState("united-states");
  const [zipCode, setZipCode] = useState("");
  const [addressType, setAddressType] = useState("residential");
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const productData = {
    postcards: {
      title: "Premium Postcards",
      subtitle: "High-Quality Marketing Postcards",
      description:
        "Create stunning, professional postcards that make a lasting impression. Perfect for direct mail campaigns, event promotions, and business marketing.",
      images: [
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg",
      ],
      basePrice: 29.75,
      rating: 4.8,
      reviewCount: 2547,
      badge: "Best Seller",
      features: [
        "Professional full-color printing",
        "Multiple paper stock options",
        "Fast turnaround times",
        "Free design templates",
        "Bulk quantity discounts",
      ],
      sizes: [
        { value: "2x4", label: '2" x 4"', price: 0, popular: false },
        { value: "4x6", label: '4" x 6"', price: 5, popular: true },
        { value: "5x7", label: '5" x 7"', price: 10, popular: false },
        { value: "6x9", label: '6" x 9"', price: 15, popular: false },
        { value: "8.5x11", label: '8.5" x 11"', price: 20, popular: false },
      ],
      papers: [
        {
          value: "14pt-gloss",
          label: "14 pt. Gloss Cover",
          price: 0,
          description: "Standard glossy finish",
          popular: true,
        },
        {
          value: "14pt-uncoated",
          label: "14 pt. Uncoated Cover",
          price: 2,
          description: "Natural matte finish",
          popular: false,
        },
        {
          value: "13pt-premium",
          label: "13 pt. Premium Linen",
          price: 4,
          description: "Textured premium feel",
          popular: false,
        },
        {
          value: "16pt-premium",
          label: "16 pt. Premium Matte",
          price: 6,
          description: "Thick, professional matte",
          popular: false,
        },
      ],
      colors: [
        {
          value: "full-color-front-no-back",
          label: "Full Color Front Only",
          price: 0,
          description: "Color front, blank back",
        },
        {
          value: "full-color-both",
          label: "Full Color Both Sides",
          price: 15,
          description: "Full color printing on both sides",
        },
        {
          value: "full-color-front-grayscale-back",
          label: "Color Front + B&W Back",
          price: 8,
          description: "Color front, black & white back",
        },
        {
          value: "full-color-front-blank-back",
          label: "Color Front + Blank Back",
          price: 5,
          description: "Color front, blank white back",
        },
      ],
    },
  };

  const currentProduct =
    productData[params.slug as keyof typeof productData] ||
    productData.postcards;

  const calculatePrice = () => {
    let price = currentProduct.basePrice;

    const sizePrice =
      currentProduct.sizes.find((s) => s.value === selectedSize)?.price || 0;
    price += sizePrice;

    const paperPrice =
      currentProduct.papers.find((p) => p.value === selectedPaper)?.price || 0;
    price += paperPrice;

    const colorPrice =
      currentProduct.colors.find((c) => c.value === selectedColor)?.price || 0;
    price += colorPrice;

    if (coating === "high-gloss-uv-front") {
      price += 5;
    }

    if (productionTime === "rush") {
      price += 10;
    }

    // Quantity discounts
    let discountMultiplier = 1;
    if (quantity >= 1000) discountMultiplier = 0.8;
    else if (quantity >= 500) discountMultiplier = 0.85;
    else if (quantity >= 250) discountMultiplier = 0.9;

    return price * discountMultiplier;
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 50);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => Math.max(50, prev - 50));
  };

  const getQuantityDiscount = () => {
    if (quantity >= 1000) return 20;
    if (quantity >= 500) return 15;
    if (quantity >= 250) return 10;
    return 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link
                href="/"
                className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent"
              >
                GotPrint
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link
                  href="#"
                  className="text-gray-700 hover:text-teal-600 transition-colors font-medium"
                >
                  Print Products
                </Link>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-teal-600 transition-colors font-medium"
                >
                  Marketing Materials
                </Link>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-teal-600 transition-colors font-medium"
                >
                  Specialty Items
                </Link>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-teal-600 transition-colors font-medium"
                >
                  Industries
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="default"
                size="lg"
                className="bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white/60 backdrop-blur-sm py-3 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link
              href="/"
              className="text-teal-600 hover:text-teal-800 font-medium transition-colors"
            >
              Home
            </Link>
            <ArrowRight className="w-4 h-4 text-gray-400" />
            <Link
              href="#"
              className="text-teal-600 hover:text-teal-800 font-medium transition-colors"
            >
              Postcards
            </Link>
            <ArrowRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-700 font-medium">Configure & Order</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Product Images & Info */}
          <div className="lg:col-span-7 space-y-6">
            {/* Product Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                {currentProduct.badge && (
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1">
                    <Award className="w-3 h-3 mr-1" />
                    {currentProduct.badge}
                  </Badge>
                )}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(currentProduct.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    {currentProduct.rating} (
                    {currentProduct.reviewCount.toLocaleString()} reviews)
                  </span>
                </div>
              </div>

              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {currentProduct.title}
                </h1>
                <p className="text-lg text-teal-600 font-semibold mb-3">
                  {currentProduct.subtitle}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {currentProduct.description}
                </p>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
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

            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={currentProduct.images[activeImageIndex]}
                  alt={currentProduct.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                <Button
                  size="sm"
                  className="absolute top-4 right-4 bg-white/80 text-gray-800 hover:bg-white"
                >
                  <Eye className="w-4 h-4 mr-1" />
                  View Larger
                </Button>
              </div>

              <div className="grid grid-cols-4 gap-3">
                {currentProduct.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      activeImageIndex === index
                        ? "border-teal-500 ring-2 ring-teal-200"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${currentProduct.title} view ${index + 1}`}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 hover:bg-gray-50"
              >
                <Share2 className="w-4 h-4" />
                Share Product
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 hover:bg-gray-50"
              >
                <Heart className="w-4 h-4" />
                Save to Wishlist
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 hover:bg-gray-50"
              >
                <Download className="w-4 h-4" />
                Download Specs
              </Button>
            </div>
          </div>

          {/* Configuration Panel */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-bold text-gray-900">
                      Configure Product
                    </CardTitle>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">
                        ${calculatePrice().toFixed(2)}
                      </div>
                      <div className="text-sm text-gray-500">
                        for {quantity} pieces
                      </div>
                      {getQuantityDiscount() > 0 && (
                        <Badge
                          variant="secondary"
                          className="bg-green-100 text-green-800 text-xs mt-1"
                        >
                          {getQuantityDiscount()}% Bulk Discount Applied
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <Tabs defaultValue="product-details" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="product-details" className="text-sm">
                        Product Options
                      </TabsTrigger>
                      <TabsTrigger value="shipping" className="text-sm">
                        Shipping & Info
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="product-details" className="space-y-6">
                      {/* Size Selection */}
                      <div className="space-y-3">
                        <Label className="text-sm font-semibold text-gray-900">
                          Size
                        </Label>
                        <div className="grid grid-cols-2 gap-3">
                          {currentProduct.sizes.map((size) => (
                            <button
                              key={size.value}
                              onClick={() => setSelectedSize(size.value)}
                              className={`relative p-3 rounded-lg border-2 text-left transition-all ${
                                selectedSize === size.value
                                  ? "border-teal-500 bg-teal-50 ring-2 ring-teal-200"
                                  : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                              }`}
                            >
                              <div className="text-sm font-medium text-gray-900">
                                {size.label}
                              </div>
                              <div className="text-xs text-gray-500">
                                {size.price > 0
                                  ? `+$${size.price}`
                                  : "Base price"}
                              </div>
                              {size.popular && (
                                <Badge className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-0.5">
                                  Popular
                                </Badge>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Orientation */}
                      <div className="space-y-3">
                        <Label className="text-sm font-semibold text-gray-900">
                          Orientation
                        </Label>
                        <RadioGroup
                          value={selectedOrientation}
                          onValueChange={setSelectedOrientation}
                          className="grid grid-cols-2 gap-3"
                        >
                          <Label
                            htmlFor="horizontal"
                            className={`flex items-center space-x-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                              selectedOrientation === "horizontal"
                                ? "border-teal-500 bg-teal-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <RadioGroupItem
                              value="horizontal"
                              id="horizontal"
                            />
                            <span className="text-sm font-medium">
                              Horizontal
                            </span>
                          </Label>
                          <Label
                            htmlFor="vertical"
                            className={`flex items-center space-x-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                              selectedOrientation === "vertical"
                                ? "border-teal-500 bg-teal-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <RadioGroupItem value="vertical" id="vertical" />
                            <span className="text-sm font-medium">
                              Vertical
                            </span>
                          </Label>
                        </RadioGroup>
                      </div>

                      {/* Paper Selection */}
                      <div className="space-y-3">
                        <Label className="text-sm font-semibold text-gray-900">
                          Paper Stock
                        </Label>
                        <div className="space-y-2">
                          {currentProduct.papers.map((paper) => (
                            <button
                              key={paper.value}
                              onClick={() => setSelectedPaper(paper.value)}
                              className={`w-full p-3 rounded-lg border-2 text-left transition-all ${
                                selectedPaper === paper.value
                                  ? "border-teal-500 bg-teal-50 ring-2 ring-teal-200"
                                  : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                              }`}
                            >
                              <div className="flex justify-between items-start">
                                <div>
                                  <div className="text-sm font-medium text-gray-900">
                                    {paper.label}
                                  </div>
                                  <div className="text-xs text-gray-500 mt-1">
                                    {paper.description}
                                  </div>
                                </div>
                                <div className="text-xs text-gray-600">
                                  {paper.price > 0
                                    ? `+$${paper.price}`
                                    : "Included"}
                                </div>
                              </div>
                              {paper.popular && (
                                <Badge className="mt-2 bg-blue-100 text-blue-800 text-xs">
                                  Most Popular
                                </Badge>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Color Selection */}
                      <div className="space-y-3">
                        <Label className="text-sm font-semibold text-gray-900">
                          Color Options
                        </Label>
                        <div className="space-y-2">
                          {currentProduct.colors.map((color) => (
                            <button
                              key={color.value}
                              onClick={() => setSelectedColor(color.value)}
                              className={`w-full p-3 rounded-lg border-2 text-left transition-all ${
                                selectedColor === color.value
                                  ? "border-teal-500 bg-teal-50 ring-2 ring-teal-200"
                                  : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                              }`}
                            >
                              <div className="flex justify-between items-start">
                                <div>
                                  <div className="text-sm font-medium text-gray-900">
                                    {color.label}
                                  </div>
                                  <div className="text-xs text-gray-500 mt-1">
                                    {color.description}
                                  </div>
                                </div>
                                <div className="text-xs text-gray-600">
                                  {color.price > 0
                                    ? `+$${color.price}`
                                    : "Base price"}
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Quantity */}
                      <div className="space-y-3">
                        <Label className="text-sm font-semibold text-gray-900">
                          Quantity
                        </Label>
                        <div className="flex items-center space-x-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={decrementQuantity}
                            className="h-10 w-10 p-0"
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <div className="flex-1">
                            <Input
                              type="number"
                              value={quantity}
                              onChange={(e) =>
                                setQuantity(parseInt(e.target.value) || 50)
                              }
                              className="text-center text-lg font-semibold h-10"
                            />
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={incrementQuantity}
                            className="h-10 w-10 p-0"
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="text-xs text-gray-500 text-center">
                          {quantity >= 250 && (
                            <span className="text-green-600 font-medium">
                              🎉 Bulk discount applied! Save{" "}
                              {getQuantityDiscount()}%
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Production Time */}
                      <div className="space-y-3">
                        <Label className="text-sm font-semibold text-gray-900">
                          Production Time
                        </Label>
                        <RadioGroup
                          value={productionTime}
                          onValueChange={setProductionTime}
                          className="space-y-2"
                        >
                          <Label
                            htmlFor="regular"
                            className={`flex items-center justify-between p-3 rounded-lg border-2 cursor-pointer transition-all ${
                              productionTime === "regular"
                                ? "border-teal-500 bg-teal-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value="regular" id="regular" />
                              <div>
                                <div className="text-sm font-medium text-gray-900">
                                  Regular
                                </div>
                                <div className="text-xs text-gray-500">
                                  Standard production
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-medium text-gray-900">
                                2-4 Days
                              </div>
                              <div className="text-xs text-green-600">
                                Included
                              </div>
                            </div>
                          </Label>
                          <Label
                            htmlFor="rush"
                            className={`flex items-center justify-between p-3 rounded-lg border-2 cursor-pointer transition-all ${
                              productionTime === "rush"
                                ? "border-teal-500 bg-teal-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value="rush" id="rush" />
                              <div>
                                <div className="text-sm font-medium text-gray-900 flex items-center gap-1">
                                  <Zap className="w-3 h-3 text-orange-500" />
                                  Rush
                                </div>
                                <div className="text-xs text-gray-500">
                                  Express production
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-medium text-gray-900">
                                1-2 Days
                              </div>
                              <div className="text-xs text-orange-600">
                                +$10
                              </div>
                            </div>
                          </Label>
                        </RadioGroup>
                      </div>
                    </TabsContent>

                    <TabsContent value="shipping" className="space-y-6">
                      {/* Shipping Calculator */}
                      <div className="space-y-4">
                        <Label className="text-sm font-semibold text-gray-900">
                          Shipping Calculator
                        </Label>

                        <Select value={country} onValueChange={setCountry}>
                          <SelectTrigger className="h-12">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="united-states">
                              🇺🇸 United States
                            </SelectItem>
                            <SelectItem value="canada">🇨🇦 Canada</SelectItem>
                            <SelectItem value="mexico">🇲🇽 Mexico</SelectItem>
                          </SelectContent>
                        </Select>

                        <div className="flex space-x-2">
                          <Input
                            placeholder="Enter ZIP Code"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                            className="flex-1 h-12"
                          />
                          <Button variant="outline" className="px-6 h-12">
                            Calculate
                          </Button>
                        </div>

                        <RadioGroup
                          value={addressType}
                          onValueChange={setAddressType}
                          className="grid grid-cols-2 gap-3"
                        >
                          <Label
                            htmlFor="residential-addr"
                            className={`flex items-center space-x-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                              addressType === "residential"
                                ? "border-teal-500 bg-teal-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <RadioGroupItem
                              value="residential"
                              id="residential-addr"
                            />
                            <span className="text-sm font-medium">
                              Residential
                            </span>
                          </Label>
                          <Label
                            htmlFor="commercial-addr"
                            className={`flex items-center space-x-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                              addressType === "commercial"
                                ? "border-teal-500 bg-teal-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <RadioGroupItem
                              value="commercial"
                              id="commercial-addr"
                            />
                            <span className="text-sm font-medium">
                              Commercial
                            </span>
                          </Label>
                        </RadioGroup>
                      </div>

                      {/* Guarantees */}
                      <div className="space-y-3">
                        <Label className="text-sm font-semibold text-gray-900">
                          Our Guarantees
                        </Label>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                            <Shield className="w-5 h-5 text-green-600" />
                            <div>
                              <div className="text-sm font-medium text-green-900">
                                Quality Guarantee
                              </div>
                              <div className="text-xs text-green-700">
                                100% satisfaction or money back
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                            <Truck className="w-5 h-5 text-blue-600" />
                            <div>
                              <div className="text-sm font-medium text-blue-900">
                                On-Time Delivery
                              </div>
                              <div className="text-xs text-blue-700">
                                Delivered when promised or it's free
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                            <Clock className="w-5 h-5 text-purple-600" />
                            <div>
                              <div className="text-sm font-medium text-purple-900">
                                24/7 Support
                              </div>
                              <div className="text-xs text-purple-700">
                                Expert help whenever you need it
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>

                  {/* Add to Cart Button */}
                  <div className="space-y-4">
                    <Button className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 shadow-lg hover:shadow-xl transition-all duration-200">
                      <ShoppingCart className="w-5 h-5 mr-3" />
                      Add ${calculatePrice().toFixed(2)} to Cart
                    </Button>

                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" className="h-12">
                        <Heart className="w-4 h-4 mr-2" />
                        Save for Later
                      </Button>
                      <Button variant="outline" className="h-12">
                        <Eye className="w-4 h-4 mr-2" />
                        Request Sample
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Additional Information Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="templates">Templates</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="shipping-info">Shipping Info</TabsTrigger>
            </TabsList>

            <TabsContent value="specifications">
              <Card>
                <CardHeader>
                  <CardTitle>Product Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4 text-gray-900">
                        Technical Details
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="text-gray-600">File Formats:</span>
                          <span className="font-medium">PDF, AI, EPS, PSD</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="text-gray-600">Resolution:</span>
                          <span className="font-medium">300 DPI minimum</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="text-gray-600">Color Mode:</span>
                          <span className="font-medium">CMYK</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="text-gray-600">Bleed:</span>
                          <span className="font-medium">
                            0.125" on all sides
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4 text-gray-900">
                        Available Sizes
                      </h4>
                      <div className="space-y-2">
                        {currentProduct.sizes.map((size, index) => (
                          <div
                            key={index}
                            className="flex justify-between py-2 border-b border-gray-100"
                          >
                            <span className="text-gray-600">{size.label}:</span>
                            <span className="font-medium">
                              {size.price > 0
                                ? `+$${size.price}`
                                : "Base price"}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="templates">
              <Card>
                <CardHeader>
                  <CardTitle>Free Design Templates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((template) => (
                      <div key={template} className="group cursor-pointer">
                        <div className="aspect-[3.5/2] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-3 overflow-hidden">
                          <Image
                            src={`/placeholder.jpg`}
                            alt={`Template ${template}`}
                            width={350}
                            height={200}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <h4 className="font-medium text-gray-900">
                          Template {template}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Professional design template
                        </p>
                        <Button size="sm" variant="outline" className="w-full">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews">
              <Card>
                <CardHeader>
                  <CardTitle>Customer Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      {
                        name: "Sarah Johnson",
                        rating: 5,
                        comment:
                          "Excellent quality postcards! The colors came out vibrant and the paper quality exceeded my expectations.",
                        date: "2 weeks ago",
                      },
                      {
                        name: "Mike Chen",
                        rating: 5,
                        comment:
                          "Fast turnaround and great customer service. Will definitely order again for our next campaign.",
                        date: "1 month ago",
                      },
                      {
                        name: "Lisa Rodriguez",
                        rating: 4,
                        comment:
                          "Good quality overall, though the colors were slightly different than expected on screen.",
                        date: "3 weeks ago",
                      },
                    ].map((review, index) => (
                      <div
                        key={index}
                        className="border-b border-gray-100 pb-6 last:border-b-0"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900">
                            {review.name}
                          </h4>
                          <span className="text-sm text-gray-500">
                            {review.date}
                          </span>
                        </div>
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? "text-yellow-400 fill-current"
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

            <TabsContent value="shipping-info">
              <Card>
                <CardHeader>
                  <CardTitle>Shipping Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4 text-gray-900">
                        Shipping Options
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                          <Truck className="w-5 h-5 text-blue-600 mt-0.5" />
                          <div>
                            <div className="font-medium text-blue-900">
                              Standard Shipping
                            </div>
                            <div className="text-sm text-blue-700">
                              5-7 business days • Free on orders $75+
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                          <Zap className="w-5 h-5 text-orange-600 mt-0.5" />
                          <div>
                            <div className="font-medium text-orange-900">
                              Express Shipping
                            </div>
                            <div className="text-sm text-orange-700">
                              2-3 business days • From $12.99
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                          <Clock className="w-5 h-5 text-red-600 mt-0.5" />
                          <div>
                            <div className="font-medium text-red-900">
                              Overnight
                            </div>
                            <div className="text-sm text-red-700">
                              Next business day • From $24.99
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4 text-gray-900">
                        Important Notes
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <Info className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                          Orders ship after production is complete
                        </li>
                        <li className="flex items-start gap-2">
                          <Info className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                          Production time is separate from shipping time
                        </li>
                        <li className="flex items-start gap-2">
                          <Info className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                          Tracking information provided for all orders
                        </li>
                        <li className="flex items-start gap-2">
                          <Info className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                          Insurance available for high-value orders
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
