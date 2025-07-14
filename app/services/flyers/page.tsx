"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Plus, Minus, HelpCircle, ShoppingCart, Heart, Share2 } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import Image from "next/image";

export default function FlyersPage() {
    const [selectedSize, setSelectedSize] = useState("8.5x11");
    const [selectedOrientation, setSelectedOrientation] = useState("vertical");
    const [selectedPaper, setSelectedPaper] = useState("100lb-gloss");
    const [selectedColor, setSelectedColor] = useState("full-color-front");
    const [selectedFold, setSelectedFold] = useState("no-fold");
    const [quantity, setQuantity] = useState(100);
    const [productionTime, setProductionTime] = useState("regular");
    const [country, setCountry] = useState("united-states");
    const [zipCode, setZipCode] = useState("");
    const [addressType, setAddressType] = useState("residential");

    const productData = {
        title: "Flyers & Brochures",
        description: "Eye-catching flyers and brochures for your marketing campaigns. Perfect for events, promotions, and business advertising.",
        image: "/placeholder.jpg",
        basePrice: 24.99,
        sizes: [
            { value: "8.5x11", label: "8.5\" x 11\" (Letter)", price: 0 },
            { value: "8.5x14", label: "8.5\" x 14\" (Legal)", price: 5 },
            { value: "11x17", label: "11\" x 17\" (Tabloid)", price: 10 },
            { value: "custom", label: "Custom Size", price: 15 },
        ],
        papers: [
            { value: "100lb-gloss", label: "100 lb. Gloss Text", price: 0 },
            { value: "80lb-uncoated", label: "80 lb. Uncoated Text", price: -3 },
            { value: "100lb-matte", label: "100 lb. Matte Text", price: 2 },
            { value: "14pt-cardstock", label: "14 pt. Cardstock", price: 8 },
        ],
        colors: [
            { value: "full-color-front", label: "Full Color Front", price: 0 },
            { value: "full-color-both", label: "Full Color Both Sides", price: 12 },
            { value: "black-white", label: "Black & White", price: -8 },
        ],
        folds: [
            { value: "no-fold", label: "No Fold (Flat)", price: 0 },
            { value: "half-fold", label: "Half Fold", price: 3 },
            { value: "tri-fold", label: "Tri-Fold", price: 5 },
            { value: "z-fold", label: "Z-Fold", price: 5 },
            { value: "gate-fold", label: "Gate Fold", price: 8 },
        ],
    };

    const calculatePrice = () => {
        let price = productData.basePrice;

        // Add size price
        const sizePrice = productData.sizes.find(s => s.value === selectedSize)?.price || 0;
        price += sizePrice;

        // Add paper price
        const paperPrice = productData.papers.find(p => p.value === selectedPaper)?.price || 0;
        price += paperPrice;

        // Add color price
        const colorPrice = productData.colors.find(c => c.value === selectedColor)?.price || 0;
        price += colorPrice;

        // Add fold price
        const foldPrice = productData.folds.find(f => f.value === selectedFold)?.price || 0;
        price += foldPrice;

        // Add rush price
        if (productionTime === "rush") {
            price += 20;
        }

        // Quantity pricing
        const quantityMultiplier = quantity <= 250 ? 1 : quantity <= 500 ? 0.85 : 0.75;
        price *= quantityMultiplier;

        return price;
    };

    const incrementQuantity = () => {
        setQuantity(prev => {
            if (prev < 100) return prev + 25;
            if (prev < 250) return prev + 50;
            if (prev < 500) return prev + 100;
            return prev + 250;
        });
    };

    const decrementQuantity = () => {
        setQuantity(prev => {
            if (prev <= 25) return 25;
            if (prev <= 100) return prev - 25;
            if (prev <= 250) return prev - 50;
            if (prev <= 500) return prev - 100;
            return prev - 250;
        });
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-8">
                            <Link href="/" className="text-2xl font-bold text-green-600">GotPrint</Link>
                            <nav className="hidden md:flex space-x-6">
                                <Link href="#" className="text-gray-700 hover:text-blue-600">Print Products</Link>
                                <Link href="#" className="text-gray-700 hover:text-blue-600">Marketing Materials</Link>
                                <Link href="#" className="text-gray-700 hover:text-blue-600">Specialty Items</Link>
                                <Link href="#" className="text-gray-700 hover:text-blue-600">Industries</Link>
                            </nav>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Button variant="default" size="lg">
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Breadcrumb */}
            <div className="bg-gray-50 py-2">
                <div className="container mx-auto px-4">
                    <nav className="flex items-center space-x-2 text-sm">
                        <Link href="/" className="text-blue-600 hover:underline">Home</Link>
                        <span className="text-gray-500">»</span>
                        <Link href="#" className="text-blue-600 hover:underline">Flyers & Brochures</Link>
                        <span className="text-gray-500">»</span>
                        <span className="text-gray-700">Order</span>
                    </nav>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Product Image */}
                    <div className="space-y-4">
                        <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square flex items-center justify-center">
                            <Image
                                src={productData.image}
                                alt={productData.title}
                                width={500}
                                height={500}
                                className="object-cover"
                            />
                        </div>

                        <div className="flex space-x-2">
                            <Button variant="outline" size="sm" className="flex items-center space-x-2">
                                <Share2 className="w-4 h-4" />
                                <span>Share</span>
                            </Button>
                            <Button variant="outline" size="sm" className="flex items-center space-x-2">
                                <Heart className="w-4 h-4" />
                                <span>Save</span>
                            </Button>
                        </div>
                    </div>

                    {/* Product Configuration */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">{productData.title}</h1>
                            <p className="text-gray-600">{productData.description}</p>
                        </div>

                        <Tabs defaultValue="product-details" className="w-full">
                            <TabsList className="grid w-full grid-cols-4">
                                <TabsTrigger value="product-details">Product Details</TabsTrigger>
                                <TabsTrigger value="paper-stocks">Paper Stocks</TabsTrigger>
                                <TabsTrigger value="file-setup">File Setup</TabsTrigger>
                                <TabsTrigger value="templates">Templates</TabsTrigger>
                            </TabsList>

                            <TabsContent value="product-details" className="space-y-6">
                                {/* Size Selection */}
                                <div>
                                    <Label className="text-sm font-medium mb-3 block">Size</Label>
                                    <Select value={selectedSize} onValueChange={setSelectedSize}>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {productData.sizes.map((size) => (
                                                <SelectItem key={size.value} value={size.value}>
                                                    {size.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Orientation */}
                                <div>
                                    <Label className="text-sm font-medium mb-3 block">Orientation</Label>
                                    <RadioGroup value={selectedOrientation} onValueChange={setSelectedOrientation}>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="vertical" id="vertical" />
                                            <Label htmlFor="vertical">Vertical (Portrait)</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="horizontal" id="horizontal" />
                                            <Label htmlFor="horizontal">Horizontal (Landscape)</Label>
                                        </div>
                                    </RadioGroup>
                                </div>

                                {/* Paper Selection */}
                                <div>
                                    <Label className="text-sm font-medium mb-3 block">Paper</Label>
                                    <Select value={selectedPaper} onValueChange={setSelectedPaper}>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {productData.papers.map((paper) => (
                                                <SelectItem key={paper.value} value={paper.value}>
                                                    {paper.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Color Selection */}
                                <div>
                                    <Label className="text-sm font-medium mb-3 block">Color</Label>
                                    <Select value={selectedColor} onValueChange={setSelectedColor}>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {productData.colors.map((color) => (
                                                <SelectItem key={color.value} value={color.value}>
                                                    {color.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Fold Selection */}
                                <div>
                                    <Label className="text-sm font-medium mb-3 block">Folding Options</Label>
                                    <Select value={selectedFold} onValueChange={setSelectedFold}>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {productData.folds.map((fold) => (
                                                <SelectItem key={fold.value} value={fold.value}>
                                                    {fold.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Quantity */}
                                <div>
                                    <Label className="text-sm font-medium mb-3 block">Quantity</Label>
                                    <div className="flex items-center space-x-2">
                                        <Button variant="outline" size="sm" onClick={decrementQuantity}>
                                            <Minus className="w-4 h-4" />
                                        </Button>
                                        <Input
                                            type="number"
                                            value={quantity}
                                            onChange={(e) => setQuantity(parseInt(e.target.value) || 25)}
                                            className="w-24 text-center"
                                        />
                                        <Button variant="outline" size="sm" onClick={incrementQuantity}>
                                            <Plus className="w-4 h-4" />
                                        </Button>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-1">
                                        {quantity <= 250 ? "Standard quantity" : quantity <= 500 ? "15% bulk discount" : "25% bulk discount"}
                                    </p>
                                </div>

                                {/* Production Time */}
                                <div>
                                    <Label className="text-sm font-medium mb-3 block">Production Time</Label>
                                    <RadioGroup value={productionTime} onValueChange={setProductionTime}>
                                        <div className="flex items-center justify-between p-3 border rounded-lg">
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="regular" id="regular" />
                                                <Label htmlFor="regular" className="font-medium">Regular</Label>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-sm text-gray-600">2-3 Business Days</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between p-3 border rounded-lg">
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="rush" id="rush" />
                                                <Label htmlFor="rush" className="font-medium">Rush</Label>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-sm text-gray-600">1 Business Day</div>
                                            </div>
                                        </div>
                                    </RadioGroup>
                                </div>

                                {/* Estimated Shipping */}
                                <div>
                                    <Label className="text-sm font-medium mb-3 block">Estimated Shipping</Label>
                                    <div className="space-y-3">
                                        <Select value={country} onValueChange={setCountry}>
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="united-states">United States</SelectItem>
                                                <SelectItem value="canada">Canada</SelectItem>
                                                <SelectItem value="mexico">Mexico</SelectItem>
                                            </SelectContent>
                                        </Select>

                                        <div className="flex space-x-2">
                                            <Input
                                                placeholder="ZipCode"
                                                value={zipCode}
                                                onChange={(e) => setZipCode(e.target.value)}
                                                className="flex-1"
                                            />
                                            <Button variant="outline" className="text-blue-600">
                                                Calculate Shipping
                                            </Button>
                                        </div>

                                        <div className="space-y-2">
                                            <Label className="text-sm font-medium">Address Type</Label>
                                            <RadioGroup value={addressType} onValueChange={setAddressType}>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="residential" id="residential" />
                                                    <Label htmlFor="residential">Residential</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="commercial" id="commercial" />
                                                    <Label htmlFor="commercial">Commercial</Label>
                                                </div>
                                            </RadioGroup>
                                        </div>
                                    </div>
                                </div>

                                {/* Price and Add to Cart */}
                                <div className="border-t pt-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="text-2xl font-bold text-gray-900">
                                            ${calculatePrice().toFixed(2)}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            for {quantity} pieces
                                        </div>
                                    </div>

                                    <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
                                        <ShoppingCart className="w-5 h-5 mr-2" />
                                        Add to Cart
                                    </Button>
                                </div>
                            </TabsContent>

                            <TabsContent value="paper-stocks">
                                <div className="space-y-4">
                                    <h3 className="font-semibold">Available Paper Stocks</h3>
                                    <div className="grid gap-4">
                                        {productData.papers.map((paper) => (
                                            <div key={paper.value} className="flex items-center justify-between p-3 border rounded-lg">
                                                <span>{paper.label}</span>
                                                <span className="text-sm text-gray-500">
                                                    {paper.price >= 0 ? `+$${paper.price}` : `$${paper.price}`}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="file-setup">
                                <div className="space-y-4">
                                    <h3 className="font-semibold">File Setup Instructions</h3>
                                    <div className="prose text-sm text-gray-600">
                                        <p>Please ensure your files meet the following requirements:</p>
                                        <ul className="list-disc pl-6 space-y-1">
                                            <li>Resolution: 300 DPI minimum</li>
                                            <li>Format: PDF preferred (AI, EPS, PSD also accepted)</li>
                                            <li>Color Mode: CMYK for print</li>
                                            <li>Bleed: 0.125" on all sides</li>
                                            <li>Safe Area: Keep important text 0.125" from trim edge</li>
                                            <li>Fonts: Embed all fonts or convert to outlines</li>
                                        </ul>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="templates">
                                <div className="space-y-4">
                                    <h3 className="font-semibold">Download Templates</h3>
                                    <div className="grid gap-4">
                                        <Button variant="outline" className="justify-start">
                                            Download 8.5" x 11" Template
                                        </Button>
                                        <Button variant="outline" className="justify-start">
                                            Download 11" x 17" Template
                                        </Button>
                                        <Button variant="outline" className="justify-start">
                                            Download Tri-fold Template
                                        </Button>
                                        <Button variant="outline" className="justify-start">
                                            Download InDesign Template
                                        </Button>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
} 