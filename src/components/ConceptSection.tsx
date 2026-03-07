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

          <div className="bg-blanc-casse/5 rounded-2xl p-6 border border-blanc-casse/10 max-w-3xl mx-auto text-left">
            <p className="font-dm text-blanc-casse/70 leading-relaxed mb-4">Les outils d'IA se multiplient. Beaucoup d'entreprises perdent du temps à les tester avec des solutions trop génériques et éloignées du terrain.

            </p>
            <p className="font-dm text-blanc-casse/80 leading-relaxed">
              Le problème n'est pas l'IA.
              <br />
              Le problème est le <strong className="text-blanc-casse">manque d'accompagnement adapté aux PME</strong>.
            </p>
          </div>

          <p className="font-dm font-bold text-or-mat text-xl sm:text-2xl mt-6 max-w-full mx-auto leading-snug text-center">L'IA peut devenir un avantage concurrentiel 
lorsqu'elle est adaptée à votre entreprise.
          </p>
        </div>

      </div>
    </section>);
};

export default ConceptSection;