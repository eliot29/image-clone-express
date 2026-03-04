const steps = [
  {
    num: "01",
    title: "Diagnostic",
    desc: "Comprendre votre activité, vos contraintes, vos objectifs. Identifier ce qui a le meilleur retour sur investissement.",
  },
  {
    num: "02",
    title: "Proposition",
    desc: "Adaptée à votre situation réelle. Pas de solution générique copiée-collée. Sous 3 jours ouvrés.",
  },
  {
    num: "03",
    title: "Mise en place & calibration",
    desc: "Dans vos conditions réelles — pas dans une démonstration. On calibre jusqu'à ce que ça fonctionne.",
  },
  {
    num: "04",
    title: "Transmission",
    desc: "Utiliser, surveiller, adapter. L'objectif : votre autonomie, pas votre dépendance.",
  },
  {
    num: "05",
    title: "Suivi",
    desc: "Les outils évoluent, votre activité aussi. On reste disponibles.",
  },
];

const MethodeSection = () => {
  return (
    <section id="methode" className="bg-gris-perle py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-navy mb-4">
              Un accompagnement structuré, étape par étape.
            </h2>
            <p className="punchline text-ardoise text-lg mx-auto max-w-xl inline-block">
              Proposer une solution avant de comprendre le problème, c'est exactement ce que nous ne faisons pas.
            </p>
          </div>

          <div className="space-y-0">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6 group">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center shrink-0">
                    <span className="font-syne text-sm font-bold text-or-mat">{step.num}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px h-full bg-navy/15 my-1" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-10">
                  <h3 className="font-syne font-bold text-lg text-navy mb-1">{step.title}</h3>
                  <p className="font-dm text-sm text-ardoise/70 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodeSection;
