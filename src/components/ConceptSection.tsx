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

            <p className="font-dm text-blanc-casse/70 leading-relaxed">
              Or chaque entreprise est différente.
            </p>
          </div>

          <p className="font-syne font-bold text-or-mat text-xl sm:text-2xl mt-10 max-w-2xl mx-auto leading-snug">
            L'IA devient un avantage concurrentiel lorsqu'elle est adaptée à votre entreprise.
          </p>
        </div>

        {/* Tools marquee */}
        <div className="mt-16 pt-8 border-t border-blanc-casse/10">
          <p className="font-dm text-xs text-blanc-casse/30 mb-6 uppercase tracking-wider text-center">
            Les outils que j'utilise — ceux qui correspondent à votre situation
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-navy to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-navy to-transparent z-10 pointer-events-none" />
            <div className="flex gap-12 animate-marquee hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, setIdx) => (
                <div key={setIdx} className="flex gap-12 shrink-0 items-center">
                  {["n8n", "Claude", "ChatGPT", "Gemini", "Notion AI", "Noota", "Copilot", "Perplexity"].map((tool) => (
                    <span
                      key={`${setIdx}-${tool}`}
                      className="font-syne font-bold text-lg text-blanc-casse/20 hover:text-blanc-casse/50 transition-colors whitespace-nowrap"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
