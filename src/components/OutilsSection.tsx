import {
  siGmail,
  siHubspot,
  siGooglesheets,
  siStripe,
  siWhatsapp,
  siFacebook,
  siGooglegemini,
  siNotion,
  siPerplexity,
  siClaude,
  siGooglecalendar,
} from "simple-icons";

type Brand = { name: string; icon?: { path: string; hex: string } };

const iaTools: Brand[] = [
  { name: "Claude", icon: siClaude },
  { name: "ChatGPT" },
  { name: "Gemini", icon: siGooglegemini },
  { name: "Notion AI", icon: siNotion },
  { name: "Noota" },
  { name: "Copilot" },
  { name: "Perplexity", icon: siPerplexity },
];

const integrations: Brand[] = [
  { name: "Gmail", icon: siGmail },
  { name: "HubSpot", icon: siHubspot },
  { name: "Google Sheets", icon: siGooglesheets },
  { name: "Slack" },
  { name: "Outlook Calendar", icon: siGooglecalendar },
  { name: "Stripe", icon: siStripe },
  { name: "Whatsapp", icon: siWhatsapp },
  { name: "Facebook", icon: siFacebook },
];

const BrandLogo = ({ brand }: { brand: Brand }) => {
  if (!brand.icon) {
    return (
      <span
        className="brand-logo inline-flex h-7 items-center rounded-full border border-ardoise/25 px-3 font-dm text-[13px] font-bold text-ardoise/60 whitespace-nowrap transition-colors duration-300 hover:text-ardoise hover:border-ardoise/50"
        aria-label={brand.name}
      >
        {brand.name}
      </span>
    );
  }
  return (
    <svg
      role="img"
      aria-label={brand.name}
      viewBox="0 0 24 24"
      className="brand-logo h-7 w-7 shrink-0 fill-ardoise/60 transition-colors duration-300"
      style={{ ["--brand-color" as string]: `#${brand.icon.hex}` }}
    >
      <title>{brand.name}</title>
      <path d={brand.icon.path} />
    </svg>
  );
};

const Marquee = ({ brands, reverse }: { brands: Brand[]; reverse?: boolean }) => (
  <div className="relative overflow-hidden">
    <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gris-perle to-transparent z-10 pointer-events-none" />
    <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gris-perle to-transparent z-10 pointer-events-none" />
    <div
      className={`flex gap-12 ${reverse ? "animate-marquee-reverse-slow" : "animate-marquee-slow"} hover:[animation-play-state:paused]`}
    >
      {[...Array(2)].map((_, setIdx) => (
        <div key={setIdx} className="flex gap-12 shrink-0 items-center h-7">
          {brands.map((brand) => (
            <BrandLogo key={`${setIdx}-${brand.name}`} brand={brand} />
          ))}
        </div>
      ))}
    </div>
  </div>
);

const OutilsSection = () => {
  return (
    <section className="bg-gris-perle py-16 md:py-24">
      <div className="section-shell">
        <p className="font-dm font-bold text-navy text-lg sm:text-xl mb-6 text-center max-w-2xl mx-auto leading-snug">
          Le marché a des centaines d'outils.{" "}
          <span className="text-or-mat-clair">Mon rôle de partenaire : faire le tri pour vous.</span>
        </p>
        <Marquee brands={iaTools} />

        <p className="font-dm font-bold text-navy text-lg sm:text-xl mt-10 mb-6 text-center max-w-2xl mx-auto leading-snug">
          Des outils qui s'intègrent à ceux que vous utilisez déjà :
        </p>
        <Marquee brands={integrations} reverse />
      </div>
    </section>
  );
};

export default OutilsSection;
