import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, Mountain, Hammer, LandPlot, MapPin, Workflow, Shovel } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Adhoc Develop",
  description: "Explore Adhoc Develop's natural terrain development services including land development, terrain design, and terrain modification.",
};

const services = [
  {
    id: "land-development",
    title: "Land Development",
    description: "Transforming raw land into beautiful, functional landscapes that respect the natural terrain.",
    icon: Mountain,
    image: "/images/service-land.jpg",
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
    id: "terrain-design",
    title: "Terrain Design",
    description: "Creating natural-looking terrain modifications that enhance the property's inherent features.",
    icon: MapPin,
    image: "/images/service-terrain.jpg",
    features: [
      "Contour shaping and enhancement",
      "Natural feature accentuation",
      "Terrain stabilization techniques",
      "Viewpoint optimization",
      "Microclimate creation",
    ],
    content: "Our terrain design services focus on enhancing the natural contours and features of your land to create beautiful, functional spaces. We carefully shape the terrain to improve drainage, create visual interest, and establish distinct areas while maintaining a natural appearance. Our designers understand how subtle changes in elevation can dramatically affect how a space feels and functions. We use computer modeling and hand sketching to explore different terrain scenarios before implementation, ensuring the final result achieves your goals while honoring the land's natural character.",
  },
  {
    id: "terrain-modification",
    title: "Terrain Modification",
    description: "Reshaping and sculpting the landscape to create natural, functional spaces that enhance the property's features.",
    icon: Hammer,
    image: "/images/service-terrain-mod.jpg",
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
    id: "natural-landscapes",
    title: "Natural Landscapes",
    description: "Designing landscapes that blend seamlessly with the surrounding environment and require minimal maintenance.",
    icon: LandPlot,
    image: "/images/service-landscape.jpg",
    features: [
      "Native plant selection and placement",
      "Natural habitat creation",
      "Wildlife-friendly design",
      "Low-maintenance ecosystems",
      "Seasonal interest planning",
    ],
    content: "Our natural landscape services focus on creating beautiful, sustainable outdoor spaces using native and adapted plants that thrive in local conditions. We design landscapes that evolve naturally over time, requiring minimal maintenance while providing maximum beauty. Our approach incorporates a deep understanding of plant communities, succession planning, and ecological relationships. We consider factors such as seasonal changes, wildlife habitat, and long-term growth patterns to create landscapes that become more beautiful and integrated with each passing year.",
  },
  {
    id: "site-planning",
    title: "Site Planning",
    description: "Strategic positioning of elements to maximize natural beauty, functionality, and environmental sustainability.",
    icon: Workflow,
    image: "/images/service-site.jpg",
    features: [
      "Comprehensive site analysis",
      "Functional zoning",
      "Access and circulation planning",
      "View corridor preservation",
      "Building placement optimization",
    ],
    content: "Our site planning services provide a comprehensive approach to organizing your property for optimal function, beauty, and environmental harmony. We carefully consider how different elements relate to each other and to the natural features of the land. This includes building placement, access points, gathering areas, and private spaces. We analyze sun patterns, prevailing winds, and natural drainage to create a site plan that works with these elements rather than against them. The result is a property that flows naturally, with each area transitioning seamlessly to the next.",
  }
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative py-20 overflow-hidden bg-stone-800">
        <div className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/images/stone3.png')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/90 via-stone-800/80 to-stone-800/80" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Services
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl text-stone-200 max-w-3xl mx-auto">
              We provide comprehensive natural terrain development services to transform your land while respecting its inherent character.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service) => (
              <Link 
                key={service.id} 
                href={`/services#${service.id}`}
                className="group bg-white dark:bg-stone-800 rounded-lg shadow-sm border border-stone-200 dark:border-stone-700 p-6 transition-all hover:shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-stone-100 dark:bg-stone-900 rounded-full p-3 mr-4">
                    <service.icon className="h-6 w-6 text-stone-600 dark:text-stone-400" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-stone-600 dark:text-stone-400 mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-stone-600 dark:text-stone-400 group-hover:text-stone-800 dark:group-hover:text-stone-200 transition-colors">
                  <span>Learn more</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
          
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
                      <div className="bg-stone-100 dark:bg-stone-800 rounded-full p-3 mr-4">
                        <service.icon className="h-6 w-6 text-stone-600 dark:text-stone-400" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-stone-800 dark:text-stone-100">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-stone-600 dark:text-stone-400 mb-6">
                      {service.content}
                    </p>
                    
                    <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-4">
                      Key Features
                    </h3>
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="text-stone-500 dark:text-stone-400 mr-2 mt-1">
                            <ChevronRight className="h-4 w-4" />
                          </div>
                          <span className="text-stone-600 dark:text-stone-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button asChild className="bg-[#B17457] hover:bg-[#95614A] text-white border-none">
                      <Link href="/contact">
                        Request a Consultation
                      </Link>
                    </Button>
                  </div>
                  <div className={index % 2 === 0 ? 'order-1 lg:order-2' : 'order-1'}>
                    <div className="relative h-[350px] rounded-lg overflow-hidden">
                      <Image 
                        src={service.image} 
                        alt={service.title} 
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="relative py-12 md:py-16 bg-stone-900 overflow-hidden">
        {/* Topographic pattern background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('/images/stone3.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-100 mb-6 max-w-3xl mx-auto">
            Ready to Start Your Natural Terrain Development Project?
          </h2>
          <p className="text-lg text-stone-300 mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your vision and discover how we can help bring it to life while respecting and enhancing the natural landscape.
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