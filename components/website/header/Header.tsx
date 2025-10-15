"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className=" bg-white/70 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href={"/"}>
              {" "}
              <div className="text-2xl font-bold text-red">
                <Image width={100} height={100} src="/images/logo.png" alt="" />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/about"
              className="text-gray-800 font-bold hover:scale-108 hover:text-red transition duration-200"
            >
              About us
            </Link>
            <Link
              href="/properties"
              className="text-gray-800 font-bold hover:scale-108 hover:text-red transition duration-200"
            >
              {" "}
              Properties
            </Link>
            <Link
              href="/listYourProperty"
              className="text-gray-800 font-bold hover:scale-108 hover:text-red transition duration-200"
            >
              List Your Property
            </Link>
          </nav>

          {/* SignIn/SignUp Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className=" cursor-pointer px-4 py-2   text-black font-bold border-2 border-red rounded-2xl duration-200 hover:bg-red hover:text-white transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-blue-500"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu (Dropdown) */}
        <div className={`${menuOpen ? "block" : "hidden"} md:hidden  p-5 `}>
          <Link
            href="/about"
            className="block py-2 font-bold text-darkGray hover:text-blue-500 transition"
          >
            About us
          </Link>
          <Link
            href="/properties"
            className="block py-2 font-bold text-darkGray hover:text-blue-500 transition"
          >
            Properties
          </Link>
          <Link
            href="/listYourProperty"
            className="block py-2 font-bold text-darkGray hover:text-blue-500 transition"
          >
            List Your Property
          </Link>
          <div className="mt-4 space-x-3 flex justify-center">
            <Link
              href="/contact"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition w-full"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
