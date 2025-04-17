"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);
  const ticking = useRef(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      lastScrollY.current = window.scrollY;
      
      if (!ticking.current) {
        // Use requestAnimationFrame to throttle updates and sync with browser's render cycle
        window.requestAnimationFrame(() => {
          // Apply a small amount of smoothing by blending previous and current scroll positions
          setScrollY(prevScrollY => {
            const newScrollY = lastScrollY.current;
            // Smoothing: blend 80% of the new value with 20% of the old value
            return prevScrollY * 0.2 + newScrollY * 0.8;
          });
          ticking.current = false;
        });
        
        ticking.current = true;
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate a smaller parallax factor that won't be as noticeable but smoother
  const parallaxOffset = scrollY * 0.15;

  return (
    <section ref={heroRef} className="relative h-[100vh] w-full overflow-hidden -mt-20">
      {/* Parallax hero background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center will-change-transform"
        style={{ 
          backgroundImage: "url('/images/treesgreen.jpg')",
          transform: `translate3d(0, ${parallaxOffset}px, 0)`,
          transition: "transform 0.2s cubic-bezier(0.33, 1, 0.68, 1)",
        }}
      />
        
      {/* Overlay with gradient */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: "linear-gradient(to right, rgba(28, 25, 23, 0.8), rgba(41, 37, 36, 0.7))"
        }}
      />
      
      {/* Content Container */}
      <div className="container relative z-20 mx-auto px-4 h-full flex flex-col justify-center pt-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#eaccb4] mb-6">
            Natural Terrain Development For Your Land
          </h1>
          <div className="w-24 h-1 bg-white mb-6"></div>
          <p className="text-xl md:text-2xl text-[#eaccb4] mb-8 max-w-3xl">
            We specialize in terrain development that preserves and accentuates the natural beauty of the land while providing functional solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
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
        </div>
      </div>
    </section>
  );
} 