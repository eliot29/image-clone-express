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
import CarteBretagne from "@/components/CarteBretagne";

import FooterSection from "@/components/FooterSection";
import Reveal from "@/components/secondary/Reveal";
import PunchlineBand from "@/components/secondary/PunchlineBand";

const Index = () => {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />

        {/* PUNCHLINE 1 + ancrage territorial */}
        <section className="bg-navy py-12 md:py-16">
          <div className="section-wrap">
            <Reveal variant="text">
              <p className="txt-punchline text-blanc-casse text-center max-w-3xl mx-auto">
                Même terrain, même langage. Le partenaire IA des{" "}
                <span className="text-or-mat">PME bretonnes</span>.
              </p>
            </Reveal>
            <Reveal variant="text" delay={120} className="mt-8">
              <CarteBretagne onNavy />
            </Reveal>
          </div>
        </section>

        <ConceptSection />
        <PropositionSection />
        <CasConcretsSection />
        <PourquoiNousSection />
        <SecteursSection />
        <PhotosBandeau />
        <MethodeSection />

        {/* PUNCHLINE 3 */}
        <PunchlineBand tone="filet">
          Mon approche vient du réel. Pas d'une démonstration théorique.
        </PunchlineBand>

        <OutilsSection />
        <SecuritySection />

        {/* PUNCHLINE 4 */}
        <PunchlineBand rule>
          Des solutions autrefois réservées aux grandes entreprises sont désormais{" "}
          <span className="text-or-mat">à la portée des PME</span>.
        </PunchlineBand>

        <ContactSection />
      </main>
      <FooterSection />
    </>
  );
};

export default Index;
