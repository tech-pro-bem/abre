import { ProjectsSection } from "@/components/projects-section";
import { Hero } from "@/components/hero";
import { ContactSection } from "@/components/contact-section";
import { AcolhimentoSection } from "@/components/acolhimento-section";
import { Faq } from "@/components/faq/faq";
import { About } from "../components/about/about";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProjectsSection />
      <ContactSection />
      <Faq />
      <AcolhimentoSection />
    </>
  );
}
