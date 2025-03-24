import Image from "next/image";
import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "About Us | Adhoc Develop - Natural Terrain Development",
  description: "Learn about Adhoc Develop, our mission, values, and expertise in natural terrain development.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-stone-800">
        <div className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('/images/about-hero.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-800/70 to-stone-800/80" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Adhoc Develop
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl text-stone-200 max-w-3xl mx-auto">
              We are passionate about developing natural terrain that respects and enhances the existing landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/images/about-mission.jpg"
                alt="Adhoc Develop Mission"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent"></div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-stone-800 dark:text-stone-100 mb-4 text-center">
                Mission & Vision
              </h2>
              <div className="w-24 h-1 bg-[#B17457] mx-auto mb-6"></div>
              <p className="text-lg text-stone-600 dark:text-stone-400 mb-6">
                At Adhoc Develop, our mission is to transform landscapes while preserving and enhancing their natural beauty. We believe that development should work with nature, not against it.
              </p>
              <p className="text-lg text-stone-600 dark:text-stone-400 mb-6">
                Our vision is to be at the forefront of sustainable land development, creating spaces that provide functionality while maintaining the integrity of the natural terrain.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="border border-stone-200 dark:border-stone-700 rounded-lg p-4 text-center">
                  <h3 className="text-4xl font-bold text-[#B17457] mb-2">150+</h3>
                  <p className="text-stone-600 dark:text-stone-400">Projects Completed</p>
                </div>
                <div className="border border-stone-200 dark:border-stone-700 rounded-lg p-4 text-center">
                  <h3 className="text-4xl font-bold text-[#B17457] mb-2">15+</h3>
                  <p className="text-stone-600 dark:text-stone-400">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-20 bg-stone-50 dark:bg-stone-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-stone-800 dark:text-stone-100 mb-4 text-center">
              Our Values
            </h2>
            <div className="w-24 h-1 bg-[#B17457] mx-auto mb-6"></div>
            <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
              These principles guide every decision we make and every project we undertake.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Natural Integration",
                description: "We create developments that blend harmoniously with the existing natural terrain.",
              },
              {
                title: "Terrain Expertise",
                description: "Our designs leverage expert knowledge of land forms and terrain modification techniques.",
              },
              {
                title: "Client Partnership",
                description: "We work closely with clients to understand their vision and bring it to life.",
              },
              {
                title: "Innovation",
                description: "We constantly seek new approaches to natural terrain development.",
              },
              {
                title: "Attention to Detail",
                description: "Every element of our projects is carefully considered and executed.",
              },
              {
                title: "Climate Adaptability",
                description: "We design with local climate patterns in mind for long-term durability and function.",
              },
            ].map((value, i) => (
              <div key={i} className="bg-white dark:bg-stone-800 p-6 rounded-lg shadow-md border border-stone-200 dark:border-stone-700">
                <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-3">
                  {value.title}
                </h3>
                <Separator className="w-12 bg-[#B17457] h-0.5 mb-4" />
                <p className="text-stone-600 dark:text-stone-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-4">
              Our Process
            </h2>
            <div className="w-24 h-1 bg-[#B17457] mx-auto mb-6"></div>
            <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
              Experience our structured approach to transforming your land while respecting its natural features.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-[#B17457]/30 z-0"></div>
            
            {/* Timeline items */}
            <div className="space-y-12 relative z-10">
              {[
                {
                  step: 1,
                  title: "Initial Consultation",
                  description: "We begin by understanding your vision, needs, and the unique characteristics of your property."
                },
                {
                  step: 2,
                  title: "Site Analysis",
                  description: "Our team conducts a thorough assessment of your land's topography, soil composition, and natural features."
                },
                {
                  step: 3,
                  title: "Concept Development",
                  description: "We create preliminary designs that work with your land's natural attributes while meeting your requirements."
                },
                {
                  step: 4,
                  title: "Detailed Planning",
                  description: "Comprehensive plans are developed, including terrain modification specifications and material selections."
                },
                {
                  step: 5,
                  title: "Implementation",
                  description: "Our skilled team executes the plan, focusing on precision and minimal disruption to the surrounding environment."
                },
                {
                  step: 6,
                  title: "Final Review",
                  description: "We ensure all work meets our quality standards and make any necessary adjustments for perfect integration."
                }
              ].map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center md:items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} md:text-${index % 2 === 0 ? 'left' : 'right'}`}>
                    <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-stone-600 dark:text-stone-400">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-center my-4 md:my-0">
                    <div className="bg-[#B17457] rounded-full h-10 w-10 flex items-center justify-center text-white font-bold z-10">
                      {item.step}
                    </div>
                  </div>
                  
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/about-story.jpg"
                alt="Our story"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-stone-800 dark:text-stone-100 mb-4">
                Our Story
              </h2>
              <div className="w-16 h-1 bg-[#B17457] mb-6"></div>
              <p className="text-lg text-stone-600 dark:text-stone-400 mb-6">
                Adhoc Develop was founded by a team of landscape architects and environmental engineers who shared a passion for natural terrain development.
              </p>
              <p className="text-lg text-stone-600 dark:text-stone-400 mb-6">
                Our journey began with small residential projects, where we developed our approach of minimal intervention and natural integration. Today, we apply these same principles to projects of all sizes, from private estates to public parks and commercial developments.
              </p>
              <p className="text-lg text-stone-600 dark:text-stone-400">
                Throughout our growth, we've remained committed to our foundational belief that the best development solutions are those that enhance rather than override the natural characteristics of the land.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 