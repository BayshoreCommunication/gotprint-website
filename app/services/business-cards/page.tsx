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

export default function BusinessCardsPage() {
  const [selectedSize, setSelectedSize] = useState("3.5x2");
  const [selectedOrientation, setSelectedOrientation] = useState("horizontal");
  const [selectedPaper, setSelectedPaper] = useState("16pt-matte");
  const [selectedColor, setSelectedColor] = useState("full-color-both");
  const [quantity, setQuantity] = useState(250);
  const [coating, setCoating] = useState("matte-coating");
  const [productionTime, setProductionTime] = useState("regular");
  const [country, setCountry] = useState("united-states");
  const [zipCode, setZipCode] = useState("");
  const [addressType, setAddressType] = useState("residential");
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const productData = {
    title: "Premium Business Cards",
    subtitle: "Professional Business Cards That Make an Impact",
    description:
      "Create stunning, professional business cards that leave a lasting impression. High-quality printing with premium paper options and finishes that reflect your brand's excellence.",
    images: [
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
    ],
    basePrice: 19.99,
    rating: 4.9,
    reviewCount: 4521,
    badge: "Most Popular",
    features: [
      "Premium cardstock options",
      "Professional finishes available",
      "Same-day design service",
      "Bulk quantity discounts",
      "Free design templates",
      "Rush production available",
    ],
    sizes: [
      {
        value: "3.5x2",
        label: '3.5" x 2" (Standard)',
        price: 0,
        popular: true,
        description: "Standard business card size",
      },
      {
        value: "3.5x2.5",
        label: '3.5" x 2.5"',
        price: 5,
        popular: false,
        description: "Slightly larger format",
      },
      {
        value: "square",
        label: '2.5" x 2.5" (Square)',
        price: 8,
        popular: false,
        description: "Modern square format",
      },
    ],
    papers: [
      {
        value: "16pt-matte",
        label: "16 pt. Matte",
        price: 0,
        description: "Smooth, professional matte finish",
        popular: true,
      },
      {
        value: "16pt-gloss",
        label: "16 pt. Gloss",
        price: 0,
        description: "Shiny, vibrant finish",
        popular: false,
      },
      {
        value: "14pt-uncoated",
        label: "14 pt. Uncoated",
        price: -2,
        description: "Natural, writable surface",
        popular: false,
      },
      {
        value: "18pt-premium",
        label: "18 pt. Premium Matte",
        price: 5,
        description: "Thick, luxury feel",
        popular: false,
      },
      {
        value: "32pt-ultra",
        label: "32 pt. Ultra Premium",
        price: 15,
        description: "Ultra-thick, premium quality",
        popular: false,
      },
    ],
    colors: [
      {
        value: "full-color-both",
        label: "Full Color Both Sides",
        price: 0,
        description: "Full color front and back",
      },
      {
        value: "full-color-front",
        label: "Full Color Front Only",
        price: -5,
        description: "Color front, blank back",
      },
      {
        value: "black-white",
        label: "Black & White",
        price: -8,
        description: "Professional black and white",
      },
    ],
  };

  const calculatePrice = () => {
    let price = productData.basePrice;

    const sizePrice =
      productData.sizes.find((s) => s.value === selectedSize)?.price || 0;
    price += sizePrice;

    const paperPrice =
      productData.papers.find((p) => p.value === selectedPaper)?.price || 0;
    price += paperPrice;

    const colorPrice =
      productData.colors.find((c) => c.value === selectedColor)?.price || 0;
    price += colorPrice;

    if (coating === "gloss-coating") {
      price += 3;
    } else if (coating === "spot-uv") {
      price += 10;
    }

    if (productionTime === "rush") {
      price += 15;
    }

    // Quantity pricing with better discounts for business cards
    let discountMultiplier = 1;
    if (quantity >= 1000) discountMultiplier = 0.75;
    else if (quantity >= 500) discountMultiplier = 0.8;
    else if (quantity >= 250) discountMultiplier = 0.85;

    return price * discountMultiplier;
  };

  const incrementQuantity = () => {
    setQuantity((prev) => {
      if (prev < 250) return prev + 100;
      if (prev < 500) return prev + 250;
      return prev + 500;
    });
  };

  const decrementQuantity = () => {
    setQuantity((prev) => {
      if (prev <= 100) return 100;
      if (prev <= 250) return prev - 100;
      if (prev <= 500) return prev - 250;
      return prev - 500;
    });
  };

  const getQuantityDiscount = () => {
    if (quantity >= 1000) return 25;
    if (quantity >= 500) return 20;
    if (quantity >= 250) return 15;
    return 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
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
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
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
              Business Cards
            </Link>
            <ArrowRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-700 font-medium">Configure & Order</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Product Images & Info */}
          <div className="lg:col-span-7 space-y-6">
            {/* Product Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1">
                  <Award className="w-3 h-3 mr-1" />
                  {productData.badge}
                </Badge>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(productData.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    {productData.rating} (
                    {productData.reviewCount.toLocaleString()} reviews)
                  </span>
                </div>
              </div>

              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {productData.title}
                </h1>
                <p className="text-lg text-teal-600 font-semibold mb-3">
                  {productData.subtitle}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {productData.description}
                </p>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {productData.features.map((feature, index) => (
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
              <div className="relative aspect-[3.5/2] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={productData.images[activeImageIndex]}
                  alt={productData.title}
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
                {productData.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`aspect-[3.5/2] rounded-lg overflow-hidden border-2 transition-all ${
                      activeImageIndex === index
                        ? "border-teal-500 ring-2 ring-teal-200"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${productData.title} view ${index + 1}`}
                      width={100}
                      height={60}
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
                        <div className="space-y-2">
                          {productData.sizes.map((size) => (
                            <button
                              key={size.value}
                              onClick={() => setSelectedSize(size.value)}
                              className={`relative w-full p-3 rounded-lg border-2 text-left transition-all ${
                                selectedSize === size.value
                                  ? "border-teal-500 bg-teal-50 ring-2 ring-teal-200"
                                  : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                              }`}
                            >
                              <div className="flex justify-between items-start">
                                <div>
                                  <div className="text-sm font-medium text-gray-900">
                                    {size.label}
                                  </div>
                                  <div className="text-xs text-gray-500 mt-1">
                                    {size.description}
                                  </div>
                                </div>
                                <div className="text-xs text-gray-600">
                                  {size.price > 0
                                    ? `+$${size.price}`
                                    : "Base price"}
                                </div>
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
                          {productData.papers.map((paper) => (
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
                                  {paper.price >= 0
                                    ? paper.price > 0
                                      ? `+$${paper.price}`
                                      : "Included"
                                    : `$${paper.price}`}
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
                          {productData.colors.map((color) => (
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
                                  {color.price >= 0
                                    ? color.price > 0
                                      ? `+$${color.price}`
                                      : "Base price"
                                    : `$${color.price}`}
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
                                setQuantity(parseInt(e.target.value) || 100)
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

                      {/* Coating */}
                      <div className="space-y-3">
                        <Label className="text-sm font-semibold text-gray-900">
                          Coating
                        </Label>
                        <div className="space-y-2">
                          {[
                            {
                              value: "matte-coating",
                              label: "Matte Coating",
                              price: 0,
                              description: "Smooth, non-reflective finish",
                            },
                            {
                              value: "gloss-coating",
                              label: "Gloss Coating",
                              price: 3,
                              description: "Shiny, protective finish",
                            },
                            {
                              value: "spot-uv",
                              label: "Spot UV",
                              price: 10,
                              description: "Selective gloss highlights",
                            },
                            {
                              value: "no-coating",
                              label: "No Coating",
                              price: -2,
                              description: "Natural paper finish",
                            },
                          ].map((coatingOption) => (
                            <button
                              key={coatingOption.value}
                              onClick={() => setCoating(coatingOption.value)}
                              className={`w-full p-3 rounded-lg border-2 text-left transition-all ${
                                coating === coatingOption.value
                                  ? "border-teal-500 bg-teal-50 ring-2 ring-teal-200"
                                  : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                              }`}
                            >
                              <div className="flex justify-between items-start">
                                <div>
                                  <div className="text-sm font-medium text-gray-900">
                                    {coatingOption.label}
                                  </div>
                                  <div className="text-xs text-gray-500 mt-1">
                                    {coatingOption.description}
                                  </div>
                                </div>
                                <div className="text-xs text-gray-600">
                                  {coatingOption.price >= 0
                                    ? coatingOption.price > 0
                                      ? `+$${coatingOption.price}`
                                      : "Included"
                                    : `$${coatingOption.price}`}
                                </div>
                              </div>
                            </button>
                          ))}
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
                                3-5 Days
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
                                +$15
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
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="text-gray-600">Safe Area:</span>
                          <span className="font-medium">0.125" from edges</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4 text-gray-900">
                        Available Sizes
                      </h4>
                      <div className="space-y-2">
                        {productData.sizes.map((size, index) => (
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
                    {[
                      "Corporate Professional",
                      "Creative Design",
                      "Modern Minimalist",
                      "Classic Business",
                      "Tech Startup",
                      "Healthcare",
                    ].map((template, index) => (
                      <div key={index} className="group cursor-pointer">
                        <div className="aspect-[3.5/2] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-3 overflow-hidden">
                          <Image
                            src={`/placeholder.jpg`}
                            alt={template}
                            width={350}
                            height={200}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <h4 className="font-medium text-gray-900">
                          {template}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Professional business card design
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
                        name: "Jennifer Martinez",
                        rating: 5,
                        comment:
                          "Outstanding quality! The 16pt matte finish feels premium and the colors are perfect. Highly recommend for professional use.",
                        date: "1 week ago",
                      },
                      {
                        name: "David Kim",
                        rating: 5,
                        comment:
                          "Excellent service and fast turnaround. The rush order was delivered exactly when promised.",
                        date: "2 weeks ago",
                      },
                      {
                        name: "Maria Rodriguez",
                        rating: 4,
                        comment:
                          "Great quality business cards. The only minor issue was the packaging could be better protected.",
                        date: "1 month ago",
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
                              5-7 business days • Free on orders $50+
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
                              2-3 business days • From $9.99
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
                              Next business day • From $19.99
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
                          Business cards shipped in protective packaging
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
