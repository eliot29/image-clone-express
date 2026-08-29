const blocks = [
  {
    title: "Un standard téléphonique qui répond seul",
    description:
      "Il donne le stock du jour, propose les prochains samedis et enregistre les réservations de plateaux.",
    result: "Environ un appel sur deux traité sans décrocher",
  },
  {
    title: "Un inventaire dicté en fin de service",
    description:
      "Le comptage se fait à la voix, avec un aperçu de ce qui passe à zéro, et se range tout seul dans le tableur.",
    result: "25 minutes par jour → 5 minutes",
  },
  {
    title: "Les bons de transport dictés",
    description: "Dictés à la voix, corrigés ligne par ligne, sortis en PDF.",
    result: "15 minutes par bon → 3 minutes",
  },
  {
    title: "Les publications réseaux générées depuis le stock réel",
    description: "Ce qui est annoncé en ligne est ce qui est en vitrine.",
    result: "20 minutes par semaine → zéro",
  },
  {
    title: "La traçabilité photo et les rappels d'hygiène",
    description: "Automatiques, sans intervention.",
    result: "Plus d'oubli en fin de service",
  },
];

const PoissonnerieSection = () => {
  return (
    <section id="poissonnerie" className="bg-blanc-casse py-16 md:py-24">
      <div className="section-shell">
        <div className="text-left mb-4">
          <h2 className="font-syne font-extrabold text-[28px] sm:text-4xl text-navy">
            Le cas d'une poissonnerie du Finistère
          </h2>
          <p className="font-dm text-ardoise/70 text-[15px] mt-3 max-w-2xl leading-relaxed">
            Un commerce où l'on a les mains mouillées et pas de clavier. Tout se
            pilote à la voix.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
          {blocks.map((block, i) => (
            <div
              key={i}
              className="card-lift rounded-xl px-6 py-5 bg-card shadow-card"
            >
              <h3 className="font-syne font-bold text-lg text-navy mb-3">
                {block.title}
              </h3>
              <p className="font-dm text-[15px] text-ardoise/85 leading-relaxed">
                {block.description}
              </p>
              <div className="mt-4 pt-3 border-t border-navy/10">
                <span className="font-dm text-[15px] text-or-mat-clair font-bold">
                  {block.result}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl bg-navy px-6 py-10 md:px-12 md:py-12 text-center">
          <p className="font-dm text-blanc-casse/90 text-lg sm:text-xl leading-relaxed">
            Onze automatisations connectées entre elles.
          </p>
          <p className="font-dm font-bold text-blanc-casse text-lg sm:text-2xl leading-relaxed mt-2 max-w-3xl mx-auto">
            Environ 2 h 30 récupérées chaque semaine, soit{" "}
            <span className="font-syne font-extrabold text-or-mat text-[72px] sm:text-[88px] leading-none align-middle mx-2">
              120
            </span>{" "}
            heures par an — sa Semaine 54.
          </p>
        </div>

        <p className="font-dm text-ardoise/60 text-[13px] mt-3">
          Mise en service prochainement.
        </p>
      </div>
    </section>
  );
};

export default PoissonnerieSection;
