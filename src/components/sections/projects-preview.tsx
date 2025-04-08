"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Hillside Retreat",
    description: "A naturally terraced landscape design that works with the existing hillside contours.",
    image: "/images/project1.jpg",
    category: "Residential",
  },
  {
    id: 2,
    title: "Riverside Eco-Park",
    description: "Public park development incorporating natural water management systems.",
    image: "/images/project2.jpg",
    category: "Public",
  },
  {
    id: 3,
    title: "Mountain Lodge Integration",
    description: "Commercial property development that preserves and enhances the natural mountain setting.",
    image: "/images/project3.jpg",
    category: "Commercial",
  },
];

export function ProjectsPreview() {
  return (
    <section className="py-12 md:py-16 bg-stone-950 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block text-[#eaccb4] font-bold tracking-wide uppercase text-sm mb-2">Featured Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Our Recent Work
          </h2>
          <div className="w-24 h-1 bg-[#eaccb4] mx-auto mb-4"></div>
          <p className="text-base md:text-lg text-stone-300 max-w-2xl mx-auto mb-8">
            Explore our portfolio of terrain development projects that showcase our commitment to natural design.
          </p>
          <Button 
            asChild
            variant="outline" 
            className="bg-transparent border border-[#eaccb4] text-[#eaccb4] hover:bg-[#eaccb4]/10"
          >
            <Link href="/projects" className="flex items-center gap-2">
              View all projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <div key={project.id} className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl rounded-lg overflow-hidden bg-stone-900/60 backdrop-blur-sm">
              <Link href={`/projects/${project.id}`} className="block overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/40 transition-colors z-10" />
                  <div className="w-full h-full relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-block bg-[#eaccb4]/90 text-stone-800 px-3 py-1 text-sm font-medium rounded">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#eaccb4] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-stone-300">
                    {project.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 