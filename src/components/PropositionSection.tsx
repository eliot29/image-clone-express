const PropositionSection = () => {
  return (
    <section className="bg-blanc-casse py-14">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-dm font-extrabold text-3xl sm:text-4xl text-navy mb-8 text-center">
            Ce que je propose concrètement
          </h2>

          <p className="font-dm text-ardoise/80 text-base mb-6 text-center">
            Après un audit gratuit, je détermine la solution la plus pertinente :
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 mb-4">
            <ul className="space-y-3">
              {[
                "automatisation via n8n",
                "outil ou assistant IA configuré sur-mesure",
                "formation ciblée aux LLM et aux outils à base d'IA",
                "ou combinaison de ces solutions",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-dm text-ardoise/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-or-mat mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="space-y-4">
              <p className="font-dm text-ardoise/80 leading-relaxed">
                On avance étape par étape. Je commence par identifier les priorités : ce qui doit réellement être traité, simplifié ou assisté par l'IA.
              </p>
              <p className="font-dm text-ardoise/80 leading-relaxed">
                Je mets en place ou je forme, l'entreprise teste, puis j'ajuste selon les retours terrain.
              </p>
            </div>
          </div>

          <p className="font-dm text-ardoise/80 leading-relaxed text-center mb-10">
            Objectif : une solution utile, progressive et adaptée à votre réalité.
          </p>

          <p className="font-syne font-bold text-navy text-xl sm:text-2xl leading-snug max-w-4xl mx-auto text-center">
            Les outils IA sont devenus plus accessibles. Mais les maîtriser demande du temps. Ce temps, je l'ai pris. Mon travail consiste à vous faire gagner le vôtre.
            <br />
            <span className="text-or-mat">Je ne suis pas ingénieur IA. Je suis implémenteur IA.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PropositionSection;
