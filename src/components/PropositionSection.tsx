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

            <div className="bg-gris-perle rounded-2xl p-6 shadow-sm space-y-4">
              <p className="font-dm text-ardoise/80 leading-relaxed">
                On avance étape par étape. Je commence par identifier les priorités : ce qui doit réellement être traité, simplifié ou assisté par l'IA.
              </p>
              <p className="font-dm text-ardoise/80 leading-relaxed">
                Je mets en place ou je forme, l'entreprise teste, puis j'ajuste selon les retours terrain.
              </p>
            </div>
          </div>

          <p className="font-dm text-ardoise/80 leading-relaxed text-center mb-6">> Un seul interlocuteur, de l'audit jusqu'à la mise en service
> Les projets sont volontairement limités pour garantir disponibilité et qualité de suivi.
          </p>

          <p className="font-dm font-bold text-navy text-xl sm:text-2xl leading-snug max-w-full mx-auto text-center">
            Maîtriser et tester les outils IA demande du temps.
            <br />
            Ce temps, je l'ai pris. Mon travail consiste à vous faire gagner le vôtre.
          </p>
        </div>
      </div>
    </section>);
};

export default PropositionSection;