import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ConceptSection from "@/components/ConceptSection";
import PropositionSection from "@/components/PropositionSection";
import CasConcretsSection from "@/components/CasConcretsSection";
import PourquoiNousSection from "@/components/PourquoiNousSection";
import SecteursSection from "@/components/SecteursSection";
import MethodeSection from "@/components/MethodeSection";
import OutilsSection from "@/components/OutilsSection";
import SecuritySection from "@/components/SecuritySection";
import ContactSection from "@/components/ContactSection";

import FooterSection from "@/components/FooterSection";
import Reveal from "@/components/secondary/Reveal";

const Index = () => {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <section className="w-full bg-navy py-10 sm:py-14">
          <div className="container mx-auto px-6">
            <p className="font-dm font-extrabold text-[28px] sm:text-[36px] lg:text-[40px] leading-[1.15] tracking-[-0.01em] text-blanc-casse text-center max-w-4xl mx-auto">
              Même terrain, même langage. Le partenaire IA des{" "}
              <span className="text-or-mat">PME bretonnes</span>.
            </p>
          </div>
        </section>
        <Reveal><ConceptSection /></Reveal>
        <Reveal><PropositionSection /></Reveal>
        <Reveal><CasConcretsSection /></Reveal>
        <Reveal><PourquoiNousSection /></Reveal>
        <Reveal><SecteursSection /></Reveal>
        <Reveal><MethodeSection /></Reveal>
        <Reveal><OutilsSection /></Reveal>
        <Reveal><SecuritySection /></Reveal>
        <Reveal><ContactSection /></Reveal>
      </main>
      <FooterSection />
    </>
  );
};

export default Index;
