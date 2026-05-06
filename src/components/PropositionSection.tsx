import { Eye, Target, FlaskConical, RefreshCw, User, ShieldCheck, Crosshair, ArrowRight, ArrowDown, ArrowDownLeft, Cog, GraduationCap, Filter, Workflow, Link2, RotateCcw, Lightbulb, MessageSquare, PenTool, Users, SlidersHorizontal, Ban, Compass, Calculator, Bot, Puzzle, Zap, Database, FileText, BarChart3, Briefcase, MousePointerClick, Search, CheckCircle2, Wallet, Layers } from "lucide-react";
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
    title: "Formation aux outils IA",
    badge: "ChatGPT · Claude · Gemini · Copilot",
    tagline: null,
    items: [
      { icon: MessageSquare, text: "Formation aux outils : ChatGPT, Claude, Gemini, Copilot" },
      { icon: SlidersHorizontal, text: "Structuration des usages professionnels" },
      { icon: PenTool, text: "Apprentissage des bons réflexes et du prompt" },
      { icon: Users, text: "Mise en pratique sur vos cas réels" }
    ],
    objectif: "Rendre vos équipes autonomes et efficaces rapidement."
  },
  {
    icon: Compass,
    title: "Intégration & usages IA",
    badge: null,
    tagline: "Adapter l'IA aux habitudes de travail et aux besoins réels de l'entreprise.",
    items: [
      { icon: Users, text: "Cadrage des usages au sein des équipes" },
      { icon: SlidersHorizontal, text: "Adaptation aux processus existants" },
      { icon: Workflow, text: "Mise en place progressive et accompagnée" }
    ],
    objectif: "Ancrer l'IA dans le quotidien de l'entreprise."
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
];

const PrestationItem = ({ p }: { p: typeof prestations[number] }) => (
  <div className="flex items-start gap-3">
    <div className="w-9 h-9 rounded-full bg-or-mat/10 flex items-center justify-center shrink-0">
      <p.icon size={18} className="text-or-mat" />
    </div>
    <div className="min-w-0">
      <h4 className="font-dm font-bold text-base text-navy leading-tight">{p.title}</h4>
      {p.badge && (
        <span className="block font-dm text-xs font-semibold text-or-mat">{p.badge}</span>
      )}
      {p.tagline && (
        <p className="font-dm text-xs italic text-ardoise/70 leading-snug mt-0.5">{p.tagline}</p>
      )}
    </div>
  </div>
);

const PropositionSection = () => {
  return (
    <section id="prestations" className="bg-blanc-casse py-6">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl lg:max-w-6xl mx-auto">
          <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-navy mb-5 text-center">
            Ce que je propose concrètement
          </h2>

          <p className="font-dm text-ardoise/80 text-base mb-4 text-center">Après un <strong className="text-navy">audit gratuit</strong>, <strong className="text-navy">la solution la plus pertinente</strong> est définie à partir de <strong className="text-navy">votre réalité terrain</strong> :</p>

          {/* Audit block - DESKTOP centered */}
          <div className="hidden md:flex justify-center mb-4">
            <div className="inline-block bg-gris-perle rounded-2xl px-6 py-6 md:px-8 shadow-sm">
              <h3 className="font-dm font-extrabold text-xl sm:text-2xl text-navy mb-5 text-center">
                Audit gratuit
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

          {/* Connecteur branché DESKTOP : Audit -> (IA sur-mesure | Accompagnement | les deux) */}
          <div className="hidden md:flex flex-col items-center mb-2" aria-hidden="true">
            <div className="w-1 h-6 bg-or-mat/70" />
            <div className="relative w-full max-w-3xl h-10">
              {/* horizontal bar spanning between the two branches */}
              <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-or-mat/70" />
              {/* vertical branches, overlap horizontal bar to form clean square corners */}
              <div className="absolute top-0 left-1/4 -translate-x-1/2 w-1 h-10 bg-or-mat/70" />
              <div className="absolute top-0 right-1/4 translate-x-1/2 w-1 h-10 bg-or-mat/70" />
              {/* Arrow heads matching bar color/thickness */}
              <svg className="absolute -bottom-[6px] left-1/4 -translate-x-1/2 text-or-mat/70" width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
                <path d="M1 1 L9 12 L17 1" stroke="currentColor" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter" />
              </svg>
              <svg className="absolute -bottom-[6px] right-1/4 translate-x-1/2 text-or-mat/70" width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
                <path d="M1 1 L9 12 L17 1" stroke="currentColor" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter" />
              </svg>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 font-dm text-xs tracking-wider text-or-mat font-bold whitespace-nowrap bg-blanc-casse px-3">
                CONCEPTION IA ET/OU ACCOMPAGNEMENT IA
              </span>
            </div>
          </div>

          {/* MOBILE : Audit + rail continu à gauche descendant vers les 2 blocs */}
          <div className="md:hidden mb-6">
            {/* Audit */}
            <div className="bg-gris-perle rounded-2xl px-4 py-5 shadow-sm">
              <h3 className="font-dm font-extrabold text-xl text-navy mb-5 text-center">
                Audit gratuit
              </h3>
              <div className="flex flex-col gap-3">
                {comprehension.map((item, i) =>
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-or-mat/10 flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-or-mat" />
                    </div>
                    <span className="font-dm font-bold text-base text-navy leading-tight pt-2">{item.text}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Flèche descendante entre Audit et le label */}
            <div className="flex justify-center mt-3" aria-hidden="true">
              <ArrowDown size={20} className="text-or-mat" />
            </div>

            {/* Label encadré centré */}
            <div className="flex justify-center mt-2 mb-3">
              <span className="inline-block border border-or-mat rounded-md px-3 py-1 font-dm text-xs tracking-wider text-or-mat font-bold whitespace-nowrap">
                CONCEPTION IA ET/OU ACCOMPAGNEMENT IA
              </span>
            </div>

            {/* Bloc 1 - Conception IA */}
            <div>
              <div className="bg-gris-perle rounded-2xl px-4 py-5 shadow-sm">
                <h3 className="font-dm font-extrabold text-xl text-navy mb-5 text-center">
                  Conception IA sur-mesure
                </h3>
                <div className="flex flex-col gap-3">
                  {prestations.slice(0, 3).map((p, i) =>
                    <PrestationItem key={i} p={p} />
                  )}
                </div>
              </div>
            </div>

            {/* Bloc 2 - Accompagnement */}
            <div className="bg-gris-perle rounded-2xl px-4 py-5 shadow-sm mt-4">
                <h3 className="font-dm font-extrabold text-xl text-navy mb-5 text-center">
                  Accompagnement IA
                </h3>
                <div className="flex flex-col gap-3">
                  {prestations.slice(3).map((p, i) =>
                    <PrestationItem key={i} p={p} />
                  )}
                </div>
            </div>
          </div>

          <div className="hidden md:grid md:grid-cols-2 gap-4 mb-6 items-stretch">
            <div className="bg-gris-perle rounded-2xl px-4 py-5 shadow-sm flex flex-col">
              <h3 className="font-dm font-extrabold text-xl sm:text-2xl text-navy mb-5 text-center">
                Conception IA sur-mesure
              </h3>
              <div className="flex flex-col gap-3">
                {prestations.slice(0, 3).map((p, i) =>
                  <PrestationItem key={i} p={p} />
                )}
              </div>
            </div>

            <div className="bg-gris-perle rounded-2xl px-4 py-5 shadow-sm flex flex-col">
              <h3 className="font-dm font-extrabold text-xl sm:text-2xl text-navy mb-5 text-center">
                Accompagnement IA
              </h3>
              <div className="flex flex-col gap-3">
                {prestations.slice(3).map((p, i) =>
                  <PrestationItem key={i} p={p} />
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <div className="inline-block rounded-2xl px-6 py-5 md:px-8 bg-or-mat/15 border border-or-mat/40 max-w-3xl">
              <p className="font-dm text-navy text-base sm:text-lg leading-relaxed text-center">
                <strong className="font-bold">Objectif : vous libérer des tâches</strong> chronophages, répétitives, mal maîtrisées. <strong className="font-bold">Pour vous concentrer sur ce qui crée réellement de la valeur.</strong>
              </p>
            </div>
          </div>

          <p className="font-dm font-bold text-navy text-lg sm:text-xl leading-snug max-w-full mx-auto text-center">
            Maîtriser et tester les outils IA demande du temps.
          </p>
          <p className="font-dm font-bold text-or-mat text-lg sm:text-xl leading-snug max-w-full mx-auto text-center mt-2">
            Ce temps, je l'ai pris. Mon travail consiste à vous faire gagner le vôtre.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <Button variant="ctaOutline" size="default" asChild>
              <Link to="/conception-ia-sur-mesure">
                Découvrir les conceptions IA sur-mesure
                <ArrowRight size={16} />
              </Link>
            </Button>
            <Button variant="ctaOutline" size="default" asChild>
              <Link to="/accompagnement-ia">
                Découvrir l'accompagnement IA
                <ArrowRight size={16} />
              </Link>
            </Button>
            <Button variant="ctaOutline" size="default" asChild>
              <Link to="/secteurs">
                À qui s'adresse Semaine 54 ?
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