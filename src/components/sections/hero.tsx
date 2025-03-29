"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section className="relative h-[100vh] w-full overflow-hidden -mt-20">
      {/* Background Image with blur effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 before:content-[''] before:absolute before:inset-0 before:backdrop-blur-[2px]" 
        style={{ 
          backgroundImage: "url('/images/treesgreen.jpg')",
        }}
      >
        {/* Modern blur overlay */}
        <div className="absolute inset-0 backdrop-blur-[6px] bg-stone-950/30"></div>
      </div>
      
      {/* Dark Gradient Overlay with texture effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-stone-900/75 to-stone-900/50 z-10"
        style={{
          background: `
            linear-gradient(to right, rgba(28, 25, 23, 0.7), rgba(41, 37, 36, 0.5))
          `,
        }}
      />
      
      {/* Content Container */}
      <div className="container relative z-30 mx-auto px-4 h-full flex flex-col justify-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6">
            <span className="text-[#eaccb4]">Natural Terrain</span> Development For Your Land
          </h1>
          <div className="w-24 h-1 bg-white mb-6"></div>
          <p className="text-xl md:text-2xl text-[#eaccb4] mb-8 max-w-3xl mx-auto">
            We specialize in terrain development that preserves and accentuates the natural beauty of the land while providing functional solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services"
              className="bg-[#eaccb4] text-stone-800 hover:bg-[#d8b99e] font-medium text-lg px-8 py-4 rounded-lg"
            >
              Explore Our Services
            </Link>
            <Link 
              href="/contact"
              className="bg-transparent border border-[#eaccb4] text-[#eaccb4] hover:bg-[#eaccb4]/10 font-medium text-lg px-8 py-4 rounded-lg"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 