const ConceptSection = () => {
  return (
    <section id="concept" className="bg-navy py-10">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-dm font-extrabold text-3xl sm:text-4xl text-blanc-casse mb-6">
            L'IA peut être une solution.{" "}
            <span className="text-or-mat">
Mais sous certaines conditions.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            <div className="bg-blanc-casse/5 rounded-2xl p-6 border border-blanc-casse/10">
              <p className="font-dm text-blanc-casse/70 leading-relaxed mb-4">
                Aujourd'hui, les outils d'intelligence artificielle se multiplient.
                Pourtant, beaucoup d'entreprises se retrouvent seules face à ces technologies.
              </p>
              <p className="font-dm text-blanc-casse/70 leading-relaxed">
                Faute de recul, elles finissent souvent par perdre du temps plutôt que d'en gagner.
              </p>
            </div>

            <div className="bg-blanc-casse/5 rounded-2xl p-6 border border-blanc-casse/10">
              <p className="font-dm text-blanc-casse/70 leading-relaxed mb-4">
                La plupart des solutions et formations proposées sont génériques et rarement construites à partir de la réalité du terrain.
              </p>
              <p className="font-dm text-blanc-casse/80 leading-relaxed">
                Le problème n'est pas l'IA.
                <br />
                Le problème est le <strong className="text-blanc-casse">manque d'accompagnement adapté aux PME</strong>.
              </p>
            </div>
          </div>

          <p className="font-dm font-bold text-or-mat text-lg sm:text-xl mt-6 max-w-5xl mx-auto leading-snug">L'IA peut devenir un avantage concurrentiel 
lorsqu'elle est adaptée à votre entreprise.
          </p>
        </div>

      </div>
    </section>);
};

export default ConceptSection;