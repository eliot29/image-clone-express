import { Search, Cog, GraduationCap, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const prestations = [
  {
    icon: Search,
    title: "Audit stratégique",
    badge: "Gratuit",
    items: [
      "Diagnostic opérationnel de 30 à 45 minutes",
      "Identification des priorités",
      "Aucune vente forcée",
    ],
  },
  {
    icon: Cog,
    title: "Automatisation sur-mesure",
    badge: null,
    items: [
      "Workflows via n8n",
      "Connexion à vos outils existants",
      "Logique simple, robuste, évolutive",
    ],
  },
  {
    icon: GraduationCap,
    title: "Formation & acculturation IA",
    badge: "Visio ou présentiel en Bretagne",
    items: [
      "ChatGPT · Claude · Gemini · Copilot",
      "Usage structuré et professionnel",
      "Sessions adaptées à votre niveau",
    ],
  },
  {
    icon: Filter,
    title: "Conseil & choix d'outils",
    badge: null,
    items: [
      "Filtrer le marché",
      "Éviter les abonnements inutiles",
      "Choisir ce qui correspond à votre réalité",
    ],
  },
];

const PrestationsSection = () => {
  return (
    <section id="prestations" className="bg-blanc-casse py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-navy mb-4">
            Trois leviers. Le bon selon votre situation.
          </h2>
          <p className="punchline text-ardoise text-lg mx-auto max-w-xl inline-block">
            Pas de package imposé avant diagnostic.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {prestations.map((p, i) => (
            <div
              key={i}
              className="bg-card rounded-xl border border-border shadow-card hover:shadow-card-hover transition-shadow p-6 flex flex-col"
            >
              <div className="w-12 h-12 rounded-full bg-or-mat/10 flex items-center justify-center mb-4">
                <p.icon size={22} className="text-or-mat" />
              </div>
              <h3 className="font-syne font-bold text-lg text-navy mb-1">{p.title}</h3>
              {p.badge && (
                <span className="font-dm text-xs font-semibold uppercase tracking-wider text-or-mat mb-3">
                  {p.badge}
                </span>
              )}
              <ul className="space-y-2 mt-auto pt-4">
                {p.items.map((item, j) => (
                  <li key={j} className="font-dm text-sm text-ardoise/70 flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-or-mat mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="punchline text-ardoise text-center mt-12 text-lg max-w-xl mx-auto">
          Le marché a des centaines d'outils. Mon rôle : faire le filtre.
        </p>
      </div>
    </section>
  );
};

export default PrestationsSection;
