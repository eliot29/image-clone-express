import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ConceptSection from "@/components/ConceptSection";
import PropositionSection from "@/components/PropositionSection";
import CasConcretsSection from "@/components/CasConcretsSection";
import PourquoiNousSection from "@/components/PourquoiNousSection";
import SecteursSection from "@/components/SecteursSection";
import MethodeSection from "@/components/MethodeSection";
import OutilsSection from "@/components/OutilsSection";
import PrestationsSection from "@/components/PrestationsSection";
import SecuritySection from "@/components/SecuritySection";
import ContactSection from "@/components/ContactSection";
import CalculateurSection from "@/components/CalculateurSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ConceptSection />
        <PropositionSection />
        <CasConcretsSection />
        <PourquoiNousSection />
        <SecteursSection />
        <MethodeSection />
        <OutilsSection />
        <PrestationsSection />
        <SecuritySection />
        <ContactSection />
        <CalculateurSection />
      </main>
      <FooterSection />
    </>
  );
};

export default Index;
