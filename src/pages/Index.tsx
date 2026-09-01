import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PunchlineBand from "@/components/PunchlineBand";
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
        <PunchlineBand />
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
