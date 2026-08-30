import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import conceptVisuel from "@/assets/concept-visuel.png.asset.json";
import villesVisuel from "@/assets/villes-visuel.png.asset.json";

const Concept
Section = () => {
  return (
    <section id="concept" className="bg-navy py-6">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-blanc-casse mb-6">
            L'IA, une solution de productivité.<br className="sm:hidden" />{" "}
            <span className="text-or-mat">
              Sous certaines conditions.
            </span>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-left">
            <div className="flex-1 bg-blanc-casse/5 rounded-2xl p-6 border border-blanc-casse/10">
              <p className="font-dm
 text-blanc-casse/80 leading-relaxed mb-4">
                Les outils IA se multiplient. Beaucoup sont trop génériques<br className="sm:hidden" /> pour s'adapter à la réalité des entreprises. <strong className="text-blanc-casse font-bold">Le vrai sujet&nbsp;: l'accent</strong>
              </p>
              <p className="font-dm text-blanc-casse/80 leading-relaxed">
                <strong className="text-blanc-casse font-bold">Semaine 54 est un partenaire dédié aux TPE et PME bretonnes</strong>, pour des solutions d'intelligence artificielle construites sur mesure, autour de votre métier et de votre organisation.
              </p>
            </div>

            <div className="w-full md:w-64 shrink-0 flex flex-row md:flex-col gap-4">
              <img
                src={conceptVisuel}
                alt="Schema Semaine 54 entoure des pieces Metier, Equipe, Clients, Outils, Organisation, Donnees, Communication et Partenaires"
                className="w-1/2 md:w-full rounded-xl object-cover"
                loading="lazy"
              />
              <img
                src={villesVisuel}
                alt="Villes bretonnes desservies : Brest, Rennes, Saint-Brieuc et Vannes"
                className="w-1/2 md:w-full rounded-xl object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="text-center mt-4">
            <Button variant="ctaOutline" size="default" asChild>
              <Link to="/pourquoi-ia-generique-ne-pas">
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
