'use client';
import Image from "next/image";
import React, { useEffect, useState } from "react";

const HeroSection: React.FC = () => {
  const images = [
    "/images/p2.jpg",
    "/images/p3.jpg",
    "/images/p4.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval when the component is unmounted
  }, []);

  return (
    <div className="hero-container h-[90vh] bg-amber-200">
      <div className="absolute inset-0 overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-7 text-white">
              <h1 className="text-[60px] font-bold">Welcome to <span className="text-red bg-amber-50/30 p-2 backdrop-blur-2xl rounded-4xl">Up Stays</span></h1>
              <p className="mt-2 text-lg">Your comfort is our priority</p>
              <button className=" mt-4 px-4 py-2 bg-red text-white rounded-md hover:bg-red-700 transition">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
    </div>
  );
};

export default HeroSection;
