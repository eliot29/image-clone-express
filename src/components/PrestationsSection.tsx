import { Cog, GraduationCap, Filter } from "lucide-react";

const prestations = [
{
  icon: Cog,
  title: "Automatisation sur-mesure",
  badge: null,
  items: [
  "Workflows via n8n",
  "Connexion à vos outils existants",
  "Automatisation des tâches répétitives",
  "Logique simple, robuste et évolutive"]

},
{
  icon: GraduationCap,
  title: "Formation & acculturation IA",
  badge: "ChatGPT · Claude · Gemini · Copilot",
  items: [
  "Usage structuré et professionnel",
  "Maîtrise du prompt",
  "Formation adaptée à votre niveau",
  "Mise en pratique sur vos cas réels"]

},
{
  icon: Filter,
  title: "Conseil & choix d'outils",
  badge: null,
  items: [
  "Le marché compte des centaines d'outils IA",
  "Filtrer les solutions pertinentes",
  "Éviter les abonnements inutiles",
  "Choisir ce qui correspond vraiment à votre activité"]

}];


const PrestationsSection = () => {
  return (
    <section id="prestations" className="bg-navy py-14">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <p className="font-syne font-bold text-or-mat text-xl sm:text-2xl mb-10 max-w-2xl mx-auto leading-snug">Le marché a des centaines d'outils. 
Mon rôle de partenaire : faire le filtre.
          </p>
          <h2 className="font-dm font-extrabold text-3xl sm:text-4xl text-blanc-casse mb-4">
            Trois leviers possibles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {prestations.map((p, i) =>
          <div
            key={i}
            className="rounded-xl border border-blanc-casse/10 bg-blanc-casse/5 hover:bg-blanc-casse/[0.08] transition-colors p-6 flex flex-col">
            
              <div className="w-12 h-12 rounded-full bg-or-mat/10 flex items-center justify-center mb-4">
                <p.icon size={22} className="text-or-mat" />
              </div>
              <h3 className="font-dm font-bold text-lg text-blanc-casse mb-1">{p.title}</h3>
              {p.badge &&
            <span className="font-dm text-xs font-semibold text-or-mat mb-3">
                  {p.badge}
                </span>
            }
              <ul className="space-y-2 mt-auto pt-4 border-t border-blanc-casse/10">
                {p.items.map((item, j) =>
              <li key={j} className="font-dm text-sm text-blanc-casse/60 flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-or-mat mt-2 shrink-0" />
                    {item}
                  </li>
              )}
              </ul>
            </div>
          )}
        </div>

        <p className="font-syne font-bold text-blanc-casse text-xl sm:text-2xl text-center max-w-2xl mx-auto leading-snug">
          Je ne vends pas de l'IA. <span className="text-or-mat">
Je vous aide à gagner votre Semaine 54.</span>
        </p>
      </div>
    </section>);
};

export default PrestationsSection;