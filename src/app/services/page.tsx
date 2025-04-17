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
    image: "/images/45u6jk,utdk.jpg",
    features: [
      "Topographical analysis and planning",
      "Soil assessment and enhancement",
      "Natural drainage solutions",
      "Sustainable infrastructure integration",
    ],
    content: "Our land development services focus on transforming properties while maintaining their natural character. We begin with comprehensive site analysis to understand the unique features of your land, creating developments that feel as though they've always been part of the landscape.",
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
    ],
    content: "Our terrain modification services transform challenging landscapes into usable, beautiful spaces. Using specialized equipment and techniques, we reshape the land to create flat areas, gentle slopes, berms, and other features that serve both practical and aesthetic purposes.",
  },
  {
    id: "earthscaping",
    title: "Earthscaping",
    description: "Artful shaping and contouring of soil and terrain to create harmonious, sustainable landscapes.",
    icon: Shovel,
    image: "/images/4060492.jpg",
    features: [
      "Custom earth berms and mounds",
      "Soil sculpting and artistic landforms",
      "Natural water retention features",
      "Sustainable erosion control",
    ],
    content: "Our earthscaping services involve the artistic and functional reshaping of terrain to create distinctive, naturalistic landscapes. We sculpt the earth to form gentle berms, undulating contours, and strategic depressions that direct water flow and create visual interest.",
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
    ],
    content: "Our rugged site development services specialize in transforming the most challenging terrains into functional, beautiful landscapes. Rather than fighting against difficult terrain, we embrace these challenges as opportunities to create unique, character-rich environments.",
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
    ],
    content: "Our natural integration services focus on creating beautiful, sustainable outdoor spaces that blend seamlessly with the existing landscape features. We design using native and adapted plants that thrive in local conditions, requiring minimal maintenance while providing maximum beauty.",
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
    ],
    content: "Our site planning services provide a comprehensive approach to organizing your property for optimal function, beauty, and environmental harmony. We carefully consider how different elements relate to each other and to the natural features of the land.",
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
          {services.map((service, index) => (
            <div 
              id={service.id} 
              key={service.id}
              className={`py-12 ${index !== 0 ? 'mt-16' : ''} ${index % 2 === 0 ? 'bg-white dark:bg-stone-900' : 'bg-stone-50 dark:bg-stone-950'} group rounded-lg overflow-hidden`}
            >
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className={`${index % 2 === 0 ? 'order-1 lg:order-2' : 'order-1'} h-[450px]`}>
                    <div className="h-full w-full relative rounded-lg overflow-hidden shadow-lg">
                      <Image 
                        src={service.image} 
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index < 2}
                        className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                        style={{ 
                          objectFit: 'cover',
                          objectPosition: 'center',
                          width: '100%',
                          height: '100%'
                        }}
                        quality={90}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  <div className={`${index % 2 === 0 ? 'order-2 lg:order-1' : 'order-2'}`}>
                    <div className="h-[450px] flex flex-col justify-between py-6 px-1">
                      <div>
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
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <div className="text-[#eaccb4] mr-2 mt-1">
                                <ChevronRight className="h-4 w-4" />
                              </div>
                              <span className="text-stone-600 dark:text-stone-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-6">
                        <Button asChild className="bg-[#eaccb4] hover:bg-[#d8b99e] text-stone-800 border-none">
                          <Link href="/contact">
                            Request a Consultation
                          </Link>
                        </Button>
                      </div>
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