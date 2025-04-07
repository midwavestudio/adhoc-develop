import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Projects | Adhoc Develop",
  description: "Explore Adhoc Develop's portfolio of natural terrain development projects.",
};

const projects = [
  {
    id: 1,
    title: "Hillside Retreat",
    description: "A naturally terraced landscape design that works with the existing hillside contours.",
    image: "/images/project1.jpg",
    category: "Residential",
    location: "Blue Ridge Mountains, NC",
    year: "2023",
    services: ["Terrain Design", "Natural Landscapes", "Water Management"],
  },
  {
    id: 2,
    title: "Riverside Eco-Park",
    description: "Public park development incorporating natural water management systems.",
    image: "/images/project2.jpg",
    category: "Public",
    location: "Asheville, NC",
    year: "2022",
    services: ["Land Development", "Environmental Integration", "Site Planning"],
  },
  {
    id: 3,
    title: "Mountain Lodge Integration",
    description: "Commercial property development that preserves and enhances the natural mountain setting.",
    image: "/images/project3.jpg",
    category: "Commercial",
    location: "Smokies, TN",
    year: "2022",
    services: ["Site Planning", "Terrain Design", "Environmental Integration"],
  },
  {
    id: 4,
    title: "Coastal Resilience Project",
    description: "Environmentally sensitive coastal development designed to withstand changing sea levels and storms.",
    image: "/images/project4.jpg",
    category: "Public",
    location: "Outer Banks, NC",
    year: "2021",
    services: ["Environmental Integration", "Water Management", "Land Development"],
  },
  {
    id: 5,
    title: "Desert Oasis Estate",
    description: "Private estate with sustainable water features and native desert landscaping.",
    image: "/images/project5.jpg",
    category: "Residential",
    location: "Tucson, AZ",
    year: "2021",
    services: ["Water Management", "Natural Landscapes", "Site Planning"],
  },
  {
    id: 6,
    title: "Woodland Corporate Campus",
    description: "Office complex designed to preserve existing forest and integrate with the natural woodland setting.",
    image: "/images/project6.jpg",
    category: "Commercial",
    location: "Portland, OR",
    year: "2020",
    services: ["Land Development", "Environmental Integration", "Terrain Design"],
  },
];

const categories = ["All", "Residential", "Commercial", "Public"];

export default function ProjectsPage() {
  return (
    <>
      <section className="relative py-20 overflow-hidden bg-stone-800">
        <div className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('/images/darktopo.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/90 via-stone-800/80 to-stone-800/80" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Projects
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl text-stone-200 max-w-3xl mx-auto">
              Explore our portfolio of natural terrain development projects that showcase our expertise and passion.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={`min-w-[100px] ${category === "All" ? "bg-[#B17457] hover:bg-[#95614A] border-none" : ""}`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link 
                key={project.id} 
                href={`/projects/${project.id}`} 
                className="group overflow-hidden rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 transition-all hover:shadow-md"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/40 transition-colors z-10" />
                  <div className="w-full h-full relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-block bg-stone-100/90 text-stone-800 px-3 py-1 text-sm font-medium rounded">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-2 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-stone-600 dark:text-stone-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center border-t border-stone-100 dark:border-stone-700 pt-4 mt-auto">
                    <div className="text-sm text-stone-500 dark:text-stone-500">
                      {project.location} | {project.year}
                    </div>
                    <div className="flex items-center text-stone-600 dark:text-stone-400 group-hover:text-stone-800 dark:group-hover:text-stone-200 transition-colors">
                      <span className="text-sm font-medium">View details</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-12 md:py-16 bg-stone-900 overflow-hidden">
        {/* Topographic pattern background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('/images/topo.jpg')`,
            backgroundSize: '800px',
            backgroundRepeat: 'repeat',
          }}
        />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-100 mb-6 max-w-3xl mx-auto">
            Have a Project in Mind?
          </h2>
          <p className="text-lg text-stone-300 mb-8 max-w-2xl mx-auto">
            We&apos;d love to discuss how we can help create a natural terrain development solution for your property.
          </p>
          <Button asChild size="lg">
            <Link href="/contact" className="bg-[#eaccb4] text-stone-800 hover:bg-[#d8b99e]">
              Contact Us Today
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
} 