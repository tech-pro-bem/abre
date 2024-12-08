import { Hero } from "@/components/hero";
import { About } from "@/components/about/about";
import { ProjectsSection } from "@/components/projects-section";
import { Materials } from "@/components/materials/materials";
import { ContactSection } from "@/components/contact-section";
import { Faq } from "@/components/faq/faq";
import { AcolhimentoSection } from "@/components/acolhimento-section";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProjectsSection />
      <Materials />
      <ContactSection />
      <Faq />
      <AcolhimentoSection />
    </>
  );
}
