"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MainSection() {
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
    },
  ];

  return (
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
          const serviceCount = category.services.length;
          let gridCols = "grid-cols-1";

          if (serviceCount >= 4)
            gridCols = "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
          else if (serviceCount === 3)
            gridCols = "sm:grid-cols-2 md:grid-cols-3";
          else if (serviceCount === 2) gridCols = "sm:grid-cols-2";

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
                    const serviceSlug = service
                      .split(" (")[0]
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")
                      .replace(/-+$/, "");

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
                              <Image
                                src={serviceImage}
                                alt={service.split(" (")[0]}
                                width={400}
                                height={400}
                                className="w-full h-full object-contain"
                              />
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
  );
}
