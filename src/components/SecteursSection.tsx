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
{ icon: Briefcase, label: "Services aux entreprises" }];


const SecteursSection = () => {
  return (
    <section id="secteurs" className="bg-navy py-14">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="font-dm font-extrabold text-3xl sm:text-4xl text-blanc-casse mb-4">
            Votre activité est-elle concernée ?
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
          {sectors.map((s, i) =>
          <div
            key={i}
            className="flex flex-col items-center gap-3 p-5 rounded-xl border border-or-mat/15 bg-blanc-casse/5 hover:bg-blanc-casse/[0.07] transition-colors text-center">
            
              <div className="w-12 h-12 rounded-full bg-or-mat/10 flex items-center justify-center">
                <s.icon size={22} className="text-or-mat" />
              </div>
              <span className="font-dm text-sm font-medium text-blanc-casse/80">{s.label}</span>
            </div>
          )}
        </div>

        {/* Brittany map placeholder — gold dots */}
        

































        

        <div className="text-center">
          <Button variant="ctaOutline" size="lg" className="text-or-mat border-or-mat" asChild>
            <a href="#contact">Découvrir les cas d'usage par secteur</a>
          </Button>
        </div>
      </div>
    </section>);

};

export default SecteursSection;