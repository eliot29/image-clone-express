import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ConceptSection from "@/components/ConceptSection";
import PropositionSection from "@/components/PropositionSection";
import CasConcretsSection from "@/components/CasConcretsSection";
import PourquoiNousSection from "@/components/PourquoiNousSection";
import SecteursSection from "@/components/SecteursSection";
import PhotosBandeau from "@/components/PhotosBandeau";
import MethodeSection from "@/components/MethodeSection";
import OutilsSection from "@/components/OutilsSection";
import SecuritySection from "@/components/SecuritySection";
import ContactSection from "@/components/ContactSection";

import FooterSection from "@/components/FooterSection";
import Reveal from "@/components/secondary/Reveal";
import PunchlineBand from "@/components/secondary/PunchlineBand";

const Index = () => {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />

        {/* PUNCHLINE 1 */}
        <PunchlineBand>
          Même terrain, même langage. Le partenaire IA des{" "}
          <span className="text-or-mat">PME bretonnes</span>.
        </PunchlineBand>

        <Reveal><ConceptSection /></Reveal>
        <Reveal><PropositionSection /></Reveal>
        <Reveal><CasConcretsSection /></Reveal>
        <Reveal><PourquoiNousSection /></Reveal>
        <Reveal><SecteursSection /></Reveal>
        <Reveal><PhotosBandeau /></Reveal>
        <Reveal><MethodeSection /></Reveal>

        {/* PUNCHLINE 4 */}
        <PunchlineBand rule>
          Des solutions autrefois réservées aux grandes entreprises sont désormais{" "}
          <span className="text-or-mat">à la portée des PME</span>.
        </PunchlineBand>

        <Reveal><OutilsSection /></Reveal>
        <Reveal><SecuritySection /></Reveal>
        <Reveal><ContactSection /></Reveal>
      </main>
      <FooterSection />
    </>
  );
};

export default Index;
