import { Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const ConceptSection = () => {
  return (
    <section id="concept" className="bg-blanc-casse py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-or-mat/10 mb-6">
            <Lightbulb size={24} className="text-or-mat" />
          </div>

          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-navy mb-6">
            Le concept Semaine 54
          </h2>

          <p className="font-syne font-bold text-xl text-or-mat mb-8">
            Une année compte 52 semaines. Semaine 54, c'est le temps que vous récupérez.
          </p>

          <div className="space-y-6 text-left">
            <p className="punchline text-ardoise text-lg">
              On ne digitalise pas pour moderniser. On automatise pour optimiser.
            </p>

            <p className="font-dm text-ardoise/80 leading-relaxed">
              La plupart des dirigeants ne manquent pas de compétences. Ils manquent de temps pour les exercer. Une automatisation bien ciblée est souvent amortie en moins d'un an.
            </p>

            <p className="font-dm text-ardoise/80 leading-relaxed">
              L'IA évolue vite. Ceux qui l'intègrent aujourd'hui prennent une avance opérationnelle sur ceux qui attendent.
            </p>
          </div>

          <Button variant="ctaOutline" size="lg" className="mt-10" asChild>
            <a href="#prestations">Découvrir les prestations</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
