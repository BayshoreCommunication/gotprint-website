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
import CallToAction from "@/components/CallToAction";
import MainSection from "@/components/MainSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative  bg-gradient-to-br from-teal-50 via-white to-green-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-200/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative container mx-auto px-4 md:px-8 lg:px-16 pt-10">
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
      {/* Main Content Section */}
      <MainSection />

      {/* Call to Action Section */}
      <CallToAction />
    </div>
  );
}
