import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import conceptVisuel from "@/assets/puzzle-asset.json";

const ConceptSection = () => {
  return (
    <section id="concept" className="bg-navy py-12 md:py-16">
      <div className="section-wrap">
        <div className="text-center">
          <h2 className="txt-section text-blanc-casse mb-8">
            L'IA, une solution de productivité.<br className="sm:hidden" />{" "}
            <span className="text-or-mat">Sous certaines conditions.</span>
          </h2>

          <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-8 text-left">
            <div className="flex-1 h-full bg-blanc-casse/5 rounded-xl p-6 border border-blanc-casse/10">
              <p className="txt-corps text-blanc-casse/80 mb-4">
                Les outils IA se multiplient. Beaucoup sont trop génériques pour
                s'adapter à la réalité des entreprises.{" "}
                <strong className="text-or-mat font-bold">
                  Le vrai sujet : l'accompagnement et la personnalisation.
                </strong>
              </p>
              <p className="txt-corps text-blanc-casse/80">
                <strong className="text-or-mat font-bold">
                  Semaine 54 est un partenaire dédié aux TPE et PME bretonnes
                </strong>
                , pour des solutions d'intelligence artificielle construites sur
                mesure, autour de votre métier et de votre organisation.
              </p>
            </div>

            <div className="w-full max-w-[220px] md:max-w-[340px] mx-auto md:mx-0 md:self-center shrink-0">
              <img
                src={conceptVisuel.url}
                alt="Schéma Semaine 54 entouré des pièces Métier, Équipe, Clients, Outils, Organisation, Données, Communication et Partenaires"
                className="w-full rounded-xl"
                loading="lazy"
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <Button variant="ctaOutline" size="default" asChild>
              <Link to="/pourquoi-ia-generique-ne-suffit-pas">
                Comprendre l'approche Semaine 54
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>

          {/* PUNCHLINE 2 */}
          <div className="w-fit max-w-full mx-auto mt-10 bg-or-mat rounded-xl px-6 py-6 md:px-10 md:py-8">
            <p className="txt-punchline text-navy text-center">
              Maîtriser et tester les outils IA demande du temps.
              <br />
              Ce temps, je l'ai pris. Mon travail consiste à vous faire gagner le vôtre.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
