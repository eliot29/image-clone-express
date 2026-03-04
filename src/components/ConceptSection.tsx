import { Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const ConceptSection = () => {
  return (
    <section id="concept" className="bg-navy py-14">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-or-mat/10 mb-4">
            <Lightbulb size={24} className="text-or-mat" />
          </div>

          <h2 className="font-dm font-extrabold text-3xl sm:text-4xl text-blanc-casse mb-6">
            Le concept Semaine 54
          </h2>

          <p className="font-dm font-bold text-xl text-or-mat mb-8">
            Une année compte 52 semaines. Semaine 54, c'est le temps que vous récupérez.
          </p>

          <div className="space-y-6 text-left">
            <p className="punchline text-blanc-casse/90 text-lg">
              On ne digitalise pas pour moderniser. On automatise pour optimiser.
            </p>

            <p className="font-dm text-blanc-casse/70 leading-relaxed">
              La plupart des dirigeants ne manquent pas de compétences. Ils manquent de temps pour les exercer. Une automatisation bien ciblée est souvent amortie en moins d'un an.
            </p>

            <p className="font-dm text-blanc-casse/70 leading-relaxed">
              L'IA évolue vite. Ceux qui l'intègrent aujourd'hui prennent une avance opérationnelle sur ceux qui attendent.
            </p>
          </div>

          <Button variant="ctaOutline" size="lg" className="mt-10 text-or-mat border-or-mat" asChild>
            <a href="#prestations">Découvrir le concept</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
