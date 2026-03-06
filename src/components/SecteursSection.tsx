import { Button } from "@/components/ui/button";
import { Hammer, Scale, ShoppingBag, Building, UtensilsCrossed, Calculator, Users, Briefcase } from "lucide-react";

const sectors = [
  { icon: Hammer, label: "Artisans & BTP" },
  { icon: Scale, label: "Professions libérales" },
  { icon: ShoppingBag, label: "Commerce de proximité" },
  { icon: Building, label: "Immobilier" },
  { icon: UtensilsCrossed, label: "Restauration" },
  { icon: Calculator, label: "Cabinet comptable" },
  { icon: Users, label: "Recrutement" },
  { icon: Briefcase, label: "Services aux entreprises" },
];

const SecteursSection = () => {
  return (
    <section id="secteurs" className="bg-navy py-14">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="font-dm font-extrabold text-3xl sm:text-4xl text-blanc-casse mb-4">
            Votre activité est-elle concernée ?
          </h2>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="relative overflow-hidden mb-12">
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-navy to-transparent z-10 pointer-events-none sm:hidden" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-navy to-transparent z-10 pointer-events-none sm:hidden" />
          
          <div className="flex sm:grid sm:grid-cols-4 gap-4 max-w-3xl mx-auto overflow-x-auto sm:overflow-visible pb-2 sm:pb-0 snap-x snap-mandatory">
            {sectors.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 p-5 rounded-xl border border-blanc-casse/10 bg-blanc-casse/5 hover:bg-blanc-casse/[0.08] transition-colors text-center min-w-[140px] snap-center shrink-0 sm:shrink sm:min-w-0"
              >
                <div className="w-12 h-12 rounded-full bg-or-mat/10 flex items-center justify-center">
                  <s.icon size={22} className="text-or-mat" />
                </div>
                <span className="font-dm text-sm font-medium text-blanc-casse/80">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button variant="cta" size="lg" asChild>
            <a href="#contact">Découvrir les cas d'usage par secteur</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SecteursSection;
