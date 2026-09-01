import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import conceptVisuel from "@/assets/puzzle-asset.json";

const ConceptSection = () => {
  return (
    <section id="concept" className="bg-navy py-6">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-blanc-casse mb-6">
            L'IA, une solution de productivité.<br className="sm:hidden" />{" "}
            <span className="text-or-mat">Sous certaines conditions.</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-left">
            <div className="flex-1 bg-navy-clair/5 rounded-2xl p-6 border border-blanc-casse/10">
              <p className="font-dm text-blanc-casse/80 leading-relaxed mb-4">
                Les outils IA se multiplient. Beaucoup sont trop génériques pour
                s'adapter à la réalité des entreprises.{" "}
                <strong className="text-blanc-casse font-bold">
                  Le vrai sujet : l'accompagnement et la personnalisation.
                </strong>
              </p>
              <p className="font-dm text-blanc-casse/80 leading-relaxed">
                <strong className="text-blanc-casse font-bold">
                  Semaine 54 est un partenaire dédié aux TPE et PME bretonnes
                </strong>
                , pour des solutions d'intelligence artificielle construites sur
                mesure, autour de votre métier et de votre organisation.
              </p>
            </div>

            <div className="w-full max-w-[160px] md:max-w-[205px] mx-auto mr-0 ml-auto shrink-0">
              <img
                src={conceptVisuel.url}
                alt="Schéma Semaine 54 entouré des pièces Métier, Équipe, Clients, Outils, Organisation, Données, Communication et Partenaires"
                className="w-full rounded-xl"
                loading="lazy"
              />
            </div>
          </div>

          <div className="text-center mt-4">
            <Button variant="ctaOutline" size="default" asChild>
              <Link to="/pourquoi-ia-generique-ne-suffit-pas">
                Comprendre l'approche Semaine 54
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
