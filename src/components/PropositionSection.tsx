import { Workflow, Bot, GraduationCap, Puzzle, Target, Wrench, FlaskConical, RefreshCw, User, ShieldCheck, Crosshair } from "lucide-react";

const solutions = [
  { icon: Workflow, text: "Automatisation via n8n" },
  { icon: Bot, text: "Outil ou assistant IA configuré sur-mesure" },
  { icon: GraduationCap, text: "Formation ciblée aux LLM et aux outils d'IA" },
  { icon: Puzzle, text: "Ou combinaison de ces solutions" },
];

const etapes = [
  { icon: Target, text: "Identification des priorités" },
  { icon: Wrench, text: "Mise en place ou formation ciblée" },
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
        <div className="max-w-4xl mx-auto">
          <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-navy mb-5 text-center">
            Ce que je propose concrètement
          </h2>

          <p className="font-dm text-ardoise/80 text-base mb-4 text-center">Après un audit gratuit, la solution la plus pertinente est définie à partir de votre réalité terrain :</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="bg-gris-perle rounded-2xl p-6 shadow-sm">
              <ul className="space-y-3">
                {solutions.map((item, i) =>
                  <li key={i} className="flex items-start gap-3 font-dm text-ardoise/70">
                    <item.icon size={16} className="text-or-mat mt-0.5 shrink-0" />
                    {item.text}
                  </li>
                )}
              </ul>
            </div>

            <div className="bg-gris-perle rounded-2xl p-6 shadow-sm">
              <ul className="space-y-3">
                {etapes.map((item, i) =>
                  <li key={i} className="flex items-start gap-3 font-dm text-ardoise/70">
                    <item.icon size={16} className="text-or-mat mt-0.5 shrink-0" />
                    {item.text}
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="bg-gris-perle rounded-2xl p-6 shadow-sm mb-6">
            <ul className="space-y-3">
              {engagements.map((item, i) =>
                <li key={i} className="flex items-start gap-3 font-dm text-ardoise/70">
                  <item.icon size={16} className="text-or-mat mt-0.5 shrink-0" />
                  <span><strong className="font-bold text-ardoise">{item.bold}</strong>{item.rest}</span>
                </li>
              )}
              <li className="flex items-start gap-3 font-dm text-ardoise font-bold">
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
        </div>
      </div>
    </section>
  );
};

export default PropositionSection;