const PropositionSection = () => {
  return (
    <section className="bg-blanc-casse py-10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-dm font-extrabold text-3xl sm:text-4xl text-navy mb-5 text-center">
            Ce que je propose concrètement
          </h2>

          <p className="font-dm text-ardoise/80 text-base mb-4 text-center">
            Après un audit gratuit, je détermine la solution la plus pertinente :
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="bg-gris-perle rounded-2xl p-6 shadow-sm">
              <ul className="space-y-3">
                {[
                "automatisation via n8n",
                "outil ou assistant IA configuré sur-mesure",
                "formation ciblée aux LLM et aux outils à base d'IA",
                "ou combinaison de ces solutions"].
                map((item, i) =>
                <li key={i} className="flex items-start gap-3 font-dm text-ardoise/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-or-mat mt-2 shrink-0" />
                    {item}
                  </li>
                )}
              </ul>
            </div>

            <div className="bg-gris-perle rounded-2xl p-6 shadow-sm">
              <ul className="space-y-3">
                {[
                "Identification des priorités",
                "Mise en place ou formation ciblée",
                "Test en conditions réelles",
                "Ajustements selon les retours terrain"].map((item, i) =>
                <li key={i} className="flex items-start gap-3 font-dm text-ardoise/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-or-mat mt-2 shrink-0" />
                    {item}
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="bg-gris-perle rounded-2xl p-6 shadow-sm mb-6">
            <ul className="space-y-3">
              {[
              "Un seul interlocuteur, de l'audit jusqu'à la mise en service",
              "Les projets sont volontairement limités pour garantir disponibilité et qualité de suivi"].map((item, i) =>
              <li key={i} className="flex items-start gap-3 font-dm text-ardoise/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-or-mat mt-2 shrink-0" />
                  {item}
                </li>
              )}
              <li className="flex items-start gap-3 font-dm text-ardoise/70 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-or-mat mt-2 shrink-0" />
                Objectif : déléguer vos tâches chronophages, répétitives, pénibles ou mal maîtrisées
              </li>
            </ul>
          </div>

          <p className="font-dm font-bold text-navy text-lg sm:text-xl leading-snug max-w-full mx-auto text-center">Maîtriser et tester les outils IA demande du temps. Ce temps, je l'ai pris. Mon travail consiste à vous faire gagner le vôtre.
          </p>
        </div>
      </div>
    </section>);
};

export default PropositionSection;