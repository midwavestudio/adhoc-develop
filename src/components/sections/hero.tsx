"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  // Transform scrollY value to a parallax offset - smoother and more controlled
  const y = useTransform(scrollYProgress, [0, 1], [0, 250]);
  
  // Animation variants for content
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8 
      } 
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      } 
    }
  };

  return (
    <section ref={heroRef} className="relative h-[100vh] w-full overflow-hidden -mt-20">
      {/* Parallax hero background using Framer Motion */}
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/images/treesgreen.jpg')",
          backgroundSize: "cover",
          y
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      />
        
      {/* Overlay with gradient */}
      <motion.div 
        className="absolute inset-0 z-10"
        style={{
          background: "linear-gradient(to right, rgba(28, 25, 23, 0.8), rgba(41, 37, 36, 0.7))"
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
      
      {/* Content Container */}
      <div className="container relative z-20 mx-auto px-4 h-full flex flex-col justify-center pt-20">
        <motion.div 
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#eaccb4] mb-6"
            variants={itemVariants}
          >
            Natural Terrain Development For Your Land
          </motion.h1>
          
          <motion.div 
            className="w-24 h-1 bg-white mb-6"
            variants={itemVariants}
          />
          
          <motion.p 
            className="text-xl md:text-2xl text-[#eaccb4] mb-8 max-w-3xl"
            variants={itemVariants}
          >
            We specialize in terrain development that preserves and accentuates the natural beauty of the land while providing functional solutions.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-start"
            variants={itemVariants}
          >
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 