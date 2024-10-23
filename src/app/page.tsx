import { ContactSection } from "@/components/contact-section";
import { AcolhimentoSection } from "@/components/acolhimento-section";
import { ContactSection } from "@/components/contact-section";
import { ProjectsSection } from "@/components/projects-section";

export default function Home() {
  return (
    <>
      <ProjectsSection />
      <ContactSection />
      <AcolhimentoSection />
      <ContactSection />
    </>
  );
}
