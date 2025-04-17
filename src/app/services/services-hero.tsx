"use client";

import { useEffect, useRef, useState } from "react";

export default function ServicesHero() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative py-20 overflow-hidden bg-stone-950">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('/images/marcus-cramer-TPxtkbRD6zM-unsplash.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          transform: `translateY(${scrollY * 0.3}px)`,
          transition: "transform 0.05s linear",
          willChange: "transform"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/70 to-stone-900/70" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <span className="inline-block text-[#eaccb4] font-bold tracking-wide uppercase text-sm mb-2">Professional Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <div className="w-24 h-1 bg-[#eaccb4] mx-auto mb-6"></div>
          <p className="text-xl text-stone-200 max-w-3xl mx-auto">
            We provide comprehensive natural terrain development services to transform your land while respecting its inherent character.
          </p>
        </div>
      </div>
    </section>
  );
} 