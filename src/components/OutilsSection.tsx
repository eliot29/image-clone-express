const OutilsSection = () => {
  return (
    <section className="bg-navy py-3">
      <div className="container mx-auto px-6">
        <p className="font-dm font-bold text-blanc-casse text-lg sm:text-xl mb-3 text-center max-w-full mx-auto leading-snug">
          Le marché a des centaines d'outils. <span className="text-or-mat">Mon rôle de partenaire : faire le filtre.</span>
        </p>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-navy to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-navy to-transparent z-10 pointer-events-none" />
          <div className="flex gap-12 animate-marquee md:animate-marquee-slow hover:[animation-play-state:paused]">
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex gap-12 shrink-0 items-center">
                {["Claude", "ChatGPT", "Gemini", "Notion AI", "Noota", "Copilot", "Perplexity"].map((tool) => (
                  <span
                    key={`${setIdx}-${tool}`}
                    className="font-dm font-bold text-lg text-blanc-casse/60 hover:text-blanc-casse/80 transition-colors whitespace-nowrap"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutilsSection;
