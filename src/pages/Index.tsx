import Navigation from "@/components/Navigation";

import HeroSection from "@/components/HeroSection";
import CasConcretsSection from "@/components/CasConcretsSection";
import SecteursSection from "@/components/SecteursSection";
import CalculateurSection from "@/components/CalculateurSection";
import ConceptSection from "@/components/ConceptSection";
import PrestationsSection from "@/components/PrestationsSection";
import MethodeSection from "@/components/MethodeSection";
import PourquoiNousSection from "@/components/PourquoiNousSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <>
      <Navigation />
      <main>
        
        <HeroSection />
        <CasConcretsSection />
        <SecteursSection />
        <CalculateurSection />
        <ConceptSection />
        <PrestationsSection />
        <MethodeSection />
        <PourquoiNousSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Index;
