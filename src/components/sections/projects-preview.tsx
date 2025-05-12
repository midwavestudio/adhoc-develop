"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/firebase/firebase";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  url?: string;
  createdAt?: any;
}

export function ProjectsPreview() {
  // Always return null - hiding the projects preview section entirely until projects are ready to showcase
  return null;
  
  // The code below is preserved but not executed since we're returning null above
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      setIsLoading(true);
      try {
        const projectsQuery = query(
          collection(db, "projects"),
          orderBy("createdAt", "desc"),
          limit(3)
        );
        
        const snapshot = await getDocs(projectsQuery);
        const projectsList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Project[];
        
        setProjects(projectsList);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Failed to load projects");
      } finally {
        setIsLoading(false);
      }
    }

    fetchProjects();
  }, []);

  // Show placeholder or nothing if loading or error
  if (isLoading) {
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
              Loading our latest projects...
            </p>
          </div>
        </div>
      </section>
    );
  }

  // If no projects available, don't show the section
  if (projects.length === 0 && !isLoading) {
    return null;
  }

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
                      src={project.imageUrl || "/images/project-placeholder.jpg"}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
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