import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ConceptSection = () => {
  return (
    <section id="concept" className="bg-navy py-6">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl lg:max-w-4xl mx-auto text-center">
          <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-blanc-casse mb-6">
            L'IA, une solution de productivité.{" "}
            <span className="text-or-mat">
Sous certaines conditions.</span>
          </h2>

          <div className="bg-blanc-casse/5 rounded-2xl p-6 border border-blanc-casse/10 max-w-3xl mx-auto text-left">
            <p className="font-dm text-blanc-casse/70 leading-relaxed mb-4">Les outils IA se multiplient. Beaucoup d'entreprises perdent du temps à tester des solutions trop génériques, éloignées de leur réalité terrain. Le problème n'est pas l'IA. C'est le <strong className="text-blanc-casse">manque d'accompagnement adapté</strong>.</p>
            <p className="font-dm text-blanc-casse/80 leading-relaxed">
              <strong className="text-blanc-casse">Semaine 54</strong> est un partenaire dédié aux TPE et PME bretonnes — pour des solutions d'intelligence artificielle construites sur mesure, autour de votre métier et de votre organisation.
            </p>
          </div>

          <p className="font-dm font-bold text-or-mat text-lg sm:text-xl mt-6 max-w-full mx-auto leading-snug text-center">L'IA est un avantage concurrentiel lorsqu'elle est adaptée à votre entreprise.</p>

          <div className="flex justify-center mt-6">
            <Button variant="ctaOutline" size="lg" asChild>
              <a href="/solutions">
                Découvrir les solutions en détail
                <ArrowRight size={18} />
              </a>
            </Button>
          </div>
        </div>

      </div>
    </section>);
};

export default ConceptSection;
