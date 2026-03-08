const PourquoiNousSection = () => {
  return (
    <section id="approche" className="bg-blanc-casse py-6">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl lg:max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-navy mb-4">
              Pourquoi Semaine 54 ?
            </h2>
          </div>

          <div className="font-dm text-ardoise/80 space-y-4 mb-6 leading-relaxed">
            <p>
              Je suis <strong className="text-navy">Clément, 35 ans</strong>, à l'initiative de <strong className="text-navy">Semaine 54</strong>.
            </p>
            <p>
              J'ai travaillé plusieurs années en <strong className="text-navy">grande distribution</strong>, d'abord comme chef de rayon, puis comme chef de secteur GMS côté marques.
            </p>
            <p className="text-ardoise/80">
              Depuis trois ans, je teste et utilise les outils d'IA dans des <strong className="text-navy">contextes professionnels afin d'en comprendre les usages pertinents pour les entreprises.</strong>
            </p>
            <p className="font-semibold text-navy">
              Mon constat : l'IA 2026 est un levier de croissance pour les PME en rendant accessibles des solutions jusque-là réservées aux grands groupes.
            </p>
            <p className="text-ardoise/80">
              <strong className="text-navy">Deux expériences concrètes</strong> ont confirmé cette conviction :
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="bg-navy/5 border border-navy/10 rounded-xl p-6">
              <p className="font-dm text-ardoise/80 leading-relaxed">
                J'ai accompagné une poissonnerie du Pays d'Iroise.
                En structurant une stratégie nourrie par l'IA et en utilisant des outils assistés par IA, les résultats ont été mesurables : <strong className="text-navy">73 000 vues</strong>, plus de <strong className="text-navy">800 abonnés gagnés</strong> et <strong className="text-or-mat">+15 % de chiffre d'affaires</strong>.
              </p>
            </div>

            <div className="bg-navy/5 border border-navy/10 rounded-xl p-6">
              <p className="font-dm text-ardoise/80 leading-relaxed">
                J'ai également aidé un artisan électricien à simplifier la comparaison quotidienne de ses fournisseurs en mettant en place un assistant dédié.
                Résultat : environ <strong className="text-navy">10 minutes économisées par jour</strong>, soit près de <strong className="text-or-mat">40 heures récupérées par an</strong>.
              </p>
            </div>
          </div>

          <p className="font-dm font-bold text-navy text-lg sm:text-xl leading-snug text-center mt-6">
            Mon approche vient du terrain. <span className="text-or-mat">Pas d'une démonstration théorique.</span>
          </p>

        </div>
      </div>
    </section>);};
export default PourquoiNousSection;