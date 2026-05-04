import { Eye, Target, FlaskConical, RefreshCw, User, ShieldCheck, Crosshair, ArrowRight, Cog, GraduationCap, Filter, Workflow, Link2, RotateCcw, Lightbulb, MessageSquare, PenTool, Users, SlidersHorizontal, Ban, Compass, Calculator, Bot, Puzzle, Zap, Database, FileText, BarChart3, Briefcase, MousePointerClick, Search, CheckCircle2, Wallet, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const comprehension = [
  { icon: Eye, text: "Compréhension de votre activité" },
  { icon: Target, text: "Identification des priorités" },
  { icon: Calculator, text: "Calcul ROI" },
];

const prestations = [
  {
    icon: Cog,
    title: "Automatisation",
    badge: null,
    tagline: "Des tâches répétitives qui disparaissent de votre quotidien.",
    items: [
      { icon: Workflow, text: "Workflows conçus sur-mesure via n8n" },
      { icon: Link2, text: "Connexion à vos outils existants (email, CRM, fichiers, etc.)" },
      { icon: RotateCcw, text: "Automatisation des tâches chronophages" },
      { icon: Zap, text: "Déclenchements automatiques selon vos processus métier" },
      { icon: Lightbulb, text: "Logique simple, fiable et évolutive" }
    ],
    objectif: "Supprimer les actions répétitives et réduire les erreurs."
  },
  {
    icon: Bot,
    title: "Assistant IA métier",
    badge: null,
    tagline: "Un assistant qui vous accompagne dans votre travail au quotidien.",
    items: [
      { icon: Database, text: "Connecté à vos données et à vos documents internes" },
      { icon: BarChart3, text: "Capable d'analyser, synthétiser et répondre rapidement" },
      { icon: Briefcase, text: "Adapté à votre métier et à vos besoins spécifiques" },
      { icon: MousePointerClick, text: "Utilisable simplement, sans compétence technique" }
    ],
    objectif: "Accélérer vos prises de décision et votre productivité."
  },
  {
    icon: Puzzle,
    title: "Outils métier",
    badge: null,
    tagline: "Des outils simples, conçus pour répondre à un besoin précis.",
    items: [
      { icon: Layers, text: "Création d'interfaces claires et rapides à prendre en main" },
      { icon: Link2, text: "Connexion à vos données et à vos outils existants" },
      { icon: Zap, text: "Automatisation intégrée directement dans l'outil" },
      { icon: MousePointerClick, text: "Utilisation quotidienne, sans complexité technique" }
    ],
    objectif: "Pas de logiciel complexe. Des outils simples qui font gagner du temps immédiatement."
  },
  {
    icon: GraduationCap,
    title: "Formation & acculturation IA",
    badge: "ChatGPT · Claude · Gemini · Copilot",
    tagline: "Comprendre et utiliser l'IA de manière concrète dans votre activité.",
    items: [
      { icon: MessageSquare, text: "Formation aux outils : ChatGPT, Claude, Gemini, Copilot" },
      { icon: SlidersHorizontal, text: "Structuration des usages professionnels" },
      { icon: PenTool, text: "Apprentissage des bons réflexes et du prompt" },
      { icon: Users, text: "Mise en pratique sur vos cas réels" }
    ],
    objectif: "Rendre vos équipes autonomes et efficaces rapidement."
  },
  {
    icon: Filter,
    title: "Conseil & choix d'outils",
    badge: null,
    tagline: "Faire les bons choix dans un marché saturé.",
    items: [
      { icon: Search, text: "Analyse de vos besoins réels" },
      { icon: CheckCircle2, text: "Sélection des outils les plus pertinents" },
      { icon: Wallet, text: "Éviter les abonnements inutiles" },
      { icon: Compass, text: "Mise en cohérence avec votre organisation" }
    ],
    objectif: "Aller à l'essentiel, sans perte de temps ni d'argent."
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

          <p className="font-dm text-ardoise/80 text-base mb-4 text-center">Après un <strong className="text-navy">audit gratuit</strong>, <strong className="text-navy">la solution la plus pertinente</strong> est définie à partir de <strong className="text-navy">votre réalité terrain</strong> :</p>

          <div className="flex justify-center mb-4">
            <div className="inline-block bg-gris-perle rounded-2xl px-6 py-6 md:px-8 shadow-sm">
              <h3 className="font-dm font-extrabold text-xl sm:text-2xl text-navy mb-5 text-center">
                Audit
              </h3>
              <ul className="flex flex-wrap items-start gap-x-6 gap-y-3 justify-center">
                {comprehension.map((item, i) =>
                  <li key={i} className="flex items-start gap-2 font-dm text-ardoise/70">
                    <item.icon size={16} className="text-or-mat mt-0.5 shrink-0" />
                    {item.text}
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="bg-gris-perle rounded-2xl p-6 md:p-8 mb-6 shadow-sm">
            <h3 className="font-dm font-extrabold text-xl sm:text-2xl text-navy mb-5 text-center">
              Solutions IA sur-mesure
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {prestations.slice(0, 3).map((p, i) =>
                <div
                  key={i}
                  className="rounded-2xl p-6 flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-or-mat/10 flex items-center justify-center mb-4">
                    <p.icon size={22} className="text-or-mat" />
                  </div>
                  <h4 className="font-dm font-bold text-lg text-navy mb-1">{p.title}</h4>
                  {p.badge &&
                    <span className="font-dm text-xs font-semibold text-or-mat mb-3">
                      {p.badge}
                    </span>
                  }
                  {p.tagline &&
                    <p className="font-dm text-sm italic text-ardoise/70 mb-3">
                      {p.tagline}
                    </p>
                  }
                  <ul className="space-y-2 pt-4 border-t border-ardoise/10">
                    {p.items.map((item, j) =>
                      <li key={j} className="font-dm text-sm text-ardoise/60 flex items-start gap-2">
                        <item.icon size={14} className="text-or-mat mt-0.5 shrink-0" />
                        {item.text}
                      </li>
                    )}
                  </ul>
                  {p.objectif &&
                    <p className="font-dm text-sm font-semibold text-navy mt-4 pt-4 border-t border-ardoise/10">
                      👉 {p.objectif}
                    </p>
                  }
                </div>
              )}
            </div>
          </div>
          <div className="bg-gris-perle rounded-2xl p-6 md:p-8 mb-6 shadow-sm">
            <h3 className="font-dm font-extrabold text-xl sm:text-2xl text-navy mb-5 text-center">
              Accompagnement & montée en compétence IA
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prestations.slice(3).map((p, i) =>
                <div
                  key={i}
                  className="rounded-2xl p-6 flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-or-mat/10 flex items-center justify-center mb-4">
                    <p.icon size={22} className="text-or-mat" />
                  </div>
                  <h4 className="font-dm font-bold text-lg text-navy mb-1">{p.title}</h4>
                  {p.badge &&
                    <span className="font-dm text-xs font-semibold text-or-mat mb-3">
                      {p.badge}
                    </span>
                  }
                  {p.tagline &&
                    <p className="font-dm text-sm italic text-ardoise/70 mb-3">
                      {p.tagline}
                    </p>
                  }
                  <ul className="space-y-2 pt-4 border-t border-ardoise/10">
                    {p.items.map((item, j) =>
                      <li key={j} className="font-dm text-sm text-ardoise/60 flex items-start gap-2">
                        <item.icon size={14} className="text-or-mat mt-0.5 shrink-0" />
                        {item.text}
                      </li>
                    )}
                  </ul>
                  {p.objectif &&
                    <p className="font-dm text-sm font-semibold text-navy mt-4 pt-4 border-t border-ardoise/10">
                      👉 {p.objectif}
                    </p>
                  }
                </div>
              )}
            </div>
          </div>

          <div className="bg-gris-perle rounded-2xl p-6 shadow-sm mb-6">
            <ul className="space-y-3 flex flex-col items-center text-center">
              {validation.map((item, i) =>
                <li key={`v-${i}`} className="flex items-start gap-3 font-dm font-bold text-ardoise text-center">
                  <item.icon size={16} className="text-or-mat mt-0.5 shrink-0" />
                  <span>{item.text}</span>
                </li>
              )}
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