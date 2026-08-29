import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
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
        <HeroSection />
        <Reveal variant="up"><ConceptSection /></Reveal>
        <Reveal variant="up"><PropositionSection /></Reveal>
        <PoissonnerieSection />
        <CasConcretsSection />
        <PourquoiNousSection />
        <SecteursSection />
        <MethodeSection />
        <OutilsSection />
        <SecuritySection />
        <CalculateurSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  );
};

export default Index;
