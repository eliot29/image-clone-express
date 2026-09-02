import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type CaseItem = {
  sector: string;
  location: string;
  problem: string;
  solution: string;
};

const cases: CaseItem[] = [
  {
    sector: "Menuisier / Plombier",
    location: "Pays d'Iroise",
    problem: "Devis rédigés manuellement. Signatures perdues par email.",
    solution: "Fiche chantier → calcul automatique → PDF → signature électronique → archivage.",
  },
  {
    sector: "Avocat / Notaire",
    location: "Brest",
    problem: "Recherche juridique longue, outils grand public peu fiables et non confidentiels.",
    solution: "Assistant IA configuré pour interroger et synthétiser vos sources juridiques internes.",
  },
  {
    sector: "Commerce de proximité",
    location: "Saint-Brieuc",
    problem: "Publications réseaux irrégulières, abandonnées faute de temps.",
    solution: "Calendrier éditorial défini une fois → génération assistée → publication planifiée.",
  },
  {
    sector: "Cabinet comptable / Agence de recrutement",
    location: "Bretagne",
    problem: "Relances manuelles oubliées ou bâclées : impayés, candidats, prospects.",
    solution: "Déclencheur selon statut dossier → séquence d'emails personnalisés → suivi automatique.",
  },
];

const CasConcretsSection = () => {
  return (
    <section id="cas" className="bg-blanc-casse py-16 md:py-24">
      <div className="section-wrap">
        <div className="text-center mb-8">
          <h2 className="txt-section text-navy">
            Quatre situations concrètes. Quatre gains mesurables.
          </h2>
        </div>

        {/* Infinite scroll marquee */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-blanc-casse to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-blanc-casse to-transparent z-10 pointer-events-none" />

          <div className="flex gap-4 items-stretch animate-marquee md:animate-marquee-slow hover:[animation-play-state:paused]">
            {[...cases, ...cases].map((cas, i) => (
              <div
                key={i}
                className="card-lift h-full rounded-xl px-5 py-4 bg-card shadow-card min-w-[300px] max-w-[320px] shrink-0"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-dm font-bold text-base text-navy">{cas.sector}</h3>
                  <span className="font-dm text-[11px] font-semibold uppercase tracking-wider text-navy bg-or-mat/25 px-2 py-0.5 rounded-full shrink-0 ml-2">
                    {cas.location}
                  </span>
                </div>
                <p className="font-dm text-xs text-ardoise/70 mb-1.5 leading-snug">{cas.problem}</p>
                <p className="font-dm text-xs text-ardoise leading-snug">{cas.solution}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Button variant="cta" size="lg" asChild>
            <Link to="/secteurs">Mon secteur est-il concerné ?</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CasConcretsSection;
