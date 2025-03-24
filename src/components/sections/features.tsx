"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { 
  Mountain, 
  Hammer,
  Wind, 
  LandPlot, 
  MapPin
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
    icon: Wind,
    title: "Wind & Climate Conscious",
    description: "Designing with natural elements in mind, including wind patterns and local climate conditions.",
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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-950 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-[#B17457] font-bold tracking-wide uppercase text-sm mb-2">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 dark:text-stone-100 mb-4 text-center">
            Our Approach to Terrain Development
          </h2>
          <div className="w-24 h-1 bg-[#B17457] mx-auto mb-6"></div>
          <p className="text-lg text-stone-600 dark:text-stone-400 max-w-3xl mx-auto">
            We offer comprehensive natural terrain development services focused on creating harmonious, functional, and beautiful landscapes.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className={`${index === 1 || index === 4 ? "md:mt-12" : ""}`}
            >
              <Card className="h-[350px] bg-white/80 backdrop-blur-sm dark:bg-stone-800/80 border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B17457] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <CardHeader>
                  <div className="bg-[#f9f4f3] dark:bg-stone-900 rounded-lg w-14 h-14 flex items-center justify-center mb-4 shadow-md group-hover:shadow-lg transition-all transform group-hover:-translate-y-1">
                    <feature.icon className="w-7 h-7 text-[#B17457] dark:text-[#B17457]" />
                  </div>
                  <CardTitle className="text-xl text-stone-800 dark:text-stone-100 group-hover:text-[#B17457] dark:group-hover:text-[#B17457] transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-stone-600 dark:text-stone-400 text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 