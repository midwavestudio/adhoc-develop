import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, Mountain, Hammer, LandPlot, MapPin, Shovel, MountainSnow } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Adhoc Develop",
  description: "Explore Adhoc Develop's natural terrain development services including land development, terrain design, and terrain modification.",
};

// Keeping only the 6 services that match the homepage features
const services = [
  {
    id: "land-development",
    title: "Land Development",
    description: "Transforming raw land into beautiful, functional landscapes that respect the natural terrain.",
    icon: Mountain,
    image: "/images/treesgreen.jpg",
    features: [
      "Topographical analysis and planning",
      "Soil assessment and enhancement",
      "Natural drainage solutions",
      "Sustainable infrastructure integration",
      "Native vegetation preservation",
    ],
    content: "Our land development services focus on transforming properties while maintaining their natural character. We begin with comprehensive site analysis to understand the unique features of your land. This includes studying the topography, soil composition, existing vegetation, and natural water patterns. Our approach minimizes disruption to the natural environment while enhancing the functionality and beauty of the space. We prioritize solutions that work with the land rather than against it, creating developments that feel as though they've always been part of the landscape.",
  },
  {
    id: "terrain-modification",
    title: "Terrain Modification",
    description: "Reshaping and sculpting the landscape to create natural, functional spaces that enhance the property's features.",
    icon: Hammer,
    image: "/images/38i5rkrr.jpg",
    features: [
      "Strategic earthwork and grading",
      "Natural stone integration",
      "Elevated and lowered spaces",
      "Erosion prevention techniques",
      "Specialized equipment operation",
    ],
    content: "Our terrain modification services transform challenging landscapes into usable, beautiful spaces. Using specialized equipment and techniques, we can reshape the land to create flat areas, gentle slopes, berms, and other features that serve both practical and aesthetic purposes. Unlike conventional grading that often strips away character, our approach preserves and enhances the site's natural elements. We carefully consider drainage patterns, soil stability, and visual impact at every stage, ensuring that modifications blend seamlessly with the surrounding environment while solving practical problems.",
  },
  {
    id: "earthscaping",
    title: "Earthscaping",
    description: "Artful shaping and contouring of soil and terrain to create harmonious, sustainable landscapes.",
    icon: Shovel,
    image: "/images/stone3.png",
    features: [
      "Custom earth berms and mounds",
      "Soil sculpting and artistic landforms",
      "Natural water retention features",
      "Sustainable erosion control",
      "Integration with existing terrain",
    ],
    content: "Our earthscaping services involve the artistic and functional reshaping of terrain to create distinctive, naturalistic landscapes. We sculpt the earth to form gentle berms, undulating contours, and strategic depressions that direct water flow and create visual interest. Unlike conventional landscaping, earthscaping works with larger volumes of soil to create dramatic yet natural-looking features. Our approach emphasizes sustainability by improving drainage, reducing erosion, and creating microclimates that benefit plant life. Each earthscaping project is unique, designed to enhance the inherent character of your land while solving practical challenges.",
  },
  {
    id: "rugged-site-development",
    title: "Rugged Site Development",
    description: "Transforming challenging, uneven, or remote terrains into functional, beautiful landscapes.",
    icon: MountainSnow,
    image: "/images/Sagebrush-landscape-in-Craters-of-the-Moon-National-Preserve.jpg",
    features: [
      "Slope stabilization techniques",
      "Rock outcrop integration",
      "Remote site logistics",
      "Natural drainage management",
      "Erosion control systems",
    ],
    content: "Our rugged site development services specialize in transforming the most challenging terrains into functional, beautiful landscapes. We have the expertise and equipment to handle steep slopes, rocky outcrops, and remote locations that many developers avoid. Rather than fighting against difficult terrain, we embrace these challenges as opportunities to create unique, character-rich environments. Our approach preserves the site's natural rugged beauty while stabilizing slopes, managing drainage, and creating usable spaces. We implement careful erosion control systems and work with existing rock formations, integrating them as features rather than obstacles. Whether your property is on a mountainside, in a rocky area, or in a remote location, we can develop it in a way that maintains its inherent character while adding functionality and accessibility.",
  },
  {
    id: "natural-landscapes",
    title: "Natural Integration",
    description: "Ensuring all development seamlessly blends with the existing landscape features and natural surroundings.",
    icon: LandPlot,
    image: "/images/downup.jpeg",
    features: [
      "Native plant selection and placement",
      "Natural habitat creation",
      "Wildlife-friendly design",
      "Low-maintenance ecosystems",
      "Seasonal interest planning",
      "Seamless transitions with surroundings",
    ],
    content: "Our natural integration services focus on creating beautiful, sustainable outdoor spaces that blend seamlessly with the existing landscape features. We design using native and adapted plants that thrive in local conditions, requiring minimal maintenance while providing maximum beauty. Our approach incorporates a deep understanding of plant communities, succession planning, and ecological relationships. We consider factors such as seasonal changes, wildlife habitat, and long-term growth patterns to create landscapes that become more beautiful and integrated with each passing year. Every element we introduce is carefully designed to complement and enhance the natural surroundings, ensuring that human interventions appear as though they have always been part of the landscape.",
  },
  {
    id: "site-planning",
    title: "Site Planning",
    description: "Strategic positioning of elements to maximize natural beauty, functionality, and environmental sustainability.",
    icon: MapPin,
    image: "/images/3457u43hy.jpg",
    features: [
      "Comprehensive site analysis",
      "Functional zoning",
      "Access and circulation planning",
      "View corridor preservation",
      "Building placement optimization",
      "Climate-responsive design",
    ],
    content: "Our site planning services provide a comprehensive approach to organizing your property for optimal function, beauty, and environmental harmony. We carefully consider how different elements relate to each other and to the natural features of the land. This includes building placement, access points, gathering areas, and private spaces. We analyze sun patterns, prevailing winds, and natural drainage to create a site plan that works with these elements rather than against them. Our climate-responsive approach ensures that your site is designed to maximize comfort throughout the seasons while minimizing environmental impact. The result is a property that flows naturally, with each area transitioning seamlessly to the next, enhancing both the user experience and the ecological integrity of the site.",
  }
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative py-20 overflow-hidden bg-stone-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('/images/marcus-cramer-TPxtkbRD6zM-unsplash.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/70 to-stone-900/70" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <span className="inline-block text-[#eaccb4] font-bold tracking-wide uppercase text-sm mb-2">Professional Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Services
            </h1>
            <div className="w-24 h-1 bg-[#eaccb4] mx-auto mb-6"></div>
            <p className="text-xl text-stone-200 max-w-3xl mx-auto">
              We provide comprehensive natural terrain development services to transform your land while respecting its inherent character.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Removed the grid service cards section */}
          
          {services.map((service, index) => (
            <div 
              id={service.id} 
              key={service.id}
              className={`py-12 ${index % 2 === 0 ? 'bg-white dark:bg-stone-900' : 'bg-stone-50 dark:bg-stone-950'}`}
            >
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 0 ? 'order-2 lg:order-1' : 'order-2'}>
                    <div className="mb-4 flex items-center">
                      <div className="bg-[#eaccb4] rounded-full p-3 mr-4">
                        <service.icon className="h-6 w-6 text-stone-800" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-stone-800 dark:text-stone-100">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-stone-600 dark:text-stone-300 mb-6">
                      {service.content}
                    </p>
                    
                    <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-4">
                      Key Features
                    </h3>
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="text-[#eaccb4] mr-2 mt-1">
                            <ChevronRight className="h-4 w-4" />
                          </div>
                          <span className="text-stone-600 dark:text-stone-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button asChild className="bg-[#eaccb4] hover:bg-[#d8b99e] text-stone-800 border-none">
                      <Link href="/contact">
                        Request a Consultation
                      </Link>
                    </Button>
                  </div>
                  <div className={index % 2 === 0 ? 'order-1 lg:order-2' : 'order-1'}>
                    <div className="relative h-[350px] rounded-lg overflow-hidden shadow-lg">
                      <Image 
                        src={service.image} 
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index < 2}
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="relative py-16 md:py-20 bg-stone-950 overflow-hidden">
        {/* Topographic pattern background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('/images/darktopo.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 max-w-3xl mx-auto">
            Ready to Start Your Natural Terrain Development Project?
          </h2>
          <div className="w-24 h-1 bg-[#eaccb4] mx-auto mb-6"></div>
          <p className="text-lg text-stone-200 mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your vision and discover how we can help bring it to life while respecting and enhancing the natural landscape.
          </p>
          <Button asChild size="lg" className="bg-[#eaccb4] text-stone-800 hover:bg-[#d8b99e] font-medium px-8 py-6">
            <Link href="/contact">
              Contact Us Today
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
} 