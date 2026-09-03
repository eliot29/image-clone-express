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
import PunchlineBand from "@/components/secondary/PunchlineBand";
import ScrollProgressBar from "@/components/secondary/ScrollProgressBar";

const Index = () => {
  return (
    <>
      <ScrollProgressBar />
      <Navigation />
      <main>
        <HeroSection />

        {/* PUNCHLINE 1 — bandeau navy */}
        <PunchlineBand wide>
          Maîtriser et tester les outils IA demande du temps.{" "}
          <span className="text-or-mat">Ce temps, je l'ai pris.</span> Mon travail
          consiste à vous faire gagner le vôtre.
        </PunchlineBand>

        <ConceptSection />
        <PropositionSection />
        <CasConcretsSection />
        <PourquoiNousSection />

        {/* PUNCHLINE 3 — bandeau or-mat */}
        <PunchlineBand tone="or">
          Ma conclusion : ce qui était réservé aux grandes entreprises est
          aujourd'hui <span className="font-bold">à la portée des PME</span>.
        </PunchlineBand>

        <SecteursSection />
        <PhotosBandeau />

        {/* PUNCHLINE 2 — légende-conclusion des photos */}
        <PunchlineBand tone="filet">
          Même terrain, même langage. Le partenaire IA des{" "}
          <span className="text-or-mat">PME bretonnes</span>.
        </PunchlineBand>

        <MethodeSection />

        <OutilsSection />
        <SecuritySection />

        {/* PUNCHLINE 4 — bandeau navy */}
        <PunchlineBand rule>
          Construisons le <span className="text-or-mat">collaborateur numérique</span>{" "}
          adapté à votre entreprise et vos équipes.
        </PunchlineBand>

        <ContactSection />
      </main>
      <FooterSection />
    </>
  );
};

export default Index;
