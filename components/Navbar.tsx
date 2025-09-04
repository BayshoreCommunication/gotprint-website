import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div>
      <header className="w-full shadow-md bg-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent"
          >
            BayPrint
          </Link>

          <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <Link href="/" className="hover:text-teal-600 transition-colors">
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-teal-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-teal-600 transition-colors"
            >
              Contact
            </Link>
          </nav>

          <Button className="bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md">
            Get a Quote
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
