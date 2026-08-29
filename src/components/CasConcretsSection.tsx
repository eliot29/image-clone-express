import { Clock, TrendingUp, Shield, Eye, Users, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const cases = [
  {
    sector: "Menuisier",
    problem: "Devis rédigés manuellement. Signatures perdues par email.",
    solution: "Fiche chantier → calcul automatique → PDF → signature électronique → archivage.",
    results: [
      { icon: Clock, label: "≈ 1 h par devis" },
      { icon: TrendingUp, label: "Cycle de vente accéléré" },
      { icon: FileCheck, label: "Moins d'erreurs administratives" },
    ],
  },
  {
    sector: "Avocat",
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
    problem: "Publications réseaux irrégulières, abandonnées faute de temps.",
    solution: "Calendrier éditorial défini une fois → génération assistée → publication planifiée.",
    results: [
      { icon: Eye, label: "Présence régulière sans surcharge" },
      { icon: Clock, label: "Temps de gestion réduit" },
      { icon: TrendingUp, label: "Visibilité locale plus constante" },
    ],
  },
  {
    sector: "Cabinet comptable",
    problem: "Relances manuelles oubliées ou bâclées : impayés, candidats, prospects.",
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
    <section id="cas" className="bg-navy py-16 md:py-24">
      <div className="section-shell">
        <div className="text-center mb-4">
          <h2 className="font-dm font-extrabold text-[28px] sm:text-4xl text-blanc-casse">
            Des exemples d'automatisations possibles
          </h2>
          <p className="font-dm text-blanc-casse/70 text-[15px] mt-3 max-w-2xl mx-auto leading-relaxed">
            Des situations représentatives des demandes que je reçois. Ce qui vous concerne se décide au diagnostic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto mt-8">
          {cases.map((cas, i) => (
            <div
              key={i}
              className="card-lift rounded-xl px-6 py-5 border border-blanc-casse/10 bg-blanc-casse/5 hover:bg-blanc-casse/[0.08] hover:border-or-mat/30"
            >
              <h3 className="font-dm font-bold text-lg text-blanc-casse mb-3">{cas.sector}</h3>
              <p className="font-dm text-[15px] text-blanc-casse/90 mb-2 leading-relaxed">{cas.problem}</p>
              <p className="font-dm text-[15px] text-blanc-casse/90 mb-4 leading-relaxed">{cas.solution}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 pt-3 border-t border-blanc-casse/10">
                {cas.results.map((r, j) => (
                  <div key={j} className="flex items-center gap-1.5">
                    <r.icon size={15} className="text-or-mat shrink-0" />
                    <span className="font-dm text-[15px] text-blanc-casse/80">{r.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
