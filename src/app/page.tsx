import { Materials } from "@/components/materials/materials";
import { AcolhimentoSection } from "@/components/acolhimento-section";
import { ProjectsSection } from "@/components/projects-section";
import { About } from "../components/about/about";

export default function Home() {
  return (
    <>
      <About />
      <ProjectsSection />
      <Materials />
      <AcolhimentoSection />

    </>
  );
}
