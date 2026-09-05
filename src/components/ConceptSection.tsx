import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/secondary/Reveal";


import conceptVisuel from "@/assets/puzzle-semaine54.png";

const ConceptSection = () => {

  return (
    <section id="concept" className="bg-blanc-casse py-14 md:py-20">
      <div className="section-wrap">
        <div className="text-center">
          <Reveal variant="text" className="mb-10">
            <h2 className="txt-section text-navy">
              L'IA, une solution de productivité.<br className="sm:hidden" />{" "}
              <span className="text-navy/70">Sous certaines conditions.</span>
            </h2>
          </Reveal>

          <div className="max-w-[920px] mx-auto">
            <div className="grid md:grid-cols-2 gap-6 items-stretch text-left">
              <Reveal variant="left" delay={0} className="h-full">
                <div className="card-lift h-full bg-navy rounded-xl p-6 flex flex-col justify-start">

                  <p className="txt-corps text-blanc-casse mb-4">
                    Les outils IA se multiplient. Beaucoup sont trop génériques pour s'adapter
                    à la réalité des entreprises.
                  </p>
                  <p className="txt-corps text-blanc-casse mb-4">
                    Le vrai sujet :{" "}
                    <strong className="text-or-mat font-bold">
                      l'accompagnement et la personnalisation.
                    </strong>
                  </p>
                  <p className="txt-corps text-blanc-casse mb-4">
                    <strong className="text-or-mat font-bold">
                      Semaine 54 est intégrateur IA pour TPE et PME bretonnes
                    </strong>
                    , pour des solutions d'intelligence artificielle construites sur mesure.
                  </p>
                  <p className="txt-corps text-blanc-casse">
                    <strong className="text-or-mat font-bold">
                      Une approche issue du monde de l'entreprise
                    </strong>
                    , pas celui de la tech. Parce qu'une bonne solution commence par{" "}
                    <strong className="text-or-mat font-bold">comprendre votre métier.</strong>
                  </p>
                </div>
              </Reveal>

              <Reveal variant="right" delay={120} className="h-full">
                <div className="card-lift h-full bg-navy rounded-xl relative min-h-[240px] md:min-h-0 p-6 sm:p-9">
                  {/* Haut */}
                  <div className="absolute top-0 left-0 right-0 h-6 sm:h-9 flex items-center justify-center pointer-events-none">
                    <span className="txt-etiquette text-or-mat">Adapter</span>
                  </div>
                  {/* Bas */}
                  <div className="absolute bottom-0 left-0 right-0 h-6 sm:h-9 flex items-center justify-center pointer-events-none">
                    <span className="txt-etiquette text-or-mat">Accompagner</span>
                  </div>
                  {/* Zone du puzzle, hors flux */}
                  <div className="absolute inset-6 sm:inset-9 flex items-center justify-center">
                    <div className="flex items-center justify-center gap-2 sm:gap-3 h-full max-w-full">
                      <span className="txt-etiquette text-or-mat [writing-mode:vertical-rl] rotate-180 shrink-0">
                        Comprendre
                      </span>
                      <img
                        src={conceptVisuel}
                        alt="Schéma Semaine 54 entouré des pièces Métier, Équipe, Clients, Outils, Organisation, Données, Communication et Partenaires"
                        className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg border-2 border-or-mat"
                        loading="lazy"
                      />
                      <span className="txt-etiquette text-or-mat [writing-mode:vertical-rl] shrink-0">
                        Connecter
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>

            </div>
          </div>

          <Reveal variant="text" delay={320} className="text-center mt-10">
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
