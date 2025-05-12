"use client";

import Link from "next/link";
import { 
  Mountain, 
  Hammer,
  LandPlot, 
  MapPin,
  MountainSnow,
  Shovel,
  ChevronRight
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Mountain,
    title: "Land Development",
    description: "Transforming raw land into carefully designed natural landscapes that respect the existing terrain.",
  },
  {
    icon: Hammer,
    title: "Terrain Modification",
    description: "Reshaping and sculpting the landscape to create natural, functional spaces that enhance the property's features.",
  },
  {
    icon: Shovel,
    title: "Earthscaping",
    description: "Artful shaping and contouring of soil and terrain to create harmonious, sustainable landscapes.",
  },
  {
    icon: MountainSnow,
    title: "Rugged Site Development",
    description: "Transforming challenging, uneven, or remote terrains into functional, beautiful landscapes by stabilizing slopes, managing rocky outcrops, and preserving the site's natural rugged beauty.",
  },
  {
    icon: LandPlot,
    title: "Natural Integration",
    description: "Ensuring all development seamlessly blends with the existing landscape features and natural surroundings.",
  },
  {
    icon: MapPin,
    title: "Site Planning",
    description: "Strategic positioning of elements to maximize natural beauty, functionality, and environmental sustainability.",
  },
];

export function Features() {
  return (
    <section className="py-12 md:py-16 bg-stone-950 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block text-[#eaccb4] font-bold tracking-wide uppercase text-sm mb-2">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 text-center">
            Our Approach to Terrain Development
          </h2>
          <div className="w-24 h-1 bg-[#eaccb4] mx-auto mb-4"></div>
          <p className="text-base md:text-lg text-stone-300 max-w-2xl mx-auto">
            We offer comprehensive natural terrain development services focused on creating harmonious, functional, and beautiful landscapes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex">
              <Card className="flex flex-col bg-[#eaccb4] backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <CardHeader className="pb-2">
                  <div className="bg-stone-950/10 rounded-lg w-14 h-14 flex items-center justify-center mb-4 shadow-md group-hover:shadow-lg transition-all transform group-hover:-translate-y-1">
                    <feature.icon className="w-7 h-7 text-stone-950" />
                  </div>
                  <CardTitle className="text-xl text-stone-950 group-hover:text-stone-800 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 flex-grow flex flex-col">
                  <CardDescription className="text-stone-800 text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="bg-[#eaccb4] text-stone-800 hover:bg-[#d8b99e] px-8 py-6 text-lg inline-flex items-center w-auto">
            <Link href="/services" className="flex items-center justify-center">
              See All Services
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
} 