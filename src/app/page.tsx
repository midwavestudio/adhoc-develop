import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
// import { ProjectsPreview } from "@/components/sections/projects-preview"; 
import { CTA } from "@/components/sections/cta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adhoc Develop - Natural Terrain Development",
  description: "Specialty land development company creating natural terrain projects that blend with the surrounding environment.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      {/* Projects section temporarily removed until we have projects to showcase */}
      {/* <ProjectsPreview /> */}
      <CTA />
    </>
  );
}
