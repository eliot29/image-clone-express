import { Shield } from "lucide-react";

const facts = [
  "+3 ans de tests et documentation des outils IA",
  "Parcours terrain : chef de rayon, puis chef de secteur GMS",
  "73 000 vues · +800 abonnés · +15 % CA — cas réel, poissonnerie locale",
  "Implémenteur IA, pas ingénieur IA",
  "Nombre de missions volontairement limité",
];

const PourquoiNousSection = () => {
  return (
    <section id="approche" className="bg-blanc-casse py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-navy mb-4">
              Pourquoi Semaine 54
            </h2>
            <p className="font-dm text-gris-bleu text-lg">
              Un profil terrain. Pas une agence parisienne. Pas un ingénieur IA.
            </p>
          </div>

          <p className="punchline text-ardoise text-lg mb-8">
            Les décisions se prennent sur le terrain, pas uniquement derrière un écran.
          </p>

          <p className="font-dm text-ardoise/80 leading-relaxed mb-6">
            Je suis Clément, fondateur de Semaine 54. Chef de rayon en grande distribution, puis chef de secteur GMS côté marques. Ce parcours m'a donné une lecture opérationnelle des priorités d'un dirigeant.
          </p>

          <p className="font-dm text-ardoise/80 leading-relaxed mb-10">
            Depuis plus de trois ans, je teste et documente les outils IA dans des contextes opérationnels réels. Le déclencheur a été un cas terrain : une poissonnerie locale, accompagnée sans budget externe. En structurant une stratégie nourrie par l'IA, les résultats ont été mesurables.
          </p>

          {/* Facts as gain cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {facts.map((fact, i) => (
              <div key={i} className="bg-card rounded-xl border border-border shadow-card p-5 flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-or-mat mt-2 shrink-0" />
                <span className="font-dm text-sm text-ardoise/80">{fact}</span>
              </div>
            ))}
          </div>

          {/* RGPD block */}
          <div className="bg-gris-perle rounded-xl p-6 border border-border">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center shrink-0">
                <Shield size={18} className="text-or-mat" />
              </div>
              <div>
                <h3 className="font-syne font-bold text-lg text-navy mb-2">Sécurité & RGPD</h3>
                <p className="font-dm text-sm text-ardoise/70 leading-relaxed">
                  Les automatisations sont déployées via n8n, une infrastructure professionnelle. Les accès sont configurés au strict nécessaire. La conformité RGPD est abordée dès la phase de diagnostic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PourquoiNousSection;
