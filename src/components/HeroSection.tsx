import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Mail, FileText, Share2, FolderOpen, Search } from "lucide-react";

const painPoints = [
  { icon: FileText, text: "Devis rédigés à la main" },
  { icon: Search, text: "Recherches d'informations répétitives" },
  { icon: Mail, text: "Relances de mails chronophages" },
  { icon: Share2, text: "Publications irrégulières sur les réseaux" },
  { icon: FolderOpen, text: "Administratif qui s'accumule" },
  { icon: Clock, text: "Comparaisons fournisseurs fastidieuses" },
];

const HeroSection = () => {
  return (
    <section id="accueil" className="relative bg-navy min-h-screen flex items-center overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(hsl(var(--or-mat) / 0.15) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--or-mat) / 0.15) 1px, transparent 1px)",
          backgroundSize: "64px 64px"
        }} />
      </div>

      <div className="container mx-auto px-6 py-32 lg:py-24 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-or-mat/10 border border-or-mat/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-or-mat animate-pulse" />
            <span className="font-dm text-sm text-or-mat font-medium tracking-wide uppercase">
              Basé dans le Finistère (29) — interventions en 29 · 22 · 56
            </span>
          </div>

          {/* H1 */}
          <h1 className="font-syne font-extrabold text-4xl sm:text-5xl lg:text-6xl text-blanc-casse leading-[1.1] mb-6">
            Agence IA & automatisation pour les{" "}
            <span className="text-or-mat">indépendants, TPE et PME</span>{" "}
            de Bretagne
          </h1>

          {/* Subtitle */}
          <p className="font-dm text-lg sm:text-xl text-blanc-casse/70 mb-4 max-w-2xl">
            Récupérez du temps. Gagnez en productivité. Gagnez en rentabilité.
          </p>

          {/* Punchline */}
          <p className="punchline text-blanc-casse/90 text-lg mb-10 max-w-2xl">
            L'IA ne remplace pas votre expertise. Elle élimine le temps inutile autour.
          </p>

          {/* Pain points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {painPoints.map((point, i) => (
              <div key={i} className="flex items-center gap-3 text-blanc-casse/60 font-dm text-sm">
                <point.icon size={18} className="text-or-mat/60 shrink-0" />
                <span>{point.text}</span>
              </div>
            ))}
          </div>

          {/* Stat highlight */}
          <div className="bg-blanc-casse/5 border border-blanc-casse/10 rounded-lg p-5 mb-10 max-w-lg">
            <p className="font-dm text-blanc-casse/80 text-sm leading-relaxed">
              <span className="font-syne text-or-mat text-2xl font-bold">30 min</span>{" "}
              perdues par jour ={" "}
              <span className="font-syne text-or-mat text-2xl font-bold">120h</span>/an ={" "}
              <span className="font-syne text-or-mat text-2xl font-bold">3 semaines</span>{" "}
              de travail récupérées.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="cta" size="lg" asChild>
              <a href="#contact">
                Réserver mon audit gratuit
                <ArrowRight size={18} />
              </a>
            </Button>
            <p className="font-dm text-xs text-blanc-casse/40 self-center">
              30 à 45 min · sans engagement · RGPD abordé dès le diagnostic
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
