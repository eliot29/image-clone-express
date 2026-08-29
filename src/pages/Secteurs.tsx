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
    : [];

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

      {/* Category selector — boutons au départ, dropdown ensuite */}
      <div className="container mx-auto px-6 pb-8">
        {activeCategory === null ? (
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-center sm:justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="w-full sm:w-auto rounded-xl border border-or-mat/40 bg-or-mat/10 hover:bg-or-mat/20 hover:border-or-mat text-blanc-casse font-dm font-semibold px-5 py-3 transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
              >
                {cat}
              </button>
            ))}
          </div>
        ) : (
          <div className="flex justify-center sm:justify-start">
            <Select
              value={activeCategory}
              onValueChange={(val) => setActiveCategory(val)}
            >
              <SelectTrigger className="w-full sm:w-80 rounded-xl bg-or-mat/10 border-or-mat/40 text-blanc-casse font-dm font-semibold">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      {/* Secteurs grid */}
      <section className="container mx-auto px-6 pb-16">
        <div key={activeCategory ?? "empty"} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((secteur, idx) => (
            <div
              key={secteur.id}
              style={{ animationDelay: `${idx * 60}ms`, animationFillMode: "both" }}
              className="rounded-xl border border-blanc-casse/10 bg-blanc-casse/5 p-5 hover:bg-blanc-casse/[0.08] transition-colors animate-fade-in"
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
