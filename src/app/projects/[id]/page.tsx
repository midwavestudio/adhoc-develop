import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowLeft, MapPin, CalendarIcon, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// This would normally come from a database
const projects = [
  {
    id: 1,
    title: "Hillside Retreat",
    description: "A naturally terraced landscape design that works with the existing hillside contours.",
    fullDescription: [
      "The Hillside Retreat project presented unique challenges due to its steep terrain and erosion concerns. Our team worked closely with the property owners to develop a solution that not only stabilized the hillside but transformed it into a series of functional outdoor living spaces.",
      "Using natural stone retaining walls that followed the contours of the land, we created multiple terraced areas for gardens, gathering spaces, and contemplative retreats. Native plants were carefully selected to hold soil, manage water runoff, and provide year-round visual interest.",
      "A gravity-fed water system captures rainwater at the top of the property and channels it through a series of naturalistic water features before collecting in a small pond at the base of the hill. This not only creates beautiful water elements throughout the property but effectively manages stormwater in an environmentally sound manner."
    ],
    image: "/images/project1.jpg",
    galleryImages: [
      "/images/project1-detail1.jpg",
      "/images/project1-detail2.jpg",
      "/images/project1-detail3.jpg",
    ],
    category: "Residential",
    location: "Blue Ridge Mountains, NC",
    year: "2023",
    client: "Private Homeowner",
    services: ["Terrain Design", "Natural Landscapes", "Water Management"],
    features: [
      "Natural stone terracing",
      "Native plant gardens",
      "Gravity-fed water features",
      "Erosion control systems",
      "Outdoor living spaces",
      "Low-maintenance design"
    ],
    results: "The completed project transformed a challenging hillside into a series of beautiful, functional spaces that appear to have always been part of the natural landscape. The property now features multiple outdoor living areas, gardens that change with the seasons, and effective water management that has eliminated previous erosion issues. The homeowners have a retreat that connects them to the natural beauty of their mountain property while providing practical, usable outdoor space."
  },
  {
    id: 2,
    title: "Riverside Eco-Park",
    description: "Public park development incorporating natural water management systems.",
    fullDescription: [
      "The Riverside Eco-Park project transformed a neglected riverfront property into a public green space that celebrates and protects the natural riparian ecosystem. Working with the city government, our team designed a park that balances recreational needs with environmental conservation.",
      "The design preserved existing mature trees and enhanced the native plant communities along the riverbank. We created a network of permeable pathways that allow visitors to experience different habitats and views without disrupting sensitive ecological areas.",
      "A key feature of the project is the series of bioswales and rain gardens that manage stormwater from adjacent urban areas, filtering pollutants before they can reach the river. These functional landscape elements are designed to be educational as well, with signage explaining how they protect water quality."
    ],
    image: "/images/project2.jpg",
    galleryImages: [
      "/images/project2-detail1.jpg",
      "/images/project2-detail2.jpg",
      "/images/project2-detail3.jpg",
    ],
    category: "Public",
    location: "Asheville, NC",
    year: "2022",
    client: "City of Asheville",
    services: ["Land Development", "Environmental Integration", "Site Planning"],
    features: [
      "Riparian habitat restoration",
      "Bioswales and rain gardens",
      "Permeable pathway system",
      "Native botanical gardens",
      "Educational signage",
      "Riverside viewing platforms"
    ],
    results: "The Riverside Eco-Park has become a beloved community asset that provides recreational opportunities while demonstrating how urban development can work in harmony with natural systems. Water quality in the river has improved, wildlife has returned to the area, and visitors gain a deeper appreciation for the importance of riparian ecosystems. The park has won several awards for its innovative approach to green infrastructure and public education."
  },
  {
    id: 3,
    title: "Mountain Lodge Integration",
    description: "Commercial property development that preserves and enhances the natural mountain setting.",
    fullDescription: [
      "The Mountain Lodge Integration project involved designing the landscape and terrain for a new eco-tourism resort in the Smoky Mountains. The client sought to create a high-end hospitality experience that would immerse guests in the natural beauty of the mountains while minimizing environmental impact.",
      "Our approach began with a comprehensive site analysis to identify key viewsheds, existing vegetation communities, and natural drainage patterns. The building sites were carefully positioned to preserve mature trees and follow the natural contours of the land, reducing the need for extensive grading.",
      "We designed a network of trails that connect the various cabins and amenity spaces while providing guests with immersive experiences of different mountain ecosystems. Each trail segment was carefully routed to minimize disturbance to existing vegetation and wildlife habitats."
    ],
    image: "/images/project3.jpg",
    galleryImages: [
      "/images/project3-detail1.jpg",
      "/images/project3-detail2.jpg",
      "/images/project3-detail3.jpg",
    ],
    category: "Commercial",
    location: "Smokies, TN",
    year: "2022",
    client: "Mountain Escape Resorts",
    services: ["Site Planning", "Terrain Design", "Environmental Integration"],
    features: [
      "Low-impact building sites",
      "Natural trail system",
      "Native plant landscaping",
      "Viewshed preservation",
      "Stormwater management",
      "Outdoor experience spaces"
    ],
    results: "The Mountain Lodge project successfully balances luxury hospitality with environmental stewardship. Guests enjoy comfortable accommodations that feel intimately connected to the surrounding landscape. The property preserves over 80% of its acreage as undisturbed natural habitat, supporting local wildlife while providing visitors with authentic encounters with mountain ecosystems. The resort has become a model for sustainable tourism development in sensitive environments."
  },
];

type Props = {
  params: { id: string }
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find(p => p.id.toString() === params.id);
  
  if (!project) {
    return {
      title: 'Project Not Found | Adhoc Develop',
      description: 'The requested project could not be found.',
    };
  }
  
  return {
    title: `${project.title} | Adhoc Develop Projects`,
    description: project.description,
  };
}

export default function ProjectDetail({ params }: Props) {
  const project = projects.find(p => p.id.toString() === params.id);
  
  if (!project) {
    notFound();
  }
  
  return (
    <>
      <section className="relative py-20 overflow-hidden bg-stone-800">
        <div className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('/images/darktopo.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/90 via-stone-800/80 to-stone-800/80" />
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <Link
            href="/projects"
            className="inline-flex items-center text-stone-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to projects
          </Link>
          
          <div className="max-w-4xl">
            <span className="inline-block bg-stone-100/90 text-stone-800 px-3 py-1 text-sm font-medium rounded mb-4">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-stone-200 mb-6">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-4 text-stone-200">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-1" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-1" />
                <span>{project.year}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-stone-800 dark:text-stone-100 mb-6">
                Project Overview
              </h2>
              
              <div className="space-y-4 mb-12">
                {project.fullDescription.map((paragraph, index) => (
                  <p key={index} className="text-stone-600 dark:text-stone-400">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-4">
                Project Results
              </h3>
              <p className="text-stone-600 dark:text-stone-400 mb-12">
                {project.results}
              </p>
              
              <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-4">
                Project Gallery
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {/* This would normally use real images - these are placeholders */}
                {project.galleryImages.map((image, index) => (
                  <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-stone-300 dark:bg-stone-700 flex items-center justify-center">
                      <p className="text-stone-600 dark:text-stone-400">
                        Gallery Image {index + 1}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button asChild>
                <Link href="/contact">
                  Discuss a similar project
                </Link>
              </Button>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-stone-50 dark:bg-stone-900 p-6 rounded-lg border border-stone-200 dark:border-stone-700">
                <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-4">
                  Project Details
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-stone-800 dark:text-stone-200 mb-2">
                      Client
                    </h4>
                    <p className="text-stone-600 dark:text-stone-400">
                      {project.client}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-stone-800 dark:text-stone-200 mb-2">
                      Location
                    </h4>
                    <p className="text-stone-600 dark:text-stone-400">
                      {project.location}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-stone-800 dark:text-stone-200 mb-2">
                      Completion Year
                    </h4>
                    <p className="text-stone-600 dark:text-stone-400">
                      {project.year}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-stone-800 dark:text-stone-200 mb-2">
                      Services Provided
                    </h4>
                    <ul className="space-y-1">
                      {project.services.map((service, index) => (
                        <li key={index} className="text-stone-600 dark:text-stone-400 flex items-start">
                          <CheckCircle2 className="h-4 w-4 mr-2 mt-1 text-stone-500 dark:text-stone-500" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-stone-800 dark:text-stone-200 mb-2">
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, index) => (
                        <li key={index} className="text-stone-600 dark:text-stone-400 flex items-start">
                          <CheckCircle2 className="h-4 w-4 mr-2 mt-1 text-stone-500 dark:text-stone-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-stone-100 dark:bg-stone-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 dark:text-stone-100 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-stone-600 dark:text-stone-400 mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss how we can create a custom natural terrain solution for your property.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Contact Us
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
} 