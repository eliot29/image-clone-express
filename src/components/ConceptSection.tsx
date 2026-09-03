import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/secondary/Reveal";
import { useParallax } from "@/hooks/useScrollFx";

import conceptVisuel from "@/assets/puzzle-asset.json";

const ConceptSection = () => {
  const puzzleRef = useParallax<HTMLImageElement>(20);
  return (
    <section id="concept" className="bg-blanc-casse py-14 md:py-20">
      <div className="section-wrap">
        <div className="text-center">
          <Reveal variant="text" className="mb-8">
            <h2 className="txt-section text-navy">
              L'IA, une solution de productivité.<br className="sm:hidden" />{" "}
              <span className="text-navy/70">Sous certaines conditions.</span>
            </h2>
          </Reveal>

          <Reveal variant="card" stagger={70} className="flex flex-col md:flex-row items-stretch gap-6 md:gap-8 text-left">
            <div className="flex-1 bg-card rounded-xl p-6 shadow-card card-lift">
              <p className="txt-corps text-ardoise mb-4">
                Les outils IA se multiplient. Beaucoup sont trop génériques pour
                s'adapter à la réalité des entreprises.{" "}
                <strong className="text-navy font-bold">
                  Le vrai sujet : l'accompagnement et la personnalisation.
                </strong>
              </p>
              <p className="txt-corps text-ardoise">
                <strong className="text-navy font-bold">
                  Semaine 54 est un partenaire dédié aux TPE et PME bretonnes
                </strong>
                , pour des solutions d'intelligence artificielle construites sur
                mesure, autour de votre métier et de votre organisation.
              </p>
            </div>

            <div className="w-full max-w-[180px] md:max-w-[42%] lg:max-w-[38%] mx-auto md:mx-0 self-center shrink-0">
              <img
                ref={puzzleRef}
                src={conceptVisuel.url}
                alt="Schéma Semaine 54 entouré des pièces Métier, Équipe, Clients, Outils, Organisation, Données, Communication et Partenaires"
                className="w-full h-auto object-contain rounded-xl"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal variant="text" className="text-center mt-8">
            <Button variant="ctaOutline" size="default" asChild>
              <Link to="/pourquoi-ia-generique-ne-suffit-pas">
                Comprendre l'approche Semaine 54
                <ArrowRight size={16} />
              </Link>
            </Button>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
