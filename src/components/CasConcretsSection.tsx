import { Clock, TrendingUp, Shield, Eye, Users, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const cases = [
  {
    sector: "Menuisier / Plombier",
    location: "Pays d'Iroise",
    problem: "Devis rédigés manuellement. Signatures perdues par email.",
    solution: "Fiche chantier → calcul automatique → PDF → signature électronique → archivage.",
    results: [
      { icon: Clock, label: "1h gagnée par devis" },
      { icon: TrendingUp, label: "Cycle de vente accéléré" },
      { icon: FileCheck, label: "Moins d'erreurs administratives" },
    ],
  },
  {
    sector: "Avocat / Notaire",
    location: "Brest",
    problem: "Recherche juridique longue, outils grand public peu fiables et non confidentiels.",
    solution: "Assistant IA configuré pour interroger et synthétiser vos sources juridiques internes.",
    results: [
      { icon: Clock, label: "Recherche plus rapide" },
      { icon: Shield, label: "Confidentialité maîtrisée" },
      { icon: FileCheck, label: "Préparation de dossier optimisée" },
    ],
  },
  {
    sector: "Commerce de proximité",
    location: "Saint-Brieuc",
    problem: "Publications réseaux irrégulières, abandonnées faute de temps.",
    solution: "Calendrier éditorial défini une fois → génération assistée → publication planifiée.",
    results: [
      { icon: Eye, label: "Présence régulière sans surcharge" },
      { icon: Clock, label: "Temps de gestion réduit" },
      { icon: TrendingUp, label: "Visibilité locale plus constante" },
    ],
  },
  {
    sector: "Cabinet comptable / Agence de recrutement",
    location: "Bretagne",
    problem: "Relances manuelles oubliées ou bâclées — impayés, candidats, prospects.",
    solution: "Déclencheur selon statut dossier → séquence d'emails personnalisés → suivi automatique.",
    results: [
      { icon: Users, label: "Réduction des oublis de relance" },
      { icon: Clock, label: "Temps commercial récupéré" },
      { icon: TrendingUp, label: "Meilleure trésorerie / suivi candidats" },
    ],
  },
];

const CasConcretsSection = () => {
  return (
    <section id="cas" className="bg-navy py-6">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-blanc-casse">
            Cinq situations concrètes. Cinq gains mesurables.
          </h2>
        </div>

        {/* Infinite scroll marquee */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-navy to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-navy to-transparent z-10 pointer-events-none" />

          <div className="flex gap-4 animate-marquee md:animate-marquee-slow hover:[animation-play-state:paused]">
            {[...cases, ...cases].map((cas, i) => (
              <div
                key={i}
                className="rounded-xl px-5 py-4 border border-blanc-casse/10 bg-blanc-casse/5 hover:bg-blanc-casse/[0.08] transition-colors min-w-[300px] max-w-[320px] shrink-0"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-dm font-bold text-base text-blanc-casse">{cas.sector}</h3>
                  <span className="font-dm text-[11px] font-semibold uppercase tracking-wider text-or-mat bg-or-mat/10 px-2 py-0.5 rounded-full shrink-0 ml-2">
                    {cas.location}
                  </span>
                </div>
                <p className="font-dm text-xs text-blanc-casse/80 mb-1.5 leading-snug">{cas.problem}</p>
                <p className="font-dm text-xs text-blanc-casse/90 mb-3 leading-snug">{cas.solution}</p>
                <div className="flex flex-wrap gap-x-3 gap-y-1 pt-2 border-t border-blanc-casse/10">
                  {cas.results.map((r, j) => (
                    <div key={j} className="flex items-center gap-1.5">
                      <r.icon size={13} className="text-or-mat shrink-0" />
                      <span className="font-dm text-xs text-blanc-casse/80">{r.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-6">
          <Button variant="cta" size="lg" asChild>
            <Link to="/secteurs">Mon secteur est-il concerné ?</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CasConcretsSection;
