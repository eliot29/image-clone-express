const ConceptSection = () => {
  return (
    <section id="concept" className="bg-navy py-14">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-dm font-extrabold text-3xl sm:text-4xl text-blanc-casse mb-8">
            L'IA peut être une solution.{" "}
            <span className="text-or-mat">Mais sous certaines conditions.</span>
          </h2>

          <div className="space-y-6 text-left max-w-2xl mx-auto">
            <p className="font-dm text-blanc-casse/70 leading-relaxed">
              Aujourd'hui, les outils d'intelligence artificielle se multiplient.
              Pourtant, beaucoup d'entreprises se retrouvent seules face à ces technologies.
            </p>

            <p className="font-dm text-blanc-casse/70 leading-relaxed">
              Faute de recul, elles finissent souvent par perdre du temps plutôt que d'en gagner.
            </p>

            <p className="font-dm text-blanc-casse/80 leading-relaxed">
              Le problème n'est pas l'IA.
              <br />
              Le problème est le <strong className="text-blanc-casse">manque d'accompagnement adapté aux PME</strong>.
            </p>

            <p className="font-dm text-blanc-casse/70 leading-relaxed">
              La plupart des solutions et formations proposées sont génériques et rarement construites à partir de la réalité du terrain.
            </p>

            

            
          </div>

          <p className="font-dm font-bold text-or-mat text-xl sm:text-2xl mt-10 max-w-2xl mx-auto leading-snug">
            L'IA devient un avantage concurrentiel lorsqu'elle est adaptée à votre entreprise.
          </p>
        </div>

      </div>
    </section>);

};

export default ConceptSection;