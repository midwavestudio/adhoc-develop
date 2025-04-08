"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-stone-900">
      {/* Simplified background approach */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{ 
          backgroundImage: "url('/images/marcus-cramer-TPxtkbRD6zM-unsplash.jpg')",
        }}
      />
      
      {/* Simple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 to-stone-900/80" />
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        <span className="inline-block text-stone-300 font-semibold tracking-wide uppercase text-sm mb-4">Let&apos;s Work Together</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto">
          Ready to Transform Your Land into a Natural Masterpiece?
        </h2>
        <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
        <p className="text-xl text-stone-200 mb-10 max-w-2xl mx-auto">
          Contact our team today to discuss your project and discover how we can create a natural terrain solution that exceeds your expectations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild
            size="lg" 
            className="bg-[#eaccb4] text-stone-800 hover:bg-[#d8b99e] font-medium text-lg px-10 py-4"
          >
            <Link href="/contact">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button 
            asChild
            variant="outline" 
            size="lg" 
            className="bg-transparent border-stone-300 text-stone-100 hover:bg-stone-800/50 font-medium text-lg px-10 py-4"
          >
            <Link href="/projects">
              View Our Work
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
} 