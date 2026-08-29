import { Cog, GraduationCap, Filter, Workflow, Link2, RotateCcw, Lightbulb, MessageSquare, PenTool, Users, SlidersHorizontal, ShieldCheck, Ban, Compass, Repeat, CalendarCheck, Eye, Wrench, MessageCircle } from "lucide-react";

const prestations = [
{
  icon: Cog,
  title: "Automatisation sur-mesure",
  badge: null,
  items: [
    { icon: Workflow, text: "Automatisations connectées à vos outils" },
    { icon: Link2, text: "Connexion à vos outils existants" },
    { icon: RotateCcw, text: "Automatisation des tâches répétitives" },
    { icon: Lightbulb, text: "Logique simple, robuste et évolutive" }
  ]
},
{
  icon: GraduationCap,
  title: "Formation à l'IA",
  badge: "ChatGPT · Claude · Gemini · Copilot",
  items: [
    { icon: MessageSquare, text: "Usage structuré et professionnel" },
    { icon: PenTool, text: "Savoir formuler vos demandes" },
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
},
{
  icon: Repeat,
  title: "Accompagnement continu",
  badge: null,
  items: [
    { icon: CalendarCheck, text: "Point régulier sur vos priorités" },
    { icon: Eye, text: "Veille sur les outils qui bougent" },
    { icon: Wrench, text: "Ajustement des automatisations existantes" },
    { icon: MessageCircle, text: "Disponibilité entre deux points" }
  ]
}];


const PrestationsSection = () => {
  return (
    <section id="prestations" className="bg-blanc-casse py-16 md:py-24">
      <div className="section-shell">
        <div className="text-left mb-4">
          <h2 className="font-syne font-extrabold text-[28px] sm:text-4xl text-navy mb-4">
            Trois façons de vous faire gagner du temps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
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
      </div>
    </section>);
};

export default PrestationsSection;
