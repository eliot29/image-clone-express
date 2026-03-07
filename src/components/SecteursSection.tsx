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
    <section id="secteurs" className="bg-navy py-6">
      <div className="container mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-blanc-casse mb-4">
            Votre activité est-elle concernée ?
          </h2>
        </div>

        {/* Marquee scrolling */}
        <div className="relative overflow-hidden mb-8">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-navy to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-navy to-transparent z-10 pointer-events-none" />

          <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused]">
            {[...sectors, ...sectors].map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-3 rounded-full border border-blanc-casse/10 bg-blanc-casse/5 hover:bg-blanc-casse/[0.08] transition-colors shrink-0"
              >
                <div className="w-9 h-9 rounded-full bg-or-mat/10 flex items-center justify-center shrink-0">
                  <s.icon size={18} className="text-or-mat" />
                </div>
                <span className="font-dm text-sm font-medium text-blanc-casse/80 whitespace-nowrap">{s.label}</span>
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
