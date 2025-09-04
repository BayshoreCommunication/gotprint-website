"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Search,
  ShoppingCart,
  User,
  Phone,
  ChevronDown,
  Menu,
  X,
  Star,
  Shield,
  Zap,
  Truck,
  Award,
  TrendingUp,
  Users,
  Globe,
  ArrowRight,
  CheckCircle,
  Play,
  Sparkles,
  Target,
  Clock,
  HeartHandshake,
  FileText,
  Printer,
  Package,
  Palette,
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function HomePage() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceCategories = [
    {
      title: "Business Essentials",
      description: "Professional business printing for your everyday needs",
      services: [
        "Business Card Printing (Standard, Premium, Textured, Embossed)",
        "Letterhead & Envelope Printing",
        "Custom Invoice Books / Receipt Books",
        "Notepads with Branding",
      ],
      image_src: [
        "/images/services/business-essentials/business-card-printing.png",
        "/images/services/business-essentials/letterhead-&-envelope-printing.png",
        "/images/services/business-essentials/Custom-Invoice-Books-Receipt-Books.png",
        "/images/services/business-essentials/Notepads-with-Branding.png",
      ],
      color: "bg-blue-50 border-blue-200",
    },
    {
      title: "Marketing & Sales Materials",
      description: "Effective marketing materials to grow your business",
      services: [
        "Flyers & Brochures (Tri-fold, Bi-fold)",
        "Postcards",
        "Door Hangers for Real Estate & Local Services",
        "Sales Sheets / One-Pagers",
      ],
      image_src: [
        "/images/services/Marketing-&-Sales-Materials/Flyers-&-Brochures.png",
        "/images/services/Marketing-&-Sales-Materials/postcards.png",
        "/images/services/Marketing-&-Sales-Materials/DoorHangers.png",
        "/images/services/Marketing-&-Sales-Materials/SalesSheets.png",
      ],
      color: "bg-green-50 border-green-200",
    },
    {
      title: "Retail & Packaging Materials",
      description: "Custom packaging and retail solutions",
      services: [
        "Custom Labels & Stickers (Product Labels, QR Code Labels)",
        "Packaging Inserts & Thank You Cards",
        "Hang Tags for Apparel or Products",
        "Branded Shopping Bags (Paper)",
      ],
      image_src: [
        "/images/services/Retail-Packaging-Materials/Custom-Labels-&-Stickers.png",
        "/images/services/Retail-Packaging-Materials/Thank-You-Cards.png",
        "/images/services/Retail-Packaging-Materials/HangTags.png",
        "/images/services/Retail-Packaging-Materials/Branded-Shopping-Bags.png",
      ],
      color: "bg-purple-50 border-purple-200",
    },
    {
      title: "Event & Promotional Printing",
      description: "Make your events memorable with custom printing",
      services: [
        "Event Banners (Vinyl, Mesh, Retractable)",
        "Step & Repeat Backdrops for Events",
        "Table Covers / Tents for Trade Shows",
        "Custom Tickets, Badges, Wristbands",
      ],
      image_src: [
        "/images/services/Event-Promotional-Printing/EventBanners.png",
        "/images/services/Event-Promotional-Printing/Backdrops-for-Events.png",
        "/images/services/Event-Promotional-Printing/Tents-for-Trade-Shows.png",
        "/images/services/Event-Promotional-Printing/Wristbands.png",
      ],
      color: "bg-orange-50 border-orange-200",
    },
    {
      title: "Signage",
      description: "Professional signage for indoor and outdoor use",
      services: [
        "Yard Signs (for Realtors, Politicians, Contractors)",
        "Storefront Window Decals",
        "A-frame Sidewalk Signs",
      ],
      image_src: [
        "/images/services/Signage/Yard-Signs.png",
        "/images/services/Signage/Storefront-Window-Decals.png",
        "/images/services/Signage/A-frame-Sidewalk-Signs.png",
      ],
      color: "bg-red-50 border-red-200",
    },

    {
      title: "Real Estate-Specific Materials",
      description: "Specialized printing for real estate professionals",
      services: [
        "Open House Signs",
        "For Sale Signs",
        "Property Info Flyers",
        "Custom Key Hand-off Boxes / Folder Kits",
      ],
      image_src: [
        "/images/services/Retail-Packaging-Materials/Custom-Labels-&-Stickers.png",
        "/images/services/Retail-Packaging-Materials/Thank-You-Cards.png",
        "/images/services/Retail-Packaging-Materials/HangTags.png",
        "/images/services/Retail-Packaging-Materials/Branded-Shopping-Bags.png",
      ],
      color: "bg-teal-50 border-teal-200",
    },
    {
      title: "Healthcare & Legal Office Printing",
      description: "Professional printing for healthcare and legal offices",
      services: [
        "Appointment Cards",
        "Prescription Pads",
        "Consent Forms / Intake Forms",
        "Client Welcome Folders",
      ],
      image_src: [
        "/images/services/Retail-Packaging-Materials/Custom-Labels-&-Stickers.png",
        "/images/services/Retail-Packaging-Materials/Thank-You-Cards.png",
        "/images/services/Retail-Packaging-Materials/HangTags.png",
        "/images/services/Retail-Packaging-Materials/Branded-Shopping-Bags.png",
      ],
      color: "bg-cyan-50 border-cyan-200",
    },
    {
      title: "Wedding & Event Printing",
      description: "Beautiful printing for your special occasions",
      services: [
        "Invitation Cards",
        "Save-the-Date Cards",
        "Menus, Programs, Table Numbers",
        "Custom Thank You Cards",
      ],
      image_src: [
        "/images/services/Retail-Packaging-Materials/Custom-Labels-&-Stickers.png",
        "/images/services/Retail-Packaging-Materials/Thank-You-Cards.png",
        "/images/services/Retail-Packaging-Materials/HangTags.png",
        "/images/services/Retail-Packaging-Materials/Branded-Shopping-Bags.png",
      ],
      color: "bg-pink-50 border-pink-200",
    },
    {
      title: "Custom Stationery",
      description: "Personalized stationery for any occasion",
      services: [
        "Personalized Journals / Planners",
        "Custom Calendars",
        "Greeting Cards (Seasonal / Branded)",
      ],
      image_src: [
        "/images/services/Retail-Packaging-Materials/Custom-Labels-&-Stickers.png",
        "/images/services/Retail-Packaging-Materials/Thank-You-Cards.png",
        "/images/services/Retail-Packaging-Materials/HangTags.png",
        "/images/services/Retail-Packaging-Materials/Branded-Shopping-Bags.png",
      ],
      color: "bg-yellow-50 border-yellow-200",
    },
  ];

  const stats = [
    { number: "500K+", label: "Happy Customers", icon: Users },
    { number: "99.9%", label: "On-Time Delivery", icon: Clock },
    { number: "24/7", label: "Customer Support", icon: HeartHandshake },
    { number: "50+", label: "Print Products", icon: Package },
  ];

  const features = [
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all our printing services",
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "Express printing options available for urgent orders",
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Free shipping on orders over $75 across the US",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in printing quality and service",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-lg"
            : "bg-white/90 backdrop-blur-sm border-b border-gray-200/30"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link
                href="/"
                className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent"
              >
                BayPrint
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="hidden md:flex relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search products..."
                    className="pl-10 pr-4 py-2 w-64 bg-white/80 backdrop-blur-sm border-gray-200/50 focus:border-teal-300 focus:ring-teal-300/20"
                  />
                </div>
              </div>

              {/* User Actions */}
              <div className="flex items-center space-x-2 md:space-x-6">
                <Button
                  variant="default"
                  size="sm"
                  className="hidden md:flex bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 text-white ml-4"
                >
                  Get Quote
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200/50 shadow-xl">
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search products..."
                    className="pl-10 pr-4 py-2 w-full"
                  />
                </div>

                <div className="space-y-2">
                  {[
                    "Print Products",
                    "Marketing Materials",
                    "Specialty Items",
                    "Industries",
                  ].map((item) => (
                    <button
                      key={item}
                      className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <Button className="w-full bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 text-white">
                    Get Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Enhanced Hero Section */}
      <section className="relative  bg-gradient-to-br from-teal-50 via-white to-green-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-200/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative container mx-auto px-4 pt-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center py-28">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-medium">
                  <Sparkles className="w-4 h-4 mr-2" />
                  #1 Online Printing Service
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Professional
                  <span className="block bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
                    Printing Solutions
                  </span>
                  for Every Business
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  From business cards to marketing materials, we deliver
                  high-quality printing with fast turnaround times and
                  competitive pricing. Join over 500,000 satisfied customers.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Your Order
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-4 text-lg font-semibold"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 pt-8">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-600">
                    100% Quality Guarantee
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-600">
                    Free Shipping $75+
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-orange-600" />
                  <span className="text-sm text-gray-600">24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {/* Animated Cards */}
                <div className="space-y-6">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-4">
                      <Printer className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Business Cards
                    </h3>
                    <p className="text-sm text-gray-600">
                      Professional business cards starting at $19.99
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105 ml-8">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mb-4">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Flyers</h3>
                    <p className="text-sm text-gray-600">
                      Eye-catching flyers for marketing campaigns
                    </p>
                  </div>
                </div>

                <div className="space-y-6 mt-12">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mb-4">
                      <Package className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Packaging
                    </h3>
                    <p className="text-sm text-gray-600">
                      Custom packaging solutions for retail
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl mb-4">
                      <Palette className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Banners
                    </h3>
                    <p className="text-sm text-gray-600">
                      Large format banners for events
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose GotPrint?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to delivering exceptional printing services that exceed your expectations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <feature.icon className="w-10 h-10 text-teal-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <main className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Print Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive printing solutions for businesses of all sizes
            </p>
          </div>

          {serviceCategories.map((category, categoryIndex) => {
            // Calculate optimal grid columns based on number of services
            const serviceCount = category.services.length;
            let gridCols = "grid-cols-1";

            if (serviceCount >= 4) {
              gridCols = "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
            } else if (serviceCount === 3) {
              gridCols = "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3";
            } else if (serviceCount === 2) {
              gridCols = "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2";
            } else {
              gridCols = "sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1";
            }

            return (
              <section key={categoryIndex} className="mb-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
                  {category.description}
                </p>
                <div className="flex justify-center">
                  <div className={`grid ${gridCols} gap-6 max-w-7xl`}>
                    {category.services.map((service, serviceIndex) => {
                      // Create URL-friendly slug from service name
                      const serviceSlug = service
                        .split(" (")[0]
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/-+$/, "");

                      // Get the corresponding image for this service
                      const serviceImage =
                        category.image_src[
                          serviceIndex % category.image_src.length
                        ];

                      return (
                        <Link
                          key={serviceIndex}
                          href={`/services/${serviceSlug}`}
                        >
                          <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-teal-300 h-full w-full max-w-sm mx-auto overflow-hidden">
                            <CardContent className="p-6">
                              <div className="aspect-square mb-4 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg overflow-hidden flex items-center justify-center group-hover:from-teal-100 group-hover:to-teal-200 transition-all duration-300">
                                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                                  <Image
                                    src={serviceImage}
                                    alt={service.split(" (")[0]}
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                              </div>
                              <h4 className="font-semibold text-gray-900 text-center text-sm lg:text-base leading-tight min-h-[2.5rem] flex items-center justify-center mb-3">
                                {service.split(" (")[0]}
                              </h4>
                              <div className="text-center">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-teal-600 hover:text-teal-700 group-hover:bg-teal-50"
                                >
                                  View Details
                                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </main>

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
                <Target className="w-5 h-5 mr-2" />
                Start Your Order
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 text-lg font-semibold"
              >
                Browse Templates
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 text-lg font-semibold"
              >
                Request Quote
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className=" text-center text-gray-400">
            <p>&copy; 2024 GotPrint. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
