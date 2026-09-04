import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Reveal from "@/components/secondary/Reveal";
import TiltCard from "@/components/secondary/TiltCard";

type CaseItem = {
  sector: string;
  problem: string;
  solution: string;
};

const cases: CaseItem[] = [
  {
    sector: "Menuisier / Plombier",
    problem: "Devis rédigés manuellement. Signatures perdues par email.",
    solution: "Fiche chantier → calcul automatique → PDF → signature électronique → archivage.",
  },
  {
    sector: "Avocat / Notaire",
    problem: "Recherche juridique longue, outils grand public peu fiables et non confidentiels.",
    solution: "Assistant IA configuré pour interroger et synthétiser vos sources juridiques internes.",
  },
  {
    sector: "Commerce de proximité",
    problem: "Publications réseaux irrégulières, abandonnées faute de temps.",
    solution: "Calendrier éditorial défini une fois → génération assistée → publication planifiée.",
  },
  {
    sector: "Cabinet comptable / Agence de recrutement",
    problem: "Relances manuelles oubliées ou bâclées : impayés, candidats, prospects.",
    solution: "Déclencheur selon statut dossier → séquence d'emails personnalisés → suivi automatique.",
  },
];

const CasConcretsSection = () => {
  return (
    <section id="cas" className="bg-blanc-casse py-14 md:py-20">
      <div className="section-wrap">
        <div className="text-center mb-10">
          <Reveal variant="text">
            <h2 className="txt-section text-navy">
              Automatisation IA : quatre situations concrètes, quatre gains mesurables
            </h2>
            <p className="txt-corps text-ardoise/80 text-center max-w-3xl mx-auto mt-4">
              Des situations rencontrées chez les artisans, commerçants et professions libérales du Finistère, des Côtes-d'Armor et du Morbihan — de Brest à Quimper, de Saint-Brieuc à Lorient.
            </p>
          </Reveal>
        </div>

        {/* Infinite scroll marquee */}
        <Reveal variant="card" className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-blanc-casse to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-blanc-casse to-transparent z-10 pointer-events-none" />

          <div className="flex gap-4 items-stretch animate-marquee md:animate-marquee-slow hover:[animation-play-state:paused]">
            {[...cases, ...cases].map((cas, i) => (
              <TiltCard
                key={i}
                className="h-full rounded-xl px-5 py-4 bg-card shadow-card min-w-[300px] max-w-[320px] shrink-0"
              >
                <div className="mb-2">
                  <h3 className="font-dm font-bold text-[17px] text-navy">{cas.sector}</h3>
                </div>
                <p className="font-dm text-[14px] text-ardoise/70 mb-1.5 leading-snug">{cas.problem}</p>
                <p className="font-dm text-[14px] text-ardoise leading-snug">{cas.solution}</p>
              </TiltCard>
            ))}
          </div>
        </Reveal>

        <Reveal variant="text" delay={120} className="text-center mt-10">
          <Button variant="cta" size="lg" asChild>
            <Link to="/secteurs">Mon secteur est-il concerné ?</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
};

export default CasConcretsSection;
