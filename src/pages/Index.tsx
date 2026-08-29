import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ImpactSection from "@/components/ImpactSection";
import ConceptSection from "@/components/ConceptSection";
import PropositionSection from "@/components/PropositionSection";
import PoissonnerieSection from "@/components/PoissonnerieSection";
import CasConcretsSection from "@/components/CasConcretsSection";
import PourquoiNousSection from "@/components/PourquoiNousSection";
import SecteursSection from "@/components/SecteursSection";
import MethodeSection from "@/components/MethodeSection";
import OutilsSection from "@/components/OutilsSection";
import SecuritySection from "@/components/SecuritySection";
import ContactSection from "@/components/ContactSection";
import CalculateurSection from "@/components/CalculateurSection";
import FooterSection from "@/components/FooterSection";
import Reveal from "@/components/secondary/Reveal";

const Index = () => {
  return (
    <>
      <Navigation />
      <main>
        <Reveal variant="up"><HeroSection /></Reveal>
        <Reveal variant="up"><ImpactSection /></Reveal>
        <Reveal variant="up"><ConceptSection /></Reveal>
        <Reveal variant="up"><PropositionSection /></Reveal>
        <Reveal variant="up"><PoissonnerieSection /></Reveal>
        <Reveal variant="up"><CasConcretsSection /></Reveal>
        <Reveal variant="up"><PourquoiNousSection /></Reveal>
        <Reveal variant="up"><SecteursSection /></Reveal>
        <Reveal variant="up"><MethodeSection /></Reveal>
        <Reveal variant="up"><OutilsSection /></Reveal>
        <Reveal variant="up"><SecuritySection /></Reveal>
        <Reveal variant="up"><CalculateurSection /></Reveal>
        <Reveal variant="up"><ContactSection /></Reveal>
      </main>
      <FooterSection />
    </>
  );
};

export default Index;
