import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";
import secteursData from "@/data/secteurs.json";

interface Solution {
  type: string;
  titre: string;
  description: string;
}

interface Secteur {
  id: string;
  label: string;
  categorie: string;
  emoji: string;
  problemes: string[];
  solutions: Solution[];
}

const Secteurs = () => {
  const secteurs = secteursData.secteurs as Secteur[];
  const categories = useMemo(
    () => [...new Set(secteurs.map((s) => s.categorie))],
    [secteurs]
  );
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? secteurs.filter((s) => s.categorie === activeCategory)
    : secteurs;

  return (
    <div className="min-h-screen bg-navy text-blanc-casse">
      {/* Header */}
      <header className="container mx-auto px-6 pt-8 pb-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blanc-casse/60 hover:text-or-mat transition-colors font-dm text-sm mb-6"
        >
          <ArrowLeft size={16} />
          Retour à l'accueil
        </Link>
        <h1 className="font-dm font-extrabold text-3xl sm:text-4xl text-blanc-casse mb-2">
          Mon secteur est-il concerné ?
        </h1>
        <p className="font-dm text-blanc-casse/70 text-base max-w-2xl">
          Chaque métier a ses irritants. Voici comment l'IA et l'automatisation
          peuvent concrètement vous faire gagner du temps.
        </p>
      </header>

      {/* Category filter – horizontal scroll */}
      <div className="container mx-auto px-6 pb-4">
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-navy to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-navy to-transparent z-10 pointer-events-none" />
          <div className="flex gap-3 overflow-x-auto scrollbar-hide py-1 px-2 snap-x">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-5 py-2.5 rounded-full font-dm text-sm font-medium transition-colors shrink-0 snap-start ${
                activeCategory === null
                  ? "bg-accent text-accent-foreground"
                  : "bg-blanc-casse/10 text-blanc-casse/70 hover:bg-blanc-casse/20"
              }`}
            >
              Tous
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() =>
                  setActiveCategory(activeCategory === cat ? null : cat)
                }
                className={`px-5 py-2.5 rounded-full font-dm text-sm font-medium transition-colors shrink-0 snap-start ${
                  activeCategory === cat
                    ? "bg-accent text-accent-foreground"
                    : "bg-blanc-casse/10 text-blanc-casse/70 hover:bg-blanc-casse/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Secteurs grid */}
      <section className="container mx-auto px-6 pb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((secteur) => (
            <div
              key={secteur.id}
              className="rounded-xl border border-blanc-casse/10 bg-blanc-casse/5 p-5 hover:bg-blanc-casse/[0.08] transition-colors"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{secteur.emoji}</span>
                <h2 className="font-dm font-bold text-lg text-blanc-casse">
                  {secteur.label}
                </h2>
              </div>
              <p className="font-dm text-[11px] font-semibold uppercase tracking-wider text-or-mat bg-or-mat/10 px-2 py-0.5 rounded-full inline-block mb-3">
                {secteur.categorie}
              </p>

              <div className="mb-3">
                <h3 className="font-dm text-xs font-semibold text-blanc-casse/60 uppercase tracking-wider mb-1.5">
                  Problèmes identifiés
                </h3>
                {secteur.problemes.map((p, i) => (
                  <p
                    key={i}
                    className="font-dm text-xs text-blanc-casse/70 leading-relaxed mb-1"
                  >
                    • {p}
                  </p>
                ))}
              </div>

              <div className="pt-3 border-t border-blanc-casse/10">
                <h3 className="font-dm text-xs font-semibold text-blanc-casse/60 uppercase tracking-wider mb-2">
                  Solutions
                </h3>
                {secteur.solutions.map((sol, i) => (
                  <div key={i} className="mb-2 last:mb-0">
                    <span className="font-dm text-[10px] font-bold uppercase tracking-wider text-or-mat">
                      {sol.type}
                    </span>
                    <p className="font-dm text-sm font-semibold text-blanc-casse/90 leading-snug">
                      {sol.titre}
                    </p>
                    <p className="font-dm text-xs text-blanc-casse/60 leading-snug">
                      {sol.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="cta" size="lg" asChild>
            <a href="/#contact">{secteursData.meta.cta_label}</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Secteurs;
