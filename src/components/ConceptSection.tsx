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
                    Les outils IA se multiplient. Beaucoup sont trop génériques pour
                    s'adapter à la réalité des entreprises.{"\n\n"}
                    <strong className="text-white font-bold">
                      {"\n Le vrai sujet : l'accompagnement et la personnalisation."}
                    </strong>
                  </p>
                  <p className="txt-corps text-blanc-casse">
                    Semaine 54 est intégrateur IA pour TPE et PME bretonnes, pour des solutions d'intelligence artificielle construites sur mesure.{" \n\n\n "}
                    <span>Une approche issue du monde de l'entreprise, pas celui de la tech. Parce qu'une bonne solution commence par comprendre votre métier.</span>
                  </p>
                </div>
              </Reveal>

              <Reveal variant="right" delay={120} className="h-full">
                <div className="card-lift h-full bg-navy rounded-xl p-5 relative min-h-[180px] flex items-center justify-center">
                  <img
                    src={conceptVisuel}
                    alt="Schéma Semaine 54 entouré des pièces Métier, Équipe, Clients, Outils, Organisation, Données, Communication et Partenaires"
                    className="max-w-full max-h-[240px] w-auto h-auto object-contain rounded-lg border-2 border-or-mat"
                    loading="lazy"
                  />
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
