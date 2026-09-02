const integrations = ["Gmail", "HubSpot", "Google Sheets", "Slack", "Outlook Calendar", "Stripe", "Whatsapp", "Facebook"];

const OutilsSection = () => {
  return (
    <section className="bg-blanc-casse py-12 md:py-16">
      <div className="section-wrap">
        <p className="txt-souspunchline text-navy mb-6 text-center max-w-3xl mx-auto">
          Le marché a des centaines d'outils.{" "}
          <span className="font-bold text-navy">Mon rôle de partenaire : faire le tri pour vous.</span>
        </p>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-blanc-casse to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-blanc-casse to-transparent z-10 pointer-events-none" />
          <div className="flex gap-12 animate-marquee md:animate-marquee-slow hover:[animation-play-state:paused]">
            {[...Array(2)].map((_, setIdx) =>
            <div key={setIdx} className="flex gap-12 shrink-0 items-center">
                {["Claude", "ChatGPT", "Gemini", "Notion AI", "Noota", "Copilot", "Perplexity"].map((tool) =>
              <span
                key={`${setIdx}-${tool}`}
                className="font-dm font-bold text-lg text-ardoise opacity-60 grayscale hover:opacity-100 hover:grayscale-0 hover:text-navy transition-all duration-150 ease-out whitespace-nowrap">
                    {tool}
                  </span>
              )}
              </div>
            )}
          </div>
        </div>

        <p className="txt-souspunchline text-navy mt-10 mb-6 text-center max-w-3xl mx-auto">
          Des outils qui s'intègrent à ceux que vous utilisez déjà :
        </p>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-blanc-casse to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-blanc-casse to-transparent z-10 pointer-events-none" />
          <div className="flex gap-12 animate-marquee-reverse md:animate-marquee-reverse-slow hover:[animation-play-state:paused]">
            {[...Array(2)].map((_, setIdx) =>
              <div key={setIdx} className="flex gap-12 shrink-0 items-center">
                {integrations.map((name) =>
                  <span
                    key={`${setIdx}-${name}`}
                    className="font-dm font-bold text-lg text-ardoise opacity-60 grayscale hover:opacity-100 hover:grayscale-0 hover:text-navy transition-all duration-150 ease-out whitespace-nowrap">
                    {name}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);
};

export default OutilsSection;
