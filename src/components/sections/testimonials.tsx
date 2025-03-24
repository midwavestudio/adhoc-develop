"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "Adhoc Develop transformed our property into a stunning natural sanctuary. Their attention to the land's natural features created a space that feels both designed and completely organic.",
    author: "James Wilson",
    role: "Property Owner",
  },
  {
    quote: "The team deeply understood our vision for a sustainable landscape that would require minimal intervention. They delivered beyond our expectations, creating a space that evolves beautifully with the seasons.",
    author: "Sarah Johnson",
    role: "Eco Resort Developer",
  },
  {
    quote: "Working with Adhoc Develop was a revelation. They approached our challenging hillside property not as an obstacle but as an opportunity to create something remarkable that embraces the natural terrain.",
    author: "Michael Chang",
    role: "Residential Client",
  },
  {
    quote: "Their expertise in working with natural elements and understanding of how wind and water move through a landscape has made our outdoor spaces not only beautiful but comfortable year-round.",
    author: "Elena Rodriguez",
    role: "Commercial Property Manager",
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  return (
    <section className="py-16 md:py-24 bg-stone-50 dark:bg-stone-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
            Hear from clients who have experienced the Adhoc Develop approach to natural terrain development.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[250px] md:h-[200px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="absolute w-full"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : activeIndex > index ? -100 : 100,
                }}
                transition={{ duration: 0.5 }}
              >
                <Card className="border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-md">
                  <CardContent className="pt-6">
                    <blockquote className="text-lg text-stone-700 dark:text-stone-300 italic mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center mt-4">
                      <div className="h-10 w-10 rounded-full bg-stone-200 dark:bg-stone-700 flex items-center justify-center mr-3">
                        <span className="text-stone-600 dark:text-stone-300 font-medium">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-stone-800 dark:text-stone-200">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-stone-500 dark:text-stone-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setAutoplay(false);
                }}
                className={cn(
                  "w-3 h-3 rounded-full transition-colors",
                  activeIndex === index
                    ? "bg-stone-600 dark:bg-stone-400"
                    : "bg-stone-300 dark:bg-stone-700"
                )}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 