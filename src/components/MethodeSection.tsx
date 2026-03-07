const steps = [
{
  num: "01",
  title: "Diagnostic gratuit (30 min)",
  desc: "Visio ou téléphone. Comprendre votre activité, vos contraintes et vos objectifs. Identifier les tâches qui consomment le plus de temps et celles qui offrent le meilleur retour sur investissement. L'occasion pour vous de savoir ce que l'IA peut réaliser de manière concrète.",
  note: "Sans engagement. Aucune vente forcée."
},
{
  num: "02",
  title: "Proposition sous trois jours ouvrés",
  desc: "Une proposition adaptée à votre situation réelle. Je prends le temps de :",
  items: [
  "lister les solutions possibles",
  "prioriser les actions",
  "estimer les gains potentiels"],

  note: "Objectif : une vision claire avant toute mise en place."
},
{
  num: "03",
  title: "Mise en place : calibration et transmission",
  desc: "La solution est configurée et testée dans vos conditions réelles. Nous travaillons sur des cas concrets de votre quotidien afin de garantir une utilisation simple et efficace.",
  note: "Selon les besoins : automatisation, outil IA ou formation."
},
{
  num: "04",
  title: "Suivi",
  desc: "Les outils évoluent. Votre activité aussi. Je reste disponible pour :",
  items: [
  "ajuster les solutions mises en place",
  "répondre aux questions",
  "approfondir certains usages si nécessaire"]

}];


const MethodeSection = () => {
  return (
    <section id="methode" className="bg-blanc-casse py-10">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="font-dm font-extrabold text-3xl sm:text-4xl text-navy mb-4">
              La méthode Semaine 54
            </h2>
          </div>

          <p className="font-dm font-bold text-navy text-lg sm:text-xl mb-8 text-center leading-snug max-w-full mx-auto">

          </p>

          <p className="font-dm text-ardoise/70 text-center mb-8">
            Un accompagnement structuré, étape par étape.
          </p>

          <div className="space-y-0">
            {steps.map((step, i) =>
            <div key={i} className="flex gap-6 group">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-or-mat/10 flex items-center justify-center shrink-0">
                    <span className="font-dm text-sm font-bold text-or-mat">{step.num}</span>
                  </div>
                  {i < steps.length - 1 &&
                <div className="w-px h-full bg-navy/15 my-1" />
                }
                </div>

                {/* Content */}
                <div className="pb-10">
                  <h3 className="font-dm font-bold text-lg text-navy mb-2">{step.title}</h3>
                  <p className="font-dm text-sm text-ardoise/70 leading-relaxed">{step.desc}</p>
                  {step.items &&
                <ul className="mt-3 space-y-1.5">
                      {step.items.map((item, j) =>
                  <li key={j} className="flex items-start gap-2 font-dm text-sm text-ardoise/70">
                          <span className="w-1.5 h-1.5 rounded-full bg-or-mat mt-1.5 shrink-0" />
                          {item}
                        </li>
                  )}
                    </ul>
                }
                  {step.note &&
                <p className="font-dm text-xs text-or-mat mt-3 italic">{step.note}</p>
                }
                </div>
              </div>
            )}
          </div>

          

          
        </div>
      </div>
    </section>);

};

export default MethodeSection;