import { Eye, Target, FlaskConical, RefreshCw, User, ShieldCheck, Crosshair, ArrowRight, Cog, GraduationCap, Filter, Workflow, Link2, RotateCcw, Lightbulb, MessageSquare, PenTool, Users, SlidersHorizontal, Ban, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const comprehension = [
  { icon: Eye, text: "Compréhension de votre activité" },
  { icon: Target, text: "Identification des priorités" },
];

const prestations = [
  {
    icon: Cog,
    title: "Automatisation sur-mesure",
    badge: null,
    items: [
      { icon: Workflow, text: "Workflows via n8n" },
      { icon: Link2, text: "Connexion à vos outils existants" },
      { icon: RotateCcw, text: "Automatisation des tâches répétitives" },
      { icon: Lightbulb, text: "Logique simple, robuste et évolutive" }
    ]
  },
  {
    icon: GraduationCap,
    title: "Formation & acculturation IA",
    badge: "ChatGPT · Claude · Gemini · Copilot",
    items: [
      { icon: MessageSquare, text: "Usage structuré et professionnel" },
      { icon: PenTool, text: "Maîtrise du prompt" },
      { icon: Users, text: "Formation adaptée à votre niveau" },
      { icon: SlidersHorizontal, text: "Mise en pratique sur vos cas réels" }
    ]
  },
  {
    icon: Filter,
    title: "Conseil & choix d'outils",
    badge: null,
    items: [
      { icon: Compass, text: "Le marché compte des centaines d'outils IA" },
      { icon: ShieldCheck, text: "Filtrer les solutions pertinentes" },
      { icon: Ban, text: "Éviter les abonnements inutiles" },
      { icon: Lightbulb, text: "Choisir ce qui correspond vraiment à votre activité" }
    ]
  }
];

const validation = [
  { icon: FlaskConical, text: "Test en conditions réelles" },
  { icon: RefreshCw, text: "Ajustements selon les retours terrain" },
];

const engagements = [
  { icon: User, bold: "Un seul interlocuteur en Bretagne", rest: ", de l'audit jusqu'à la mise en service" },
  { icon: ShieldCheck, bold: "Les projets sont volontairement limités", rest: " pour garantir disponibilité et qualité de suivi" },
];

const PropositionSection = () => {
  return (
    <section id="prestations" className="bg-blanc-casse py-6">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl lg:max-w-6xl mx-auto">
          <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-navy mb-5 text-center">
            Ce que je propose concrètement
          </h2>

          <p className="font-dm text-ardoise/80 text-base mb-4 text-center">Après un audit gratuit, <strong className="text-navy">la solution la plus pertinente</strong> est définie à partir de <strong className="text-navy">votre réalité terrain</strong> :</p>

          <div className="flex flex-col gap-6 mb-4">
            {[comprehension].map((group, gi) => (
              <div key={gi} className="bg-gris-perle rounded-2xl p-6 shadow-sm">
                <ul className="flex flex-wrap items-start gap-x-6 gap-y-3 justify-center">
                  {group.map((item, i) =>
                    <li key={i} className="flex items-start gap-2 font-dm text-ardoise/70">
                      <item.icon size={16} className="text-or-mat mt-0.5 shrink-0" />
                      {item.text}
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {prestations.map((p, i) =>
              <div
                key={i}
                className="rounded-xl border border-navy/10 bg-navy/5 hover:bg-navy/[0.08] transition-colors p-6 flex flex-col">
                <div className="w-12 h-12 rounded-full bg-or-mat/10 flex items-center justify-center mb-4">
                  <p.icon size={22} className="text-or-mat" />
                </div>
                <h3 className="font-dm font-bold text-lg text-navy mb-1">{p.title}</h3>
                {p.badge &&
                  <span className="font-dm text-xs font-semibold text-or-mat mb-3">
                    {p.badge}
                  </span>
                }
                <ul className="space-y-2 mt-auto pt-4 border-t border-navy/10">
                  {p.items.map((item, j) =>
                    <li key={j} className="font-dm text-sm text-ardoise/60 flex items-start gap-2">
                      <item.icon size={14} className="text-or-mat mt-0.5 shrink-0" />
                      {item.text}
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-6 mb-4">
            {[validation].map((group, gi) => (
              <div key={gi} className="bg-gris-perle rounded-2xl p-6 shadow-sm">
                <ul className="flex flex-wrap items-start gap-x-6 gap-y-3 justify-center">
                  {group.map((item, i) =>
                    <li key={i} className="flex items-start gap-2 font-dm text-ardoise/70">
                      <item.icon size={16} className="text-or-mat mt-0.5 shrink-0" />
                      {item.text}
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gris-perle rounded-2xl p-6 shadow-sm mb-6">
            <ul className="space-y-3 flex flex-col items-center text-center">
              {engagements.map((item, i) =>
                <li key={i} className="flex items-start gap-3 font-dm text-ardoise/70 text-center">
                  <item.icon size={16} className="text-or-mat mt-0.5 shrink-0" />
                  <span><strong className="font-bold text-ardoise">{item.bold}</strong>{item.rest}</span>
                </li>
              )}
              <li className="flex items-start gap-3 font-dm text-ardoise font-bold text-center">
                <Crosshair size={16} className="text-or-mat mt-0.5 shrink-0" />
                <span>Objectif : vous libérer de vos tâches chronophages, répétitives ou mal maîtrisées,<br />pour vous concentrer sur ce qui crée réellement de la valeur.</span>
              </li>
            </ul>
          </div>

          <p className="font-dm font-bold text-navy text-lg sm:text-xl leading-snug max-w-full mx-auto text-center">
            Maîtriser et tester les outils IA demande du temps.
          </p>
          <p className="font-dm font-bold text-or-mat text-lg sm:text-xl leading-snug max-w-full mx-auto text-center mt-2">
            Ce temps, je l'ai pris. Mon travail consiste à vous faire gagner le vôtre.
          </p>

          <div className="text-center mt-4">
            <Button variant="ctaOutline" size="default" asChild>
              <Link to="/comment-ca-marche#solutions">
                Les solutions en détails
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropositionSection;