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

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
          {sectors.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 p-5 rounded-xl border border-or-mat/15 bg-blanc-casse/5 hover:bg-blanc-casse/[0.07] transition-colors text-center"
            >
              <div className="w-12 h-12 rounded-full bg-or-mat/10 flex items-center justify-center">
                <s.icon size={22} className="text-or-mat" />
              </div>
              <span className="font-dm text-sm font-medium text-blanc-casse/80">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Brittany map placeholder — gold dots */}
        <div className="flex justify-center mb-10">
          <div className="relative w-64 h-48">
            {/* Stylized Brittany outline */}
            <svg viewBox="0 0 300 220" className="w-full h-full" fill="none">
              <path
                d="M50 180 C30 160 15 140 20 120 C25 100 10 80 30 65 C50 50 70 35 100 30 C130 25 150 20 180 25 C210 30 240 45 260 60 C280 75 285 95 270 115 C255 135 240 150 220 160 C200 170 180 175 160 180 C140 185 120 190 100 188 C80 186 60 185 50 180Z"
                stroke="hsl(var(--or-mat))"
                strokeWidth="1.5"
                fill="hsl(var(--or-mat) / 0.05)"
              />
              {/* City pins */}
              {[
                { x: 65, y: 90, label: "Brest" },
                { x: 100, y: 130, label: "Quimper" },
                { x: 200, y: 80, label: "Saint-Brieuc" },
                { x: 250, y: 95, label: "Rennes" },
              ].map((city, i) => (
                <g key={i}>
                  <circle cx={city.x} cy={city.y} r="5" fill="hsl(var(--or-mat))" opacity="0.8" />
                  <circle cx={city.x} cy={city.y} r="8" fill="hsl(var(--or-mat))" opacity="0.2" />
                  <text
                    x={city.x}
                    y={city.y - 14}
                    textAnchor="middle"
                    fill="hsl(var(--blanc-casse) / 0.7)"
                    fontSize="11"
                    fontFamily="DM Sans"
                  >
                    {city.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>

        <div className="text-center">
          <Button variant="ctaOutline" size="lg" className="text-or-mat border-or-mat" asChild>
            <a href="#contact">Découvrir les cas d'usage par secteur</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SecteursSection;
