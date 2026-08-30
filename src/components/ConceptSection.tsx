import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";


const ConceptSection = () => {
  return (
    <section id="concept" className="bg-navy py-6">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl lg:max-w-4xl mx-auto text-center">
          <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-blanc-casse mb-6">
            L'IA, une solution de productivité.<br className="sm:hidden" />{" "}
            <span className="text-or-mat">
              Sous certaines conditions.
            </span>
          </h2>

          <div className="flex flex-col sm:flex-row items-stretch gap-6 max-w-3xl mx-auto text-left">
            <img
              src="/__l5e/assets-v1/d04f3b3c-6512-40bd-9589-58ac07291a05/puzzle-s54.png"
              alt="Schéma Semaine 54 : métier, équipe, clients, outils, organisation, données, communication, partenaires"
              className="w-full sm:w-1/2 rounded-2xl object-cover"
            />
            <div className="bg-blanc-casse/5 rounded-2xl p-6 border border-blanc-casse/10 flex-1">
              <p className="font-dm text-blanc-casse/80 leading-relaxed mb-4">
                Les outils IA se multiplient. Beaucoup sont trop génériques<br className="sm:hidden" /> pour s'adapter à la réalité des entreprises. <strong className="text-blanc-casse font-bold">Le vrai sujet&nbsp;: l'accompagnement et la personnalisation.</strong>
              </p>
              <p className="font-tirelire/80 leading-relaxed text-blanc-casse/80">
                <strong className="text-blanc-casse font-bold">Semaine 54 est un partenaire dédié aux TPE et PME bretonnes</strong>, pour des solutions d'intelligence artificielle construites sur mesure, autour de votre métier et de votre organisation.
              </p>
            </div>
          </div>

          <p className="font-dm font-bold text-or-mat text-lg sm:text-xl mt-6 max-w-full mx-auto leading-snug text-center">
            L'IA est un avantage concurrentiel lorsqu'elle est adaptée à votre entreprise.
          </p>

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
