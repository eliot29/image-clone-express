import { Shield } from "lucide-react";

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
              Un profil terrain. Pas une agence parisienne. Pas un ingénieur IA. Mon approche part de la réalité opérationnelle, pas d'une démonstration théorique.
            </p>
          </div>

          <p className="punchline text-ardoise text-lg mb-8">
            Les décisions se prennent sur le terrain, pas uniquement derrière un écran.
          </p>

          <p className="font-dm text-ardoise/80 leading-relaxed mb-6">
            Je suis Clément, 35 ans, fondateur de Semaine 54. Chef de rayon en grande distribution, puis chef de secteur GMS côté marques. Ce parcours m'a donné une lecture opérationnelle des priorités d'un dirigeant.
          </p>

          <p className="punchline text-ardoise text-lg mb-6">
            Apprendre à utiliser l'IA correctement prend du temps. Je l'ai pris pour vous.
          </p>

          <p className="font-dm text-ardoise/80 leading-relaxed mb-6">
            Depuis plus de trois ans, je teste et documente les outils IA dans des contextes professionnels réels. Le déclencheur de Semaine 54 a été un cas terrain : une poissonnerie locale d'une amie, accompagnée sans budget externe. En structurant une stratégie nourrie par l'IA, puis en la mettant en œuvre avec des outils assistés par IA, les résultats ont été mesurables : 73 000 vues, +800 abonnés et +15 % de chiffre d'affaires.
          </p>

          <p className="font-dm text-ardoise/80 leading-relaxed mb-6">
            Ce cas m'a confirmé une chose : l'IA 2025–2026 n'est plus expérimentale. Elle devient un outil de performance accessible aux petites structures.
          </p>

          <p className="punchline text-ardoise text-lg mb-10">
            Je ne suis pas ingénieur IA. Je suis implémenteur IA.
          </p>


          {/* RGPD block */}
          <div className="bg-gris-perle rounded-xl p-6 border border-border">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center shrink-0">
                <Shield size={18} className="text-or-mat" />
              </div>
              <div>
                <h3 className="font-syne font-bold text-lg text-navy mb-2">Sécurité & RGPD</h3>
              <p className="font-dm text-sm text-ardoise/70 leading-relaxed">
                  Les automatisations sont déployées via n8n, une infrastructure professionnelle dédiée aux workflows automatisés. Les accès sont configurés au strict nécessaire, avec gestion sécurisée des identifiants et des connexions. La conformité RGPD dépend de votre organisation et est abordée dès la phase de diagnostic. Semaine 54 conçoit les automatisations selon les bonnes pratiques, sans se substituer à vos obligations légales.
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
