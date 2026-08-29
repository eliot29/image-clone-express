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
import CalculateurSection from "@/components/CalculateurSection";
import FooterSection from "@/components/FooterSection";
import Reveal from "@/components/secondary/Reveal";

const Index = () => {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        {/* Un bloc sur deux reçoit une animation plus dynamique (pop / flip / tilt / blur) */}
        <Reveal variant="pop"><ConceptSection /></Reveal>
        <Reveal variant="up"><PropositionSection /></Reveal>
        <Reveal variant="tilt"><CasConcretsSection /></Reveal>
        <Reveal variant="up"><PourquoiNousSection /></Reveal>
        <Reveal variant="flip"><SecteursSection /></Reveal>
        <Reveal variant="up"><MethodeSection /></Reveal>
        <Reveal variant="blur"><OutilsSection /></Reveal>
        <Reveal variant="up"><SecuritySection /></Reveal>
        <Reveal variant="pop"><ContactSection /></Reveal>
        <Reveal variant="up"><CalculateurSection /></Reveal>
      </main>
      <FooterSection />
    </>
  );
};

export default Index;
