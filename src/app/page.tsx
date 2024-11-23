import { Faq } from "@/components/faq/faq";
import { AcolhimentoSection } from "@/components/acolhimento-section";
import { ProjectsSection } from "@/components/projects-section";
import { About } from "../components/about/about";
import { Testimonials } from "@/components/depoimentos-section";

export default function Home() {
  return (
    <>
      <About />
      <ProjectsSection />
      <Faq />
      <Testimonials />
      <AcolhimentoSection />
    </>
  );
}
