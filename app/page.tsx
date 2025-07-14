"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, ShoppingCart, User, Phone, ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  function getMenuCategories(activeMenu: string) {
    const menuData = {
      "Print Products": [
        {
          title: "Business Essentials",
          items: [
            "Business Card Printing",
            "Letterhead & Envelope Printing",
            "Custom Invoice Books",
            "Notepads with Branding",
          ],
        },
        {
          title: "Invitations & Stationery",
          items: [
            "Wedding Invitations",
            "Greeting Cards",
            "Postcards",
            "Thank You Cards",
            "Calendars",
          ],
        },
        {
          title: "Stickers & Labels",
          items: [
            "Custom Labels & Stickers",
            "Product Labels",
            "QR Code Labels",
            "Packaging Inserts",
          ],
        },
        {
          title: "Custom Stationery",
          items: [
            "Personalized Journals",
            "Planners",
            "Custom Calendars",
            "Reminder Notepads",
          ],
        },
      ],
      "Marketing Materials": [
        {
          title: "Promotional Items",
          items: [
            "Flyers & Brochures",
            "Postcards",
            "Door Hangers",
            "Sales Sheets",
          ],
        },
        {
          title: "Signage",
          items: [
            "Event Banners",
            "Yard Signs",
            "Storefront Window Decals",
            "A-frame Signs",
          ],
        },
        {
          title: "Event Materials",
          items: [
            "Step & Repeat Backdrops",
            "Table Covers",
            "Custom Tickets",
            "Badges & Wristbands",
          ],
        },
        {
          title: "Retail Packaging",
          items: [
            "Hang Tags",
            "Branded Shopping Bags",
            "Thank You Cards",
            "Packaging Inserts",
          ],
        },
      ],
      "Specialty Items": [
        {
          title: "Apparel & Merch",
          items: [
            "Custom T-Shirts",
            "Hoodies & Caps",
            "Employee Uniforms",
            "Branded Tote Bags",
          ],
        },
        {
          title: "Gifts & Décor",
          items: [
            "Custom Mugs",
            "Personalized Journals",
            "Photo Products",
            "Home Décor",
          ],
        },
        {
          title: "Special Finishes",
          items: [
            "Embossed Printing",
            "Foil Stamping",
            "Raised UV Prints",
            "Textured Papers",
          ],
        },
        {
          title: "Seasonal Items",
          items: [
            "Holiday Cards",
            "Christmas Decor",
            "Valentine's Day",
            "New Year Cards",
          ],
        },
      ],
      Industries: [
        {
          title: "Real Estate",
          items: [
            "Open House Signs",
            "For Sale Signs",
            "Property Info Flyers",
            "Key Hand-off Kits",
          ],
        },
        {
          title: "Healthcare & Legal",
          items: [
            "Appointment Cards",
            "Prescription Pads",
            "Consent Forms",
            "Client Folders",
          ],
        },
        {
          title: "Wedding & Events",
          items: [
            "Save-the-Date Cards",
            "Invitations",
            "Menus & Programs",
            "Table Numbers",
          ],
        },
        {
          title: "Corporate",
          items: [
            "Employee Badges",
            "Presentation Folders",
            "Conference Materials",
            "Trade Show Displays",
          ],
        },
      ],
    };

    return menuData[activeMenu as keyof typeof menuData] || [];
  }

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
      icon: "💼",
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
      icon: "📈",
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
      icon: "📦",
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
      icon: "🎪",
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
      icon: "🪧",
      color: "bg-red-50 border-red-200",
    },
    {
      title: "Apparel & Merch",
      description: "Custom apparel and promotional merchandise",
      services: [
        "Custom T-Shirts, Hoodies, Caps",
        "Employee Uniform Printing",
        "Branded Tote Bags or Mugs",
      ],
      icon: "👕",
      color: "bg-indigo-50 border-indigo-200",
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
      icon: "🏠",
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
      icon: "⚕️",
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
      icon: "💒",
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
      icon: "📝",
      color: "bg-yellow-50 border-yellow-200",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 relative z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold text-green-600">GotPrint</div>
              <nav className="hidden md:flex space-x-6">
                {[
                  "Print Products",
                  "Marketing Materials",
                  "Specialty Items",
                  "Industries",
                ].map((item) => (
                  <div
                    key={item}
                    className="relative"
                    onMouseEnter={() => setActiveMenu(item)}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <a
                      href="#"
                      className="text-gray-700 hover:text-blue-600 flex items-center py-4 text-sm lg:text-base font-medium"
                    >
                      {item}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                ))}
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="default" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        {/* Mega Menu */}
        {activeMenu && (
          <div
            className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg z-40"
            onMouseEnter={() => setActiveMenu(activeMenu)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-9">
                  <div className="grid grid-cols-4 gap-6">
                    {getMenuCategories(activeMenu).map((category, index) => (
                      <div key={index}>
                        <h3 className="font-semibold text-gray-900 mb-3">
                          {category.title}
                        </h3>
                        <ul className="space-y-2">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <a
                                href="#"
                                className="text-gray-600 hover:text-blue-600 text-sm lg:text-base"
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
                {activeMenu === "Print Products" && (
                  <div className="col-span-3">
                    <Card className="overflow-hidden">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Wedding Postcard Invitations
                        </h4>
                        <p className="text-sm lg:text-base text-gray-600 mb-3">
                          Design & print 5" x 7" Wedding invitations on 16 pt.
                          Matte paper. 100 qty starting at $29.75
                        </p>
                        <Button
                          size="sm"
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          Shop Now →
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-500 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Professional Printing Solutions for Every Business Need
              </h1>
              <p className="text-xl mb-6 text-teal-100">
                From business essentials to custom marketing materials, we
                provide high-quality printing services that help your business
                stand out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-teal-600 hover:bg-gray-100"
                >
                  Shop Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-teal-600 bg-transparent"
                >
                  Get Quote
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 h-32 flex items-center justify-center text-4xl">
                    💼
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 h-24 flex items-center justify-center text-3xl">
                    📈
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 h-24 flex items-center justify-center text-3xl">
                    🪧
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 h-32 flex items-center justify-center text-4xl">
                    📦
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <main className="py-16">
        <div className="container mx-auto px-4 ">
          {serviceCategories.map((category, categoryIndex) => (
            <section key={categoryIndex} className="mb-16 justify-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {category.title}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
                {category.services.map((service, serviceIndex) => {
                  // Create URL-friendly slug from service name
                  const serviceSlug = service
                    .split(" (")[0]
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/-+$/, "");
                  const categorySlug = category.title
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/-+$/, "");

                  return (
                    <Link key={serviceIndex} href={`/services/${serviceSlug}`}>
                      <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
                        <CardContent className="p-4">
                          <div className="aspect-square mb-4 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                            <div className="text-4xl text-gray-400">
                              {category.icon}
                            </div>
                          </div>
                          <h3 className="font-semibold text-gray-900 text-center text-sm lg:text-base leading-tight">
                            {service.split(" (")[0]}{" "}
                            {/* Show main service name without details */}
                          </h3>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Upload your design or choose from our templates. Get professional
            printing with fast turnaround times and competitive pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
              Upload Design
            </Button>
            <Button size="lg" variant="outline">
              Browse Templates
            </Button>
            <Button size="lg" variant="outline">
              Request Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-teal-400 mb-4">
                GotPrint
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted partner for all printing needs. Quality, speed, and
                exceptional service for businesses of all sizes.
              </p>
              <div className="flex space-x-4">
                <Phone className="w-5 h-5 text-teal-400" />
                <span className="text-gray-400">1-800-GOT-PRINT</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Popular Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Business Cards
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Brochures
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Flyers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Banners
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Yard Signs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Industries</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Real Estate
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Healthcare
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Legal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Retail
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Events
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Order Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Shipping Info
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GotPrint. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
