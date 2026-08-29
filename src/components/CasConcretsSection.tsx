import { Clock, TrendingUp, Shield, Eye, Users, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import FlowDiagram from "@/components/secondary/FlowDiagram";

const cases = [
  {
    sector: "Menuisier",
    problem: "Devis rédigés manuellement. Signatures perdues par email.",
    solution: "Fiche chantier → calcul automatique → PDF → signature électronique → archivage.",
    flow: ["Fiche chantier", "Calcul automatique", "PDF", "Signature", "Archivage"],
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
    flow: ["Question", "Sources internes", "Synthèse", "Réponse"],
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
    flow: ["Calendrier éditorial", "Génération assistée", "Publication planifiée"],
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
    flow: ["Statut dossier", "Séquence d'emails", "Suivi automatique"],
    results: [
      { icon: Users, label: "Réduction des oublis de relance" },
      { icon: Clock, label: "Temps commercial récupéré" },
      { icon: TrendingUp, label: "Meilleure trésorerie / suivi candidats" },
    ],
  },
];

const CasConcretsSection = () => {
  return (
    <section id="cas" className="bg-blanc-casse py-16 md:py-24">
      <div className="section-shell">
        <div className="text-center mb-4">
          <h2 className="font-dm font-extrabold text-[28px] sm:text-4xl text-navy">
            Des exemples d'automatisations possibles
          </h2>
          <p className="font-dm text-ardoise/70 text-[15px] mt-3 max-w-2xl leading-relaxed mx-auto">
            Des situations représentatives des demandes que je reçois. Ce qui vous concerne se décide au diagnostic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
          {cases.map((cas, i) => (
            <div
              key={i}
              className="card-lift rounded-xl px-6 py-5 bg-card shadow-card"
            >
              <h3 className="font-dm font-bold text-lg text-navy mb-3">{cas.sector}</h3>
              <p className="font-dm text-[15px] text-ardoise/85 mb-2 leading-relaxed">{cas.problem}</p>
              <p className="font-dm text-[15px] text-ardoise/85 mb-4 leading-relaxed">{cas.solution}</p>
              <FlowDiagram steps={cas.flow} className="mb-4" />
              <div className="flex flex-wrap gap-x-4 gap-y-2 pt-3 border-t border-navy/10">
                {cas.results.map((r, j) => (
                  <div key={j} className="flex items-center gap-1.5">
                    <r.icon size={15} className="text-or-mat shrink-0" />
                    <span className="font-dm text-[15px] text-ardoise/80">{r.label}</span>
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
