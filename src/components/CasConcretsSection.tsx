import { Clock, TrendingUp, Shield, Eye, Users, FileCheck } from "lucide-react";

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
    <section id="cas" className="bg-navy py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-blanc-casse mb-4">
            Cas concrets
          </h2>
          <p className="font-dm text-blanc-casse/60 max-w-2xl mx-auto">
            Bien utilisée, l'IA est un avantage concurrentiel réel. Mal calibrée, elle fait perdre du temps.
          </p>
        </div>

        {/* Infinite scroll marquee */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-navy to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-navy to-transparent z-10 pointer-events-none" />

          <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]">
            {[...cases, ...cases].map((cas, i) => (
              <div
                key={i}
                className="rounded-xl p-6 border border-or-mat/20 bg-blanc-casse/5 hover:bg-blanc-casse/[0.07] transition-colors min-w-[340px] max-w-[380px] shrink-0"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-dm text-xs font-semibold uppercase tracking-wider text-or-mat bg-or-mat/10 px-3 py-1 rounded-full">
                    {cas.location}
                  </span>
                </div>
                <h3 className="font-syne font-bold text-xl text-blanc-casse mb-2">{cas.sector}</h3>

                {/* Problem */}
                <p className="font-dm text-sm text-blanc-casse/50 mb-3">{cas.problem}</p>

                {/* Solution */}
                <p className="font-dm text-sm text-blanc-casse/80 mb-5">{cas.solution}</p>

                {/* Results */}
                <div className="space-y-2 pt-4 border-t border-blanc-casse/10">
                  {cas.results.map((r, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <r.icon size={16} className="text-or-mat shrink-0" />
                      <span className="font-dm text-sm text-blanc-casse/70">{r.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasConcretsSection;
