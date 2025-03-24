"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
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
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-stone-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 dark:text-stone-100 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl">
              Explore some of our recent terrain development projects, showcasing our approach to natural landscape design.
            </p>
          </div>
          <Button 
            asChild
            variant="outline" 
            className="mt-6 md:mt-0 self-start md:self-auto"
          >
            <Link href="/projects" className="flex items-center gap-2">
              View all projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Link href={`/projects/${project.id}`} className="group block overflow-hidden rounded-lg">
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
                <div className="p-4 bg-stone-50 dark:bg-stone-800">
                  <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-2 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400">
                    {project.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 