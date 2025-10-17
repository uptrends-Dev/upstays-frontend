"use client";
// import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const HeroSection: React.FC = () => {
  const images = ["/images/p2.jpg", "/images/p3.jpg", "/images/p4.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Preload images to avoid flashes between transitions
  useEffect(() => {
    images.forEach((src) => {
      const img = typeof window !== "undefined" ? new window.Image(0, 0) : null;
      if (img) {
        img.src = src;
      }
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hero-container relative h-[90vh] bg-red/20 select-none overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out will-change-opacity ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-hidden={index !== currentIndex}
          >
            <div
              className="absolute inset-0 bg-black/50"
              aria-hidden="true"
            ></div>
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-white text-center">
              <div className="rounded-2xl bg-white/10 ring-1 ring-white/10 backdrop-blur-xl px-6 py-5 md:px-10 md:py-8 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                <motion.h1
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 1, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: "linear",
                  }}
                  viewport={{ once: true }}
                  className=" font-bold leading-tight tracking-tight text-4xl md:text-6xl drop-shadow-sm"
                >
                  Welcome to{" "}
                  <span className="ml-2 rounded-3xl bg-transparent md:bg-amber-50/30 p-2 md:backdrop-blur-2xl text-red-700">
                    Up Stays
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 1, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: "linear",
                  }}
                  viewport={{ once: true }}
                  className="mt-3 text-base md:text-lg/relaxed opacity-95"
                >
                  Your comfort is our priority
                </motion.p>
                <motion.button
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  type="button"
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-2.5 font-medium text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-600/70 focus-visible:ring-offset-black/20 active:scale-[.98]"
                  aria-label="Get started"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M3 12a9 9 0 1118 0 9 9 0 01-18 0zm10.59-3.41a1 1 0 10-1.41 1.41L13.17 11H8a1 1 0 000 2h5.17l-1 1a1 1 0 101.41 1.41l2.71-2.7a1 1 0 000-1.42l-2.7-2.7z" />
                  </svg>
                  Get Started
                </motion.button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default HeroSection;
