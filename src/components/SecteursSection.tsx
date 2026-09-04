import { Button } from "@/components/ui/button";
import Reveal from "@/components/secondary/Reveal";
import TiltCard from "@/components/secondary/TiltCard";
import { Hammer, Scale, ShoppingBag, Building, UtensilsCrossed, Calculator, Users, Briefcase, Megaphone, FileText, BarChart3, Headphones, Bot, BrainCircuit, Zap, LayoutDashboard, PenTool, Radar } from "lucide-react";

const domains = [
  { icon: Megaphone, label: "Marketing & Prospection" },
  { icon: FileText, label: "Administratif & Comptabilité" },
  { icon: BarChart3, label: "Pilotage & Analyse" },
  { icon: Headphones, label: "Service client & Support" },
];

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

const solutions = [
  { icon: Bot, label: "Chatbots" },
  { icon: BrainCircuit, label: "Agents IA" },
  { icon: Zap, label: "Automatisations" },
  { icon: LayoutDashboard, label: "Dashboards & analyse" },
  { icon: PenTool, label: "Génération de contenu" },
  { icon: Radar, label: "Veille intelligente" },
];

const Fades = () => (
  <>
    <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-blanc-casse to-transparent z-10 pointer-events-none" />
    <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-blanc-casse to-transparent z-10 pointer-events-none" />
  </>
);

const SecteursSection = () => {
  return (
    <section id="secteurs" className="bg-blanc-casse py-14 md:py-20">
      <div className="section-wrap">
        {/* Bandeau domaines – texte léger */}
        <Reveal variant="card" className="relative overflow-hidden mb-3">
          <Fades />
          <div className="flex gap-6 animate-marquee-reverse md:animate-marquee-reverse-slow hover:[animation-play-state:paused] py-2">
            {[...domains, ...domains].map((d, i) => (
              <div key={i} className="flex items-center gap-6 shrink-0">
                <span className="font-dm text-sm font-medium text-ardoise/80 whitespace-nowrap">
                  {d.label}
                </span>
                <span className="text-ardoise/40" aria-hidden="true">·</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Bandeau secteurs – traitement principal */}
        <Reveal variant="card" delay={120} className="relative overflow-hidden mb-3">
          <Fades />
          <div className="flex gap-4 animate-marquee md:animate-marquee-slow hover:[animation-play-state:paused] py-2">
            {[...sectors, ...sectors].map((s, i) => (
              <TiltCard
                key={i}
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-card shadow-card shrink-0"
              >
                <div className="w-11 h-11 rounded-full bg-or-mat/15 flex items-center justify-center shrink-0">
                  <s.icon size={28} strokeWidth={1.5} className="text-or-mat" />
                </div>
                <span className="font-dm text-sm font-medium text-navy whitespace-nowrap">{s.label}</span>
              </TiltCard>

            ))}
          </div>
        </Reveal>

        {/* Bandeau solutions – texte léger */}
        <Reveal variant="card" delay={240} className="relative overflow-hidden mb-10">
          <Fades />
          <div className="flex gap-6 animate-marquee-reverse md:animate-marquee-reverse-slow hover:[animation-play-state:paused] py-2">
            {[...solutions, ...solutions].map((s, i) => (
              <div key={i} className="flex items-center gap-6 shrink-0">
                <span className="font-dm text-sm font-medium text-ardoise/80 whitespace-nowrap">
                  {s.label}
                </span>
                <span className="text-ardoise/40" aria-hidden="true">·</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal variant="text" className="text-center">
          <Button variant="cta" size="lg" asChild>
            <a href="#audit">Découvrir les cas d'usage par secteur</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
};

export default SecteursSection;
